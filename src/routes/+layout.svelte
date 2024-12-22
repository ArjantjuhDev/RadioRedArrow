<script>
	// @ts-nocheck
	import FooterSide from '$lib/FooterSide.svelte';
	import Header from '$lib/Header.svelte';
	import LeftSide from '$lib/LeftSide.svelte';
	import RightSide from '$lib/RightSide.svelte';
	import '../app.css';
	import { Motion } from 'svelte-motion';
	let { children } = $props();
</script>

<div class="min-w-screen flex min-h-screen flex-col">
	<Header />

	<main class="max-mobile:mt-12 -mt-12 flex-grow">
		<div
			class="max-tablet:w-full max-tablet:flex-col max-tablet:items-center max-tablet:justify-center
			max-mobile:w-full max-mobile:flex-col max-mobile:items-center max-mobile:justify-center row-span-3
			flex w-full flex-row justify-evenly"
		>
			<div class="max-tablet:w-full max-mobile:w-full w-1/4 px-2">
				<LeftSide />
			</div>

			<div class="max-tablet:w-full max-mobile:w-full w-1/2 px-2">
				<div>
					{@render children()}
				</div>
			</div>
			<div class="max-tablet:w-full max-mobile:w-full w-1/4 px-2">
				<RightSide />
			</div>
		</div>
	</main>
	<!-- Cookie Consent by FreePrivacyPolicy.com https://www.FreePrivacyPolicy.com -->
	<script
		type="text/javascript"
		src="//www.freeprivacypolicy.com/public/cookie-consent/4.2.0/cookie-consent.js"
		charset="UTF-8"
	></script>
	<script type="text/javascript" charset="UTF-8">
		document.addEventListener('DOMContentLoaded', function () {
			cookieconsent.run({
				notice_banner_type: 'interstitial',
				consent_type: 'express',
				palette: 'dark',
				language: 'nl',
				page_load_consent_levels: ['strictly-necessary'],
				notice_banner_reject_button_hide: false,
				preferences_center_close_button_hide: false,
				page_refresh_confirmation_buttons: false,
				website_name: 'preview.radioredarrow.nl'
			});
		});
	</script>

	<noscript
		>Cookie Consent by
		<a href="https://www.freeprivacypolicy.com/">Free Privacy Policy Generator</a></noscript
	>
	<!-- End Cookie Consent by FreePrivacyPolicy.com https://www.FreePrivacyPolicy.com -->

	<!-- Below is the link that users can use to open Preferences Center to change their preferences.
	  Do not modify the ID parameter. Place it where appropriate, style it as needed. -->
	<!-- svelte-ignore a11y_interactive_supports_focus -->

	<Motion
		animate={{ x: -370 }}
		initial={{ x: 0 }}
		transition={{ ease: 'backOut' }}
		whileHover={{ x: 0 }}
		let:motion
	>
		<div class="flex h-[5%] w-[450px] flex-row items-center justify-between" use:motion>
			<div class="flex w-[80%] justify-start">
				<button
					onclick={() => {
						window.screen('/#');
					}}
					id="open_preferences_center"
					class="btn m-4 w-[100%] rounded-xl px-10 py-2 text-sm font-medium text-neutral-400"
				>
					Cookies preferences</button
				>
			</div>
			<div class="my-4 ml-12 flex w-[12%] justify-end">
				<img src="/right-arrow.png" alt="right-arrow" width="60px" height="60px" />
			</div>
		</div>
	</Motion>

	<FooterSide />
</div>

<style>
	:global(*) {
		box-sizing: border-box;
	}
</style>
