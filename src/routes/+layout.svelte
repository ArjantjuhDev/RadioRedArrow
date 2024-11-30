<script>
	// @ts-nocheck
	import FooterSide from '$lib/FooterSide.svelte';
	import Header from '$lib/Header.svelte';
	import LeftSide from '$lib/LeftSide.svelte';
	import RightSide from '$lib/RightSide.svelte';
	import '../styles/app.css';
	let { children } = $props();
</script>

<div
	class="min-w-screen flex min-h-screen flex-col overflow-y-auto
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  [&::-webkit-scrollbar]:w-2"
>
	<Header />
	<main class="flex-grow max-tablet:mt-12">
		<div
			class="row-span-3 flex w-full flex-row justify-evenly max-tablet:w-full max-tablet:flex-col max-tablet:items-center max-tablet:justify-center"
		>
			<div class="w-1/4 max-tablet:w-full">
				<LeftSide />
			</div>

			<div class="w-1/2 max-tablet:w-full">
				<div>
					{@render children()}
				</div>
			</div>
			<div class="w-1/4 max-tablet:w-full">
				<RightSide />
			</div>
		</div>
	</main>

	<FooterSide />
</div>

<style>
	:global(*) {
		box-sizing: border-box;
	}
</style>
