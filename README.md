[![badge](https://img.shields.io/twitter/follow/teyuto?style=social)](https://twitter.com/intent/follow?screen_name=teyuto) &nbsp; [![badge](https://img.shields.io/github/stars/Teyuto/teyuto-player-sdk?style=social)](https://github.com/Teyuto/teyuto-player-sdk)
![](https://github.com/Teyuto/.github/blob/production/assets/img/banner.png)
<h1 align="center">Teyuto Player SDK</h1>

[Teyuto](https://teyuto.com) provides a seamless solution for managing all your video distribution needs. Whether you require video distribution in the cloud, on OTT platforms, storage, public OTT platform distribution, or secure intranet distribution, Teyuto puts everything at your fingertips, making the management of your video content effortless.

## Installation

**1. Simple include in a javascript project**

```html
<head>
  <script src="https://cdn.jsdelivr.net/gh/Teyuto/teyuto-player-sdk@main/src/index.min.js"></script>
</head>
```

**2. Then, create your player using new TeyutoPlayerSdk():**

```javascript
let options={
    autoplay:'on'
};
  
let player = new TeyutoPlayerSdk("#target", {
    id: "<VIDEO_ID>",
    options: options 
});
```

## Option parameters

| **Variable**    | **Options**                                       | **Others**                                                                |
| --------------- | ------------------------------------------------- | ------------------------------------------------------------------------- |
| autoplay        | 'on' , 'off' *String*                             | 'on' *default*                                                            |
| muted           | 'on' , 'off' *String*                             | 'off' *default*                                                           |
| controls        | 'on' , 'off' *String*                             | 'on' *default*                                                            |
| playbackRates   | 'on' , 'off' *String*                             | 'on' *default*                                                            |
| qualitySelector | 'on' , 'off' *String*                             | 'on' *default*                                                            |
| playerColor     | HEX color *String*                                | '#dddddd' *default*                                                       |
| responsive      | 'on' , 'off' *String*                             | 'on' *default*&#xA;*if responsive is 'on', height and width are not used* |
| width           | pixels&#xA;The width in pixels (e.g. width="100") | 560 *default*                                                             |
| height          | pixels&#xA;The width in pixels (e.g. width="100") | 315 *default*                                                             |
| loop            | 'on' , 'off' *String*                             | 'off' *default*                                                           |
| captions        | 'on' , 'off' *String*                             | 'on' *default*                                                            |
| seekButtons     | 'on' , 'off' *String*                             | 'on' *default*                                                            |
| chromecast      | 'on' , 'off' *String*                             | 'on' *default*                                                            |
| airPlay         | 'on' , 'off' *String*                             | 'on' *default*                                                            |
| seekButtons     | 'on' , 'off' *String*                             | 'on'  *default*  
| lowLatency      | 'on' , 'off' *String*                             | 'off'  *default*  
| token           |  *String*                                         | ''  *default*  

## Methods

*   player.play();

*   player.pause();

*   player.getCurrentTime();

*   player.setCurrentTime(10); //in seconds

*   player.mute();

*   player.unmute();

*   player.getVulume();

*   player.setVolume(1); //from 0 to 1

## Events

| Event name       | Description                                                                                                                                                                                                    | Parameter |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| play             | The video started to play (for the first time or after having been paused)                                                                                                                                     | -         |
| pause            | The video has been paused                                                                                                                                                                                      | -         |
| loadstart        | loadstart Is fired when the browser has started to load a resource.                                                                                                                                            | -         |
| suspend          | The suspend event is fired when media data loading has been suspended.                                                                                                                                         | -         |
| abort            | The abort event is fired when the resource was not fully loaded, but not as the result of an error.                                                                                                            | -         |
| error            | The error event is fired when the resource could not be loaded due to an error (for example, a network connectivity problem).                                                                                  | -         |
| stalled          | The stalled event is fired when the user agent is trying to fetch media data, but data is unexpectedly not forthcoming.                                                                                        | -         |
| canplay          | The canplay event is fired when the user agent can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content. | -         |
| playing          | The playing event is fired after playback is first started, and whenever it is restarted. For example it is fired when playback resumes after having been paused or delayed due to lack of data.               | -         |
| waiting          | The waiting event is fired when playback has stopped because of a temporary lack of data.                                                                                                                      | -         |
| seeking          | The seeking event is fired when a seek operation starts, meaning the Boolean seeking attribute has changed to true and the media is seeking a new position.                                                    | -         |
| seeked           | The seeked event is fired when a seek operation completed, the current playback position has changed, and the Boolean seeking attribute is changed to false.                                                   | -         |
| ended            | The ended event is fired when playback or streaming has stopped because the end of the media was reached or because no further data is available.                                                              | -         |
| durationchange   | The durationchange event is fired when the duration attribute has been updated.                                                                                                                                | -         |
| ratechange       | The ratechange event is fired when the playback rate has changed.                                                                                                                                              | -         |
| resize           | The resize event is fired when the player is resized                                                                                                                                                           | -         |
| volumechange     | The volumechange event is fired when the volume has changed.                                                                                                                                                   | -         |
| fullscreenchange | The player goes to (or goes back from) full screen                                                                                                                                                             | -         |
| useractive       | The user is active                                                                                                                                                                                             | -         |
| userinactive     | The user is inactive                                                                                                                                                                                           | -         |
| timeupdate       | The playback time has changed                                                                                                                                                                                  | -         |

## Full example

```html
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/gh/Teyuto/teyuto-player-sdk@main/src/index.min.js"></script>
  </head>

  <body>
    <div id="target"></div>
    
    <!-- buttons that call player methods to control the video playback -->
    <button onclick="javascript:player.play();">play</button>
    <button onclick="javascript:player.pause()">pause</button>
    <button onclick="javascript:player.setVolume(0)">mute</button>
    <button onclick="javascript:player.setVolume(1)">unmute</button>


    <button onclick="javascript:alert(player.getCurrentTime());">getCurrentTime</button>
    <button onclick="javascript:alert(player.getVolume());">getVolume</button>

    <button onclick="javascript:player.setCurrentTime(15);">setCurrentTime (15seconds)</button>
    <button onclick="javascript:player.setVolume(0.5);">setVolume (0.5)</button>
  </body>

  <script>
    let options={
        autoplay:'on', 
        muted:'on', 
        controls:'on', 
        responsive:'off', 
        width:560, height:300, 
        playbackRates:'on', 
        qualitySelector:'on', 
        playerColor:'#dddddd',
        loop:'off',
        captions:'on'
    };

    let player = new TeyutoPlayerSdk("#target", {
        id: "10912",
        options: options 
    });
    
    
    //Events
    player.on('play', function(e) {
        // e.detail is the player
        console.log('play event received', e.detail); 
    });
    player.on('pause', function(e) {
        // e.detail is the player
        console.log('pause event received', e.detail);
    });
  </script>
</html>
```