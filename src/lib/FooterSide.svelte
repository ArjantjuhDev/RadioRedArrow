<script>
	// @ts-nocheck

	// @ts-ignore
	export let currentYear = new Date().getFullYear();
</script>

<footer
	class="max-mobile:hidden max-tablet:hidden footer inset-x-0 bottom-0
			 mb-1
			 items-center
			 justify-center
			 bg-transparent
			 p-4"
>
	<div class="grid-flow-col items-center">
		<p>
			Copyright © {currentYear} -
			<a class="font-semibold" href="mailto:support@radioredarrow.nl">Radio Red Arrow</a>
		</p>
	</div>
	<div
		class="ml-64 grid-flow-col items-center justify-center gap-4 md:place-self-center md:justify-self-end"
	>
		<!-- <img src="/music.png" aria-label="listeners" alt="listeners" width="32px" height="32px" /> -->
		<p class="text-lg font-bold text-current">
			<i class="fa-solid fa-headphones mr-2" width="32px" height="32px" aria-label="listeners"></i>
			<span class="cc_streaminfo" data-type="listeners" data-username="stef"></span>
		</p>
		<script
			type="text/javascript"
			src="https://cast6.asurahosting.com/system/streaminfo.js"
		></script>
	</div>
</footer>
