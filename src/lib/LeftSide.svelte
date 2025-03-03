<script>
	import Status from './components/Status.svelte';

	function radioNetButton() {
		window.open('/verzoekje', '_self');
	}
</script>

<div>
	<div class=" flex flex-col justify-between max-tablet:mt-4 max-mobile:mt-4">
		<div class="flex w-full justify-center">
			<h1 class="text-2xl font-bold uppercase underline underline-offset-2">Verzoekje</h1>
		</div>

		<div class="mt-4 flex w-full items-center justify-center">
			<button class="btn btn-outline px-10 text-lg" onclick={radioNetButton}> <i class="fa-solid fa-icons mr-1"></i>Verzoekje </button>
		</div>
		<div class="flex justify-center w-full">
			<hr class="my-2 w-1/2 "/>
		</div>
		<div class="flex w-full justify-center mb-4">
			<h1 class="text-2xl font-bold uppercase underline underline-offset-2">Social Media</h1>
		</div>
		<div class="flex w-full items-center justify-center gap-4">
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<a target="_blank" href="https://www.facebook.com/profile.php?id=61573492872542" class="text-lg btn btn-outline"><i class="fa-brands fa-facebook-f px-1"></i></a>
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<a target="_blank" href="https://www.instagram.com/radioredarrow/" class="text-lg btn btn-outline"> <i class="fa-brands fa-instagram"></i></a>
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<a target="_blank" href="https://x.com/radio_arrow_red" class="text-lg btn btn-outline"> <i class="fa-brands fa-x-twitter"></i></a>
		</div>
		
	</div>
</div>

