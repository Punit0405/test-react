import { FunctionComponent } from "react";
import { Image, Ratio } from "react-bootstrap";
import styles from "./AllMusic.module.css"

const AllMusic: FunctionComponent = () => {
    return (
        <>
            <div className={styles.maincomp}>
                <div className={styles.music}>
                    <div className={styles.srno}>1</div>
                    <div className={styles.likebtn}>
                        <i className="fa-regular musicicon hearticon fa-heart"></i>
                    </div>
                    <div className={styles.songpic}>
                        <Ratio aspectRatio="1x1">
                            <Image className={styles.imageset} src="../../../album.png" />
                        </Ratio>
                    </div>
                    <div className={styles.songname}>Picture in The Sky</div>
                    <div className={styles.songauthor}>Francis Tyler</div>
                    <div className={styles.songslider}>1</div>
                    <div className={styles.songmin}>3:28</div>
                    <div className={styles.songdownload}>
                        <i className="fa-regular fa-arrow-down-to-line"></i>
                    </div>
                    <div className={styles.songmore}>
                        <i className="fa-regular fa-ellipsis-vertical"></i>
                    </div>
                </div>
                <div className={styles.music}>
                    <div className={styles.srno}>1</div>
                    <div className={styles.likebtn}>
                        <i className="fa-regular musicicon hearticon fa-heart"></i>
                    </div>
                    <div className={styles.songpic}>
                        <Ratio aspectRatio="1x1">
                            <Image className={styles.imageset} src="../../../album.png" />
                        </Ratio>
                    </div>
                    <div className={styles.songname}>Picture in The Sky</div>
                    <div className={styles.songauthor}>Francis Tyler</div>
                    <div className={styles.songslider}>1</div>
                    <div className={styles.songmin}>3:28</div>
                    <div className={styles.songdownload}>
                        <i className="fa-regular fa-arrow-down-to-line"></i>
                    </div>
                    <div className={styles.songmore}>
                        <i className="fa-regular fa-ellipsis-vertical"></i>
                    </div>
                </div>
                <div className={styles.music}>
                    <div className={styles.srno}>1</div>
                    <div className={styles.likebtn}>
                        <i className="fa-regular musicicon hearticon fa-heart"></i>
                    </div>
                    <div className={styles.songpic}>
                        <Ratio aspectRatio="1x1">
                            <Image className={styles.imageset} src="../../../album.png" />
                        </Ratio>
                    </div>
                    <div className={styles.songname}>Picture in The Sky</div>
                    <div className={styles.songauthor}>Francis Tyler</div>
                    <div className={styles.songslider}>1</div>
                    <div className={styles.songmin}>3:28</div>
                    <div className={styles.songdownload}>
                        <i className="fa-regular fa-arrow-down-to-line"></i>
                    </div>
                    <div className={styles.songmore}>
                        <i className="fa-regular fa-ellipsis-vertical"></i>
                    </div>
                </div>
                <div className={styles.music}>
                    <div className={styles.srno}>1</div>
                    <div className={styles.likebtn}>
                        <i className="fa-regular musicicon hearticon fa-heart"></i>
                    </div>
                    <div className={styles.songpic}>
                        <Ratio aspectRatio="1x1">
                            <Image className={styles.imageset} src="../../../album.png" />
                        </Ratio>
                    </div>
                    <div className={styles.songname}>Picture in The Sky</div>
                    <div className={styles.songauthor}>Francis Tyler</div>
                    <div className={styles.songslider}>1</div>
                    <div className={styles.songmin}>3:28</div>
                    <div className={styles.songdownload}>
                        <i className="fa-regular fa-arrow-down-to-line"></i>
                    </div>
                    <div className={styles.songmore}>
                        <i className="fa-regular fa-ellipsis-vertical"></i>
                    </div>
                </div>
                <div className={styles.music}>
                    <div className={styles.srno}>1</div>
                    <div className={styles.likebtn}>
                        <i className="fa-regular musicicon hearticon fa-heart"></i>
                    </div>
                    <div className={styles.songpic}>
                        <Ratio aspectRatio="1x1">
                            <Image className={styles.imageset} src="../../../album.png" />
                        </Ratio>
                    </div>
                    <div className={styles.songname}>Picture in The Sky</div>
                    <div className={styles.songauthor}>Francis Tyler</div>
                    <div className={styles.songslider}>1</div>
                    <div className={styles.songmin}>3:28</div>
                    <div className={styles.songdownload}>
                        <i className="fa-regular fa-arrow-down-to-line"></i>
                    </div>
                    <div className={styles.songmore}>
                        <i className="fa-regular fa-ellipsis-vertical"></i>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllMusic;
