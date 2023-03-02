import { createRef, FunctionComponent, useRef } from "react";
import AudioPlayer from 'react-h5-audio-player';
import ReactAudioPlayer from "react-audio-player";
import { Image, Ratio } from "react-bootstrap";
import styles from "./AllMusic.module.css"
import { RHAP_UI } from "react-h5-audio-player/lib/constants";
import $ from 'jquery';



const AllMusic: FunctionComponent = () => {
    // const audioPlayer = useRef()
    const audioPlayer : any =  createRef();
    const playButtonref : any =  createRef();
    const playButton = <i ref={playButtonref} className="fa-sharp musicplayericon playicon fa-solid fa-circle-play"></i>
   const pauseButton = <i className="fa-sharp musicplayericon playicon fa-solid fa-circle-pause"></i>
   const forwardButton = <i className="fa-light musicplayericon forwardicon fa-forward"></i>
  const backwardButton = <i className="fa-light musicplayericon forwardicon fa-backward"></i>
    const showMusicPlayer = async ()=>{
        $("#musicPlayerComponent").css({bottom:'0%' , display:"block"});
        playButtonref.current.click();
        
    }

    const playingFunction = (e:any) =>{
        const currentWidth = audioPlayer.current.progressBar.current.getAttribute('aria-valuenow');
        const currentAudioPlayer : any  = document.getElementsByClassName("1audioplayer")[0].childNodes[1].childNodes[0].childNodes[0];
        currentAudioPlayer.setAttribute('aria-valuenow' ,currentWidth)
        const upperBar = currentAudioPlayer.childNodes[0].childNodes[0];
        const lowerBar = currentAudioPlayer.childNodes[0].childNodes[1];
        upperBar.style.left = `${currentWidth}%`
        lowerBar.style.width = `${currentWidth}%` 

    }

    return (
        <>
            <div className={styles.maincomp}>
                <div className="allsongs">
                    <div className={styles.music} onClick={showMusicPlayer}>
                        <div className={styles.srno}>1</div>
                        <div className={styles.likebtn}>
                            <i className="fa-regular musicicon hearticon fa-heart"></i>
                        </div>
                        <div className={styles.songpic}>
                            <Ratio aspectRatio="1x1">
                                <Image className={styles.imageset} src="../../../album.png" />
                            </Ratio>
                        </div>
                        <div className={styles.songname}>Kesariya Tera Ishq Hai Piya </div>
                        <div className={styles.songauthor}>Francis Tyler</div>
                        <div className={styles.songslider}>
                            <AudioPlayer
                                className="1audioplayer"
                                preload="metadata"
                                showSkipControls={false}
                                showJumpControls={false}
                                customVolumeControls={[]}
                                customAdditionalControls={[]}
                                showDownloadProgress={false}
                                layout="horizontal-reverse"
                                customProgressBarSection={
                                    [
                                        RHAP_UI.PROGRESS_BAR,
                                        RHAP_UI.DURATION,
                                    ]
                                }
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
                                ref={audioPlayer as any}
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
                                onPlaying={e => console.log("plyaing")}
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
                                onListen={e=>console.log("hello")}
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
                    <div id="musicPlayerComponent"  className={styles.mainmusic}>
                        <AudioPlayer
                            layout="horizontal-reverse"
                            ref={audioPlayer as any}
                            customVolumeControls={[]}
                            customAdditionalControls={[]}
                            customControlsSection={[
                                <div className={styles.mainsongpic}>
                                    <Ratio aspectRatio="1x1" className={styles.mainsongimg}>
                                        <Image className={styles.mainimageset} src="../../../album.png" />
                                    </Ratio>
                                    <div className={styles.mainheading}>
                                        <div className={styles.maintitle}>
                                            Kesariya Tera Ishq Hai Piya
                                        </div>
                                        <div className={styles.subtitle}>
                                            Arjit Singh
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
                                            <div className={styles.upnextheading}>
                                                Up Next
                                            </div>
                                            <div className={styles.subtitle}>
                                                Winnie Gardon
                                            </div>
                                        </div>
                                    </div>,
                                ]
                            }
                            customIcons={{
                                play: playButton,
                                pause: pauseButton,
                                forward: forwardButton,
                                rewind: backwardButton
                            }}
                            src="../../../song2.mp3"
                            onPlay={e => console.log("onPlay")}
                            onListen={playingFunction}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllMusic;
