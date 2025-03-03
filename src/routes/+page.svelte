<script>
	// Scroll below to see the original Component code
	import Particles from '$lib/ui/Particles/Particles.svelte';
	import { Motion } from 'svelte-motion';
	import {onMount} from 'svelte';
let showAlert = true;
	
	onMount(() => {
		setTimeout(() => {
			showAlert = false;
		}, 15000);
	});
</script>

<svelte:head>
	<title>→ Radio Red Arrow ←</title>
</svelte:head>

<div class="mt-1 flex h-full w-full flex-col items-center justify-center max-mobile:mt-24">
	<div class="flex w-full flex-col justify-center">
		<div>
			{#if showAlert}
			<Motion
				transition={{ ease: "backInOut", duration: 1.2, delay: 0.5, elapsed: 0.5 }}
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -50 }}
				let:motion
			>
				<div class="flex items-center justify-center w-full h-full" use:motion>
					<div role="alert" class="alert alert-info w-[50vw] mt-0 max-mobile:w-screen max-tablet:w-screen max-mobile:mt-6 ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							class="h-6 w-6 shrink-0 stroke-current">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
						</svg>
						<span>Installeer nu ook deze website door in uw adressenbalk op de knop te drukken.</span>
					</div>
				</div>
			</Motion>
			{/if}
			<div
				class="bg-background relative flex h-[450px] w-full flex-col items-center justify-center overflow-hidden max-mobile:h-[600px] max-mobile:py-5"
			>
				<span
					class="light:text-black dark:text-white pointer-events-none w-9/12 whitespace-normal bg-gradient-to-b from-black to-gray-800/80 bg-clip-text text-center font-semibold leading-none text-current"
				>
					<h1 class="font-serif text-5xl font-semibold">Welkom</h1>
					<h3 class="mb-8 font-serif text-3xl font-semibold">Bij Radio Red Arrow</h3>
					<p>Jouw pijlsnelle route naar de beste muziek!</p>
					<p class="mt-2">
						Stap in en laat je meevoeren door een stroom van de grootste hits, de nieuwste tracks,
						en verrassende ontdekkingen. Bij Radio Red Arrow schieten we recht in de roos met
						non-stop entertainment, unieke shows en de allerbeste dj's. Of je nu op zoek bent naar
						energie voor je dag, ontspanning in de avond, of gewoon wilt genieten van de lekkerste
						beats, bij ons ben je aan het juiste adres.
					</p>
					<p class="mt-2">Radio Red Arrow – waar muziek altijd in de roos is!</p>
				</span>
				<Particles className="absolute inset-0" refresh={true} />
			</div>
		</div>
	</div>
</div>
