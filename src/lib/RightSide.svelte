<script>
	import Status from './components/Status.svelte';

	function radioNetButton() {
		window.open('https://www.radio.net/s/radio-red-arrow', '_blank');
	}
</script>

<div class="flex w-full flex-col justify-between max-tablet:mt-4 max-mobile:mt-4">
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
			class="flex w-3/4 flex-row justify-between max-mobile:mx-1 max-mobile:w-full"
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
	<div class="flex w-full justify-center mobile:w-full">
		<span class="cc_streaminfo text-white" data-type="song" data-username="stef">Loading ...</span>
	</div>
	<div class="mt-3 flex w-full justify-center mobile:w-full">
		<!-- Audio player -->
		<audio controls autoplay={true} loop preload="auto">
			<source src="https://cast6.asurahosting.com/proxy/stef/stream" type="audio/mpeg" />
			Your browser does not support the audio element.
		</audio>
	</div>
	<script type="text/javascript" src="https://cast6.asurahosting.com/system/streaminfo.js"></script>

	<!-- <div class="mt-4 flex w-full items-center justify-center">
		<Status />
	</div> -->

	<div class="mt-4 flex w-full justify-center">
		<div class="flex flex-col items-center">
			<!-- svelte-ignore a11y_label_has_associated_control -->
			<label class="mb-2 font-sans text-white underline underline-offset-1"
				>Nu te beluisteren via</label
			>
			<button
				aria-label="goto radionet"
				onclick={radioNetButton}
				class="btn rounded-lg bg-base-200 px-10 py-2"
			>
				Radio.net</button
			>
		</div>
	</div>
</div>

<style>
</style>
