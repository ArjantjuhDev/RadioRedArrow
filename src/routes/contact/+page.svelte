<script lang="ts">
	import { invalidateAll, goto } from '$app/navigation';
	import { applyAction, deserialize, enhance } from '$app/forms';

	
	let { form } = $props();

	
	async function handleSubmit(event: SubmitEvent & { currentTarget: EventTarget & HTMLFormElement}) {
		event.preventDefault();
		const data = new FormData(event.currentTarget as HTMLFormElement);

		const response = await fetch((event.currentTarget as HTMLFormElement).action, {
			method: 'POST',
			body: data
		});

		
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
	<div class="flex w-full justify-center max-mobile:mt-28">
		<h1 class="h1 font-serif text-5xl font-semibold max-mobile:text-2xl">CONTACT</h1>
	</div>
	<div class="flex w-full justify-center mt-2">
		<div class="flex h-full w-2/5 flex-col justify-center outline outline-1 rounded-lg bg-base-300 gap-2 p-2 shadow-xl max-mobile:w-full max-tablet:w-full">
			<!-- svelte-ignore event_directive_deprecated -->
			<form
				method="POST"
				class="col-span-2 flex w-full flex-col pt-2 justify-evenly gap-2"
				onsubmit={handleSubmit}
			>
				<div class="row-span-2 flex w-full flex-row items-center gap-x-8 gap-y-2">
					<label for="">Email:</label>
					<input
						class="input input-md input-bordered w-full max-w-xs"
						name="email"
						type="text"
						value=""
					/>
				</div>
				<div class="row-span-2 flex w-full flex-row items-center gap-x-8 gap-y-2">
					<label for="">Vraag:</label>
					<textarea
						class="textarea textarea-bordered textarea-md h-16 w-full max-w-xs"
						name="body"
						required
						placeholder="Enter your message here..."
					></textarea>
				</div>
				<div>
					<button class="btn mt-2 px-5 btn-outline" type="submit">Send</button>
				</div>
			</form>
			<p class="success">{form?.success || ''}</p>
		</div>
	</div>
</div>

<style>
	.success {
		color: #0a5;
	}
</style>