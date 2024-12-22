<script>
	import { invalidateAll, goto } from '$app/navigation';
	import { applyAction, deserialize } from '$app/forms';

	/** @type {{ form: import('./$types').ActionData }} */
	let { form } = $props();

	/** @param {{ currentTarget: EventTarget & HTMLFormElement}} event */
	async function handleSubmit(event) {
		const data = new FormData(event.currentTarget);

		const response = await fetch(event.currentTarget.action, {
			method: 'POST',
			body: data
		});

		/** @type {import('@sveltejs/kit').ActionResult} */
		const result = deserialize(await response.text());

		if (result.type === 'success') {
			// rerun all `load` functions, following the successful update
			await invalidateAll();
		}

		applyAction(result);
	}
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<div>
	<div class="flex w-full justify-center">
		<h1 class="h1 font-serif text-5xl font-semibold">CONTACT</h1>
	</div>
	<div class="flex w-full justify-center mt-2">
		<div class="flex h-full w-2/5 flex-col justify-center gap-2 p-2 shadow-xl max-mobile:w-full max-tablet:w-full">
			<!-- svelte-ignore event_directive_deprecated -->
			<form
				method="POST"
				class="col-span-2 flex w-full flex-col justify-evenly gap-2"
				on:submit|preventDefault={handleSubmit}
			>
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
</div>
