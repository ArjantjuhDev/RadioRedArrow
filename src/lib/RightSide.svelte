<script>
	function radioNetButton() {
		window.open('https://www.radio.net/s/radio-red-arrow', '_blank');
	}
</script>

<div class="max-mobile:mt-4 max-tablet:mt-4 flex w-full flex-col justify-between">
	<div class="flex w-full justify-center">
		<div>
			<!-- svelte-ignore a11y_missing_attribute -->
			<img
				class="cc_streaminfo h-36 w-36 rounded-md border border-white shadow-xl"
				data-type="trackimageurl"
				data-username="stef"
				aria-label="Now playing"
			/>
		</div>
	</div>
	<div class="my-4 flex w-full justify-center">
		<div
			class="max-mobile:mx-1 max-mobile:w-full flex w-3/4 flex-row justify-between"
			id="cc_tunein"
		>
			<a href="https://cast6.asurahosting.com/tunein/stef.pls"
				><img
					class="w-10"
					src="/Winamp-logo.png"
					alt="Winamp, iTunes"
					aria-label="Winamp, iTunes"
					title="Winamp, iTunes"
				/></a
			>
			<a href="https://cast6.asurahosting.com/tunein/stef.asx"
				><img
					class="w-10"
					src="/win-player.png"
					alt="Windows Media Player"
					aria-label="Windows Media Player"
					title="Windows Media Player"
				/></a
			>
			<a href="https://cast6.asurahosting.com/tunein/stef.ram"
				><img
					class="w-10"
					src="/Realplayer.png"
					alt="Real Player"
					aria-label="Real Player"
					title="Real Player"
				/></a
			>
			<a href="https://cast6.asurahosting.com/tunein/stef.qtl"
				><img
					class="w-10"
					src="/QuickTime.png"
					alt="QuickTime"
					aria-label="QuickTime"
					title="QuickTime"
				/></a
			>
			<a href="https://cast6.my-control-panel.com/stream/stef/stream.pls"
				><img
					class="w-10"
					src="/StreamProxy.png"
					alt="Stream Proxy"
					aria-label="Stream Proxy"
					title="Stream Proxy"
				/></a
			>
		</div>
	</div>
	<div class="max-mobile:w-full flex w-full justify-center">
		<span class="cc_streaminfo text-white" data-type="song" data-username="stef">Loading ...</span>
	</div>
	<div class="max-mobile:w-full mt-3 flex w-full justify-center">
		<!-- Audio player -->
		<audio controls preload="metadata" autoplay loop>
			<source src="https://cast6.asurahosting.com/proxy/stef/stream" type="audio/mpeg" />
			Your browser does not support the audio element.
		</audio>
	</div>
	<script type="text/javascript" src="https://cast6.asurahosting.com/system/streaminfo.js"></script>

	<div class="mt-4 flex w-full justify-center">
		<div class="flex flex-col items-center">
			<!-- svelte-ignore a11y_label_has_associated_control -->
			<label class="mb-2 font-sans text-white underline underline-offset-1"
				>Nu te beluisteren via</label
			>
			<button onclick={radioNetButton} class="btn rounded-lg bg-base-200 px-10 py-2">
				Radio.net</button
			>
		</div>
	</div>
</div>

<style>
	audio {
		width: 80%;
		height: 45px;
		background-color: transparent;
		color: #fff;
	}
	@media (max-width: 768px) {
		audio {
			width: 100%;
		}
	}
	audio::-webkit-media-controls {
		width: inherit;
		height: inherit;
		position: relative;
		direction: ltr;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
	}
	audio::-webkit-media-controls-enclosure {
		width: 100%;
		max-width: 400px;
		height: 30px;
		flex-shrink: 0;
		bottom: 0;
		text-indent: 0;
		padding: 0;
		box-sizing: border-box;
	}
	audio::-webkit-media-controls-panel {
		display: flex;
		flex-direction: row;
		align-items: center;
		/* We use flex-start here to ensure that the play button is visible even
     * if we are too small to show all controls.
     */
		justify-content: flex-start;
		-webkit-user-select: none;
		position: relative;
		width: 100%;
		z-index: 0;
		overflow: hidden;
		text-align: right;
		bottom: auto;
		height: 30px;
		background-color: transparent;
		border-radius: 5px;
		/* The duration is also specified in MediaControlElements.cpp and LayoutTests/media/media-controls.js */
		transition: opacity 0.3s;
	}
	audio:-webkit-full-page-media {
		max-height: 100%;
		max-width: 100%;
	}
	audio:-webkit-full-page-media::-webkit-media-controls-panel {
		bottom: 0px;
	}
	audio::-webkit-media-controls-mute-button {
		-webkit-appearance: media-mute-button;
		display: flex;
		flex: none;
		border: none;
		box-sizing: border-box;
		width: 35px;
		height: 30px;
		line-height: 30px;
		margin: 8px 6px 0 0;
		padding: 0;
		background-color: initial;
		color: inherit;
	}
	audio::-webkit-media-controls-overlay-enclosure {
		display: none;
	}
	audio::-webkit-media-controls-play-button {
		-webkit-appearance: media-play-button;
		display: flex;
		flex: none;
		border: none;
		box-sizing: border-box;
		width: 25px;
		height: 25px;
		line-height: 40px;
		margin-left: 2px;
		margin-right: 9px;
		margin-top: 15px;
		padding: 0;
		background-color: initial;
		color: inherit;
	}
	audio::-webkit-media-controls-timeline-container {
		-webkit-appearance: media-controls-background;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-end;
		flex: 1 1;
		-webkit-user-select: none;
		height: 16px;
		min-width: 0;
	}
	audio::-webkit-media-controls-current-time-display,
	audio::-webkit-media-controls-time-remaining-display {
		-webkit-appearance: media-current-time-display;
		-webkit-user-select: none;
		flex: none;
		display: flex;
		border: none;
		cursor: default;
		height: 30px;
		margin: 15px 9px 0 0;
		padding: 0;
		line-height: 30px;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 14px;
		font-weight: bold;
		font-style: normal;
		color: white;
		letter-spacing: normal;
		word-spacing: normal;
		text-transform: none;
		text-indent: 0;
		text-shadow: none;
		text-decoration: none;
	}
	audio::-webkit-media-controls-timeline {
		-webkit-appearance: media-slider;
		display: flex;
		flex: 1 1 auto;
		height: 4px;
		margin: 13px 15px 0 0;
		padding: 0;
		background-color: transparent;
		min-width: 25px;
		border: initial;
		color: inherit;
	}
	audio::-webkit-media-controls-volume-slider {
		-webkit-appearance: media-volume-slider;
		display: flex;
		/* The 1.9 value was empirically chosen to match old-flexbox behaviour
     * and be aesthetically pleasing.
     */
		flex: 1 1.9 auto;
		height: 4px;
		max-width: 70px;
		margin: 21px 15px 0 0;
		padding: 0;
		background-color: transparent;
		min-width: 15px;
		border: initial;
		color: inherit;
	}

	/* FIXME these shouldn't use special pseudoShadowIds, but nicer rules.
   https://code.google.com/p/chromium/issues/detail?id=112508
   https://bugs.webkit.org/show_bug.cgi?id=62218
*/
	/* The negative right margin causes the track to overflow its container. */
	audio::-webkit-media-controls-fullscreen-button {
		-webkit-appearance: media-enter-fullscreen-button;
		display: flex;
		flex: none;
		border: none;
		box-sizing: border-box;
		width: 30px;
		height: 30px;
		line-height: 30px;
		margin-left: -5px;
		margin-right: 9px;
		padding: 0;
		background-color: initial;
		color: inherit;
	}
	audio::-webkit-media-controls-toggle-closed-captions-button {
		display: none;
	}

	audio::-webkit-media-controls-fullscreen-volume-slider {
		display: none;
	}
	audio::-webkit-media-controls-fullscreen-volume-min-button {
		display: none;
	}
	audio::-webkit-media-controls-fullscreen-volume-max-button {
		display: none;
	}
</style>
