import { FunctionComponent } from "react";
import { Button, Container } from "react-bootstrap";
import styles from "./Collection.module.css";
import CollectionImageView from "./CollectionImage";
import { useState } from 'react';

interface Props {
    collectionData: any
}

const CollectionView = ({ collectionData }: Props) => {

    const [count, setCount] = useState(0)
    const [selectAll, setSelectAll] = useState(false)

    const setSelection = (inc: number) => {
        setCount(count + inc)
    }

    const handleSelect = () => {
        setSelectAll(true)
    }

    const handleClear = () => {
        setSelectAll(false)
    }

    return (
        <>
            <div className={styles.maincomp}>
                <Container fluid>
                    {
                        count === 0 ?
                            <div className={styles.totalmedia}>
                                <p className={styles.totalcount}>Photos | 10</p>
                                <p className={styles.totalcount}>Videos | 09</p>
                            </div> :
                            <div className={styles.selectphotonav}>
                                <div className={styles.totalSelectionDiv}>
                                    <p className={styles.selectCount}>{count} Selected</p>
                                    <p className={styles.selectOption} onClick={handleSelect}>Select all</p>
                                    <p className={styles.selectOption} onClick={handleClear}>Clear Selection</p>
                                </div>
                                <div className={styles.selectbtn}>
                                    <Button variant="custom" className={styles.btnset}><i className="fa-solid selecticon fa-magnifying-glass"></i></Button>
                                    <Button variant="custom" className={styles.btnset}><i className="fa-solid selecticon fa-up-from-bracket"></i></Button>
                                    <Button variant="custom" className={styles.btnset}><i className="fa-solid selecticon fa-trash-can"></i></Button>
                                    <Button variant="custom" className={styles.btnset}><i className="fa-solid selecticon fa-ellipsis"></i></Button>
                                    <Button variant="custom" className={styles.btnset}>Sort <i className="fa-solid selecticon fa-arrow-up-arrow-down"></i></Button>
                                </div>
                            </div>
                    }

                    <div className={styles.outermain}>
                        {
                            collectionData && collectionData.length &&
                            collectionData.map((file: any) => (
                                <CollectionImageView isSelect={selectAll} setSelect={setSelection} imageUrl={file?.url} key={file?.id} />
                            ))
                        }

                    </div>
                </Container>
            </div>
        </>
    );
};

export default CollectionView;
