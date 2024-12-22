<script>
	// Scroll below to see the original Component code
	import Particles from '$lib/ui/Particles/Particles.svelte';
</script>

<svelte:head>
	<title>→ Radio Red Arrow ←</title>
</svelte:head>

<div class="mt-1 flex h-full w-full flex-col items-center justify-center">
	<div class=" flex h-[100%] w-full flex-col justify-center">
		<div>
			<div
				class="bg-background relative flex h-[450px] w-full flex-col items-center justify-center overflow-hidden"
			>
				<span
					class="pointer-events-none w-9/12 whitespace-normal bg-gradient-to-b from-black to-gray-800/80 bg-clip-text text-center font-semibold leading-none text-transparent dark:from-white dark:to-slate-100"
				>
					<h1 class="h1 font-serif text-5xl font-semibold">Welkom</h1>
					<h3 class="h3 mb-10 font-serif text-3xl font-semibold">Bij Radio Red Arrow</h3>
					<p>Welkom bij Radio Red Arrow Jouw pijlsnelle route naar de beste muziek!</p>
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
