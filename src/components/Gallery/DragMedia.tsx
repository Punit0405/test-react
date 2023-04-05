import React, { useState, useCallback, useMemo } from 'react';
import { Button } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import styles from "./DragMedia.module.css";
import SingleFileUpload from './SingleFileUpload';
import DagPhotoNav from './DragPhotoNav';
import RejectFile from './RejectFile';
import UploadDoneNav from './UploadDoneNav';

const baseStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    transition: 'border .3s ease-in-out'
};

const activeStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};

export interface UploadableFile {
    file: File;
    errors: []
}
function DragMedia() {

    const [files, setFiles] = useState<UploadableFile[]>([])

    const onDrop = useCallback((acceptedFiles: any, rejFiles: any) => {

        acceptedFiles.forEach((file: any) => {
            const reader = new FileReader()

            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
                const image = new Image();
                image.addEventListener('load', () => {
                    file.height = image.height
                    file.width = image.width
                });
                image.src = URL.createObjectURL(file)
            }
            reader.readAsArrayBuffer(file)
        })
        const mappedAcc = acceptedFiles.map((file: any) => ({ file, errors: [] }))
        setFiles([...mappedAcc, ...rejFiles])

    }, [])

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({
        onDrop,
        accept: 'image/*'
    });

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isDragActive,
        isDragReject,
        isDragAccept
    ]);

    const handleState = () => {
        setFiles([])
    }

    return (
        <>
            <div className={styles.outermain}>
                {
                    files.length ?
                        <>
                            <UploadDoneNav handleSetChange={handleState} />
                            {files.map((file: any, index: any) => (
                                file?.errors?.length === 0 ?
                                    <SingleFileUpload filedata={file.file} key={index} /> :
                                    <RejectFile filedata={file.file} error={file.errors} key={index} />
                            ))}
                        </>
                        :
                        <>
                            <DagPhotoNav />
                            <div {...getRootProps({ style })}>
                                <input {...getInputProps()} />
                                <div className={styles.addmedia}>
                                    <p className={styles.nomedia}>
                                        Drag photos here
                                    </p>
                                    <Button className={styles.dragbtn} variant="custom">Select photos from your computer</Button>
                                </div>
                            </div>
                        </>
                }

            </div>
        </>
    )
}

export default DragMedia;