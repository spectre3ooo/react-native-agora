import { Option, Callback, AudioMixingOption, PlayEffectOption, AudioRecordingOption, AudioFrameOption, MixedAudioFrameOption, ImageOption, VideoStreamOption, DefaultVideoStreamOption, InjectStreamOption, RemoveInjectStreamOption, PublishStreamOption, RemovePublishStreamOption, LiveTranscodingOption, PositionOption, BeautyOption, LastmileProbeConfig, CameraCapturerConfiguration } from "./types";
/**
 * RtcEngine is the javascript object for control agora native sdk through react native bridge.
 *
 * You can use the RtcEngine methods to create {@link init}
 *
 * Other methods of the RtcEngine object serve for agora native sdk and set up error logging.
 */
declare class RtcEngine {
    private static readonly AG_PREFIX;
    /**
     * Creates a RtcEngine Object internal.
     *
     * This method creates and start event observer. You should call this method once.
     * @example `RtcEngine.init(option)`
     * @param options Defines the property of the client, see {@link Option} for details.
     */
    static init(options: Option): void;
    /**
     * join specified channel
     *
     * This method joins and begin rendering the video stream. when join succeeds.
     * Otherwise, it will invoke error by the event
     * @param channelName
     * @param uid
     * @param token
     * @param info
     */
    static joinChannel(channelName: string, uid?: number, token?: string, info?: Object): void;
    /**
     * add event listener
     *
     * This method subscribes specified eventType and run listener. You should call this method at first.
     *
     * @events
     * ---
     * name | description | usage |
     * error | occurs when emit error  | on("error", evt) |
     * warning | occurs when emit warning | on("warning", evt) |
     * messageReceived | occurs when message received | on("messageReceived", evt) |
     * localInvitationReceivedByPeer | occurs when local inviation received by peer | on("localInvitationReceivedByPeer", evt) |
     * localInvitationAccepted | occurs when local invitation accepted | on("localInvitationAccepted", evt) |
     * localInvitationRefused | occurs when local invitation refused | on("localInvitationRefused", evt) |
     * localInvitationCanceled | occurs when local invitation canceled | on("localInvitationCanceled", evt) |
     * localInvitationFailure | occurs when local invitation failure | on("localInvitationFailure", evt) |
     * remoteInvitationFailure | occurs when remote invitation failure | on("remoteInvitationFailure", evt) |
     * remoteInvitationReceived | occurs when remote invitation received | on("remoteInvitationReceived", evt) |
     * remoteInvitationAccepted | occurs when remote invitation accepted | on("remoteInvitationAccepted", evt) |
     * remoteInvitationRefused | occurs when remote invitation refused | on("remoteInvitationRefused", evt) |
     * remoteInvitationCanceled | occurs when remote invitation canceled | on("remoteInvitationCanceled", evt) |
     * channelMessageReceived | occurs when received channel message | on("channelMessageReceived", evt) |
     * channelMemberJoined | occurs when some one joined in the subscribed channel | on("channelMemberJoined", evt) |
     * channelMemberLeft | occurs when sone one left from u subscribed channel | on("channelMemberLeft", evt) |
     * tokenExpired | occurs when token has expired | on("tokenExpired", evt) |
     * apiCallExecute | occurs when apiCallExecute emit, this event is api call monitor | on("apiCallExecute", evt) |
     * joinChannelSuccess | occurs when joinChannel success | on("joinChannelSuccess", evt) |
     * rejoinChannelSuccess | occurs when rejoinChannel success | on("rejoinChannelSuccess", evt) |
     * leaveChannel | occurs when leaveChannel success | on("leaveChannel", evt) |
     * clientRoleChanged | occurs when setClientRole changed | on("clientRoleChanged", evt) |
     * userJoined | occurs when remote user joined | on("userJoined", evt) |
     * userOffline | this event occurs when remote user offline in rtc mode, this events only occurs host user offline in live mode | on("userOffline", evt) |
     * connectionStateChanged | occurs when sdk connection changed state | on("connectionStateChanged", evt) |
     * connectionLost | occurs when sdk connection lost | on("connectionLost", evt) |
     * tokenPrivilegeWillExpire | occurs when token will expire | on("tokenPrivilegeWillExpire", evt) |
     * requestToken | occurs when token expired | on("requestToken") |
     * microphoneEnabled | occurs when microphone enable state changed | on("microphoneEnabled", evt) |
     * audioVolumeIndication | occurs when audio volume indication changed | on("audioVolumeIndication", evt) |
     * activeSpeaker | occurs when detect active speaker | on("activeSpeaker", evt) |
     * firstLocalAudioFrame | occurs when sent first audio frame on local | on("firstLocalAudioFrame", evt) |
     * firstRemoteAudioFrame | occurs when received first audio frame from remote side | on("firstRemoteAudioFrame", evt) |
     * firstRemoteAudioDecoded | occurs when first remote audio decoded | on("firstRemoteAudioDecoded", evt) |
     * firstLocalVideoFrame | occurs when sent first video frame on local | on("firstLocalVideoFrame", evt) |
     * firstRemoteVideoDecoded | occurs when received first video frame from remote side decoded | on("firstRemoteVideoDecoded", evt) |
     * firstRemoteVideoFrame | occurs when received first video frame from remote side | on("firstRemoteVideoFrame", evt) |
     * userMuteAudio | occurs when user mute audio | on("userMuteAudio", evt) |
     * userMuteVideo | occurs when user mute video | on("userMuteVideo", evt) |
     * userEnableVideo | occurs when remote side's user change video enable state | on("userEnableVideo", evt) |
     * userEnableLocalVideo | occurs when user change video enable state on local | on("userEnableLocalVideo", evt) |
     * videoSizeChanged | occurs when change local or remote side video size or rotation | on("videoSizeChanged", evt) |
     * remoteVideoStateChanged | occurs when remote video state has any changed | on("remoteVideoStateChanged", evt) |
     * localPublishFallbackToAudioOnly | occurs when published stream from local side fallback to audio stream | on("localPublishFallbackToAudioOnly", evt) |
     * remoteSubscribeFallbackToAudioOnly | occurs when subscribed side's stream fallback to audio stream | on("remoteSubscribeFallbackToAudioOnly", evt) |
     * audioRouteChanged | occurs when local audio route changed | on("audioRouteChanged", evt) |
     * cameraFocusAreaChanged | occurs when a camera focus area changed | on("cameraFocusAreaChanged", evt) |
     * cameraExposureAreaChanged | occurs when a camera exposure area changed | on("cameraExposureAreaChanged", evt) |
     * rtcStats | occurs when reports the statistics of the current call session once every two seconds. | on("rtcStats", evt) |
     * lastmileQuality | occurs when reports the last mile network quality of the local user once every two seconds before the user joins a channel.| on("lastmileQuality", evt) |
     * networkQuality | occurs when reports the last mile network quality of each user in the channel once every two seconds.| on("networkQuality", evt) |
     * localVideoStats | occurs when reports local video statistics | on("localVideoStats", evt) |
     * remoteVideoStats | occurs when reports remote video statistics| on("remoteVideoStats", evt) |
     * remoteAudioStats | occurs when reports remote audio statistics| on("remoteAudioStats", evt) |
     * audioTransportStatsOfUid | occurs when reports  transport-layer statistics of each remote audio stream. | on("audioTransportStatsOfUid", evt) |
     * videoTransportStatsOfUid | occurs when reports  transport-layer statistics of each remote video stream.| on("videoTransportStatsOfUid", evt) |
     * audioEffectFinish | occurs when the local audio effect playback finishes. | on("audioEffectFinish", evt) |
     * streamPublished | occurs when addPublishStreamUrl success| on("streamPublished", evt) |
     * streamUnpublish | occurs when removePublishStreamUrl success| on("streamUnpublish", evt) |
     * transcodingUpdate | occurs when the cdn live streaming settings are updated | on("transcodingUpdate", evt) |
     * streamInjectedStatus | occurs when report the status of online injecting stream to a live broadcast | on("streamInjectedStatus", evt) |
     * mediaEngineLoaded | occurs when the media engine loaded | on("mediaEngineLoaded", evt) |
     * mediaEngineStartCall | occurs when the media engine call starts | on("mediaEngineStartCall", evt) |
     * startEchoTestWithInterval | occurs when startEchoTestWithInterval success | on("startEchoTestWithInterval", evt) |
     * audioMixingStateChanged | occurs when reports the local audio mixing state changed | on("audioMixingStateChanged", evt) |
     * lastmileProbeTestResult | occurs when reports the last-mile network probe result.| on("lastmileProbeTestResult", evt) |
     * rtmpStreamingStateChanged | occurs when reports the rtmp injecting stream state changed | on("rtmpStreamingStateChanged", evt) |
     * localVideoChanged | occurs when the local video changed  | on("localVideoChanged", evt) |
     * networkTypeChanged | occurs when the device network type changed | on("networkTypeChanged", evt) |
     * mediaMetaDataReceived | occurs when you received media meta data from the remote side through sendMediaData | on("mediaMetaDataReceived", evt) |
     * ---
     * @param eventType
     * @param listener
     * @return any
     */
    static on(eventType: string, listener: (...args: any[]) => any): any;
    /**
     * @deprecated removeAllListeners
     */
    static removeAllListeners(): void;
    /**
     * @deprecated off
     * @param mode
     */
    static off(evt: any): void;
    /**
     * renew token
     *
     * This method renews a new token.
     * @param token
     */
    static renewToken(token: string): any;
    /**
     * enable websdk interoperability
     *
     * This method used to enable websdk interoperability, so that it can connect with agora websdk apps.
     *
     * @param enabled
     * @return Promise<{success, value}>
     */
    static enableWebSdkInteroperability(enabled: boolean): Promise<any>;
    /**
     * get agora native sdk connection state
     *
     * This method gets agora native sdk connection state
     * @return Promise<{state: (connection state)}>
     */
    static getConnectionState(): Promise<any>;
    /**
     * change the client role
     *
     * This method changes the client of role.
     * @param role (audience: 0, host: 1)
     */
    static setClientRole(role: number): Promise<any>;
    /**
     * leave channel
     *
     * This method leaves the joined channel, then your video view will not render ever.
     * You should call it, when you dont need render video stream.
     *
     * @return Promise<null>
     */
    static leaveChannel(): Promise<any>;
    /**
     * destroy
     *
     * This method stops event subscribe and destroy the RtcEngine instance's.
     * You should call it, when you want to destroy the engine.
     *
     * @return void
     */
    static destroy(): any;
    /**
     * set local video render mode
     *
     * This method calls native sdk render mode for local video.
     * @param mode
     * @return Promise<any>
     */
    static setLocalRenderMode(mode: number): Promise<any>;
    /**
     * set the specified remote video render mode
     *
     * This method calls native sdk render mode for the specified remote video.
     *
     * @param uid
     * @param mode
     * @return Promise<any>
     */
    static setRemoteRenderMode(uid: number, mode: number): Promise<any>;
    /**
     * start video preview
     *
     * This method start video preview for video.
     * @return Promise<any>
     */
    static startPreview(): Promise<any>;
    /**
     * stop video preview
     *
     * This method stops video preview for video.
     * @return Promise<any>
     */
    static stopPreview(): Promise<any>;
    /**
     * set enable speaker phone
     *
     * This method set the speaker phone enable or disable by pass boolean parameter.
     * @param enabled
     * @return Promise<any>
     */
    static setEnableSpeakerphone(enabled: boolean): Promise<any>;
    /**
     * set default audio speaker
     *
     * This method set the default audio speaker enable or disable by pass boolean parameter.
     * @param enabled
     * @return Promise<any>
     */
    static setDefaultAudioRouteToSpeakerphone(enabled: boolean): Promise<any>;
    /**
     * set default mute all remote audio streams
     *
     * This method set default mute all remote audio streams enable or not by pass boolean parameter.
     * @param enabled
     * @return Promise<any>
     */
    static setDefaultMuteAllRemoteAudioStreams(enabled: boolean): Promise<any>;
    /**
     * enable video
     *
     * This method enables video.
     * @return Promise<any>
     */
    static enableVideo(): Promise<any>;
    /**
     * disable video
     *
     * This method disables video.
     * @return Promise<any>
     */
    static disableVideo(): Promise<any>;
    /**
     * enable local video
     *
     * This method enables the local video by the boolean parameter.
     * @param enabled
     * @return Promise<any>
     */
    static enableLocalVideo(enabled: boolean): Promise<any>;
    /**
     * mute local video stream
     *
     * This method mutes video stream by the boolean parameter.
     * @param muted
     * @return Promise<any>
     */
    static muteLocalVideoStream(muted: boolean): Promise<any>;
    /**
     * mute all remote video streams
     *
     * This method mutes all remote streams by the boolean parameter.
     * @param muted
     * @return Promise<any>
     */
    static muteAllRemoteVideoStreams(muted: boolean): Promise<any>;
    /**
     * mute specified remote video stream.
     *
     * This method mutes remote video stream by the number of uid and boolean parameter.
     * @param uid
     * @param muted
     * @return Promise<any>
     */
    static muteRemoteVideoStream(uid: number, muted: boolean): Promise<any>;
    /**
     * set default mute all remote video stream
     *
     * This method mutes all remote video stream default by the boolean parameter.
     * @param muted
     * @return Promise<any>
     */
    static setDefaultMuteAllRemoteVideoStreams(muted: boolean): Promise<any>;
    /**
     * enable audio
     *
     * This method enables audio
     * @return Promise<any>
     */
    static enableAudio(): Promise<any>;
    /**
     * disable audio
     *
     * This method disables audio
     * @return Promise<any>
     */
    static disableAudio(): Promise<any>;
    /**
     * enable local audio
     *
     * This method enables local audio by the boolean parameter.
     * @param enabled
     * @return Promise<any>
     */
    static enableLocalAudio(enabled: boolean): Promise<any>;
    /**
     * mute local audio stream
     *
     * This method mutes the local audio stream by muted.
     * @param muted
     * @return Promise<any>
     */
    static disableLocalAudio(muted: boolean): Promise<any>;
    /**
     * mute all remote audio streams
     *
     * This method mutes all remote audio streams by muted
     * @param muted boolean
     * @return Promise<any>
     */
    static muteAllRemoteAudioStreams(muted: boolean): Promise<any>;
    /**
     * mute specified remote audio stream by muted
     *
     * This method mutes specified remote audio stream by number uid and boolean muted.
     * @param uid
     * @param muted
     * @return Promise<any>
     */
    static muteRemoteAudioStream(uid: number, muted: boolean): Promise<any>;
    /**
     * adjust recording signal volume
     *
     * This method adjusts recording your signal by volume.
     * @param volume
     * @return Promise<any>
     */
    static adjustRecordingSignalVolume(volume: number): Promise<any>;
    /**
     * adjust playback signal volume
     *
     * This method adjusts playback signal by volume.
     * @param volume
     * @return Promise<any>
     */
    static adjustPlaybackSignalVolume(volume: number): Promise<any>;
    /**
     * enable audio volume indication
     *
     * This method enables audio volume by interval and smooth
     * @param interval
     * @param smooth
     * @return Promise<any>
     */
    static enableAudioVolumeIndication(interval: number, smooth: number): Promise<any>;
    /**
     * check for mobile phone speaker enabled
     *
     * This method checks the phone speaker is enabled
     * @param callback
     * @return any
     */
    static methodisSpeakerphoneEnabled(callback: Callback<any>): any;
    /**
     * enable in-ear monitor
     *
     * This method enables in-ear monitoring by boolean parameter enabled
     *
     * @param enabled
     * @return Promise<any>
     */
    static enableInEarMonitoring(enabled: boolean): Promise<any>;
    /**
     * set in-ear monitoring volume
     *
     * This method sets the in-ear-monitoring volume by number parameter volume
     *
     * @param volume
     * @return Promise<any>
     */
    static setInEarMonitoringVolume(volume: number): Promise<any>;
    /**
     * set local voice pitch
     *
     * This method sets the local voice pitch by float parameter pitch
     *
     * @param pitch
     * @return Promise<any>
     */
    static setLocalVoicePitch(pitch: number): Promise<any>;
    /**
     * set local voice equalization
     *
     * This method set local video equalization of band frequency by enum band number and number of gain
     *
     * @param band
     * @param gain
     * @return Promise<any>
     */
    static setLocalVoiceEqualization(band: number, gain: number): void;
    /**
     * set local voice reverb
     *
     * This method sets local voice by reverb and value
     * @param reverb
     * @param value
     */
    static setLocalVoiceReverb(reverb: number, value: number): void;
    /**
     * start audio mixing
     *
     * This method will start audio mixing by option config
     *
     * @param options {@link AudioMixingOption}
     */
    static startAudioMixing(options: AudioMixingOption): void;
    /**
     * stop audio mixing
     *
     * This methods stops for audio mixing.
     */
    static stopAudioMixing(): void;
    /**
     * pause audio mixing
     *
     * This method pauses for audio mixing.
     */
    static pauseAudioMixing(): void;
    /**
     * resume audio mixing
     *
     * This method resumes for audio mixing.
     */
    static resumeAudioMixing(): void;
    /**
     * adjust audio mixing volume
     *
     * This method adjusts audio mixing volume by the volume number parameter
     * @param volume
     */
    static adjustAudioMixingVolume(volume: number): void;
    /**
     * adjust audio mixing playout volume
     *
     * This method adjusts audio mixing playout by the volume parameter
     * @param volume
     */
    static adjustAudioMixingPlayoutVolume(volume: number): void;
    /**
     * adjust audio mixing publish volume
     *
     * This method adjusts audio mixing publish by the volume paraemter
     * @param volume
     */
    static adjustAudioMixingPublishVolume(volume: number): void;
    /**
     * get audio mixing duration
     *
     * This method gets the audio mixing duration
     * @return Promise<{success, value}>
     */
    static getAudioMixingDuration(): Promise<any>;
    /**
     * get audio mixing current position
     *
     * This method gets audio mixing current position value.
     * @return Promise<{success, value}>
     */
    static getAudioMixingCurrentPosition(): Promise<any>;
    /**
     * set audio mixing position
     *
     * This method sets audio mixing position by the parameter pos
     * @param pos
     */
    static setAudioMixingPosition(pos: number): Promise<any>;
    /**
     * get effects of volume
     *
     * This methods get audio mixing effects volume value.
     * @return Promise<{success, value}>
     */
    static getEffectsVolume(): Promise<any>;
    /**
     * set effects volume
     *
     * This methods set audio mixing effects volume by float parameter.
     * @param volume
     * @return Promise<{success, value}>
     */
    static setEffectsVolume(volume: number): Promise<any>;
    /**
     * set volume for playing effects.
     *
     * This methods set for playing audio mixing effects
     * @return Promise<{success, value}>
     */
    static setVolumeOfEffect(volume: number): Promise<any>;
    /**
     * play specified effect for audio mixing
     *
     * This methos plays the specified effect of audio mixing file by option config.
     * @param options {@link PlayEffectOption}
     * @return Promise<{success, value}>
     */
    static playEffect(options: PlayEffectOption): Promise<any>;
    /**
     * stop play effect for audio mixing
     *
     * This methods stops the specified effect for audio mixing file by soundid.
     * @param sounid
     * @return Promise<{success, value}>
     */
    static stopEffect(soundId: number): Promise<any>;
    /**
     * stop play all for effect audio mixing.
     *
     * This methods stops all effect audio mixing.
     * @return Promise<{success, value}>
     */
    static stopAllEffects(): Promise<any>;
    /**
     * preload effect for audio mixing file.
     *
     * This methods preloads the specified audio mixing file to memory by the soundid
     * @param soundid
     * @param filepath
     * @return Promise<{success, value}>
     */
    static preloadEffect(soundId: number, filepath: string): Promise<any>;
    /**
     * unload effect
     *
     * This methods unload the already loaded audio mixing file from memory by the soundid.
     * @param soundid
     * @return Promise<{success, value}>
     */
    static unloadEffect(soundId: number): Promise<any>;
    /**
     * pause the specified effect for audio mixing by soundid
     *
     * This method pauses the specified effect for audio mixing by soundid.
     * @param soundid
     * @return Promise<{success, value}>
     */
    static pauseEffect(soundId: number): Promise<any>;
    /**
     * pause all effects for audio mixing
     *
     * This method pause all effects for audio mixing.
     * @param soundid
     * @return Promise<{success, value}>
     */
    static pauseAllEffects(): Promise<any>;
    /**
     * resume audio mixing effect by the specified soundid
     *
     * This method resumes audio mixing effect by the specified soundid
     * @param soundid
     * @return Promise<{success, value}>
     */
    static resumeEffect(soundId: number): Promise<any>;
    /**
     * resume all audio mixing effects.
     *
     * This method resumes all audio mixing effects.
     * @return Promise<{success, value}>
     */
    static resumeAllEffects(): Promise<any>;
    /**
     * start audio recording by quality
     *
     * This method start audio recording by quality config
     * @param options {@link AudioRecordingOption}
     * @return Promise<{success, value}>
     */
    static startAudioRecording(options: AudioRecordingOption): Promise<any>;
    /**
     * stop audio recording
     *
     * This method stops audio recording.
     * @return Promise<{success, value}>
     */
    static stopAudioRecording(): Promise<any>;
    /**
     * set audio session operation restriction
     *
     * The SDK and the app can both configure the audio session by default. The app may occasionally use other apps or third-party components to manipulate the audio session and restrict the SDK from doing so. This method allows the app to restrict the SDK’s manipulation of the audio session.
     * You can call this method at any time to return the control of the audio sessions to the SDK.
     * This method restricts the SDK’s manipulation of the audio session. Any operation to the audio session relies solely on the app, other apps, or third-party components.
     * @notice iOS support only
     */
    static setAudioSessionOperationRestriction(): void;
    /**
     * @deprecated startEchoTest
     * startEchoTest
     */
    /**
     * @deprecated isCameraAutoFocusFaceModeSupported
     * @deprecated isCameraExposurePositionSupported
     * @deprecated isCameraFocusSupported
     * @deprecated isCameraTorchSupported
     * @deprecated isCameraZoomSupported
     * instead use {@method getCameraInfo}
     */
    /**
     * stop echo test
     *
     * This method stop launched an audio call test.
     * @return Promise<{success, value}>
     */
    static stopEchoTest(): Promise<any>;
    /**
     * enable lastmile test
     *
     * This method enables the network connection qualit test.
     *
     * @return Promise<{success, value}>
     */
    static enableLastmileTest(): Promise<any>;
    /**
     * disable lastmile test
     *
     * This method disable the network connection qualit test.
     *
     * @return Promise<{success, value}>
     */
    static disableLastmileTest(): Promise<any>;
    /**
     * set recording audio frame parameters
     *
     * This method Sets the audio recording format for the audioFrame callback.
     *
     * @param options {@link RecordingAudioFrameOption}
     * @return Promise<{success, value}>
     */
    static setRecordingAudioFrameParameters(options: AudioFrameOption): Promise<any>;
    /**
     * set playback audio frame parameters
     *
     * This method Sets the audio frame format for the playbackFrame callback.
     *
     * @param options {@link AudioFrameOption}
     * @return Promise<{success, value}>
     */
    static setPlaybackAudioFrameParameters(options: AudioFrameOption): Promise<any>;
    /**
     * set mixed audio frame parameters
     *
     * This method Sets the audio frame format for the mixedAudioFrame callback.
     *
     * @param options {@link MixedAudioFrameOption}
     * @return Promise<{success, value}>
     */
    static setMixedAudioFrameParameters(options: MixedAudioFrameOption): Promise<any>;
    /**
     * add video watermark
     *
     * This method adds video watermark to the local video.
     *
     * @param options {@link ImageOption}
     * @return Promise<{success, value}>
     */
    static addVideoWatermark(options: ImageOption): Promise<any>;
    /**
     * clear video watermarks
     *
     * This method removes the watermark image from the video stream added by addVideoWatermark.
     *
     * @return Promise<{success, value}>
     */
    static removclearVideoWatermarkse(): Promise<any>;
    /**
     * set local publish fallback
     *
     * This method sets the fallback option for the locally published video stream based on the network conditions.
     *
     * @param option {0, 1, 2}  [more details](https://docs.agora.io/en/Video/API%20Reference/java/classio_1_1agora_1_1rtc_1_1_constants.html#a3e453c93766e783a7e5eca05b1776238)
     * @return Promise<{success, value}>
     */
    static setLocalPublishFallbackOption(option: number): Promise<any>;
    /**
     * set remote publish fallback
     *
     * This method sets the fallback option for the remotely subscribed video stream based on the network conditions.
     *
     * @param option {0, 1, 2} [more details](https://docs.agora.io/en/Video/API%20Reference/java/classio_1_1agora_1_1rtc_1_1_constants.html#a3e453c93766e783a7e5eca05b1776238)
     * @return Promise<{success, value}>
     */
    static setRemoteSubscribeFallbackOption(option: number): Promise<any>;
    /**
     * enable dual stream mode
     *
     * This method enables the dual stream by parameter mode.
     *
     * @param enabled
     * @return Promise<{success, value}>
     */
    static enableDualStreamMode(enabled: boolean): Promise<any>;
    /**
     * set remote video stream type
     *
     * This method sets the remote video stream type by uid and streamType.
     *
     * @param options {@link VideoStreamOption}
     * @return Promise<{success, value}>
     */
    static setRemoteVideoStreamType(options: VideoStreamOption): Promise<any>;
    /**
     * set remote default video stream type
     *
     * This method sets the default video stream type.
     *
     * @param options {@link DefaultVideoStreamOption}
     * @return Promise<{success, value}>
     */
    static setRemoteDefaultVideoStreamType(options: DefaultVideoStreamOption): Promise<any>;
    /**
     * add inject stream url
     *
     * This method injects an online media stream to a live broadcast.
     *
     * @param options {@link InjectStreamOption}
     * @return Promise<{success, value}>
     */
    static addInjectStreamUrl(options: InjectStreamOption): Promise<any>;
    /**
     * remove inject stream url
     *
     * This method removes stream by addInjectsStreamUrl.
     *
     * @param options {@link RemoveInjectStreamOption}
     * @return Promise<{success, value}>
     */
    static removeInjectStreamUrl(options: RemoveInjectStreamOption): Promise<any>;
    /**
     * @deprecated sendMessage
     * sendMessage
     */
    static sendMessage(): Promise<any>;
    /**
     * @deprecated createDataStream
     * createDataStream
     */
    /**
     * @deprecated setupLocalVideo
     * setupLocalVideo
     */
    /**
     * @deprecated setupRemoteVideo
     * setupRemoteVideo
     */
    /**
     * @deprecated setVideoQualityParameters
     * setVideoQualityParameters
     */
    /**
     * set local video mirror mode
     *
     * This method sets local video mirror mode
     *
     * @param mode
     * @return Promise<{success, value}>
     */
    static setLocalVideoMirrorMode(mode: number): Promise<any>;
    /**
     * switch camera
     *
     * This method switches camera between front and rear.
     *
     * @return Promise<{success, value}>
     */
    static switchCamera(): Promise<any>;
    /**
     * set camera zoom ratio
     *
     * This method sets the camera zoom ratio.
     *
     * @param zoomFactor
     * @return Promise<{success, value}>
     */
    static setCameraZoomFactor(zoomFactor: number): Promise<any>;
    /**
     * get camera max zoom ratio
     *
     * This method gets the camera maximum zoom ratio.
     *
     * @notice Android Only
     * @return Promise<{success, value}>
     */
    static getCameraMaxZoomFactor(): Promise<any>;
    /**
     * set camera focus position in preview
     *
     * This method sets the mannual focus position.
     *
     * @param options {@link PositionOption}
     * @return Promise<{success, value}>
     */
    static setCameraFocusPositionInPreview(options: PositionOption): Promise<any>;
    /**
     * set camera exposure position
     *
     * This method sets the mannual exposure position.
     *
     * @param options {@link PositionOption}
     * @return Promise<{success, value}>
     */
    static setCameraExposurePosition(options: PositionOption): Promise<any>;
    /**
     * set camera torch on
     *
     * This method enables the camera flash function.
     *
     * @param enabled
     * @return Promise<{success, value}>
     */
    static setCameraTorchOn(enabled: boolean): Promise<any>;
    /**
     * set enable auto focus face mode
     *
     * This method enables auto-focus face mode function.
     *
     * @param enabled boolean
     * @return Promise<{success, value}>
     */
    static setCameraAutoFocusFaceModeEnabled(enabled: boolean): Promise<any>;
    /**
     * get call id
     *
     * This method is used to get call id.
     *
     * @return Promise<{success, value}>
     */
    static getCallId(): Promise<any>;
    /**
     * set log file and log filter
     *
     * This method sets the log file generated path and specified the log level.
     *
     * @param filepath string
     * @param level enum
     * @param maxfileSize integer (KB)
     * @return Promise<{success, value}>
     */
    static setLog(filepath: string, level: number, maxfileSize: number): Promise<any>;
    /**
     * add publish stream url
     *
     * This method add publish stream by option.
     *
     * @param options {@link PublishStreamOption}
     * @return Promise<{success, value}>
     */
    static addPublishStreamUrl(options: PublishStreamOption): Promise<any>;
    /**
     * remove publish stream url
     *
     * This method remove publish stream by options.
     *
     * @param options {@link RemovePublishStreamOption}
     * @return Promise<{success, value}>
     */
    static removePublishStreamUrl(options: RemovePublishStreamOption): Promise<any>;
    /**
     * set live transcoding
     *
     * This method sets the video layout and audio settings for CDN live.
     *
     * @param options {@link LiveTranscoding}
     * @return Promise<{success, value}>
     */
    static setLiveTranscoding(options: LiveTranscodingOption): Promise<any>;
    /**
     * get sdk version
     *
     * This method gets the sdk version details and passed it into callback function
     *
     * @param callback to handle resolve from getSdkVersion
     * @param errorHandler to handle reject error from getSdkVersion
     * @return any
     */
    static getSdkVersion(callback: Callback<any>, errorHandler?: Callback<any>): any;
    /**
     * mute local audio stream
     *
     * This method sends/stops sending the local audio.
     *
     * @param enabled
     * @return Promise<any>
     */
    static muteLocalAudioStream(enabled: boolean): Promise<any>;
    /**
     * video pre-process/post-process
     *
     * This method enables/disables image enhancement and sets the options.
     *
     * @param enable boolean
     * @param options {@link BeautyOptions}
     * @return Promise<any>
     */
    static setBeautyEffectOptions(enabled: boolean, options: BeautyOption): Promise<any>;
    /**
     * set local voice change
     *
     * This method changes local speaker voice with voiceChanger
     *
     * @param voiceChanger integer
     * @voiceChanger value ranges [
     *          0: "The original voice",
     *          1: "An old man’s voice",
     *          2: "A little boy’s voice.",
     *          3: "A little girl’s voice.",
     *          4: "TBD",
     *          5: "Ethereal vocal effects.",
     *          6: "Hulk’s voice."
     *      ]
     * @return Promise<any>
     */
    static setLocalVoiceChanger(voiceChanger: number): Promise<any>;
    /**
     * set the preset local voice reverberation effect.
     *
     * This method sets the preset local voice reverberation effect.
     *
     * @param preset integer
     * @return Promise<any>
     */
    static setLocalVoiceReverbPreset(preset: number): Promise<any>;
    /**
     * control stereo panning for remote users
     *
     * This method enables/disables stereo panning for remote users.
     *
     * @param enabled boolean
     * @return Promise<any>
     */
    static enableSoundPositionIndication(enabled: boolean): Promise<any>;
    /**
     * set the sound position of a remote user
     *
     * This method sets the sound position of a remote user by uid
     *
     * @param uid number | The ID of the remote user
     * @param pan float | The sound position of the remote user. The value ranges from -1.0 to 1.0
     * @pan
     *  0.0: the remote sound comes from the front.
     *  -1.0: the remote sound comes from the left.
     *  1.0: the remote sound comes from the right.
     * @param gain float | Gain of the remote user. The value ranges from 0.0 to 100.0. The default value is 100.0 (the original gain of the remote user). The smaller the value, the less the gain.
     * @return Promise<any>
     */
    static setRemoteVoicePosition(uid: number, pan: number, gain: number): Promise<any>;
    /**
     * start the lastmile probe test
     *
     * This method start the last-mile network probe test before joining a channel to get the uplink and downlink last-mile network statistics, including the bandwidth, packet loss, jitter, and round-trip time (RTT).
     *
     * @param config LastmileProbeConfig {@link LastmileProbeConfig}
     *
     * @event onLastmileQuality: the SDK triggers this callback within two seconds depending on the network conditions. This callback rates the network conditions with a score and is more closely linked to the user experience.
     * @event onLastmileProbeResult: the SDK triggers this callback within 30 seconds depending on the network conditions. This callback returns the real-time statistics of the network conditions and is more objective.
     * @return Promise<any>
     */
    static startLastmileProbeTest(config: LastmileProbeConfig): Promise<any>;
    /**
     * stop the lastmile probe test
     *
     * This method stop the lastmile probe test.
     *
     * @return Promise<any>
     */
    static stopLastmileProbeTest(): Promise<any>;
    /**
     * sets the priority of a remote user's media stream.
     *
     * note: Use this method with the setRemoteSubscribeFallbackOption method. If the fallback function is enabled for a subscribed stream, the SDK ensures the high-priority user gets the best possible stream quality.
     *
     * This method sets the priority of a remote user's media stream.
     * @param uid number
     * @param userPriority number | The value range is  [50 is "user's priority is hgih", 100 is "the default user's priority is normal"]
     *
     * @return Promise<any>
     */
    static setRemoteUserPriority(uid: number, userPrority: number): Promise<any>;
    /**
     * start an audio call test.
     *
     * note:
     *   Call this method before joining a channel.
     *   After calling this method, call the stopEchoTest method to end the test. Otherwise, the app cannot run the next echo test, or call the joinchannel method.
     *   In the Live-broadcast profile, only a host can call this method.
     * This method will start an audio call test with interval parameter.
     * In the audio call test, you record your voice. If the recording plays back within the set time interval, the audio devices and the network connection are working properly.
     *
     * @param interval number
     *
     * @return Promise<any>
     */
    static startEchoTestWithInterval(interval: number): Promise<any>;
    /**
     * set the camera capture preference.
     *
     * note:
     *  For a video call or live broadcast, generally the SDK controls the camera output parameters. When the default camera capture settings do not meet special requirements or cause performance problems, we recommend using this method to set the camera capture preference:
     *  If the resolution or frame rate of the captured raw video data are higher than those set by setVideoEncoderConfiguration, processing video frames requires extra CPU and RAM usage and degrades performance. We recommend setting config as CAPTURER_OUTPUT_PREFERENCE_PERFORMANCE(1) to avoid such problems.
     *  If you do not need local video preview or are willing to sacrifice preview quality, we recommend setting config as CAPTURER_OUTPUT_PREFERENCE_PERFORMANCE(1) to optimize CPU and RAM usage.
     *  If you want better quality for the local video preview, we recommend setting config as CAPTURER_OUTPUT_PREFERENCE_PREVIEW(2).
     *
     * This method will set the camera capture preference.
     *
     * @param config {@link CameraCapturerConfiguration}
     *
     * @return Promise<any>
     */
    static setCameraCapturerConfiguration(config: CameraCapturerConfiguration): Promise<any>;
    /**
     * Gets the audio mixing volume for local playback.
     *
     * note:
     * This method helps troubleshoot audio volume related issues.
     *
     * @return Promise<any>
     */
    static getAudioMixingPlayoutVolume(): Promise<any>;
    /**
     * Gets the audio mixing volume for publishing.
     *
     * note:
     * This method helps troubleshoot audio volume related issues.
     *
     * @return Promise<any>
     */
    static getAudioMixingPublishVolume(): Promise<any>;
    /**
     * sendMediaData for media observer.
     *
     * note:
     * This method needs you invoke registerMediaMetadataObserver success first and you could send media data through interval media observer feature.
     * The data have limit length is 1024 bytes, if you pass data length bigger than limit it will failed.
     * @param data String: 1024 bytes limit
     * @return Promise<any>
     */
    static sendMediaData(data: String): Promise<any>;
    /**
     * Registers the metadata observer.
     *
     * note:
     * This method only work in live mode
     * This method enables you to add synchronized metadata in the video stream for more diversified live broadcast interactions, such as sending shopping links, digital coupons, and online quizzes.
     * This method trigger 'mediaMetaDataReceived' event, here is example:
     * ```javascript
     *      RtcEngine.on("mediaMetaDataReceived", (data) => {
     *        console.log("mediaMetaDataReceived", data);
     *      })
     * ```
     * @return Promise<any>
     */
    static registerMediaMetadataObserver(): Promise<any>;
    /**
     * Get local device camera support info
     *
     * note:
     * This method returns your current device camera support info.
     * ```javascript
     *      RtcEngine.getCameraInfo().then(info => {
     *         console.log("your currrent camera", info);
     *      })
     * ```
     * @return Promise{cameraSupportInfo}>
     */
    static getCameraInfo(): Promise<any>;
}
export default RtcEngine;
