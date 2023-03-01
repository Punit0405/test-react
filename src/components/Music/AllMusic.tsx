import { FunctionComponent } from "react";
import AudioPlayer from 'react-h5-audio-player';
import ReactAudioPlayer from "react-audio-player";
import { Image, Ratio } from "react-bootstrap";
import styles from "./AllMusic.module.css"
import { RHAP_UI } from "react-h5-audio-player/lib/constants";

const playButton = <i className="fa-regular fa-circle-play"></i>

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
                <div className="mainsong">
                    <div className={styles.mainmusic}>
                        <AudioPlayer
                            // autoPlay
                            layout="horizontal-reverse"
                            customVolumeControls={[]}
                            customAdditionalControls={[]}
                            customControlsSection={[
                                <div className={styles.mainsongpic}>
                                    <Ratio aspectRatio="1x1" className={styles.mainsongimg}>
                                        <Image className={styles.mainimageset} src="../../../album.png" />
                                    </Ratio>
                                    <div className={styles.mainheading}>
                                        <div className={styles.maintitle}>
                                            Moon Garzing
                                        </div>
                                        <div className={styles.subtitle}>
                                            Helen Stone
                                        </div>
                                    </div>
                                </div>,
                                RHAP_UI.MAIN_CONTROLS,
                            ]}
                            customProgressBarSection={
                                [
                                    RHAP_UI.CURRENT_TIME,
                                    RHAP_UI.PROGRESS_BAR,
                                    RHAP_UI.DURATION,
                                    <div className={styles.nextsong}>
                                        <div className={styles.mainheading}>
                                            <div className={styles.maintitle}>
                                                Up Next
                                            </div>
                                            <div className={styles.subtitle}>
                                                Winnie Gardon
                                            </div>
                                        </div>
                                    </div>,
                                ]
                            }
                            CustomIcons={{
                                play: playButton,
                            }}
                            src="../../../song2.mp3"
                            onPlay={e => console.log("onPlay")}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllMusic;
