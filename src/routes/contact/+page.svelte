<script>
// @ts-nocheck

	export let form;
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<div class="container-xl">
	<div class="h-full w-full p-2 shadow-xl">
		<div class="flex w-full justify-center">
		<h1 class="h1 font-serif text-5xl font-semibold">CONTACT</h1>
	</div>
		<form method="POST" class="col-span-2 flex w-full flex-col justify-evenly gap-2">
			<div class="row-span-2 flex w-full flex-row gap-1">
				<label for="">Email:</label>
				<input
					class="input input-md input-bordered w-full max-w-xs"
					name="email"
					type="text"
					value=""
				/>
			</div>
			<div class="row-span-2 flex w-full flex-row gap-1">
				<label for="">Vraag:</label>
				<textarea
					class="textarea textarea-bordered textarea-md w-full max-w-xs"
					name="body"
					value=""
				></textarea>
			</div>
			<div>
				<button class="btn p-2" type="submit">Send</button>
			</div>
		</form>
		<p class="success">{form?.success || ''}</p>
	</div>
</div>
