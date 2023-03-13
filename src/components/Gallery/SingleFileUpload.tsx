import { useEffect, useState } from 'react';
import styles from './SingleFileUpload.module.css'
import { Upload } from "@aws-sdk/lib-storage";
import { S3Client, S3 } from "@aws-sdk/client-s3";
import Spinner from 'react-bootstrap/Spinner';
import { ProgressBar } from 'react-bootstrap';
import { XhrHttpHandler } from "@aws-sdk/xhr-http-handler";

function SingleFileUpload({ filedata }: any) {

    const [progress, setProgress] = useState(0)
    const [isCompleted, setComplete] = useState(false)

    useEffect(() => {
        function upload() {
            uploadFile(filedata)
        }
        upload()
    }, [])

    function uploadFile(file: any) {
        if (file) {
            const Key = `123/${file.name}`
            const Bucket = 'dev-media.snape.com'
            const Body: any = file
            try {
                const s3 = new S3({
                    requestHandler: new XhrHttpHandler({}),
                    region: 'us-east-1',
                    credentials: {
                        accessKeyId: 'AKIARHYMET7XKFE7MBUT',
                        secretAccessKey: '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'
                    }
                })
                const parallelUploads3 = new Upload({
                    client: s3,
                    params: { Bucket, Key, Body },
                    queueSize: 4,
                    leavePartsOnError: false,
                });
                parallelUploads3.on("httpUploadProgress", (progress: any) => {
                    setProgress(Math.round(progress.loaded / progress.total * 100))
                    if (Math.round(progress.loaded / progress.total * 100) >= 100) {
                        setComplete(true)
                    }
                });
                parallelUploads3.done();
            } catch (e) {
                console.log(e);
            }
        }
    }

    return (
        <>
            <div className={styles.maindiv}>
                <div className={styles.music}>
                    <div className={styles.loader}>
                        {
                            isCompleted ?
                                <i className="fa-solid uploadcolor fa-check"></i> :
                                <Spinner animation="border" variant="danger" size='sm' />
                        }
                    </div>
                    <div className={styles.name}>
                        {filedata.name}
                    </div>
                    <div className={styles.progesssection}>
                        <ProgressBar striped variant="danger" animated now={progress} label={`${progress}%`} />
                    </div>
                    <div className={styles.filesize}>Size</div>
                </div>
            </div>
        </>
    );
}

export default SingleFileUpload;