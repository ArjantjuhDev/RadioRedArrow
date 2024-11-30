<svelte:head>
	<title>Verzoekje</title>
</svelte:head>

<div class="mx-auto flex w-full flex-col">
	<div aria-hidden="true" class="flex w-full justify-center">
		<h1 class="h1 font-serif text-5xl font-semibold">VERZOEKJE</h1>
	</div>
	<div class="flex w-full items-center justify-center">
		<!-- svelte-ignore a11y_missing_attribute -->
		<iframe
			src="https://serv4.verzoeksysteem.nl/verzoek/?rs=16790"
			scrolling="no"
			frameborder="no"
			title="Verzoek"
			height="650px"
			width="485px"
			class="items-center rounded-lg"
		></iframe>
	</div>
	<div class="divider my-5 w-full text-3xl font-bold">of</div>
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href="https://wa.me/+31635635943/?text=Hoi%20Radio%20Red%20Arrow%2C
                Ik%20wil%20graag%20een%20verzoekje%20aanvragen.
                Artiest%3A%20
                Lied%3A
                Bericht%3A
                M.V.G%2C"
	>
		<div class="flex w-full flex-row items-center justify-evenly">
			<div>
				<!-- svelte-ignore a11y_missing_attribute -->
				<img alt="whatsapp" aria-label="whatsapp" src="/whatsapp.png" />
			</div>
			<div>
				<!-- svelte-ignore a11y_missing_attribute -->
				<img alt="arrow" aria-label="arrow" src="/arrow.gif" width="48px" height="48px" />
			</div>
			<div aria-hidden="true">
				<h2 class="h2 text-6xl font-bold">klik hier</h2>
			</div>
		</div>
	</a>
</div>
