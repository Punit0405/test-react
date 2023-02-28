import { FunctionComponent } from "react";
import AudioPlayer from 'react-h5-audio-player';
import ReactAudioPlayer from "react-audio-player";
import { Image, Ratio } from "react-bootstrap";
import styles from "./AllMusic.module.css"
import { RHAP_UI } from "react-h5-audio-player/lib/constants";

const AllMusic: FunctionComponent = () => {
    return (
        <>
            <div className={styles.maincomp}>
                <div className="allsongs">
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
                        <div className={styles.songslider}>
                            <AudioPlayer
                                showSkipControls={false}
                                showJumpControls={false}
                                customVolumeControls={[]}
                                customAdditionalControls={[]}
                                showDownloadProgress={false}
                                layout="horizontal-reverse"
                                // CustomIcons={{
                                //     play: "<></>",
                                //     pause: "<></>",
                                //     rewind?: ReactNode,
                                //     forward?: ReactNode,
                                //     previous?: ReactNode,
                                //     next?: ReactNode,
                                //     loop?: ReactNode,
                                //     loopOff?: ReactNode,
                                //     volume?: ReactNode,
                                //     volumeMute?: ReactNode,
                                // }}
                                customProgressBarSection={
                                    [
                                        RHAP_UI.PROGRESS_BAR,
                                        RHAP_UI.DURATION,
                                    ]
                                }
                                // autoPlay
                                src="../../../song2.mp3"
                            />
                        </div>
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
                        <div className={styles.songslider}>
                            <AudioPlayer
                                showSkipControls={false}
                                showJumpControls={false}
                                customVolumeControls={[]}
                                customAdditionalControls={[]}
                                showDownloadProgress={false}
                                layout="horizontal-reverse"
                                // CustomIcons={{
                                //     play: "<></>",
                                //     pause: "<></>",
                                //     rewind?: ReactNode,
                                //     forward?: ReactNode,
                                //     previous?: ReactNode,
                                //     next?: ReactNode,
                                //     loop?: ReactNode,
                                //     loopOff?: ReactNode,
                                //     volume?: ReactNode,
                                //     volumeMute?: ReactNode,
                                // }}
                                customProgressBarSection={
                                    [
                                        RHAP_UI.PROGRESS_BAR,
                                        RHAP_UI.DURATION,
                                    ]
                                }
                                // autoPlay
                                src="../../../song1.mp3"
                                onPlay={e => console.log("onPlay")}
                            />
                        </div>
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
                        <div className={styles.songslider}>
                            <AudioPlayer
                                showSkipControls={false}
                                showJumpControls={false}
                                customVolumeControls={[]}
                                customAdditionalControls={[]}
                                showDownloadProgress={false}
                                layout="horizontal-reverse"
                                // CustomIcons={{
                                //     play: "<></>",
                                //     pause: "<></>",
                                //     rewind?: ReactNode,
                                //     forward?: ReactNode,
                                //     previous?: ReactNode,
                                //     next?: ReactNode,
                                //     loop?: ReactNode,
                                //     loopOff?: ReactNode,
                                //     volume?: ReactNode,
                                //     volumeMute?: ReactNode,
                                // }}
                                customProgressBarSection={
                                    [
                                        RHAP_UI.PROGRESS_BAR,
                                        RHAP_UI.DURATION,
                                    ]
                                }
                                // autoPlay
                                src="../../../song1.mp3"
                                onPlay={e => console.log("onPlay")}
                            />
                        </div>
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
                        <div className={styles.songslider}>
                            <AudioPlayer
                                showSkipControls={false}
                                showJumpControls={false}
                                customVolumeControls={[]}
                                customAdditionalControls={[]}
                                showDownloadProgress={false}
                                layout="horizontal-reverse"
                                // CustomIcons={{
                                //     play: "<></>",
                                //     pause: "<></>",
                                //     rewind?: ReactNode,
                                //     forward?: ReactNode,
                                //     previous?: ReactNode,
                                //     next?: ReactNode,
                                //     loop?: ReactNode,
                                //     loopOff?: ReactNode,
                                //     volume?: ReactNode,
                                //     volumeMute?: ReactNode,
                                // }}
                                customProgressBarSection={
                                    [
                                        RHAP_UI.PROGRESS_BAR,
                                        RHAP_UI.DURATION,
                                    ]
                                }
                                // autoPlay
                                src="../../../song1.mp3"
                                onPlay={e => console.log("onPlay")}
                            />
                        </div>
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
                        <div className={styles.songslider}>
                            <AudioPlayer
                                showSkipControls={false}
                                showJumpControls={false}
                                customVolumeControls={[]}
                                customAdditionalControls={[]}
                                showDownloadProgress={false}
                                layout="horizontal-reverse"
                                // CustomIcons={{
                                //     play: "<></>",
                                //     pause: "<></>",
                                //     rewind?: ReactNode,
                                //     forward?: ReactNode,
                                //     previous?: ReactNode,
                                //     next?: ReactNode,
                                //     loop?: ReactNode,
                                //     loopOff?: ReactNode,
                                //     volume?: ReactNode,
                                //     volumeMute?: ReactNode,
                                // }}
                                customProgressBarSection={
                                    [
                                        RHAP_UI.PROGRESS_BAR,
                                        RHAP_UI.DURATION,
                                    ]
                                }
                                // autoPlay
                                src="../../../song1.mp3"
                                onPlay={e => console.log("onPlay")}
                            />
                        </div>
                        <div className={styles.songdownload}>
                            <i className="fa-regular fa-arrow-down-to-line"></i>
                        </div>
                        <div className={styles.songmore}>
                            <i className="fa-regular fa-ellipsis-vertical"></i>
                        </div>
                    </div>
                </div>
                <AudioPlayer
                    autoPlay
                    src="../../../song2.mp3"
                    onPlay={e => console.log("onPlay")}
                />
            </div>
        </>
    );
};

export default AllMusic;
