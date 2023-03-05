import React, { useCallback, useMemo } from 'react';
import { Button } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import LayoutWithSideBar from '../LayoutWithSideBar';
import AddPhotosNav from './AddPhotosNav';
import styles from "./DragMedia.module.css";

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

function DragMedia() {

    const onDrop = useCallback((acceptedFiles: any) => {
        acceptedFiles.forEach((file: any) => {
            const reader = new FileReader()
            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
                console.log(file, '---file---------');
                const binaryStr = reader.result
                console.log(binaryStr, "----------str---------")
            }
            reader.readAsArrayBuffer(file);
        })

    }, [])

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({
        onDrop,
        accept: 'image/jpeg, image/png'
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

    return (
        <LayoutWithSideBar>
            <>
                <div className={styles.outermain}>
                    <AddPhotosNav />
                    <div {...getRootProps({ style })}>
                        <input {...getInputProps()} />
                        <div className={styles.addmedia}>
                            <p className={styles.nomedia}>
                                Drag photos here
                            </p>
                            <Button className={styles.dragbtn} variant="custom">Select photos from your computer</Button>
                        </div>
                    </div>
                </div>
            </>
        </LayoutWithSideBar>
    )
}

export default DragMedia;