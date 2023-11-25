let TeyutoPlayerCurrentTimeValue = 0;
let TeyutoPlayerCurrentVolumeValue = 0;

function TeyutoPlayerSdk(posElem, obj) {
	console.log("INIT Teyuto Player SDK");
	let elem = document.querySelector('' + posElem + '');
        
    let options = obj.options;
    let idVideo = obj.id;
	
	let videoframe = '';

	let uniqueVal = (Math.random() + 1).toString(36).substring(7);

	if (!options.height) {
		options.height = 315;
	}
	if (!options.width) {
		options.width = 560;
	}
	if (!options.autoplay) {
		options.autoplay = 'on';
	}
	if (!options.muted) {
		options.muted = 'off';
	}
	if (!options.controls) {
		options.controls = 'on';
	}
	if (!options.playbackRates) {
		options.playbackRates = 'on';
	}
	if (!options.qualitySelector) {
		options.qualitySelector = 'on';
	}
	if (!options.playerColor) {
		options.playerColor = '';
	}
	if (!options.loop) {
		options.loop = 'off';
	}
	if (!options.captions) {
		options.captions = 'on';
	}
	if (!options.pip) {
		options.pip = 'off';
	}
	if (!options.seekButtons) {
		options.seekButtons = 'off';
	}
	if (!options.lowLatency) {
		options.lowLatency = 'off';
	}
	if (!options.token) {
		options.token = '';
	}

	let urlIframe = 'https://teyuto.tv/video/player?w=' + idVideo + '&auto=' + options.autoplay + '&muted=' + options.muted + '&controls=' + options.controls + '&playbackRates=' + options.playbackRates + '&qualitySelector=' + options.qualitySelector + '&playerColor=' + options.playerColor + '&loop=' + options.loop + '&captions=' + options.captions + '&seekButtons=' + options.seekButtons +'&lowLatency=' + options.lowLatency +'&token=' + options.token;

	if (options.responsive != 'on') {
		videoframe = '<iframe id="iframePlayerTeyuto-' + uniqueVal + '" width="' + options.width + '" height="' + options.height + '" src="' + urlIframe + '" frameborder="0" allow="autoplay" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>';
	} else {
		videoframe = '<div style="position: relative;padding-bottom: 56.25%;height: 0; overflow: hidden;"><iframe id="iframePlayerTeyuto-' + uniqueVal + '" style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;" src="' + urlIframe + '" frameborder="0" allow="autoplay" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"> </iframe></div>';
	}

	elem.innerHTML = elem.innerHTML + videoframe;

	var iframe = document.getElementById('iframePlayerTeyuto-' + uniqueVal);

	var refreshData = setInterval(function () {
		try {
			iframe.contentWindow.postMessage(
				{
					function: "getCurrentTime"
				},
				'*');

			iframe.contentWindow.postMessage(
				{
					function: "getVolume"
				},
				'*');
		} catch (e) {
			clearInterval(refreshData);
		}
	}, 1000);

	this.play = function (param) {
		iframe.contentWindow.postMessage(
			{
				function: "play"
			},
			'*');
	}

	this.pause = function (param) {
		iframe.contentWindow.postMessage(
			{
				function: "pause"
			},
			'*');
	}

	this.getCurrentTime = function () {
		return TeyutoPlayerCurrentTimeValue;
	}

	this.setCurrentTime = function (param) {
		iframe.contentWindow.postMessage(
			{
				function: "setCurrentTime",
				param: param
			},
			'*');
	}

	this.mute = function (param) {
		iframe.contentWindow.postMessage(
			{
				function: "mute"
			},
			'*');
	}

	this.unmute = function (param) {
		iframe.contentWindow.postMessage(
			{
				function: "unmute"
			},
			'*');
	}

	this.setVolume = function (param) {
		iframe.contentWindow.postMessage(
			{
				function: "setVolume",
				param: param
			},
			'*');
	}

	this.getVolume = function (param) {
		return TeyutoPlayerCurrentVolumeValue;
	}

	this.on = function (...args) {
		elem.addEventListener(...args);
	}


	window.addEventListener('message', ({ data }) => {
		try {
			let event = JSON.parse(data);
			if (event.type == 'currentTime') {
				TeyutoPlayerCurrentTimeValue = event.value;
			}
			else if (event.type == 'volume') {
				TeyutoPlayerCurrentVolumeValue = event.value;
			} else {
				elem.dispatchEvent(new CustomEvent(event.type, { detail: { idVideo: event.idVideo, data: event.data } }));
			}
		} catch (e) {

		}
	});

}