import styles from './SingleFileUpload.module.css'

function RejectFile({ filedata }: any, { errors }: any) {

    return (
        <>
            <div className={styles.maindiv}>
                <div className={styles.music}>
                    <div className={styles.loader}>
                        <i className="fa-solid uploadcolor fa-exclamation"></i>
                    </div>
                    <div className={styles.name}>
                        {filedata.name}
                    </div>
                    <div className={styles.progesssection}>
                        File type not allowed
                    </div>
                    <div className={styles.filesize}>Size</div>
                </div>
            </div>
        </>
    );
}

export default RejectFile;