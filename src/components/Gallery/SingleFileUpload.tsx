import { useEffect, useState } from 'react';
import styles from './SingleFileUpload.module.css'
import { Upload } from "@aws-sdk/lib-storage";
import { S3 } from "@aws-sdk/client-s3";
import Spinner from 'react-bootstrap/Spinner';
import { ProgressBar } from 'react-bootstrap';
import { XhrHttpHandler } from "@aws-sdk/xhr-http-handler";
import FilesSevice from '../../api/Files/files';
import { useParams } from "react-router-dom";


function SingleFileUpload({ filedata }: any) {

    const { collectionId } = useParams()

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
            const Key = `${collectionId}/${file.name}`
            const Bucket = 'dev-media.snape.com'
            const Body: any = file
            try {
                const s3 = new S3({
                    requestHandler: new XhrHttpHandler({}),
                    region: 'us-east-1',
                    credentials: {
                        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY as string,
                        secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY as string
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
                parallelUploads3.done().then((result) => {
                    uploadDone(result);
                });

            } catch (e) {
                console.log(e);
            }
        }
    }

    const uploadDone = async (uploadResult: any) => {
        try {
            let reqObj: any = {
                name: filedata?.name,
                url: uploadResult?.Location,
                size: filedata?.size,
                type: "PHOTO",
                key: uploadResult?.Key
            }
            let data = {
                files: [reqObj]
            }
            const res = await FilesSevice.addFiles(data, collectionId)
        } catch (error) {
            console.log(error, '----err--------');

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
                    <div className={styles.filesize}>{(filedata?.size / 1024 ** 2).toFixed(2)} MB</div>
                </div>
            </div>
        </>
    );
}

export default SingleFileUpload;