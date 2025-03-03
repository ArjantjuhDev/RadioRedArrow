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
	<title>DJ Worden?</title>
</svelte:head>

<div>
	<div class="flex w-full justify-center max-mobile:mt-28">
		<h1 class="h1 font-serif text-5xl font-semibold max-mobile:text-2xl">DJ WORDEN?</h1>
	</div>
	<div class="mt-2 flex w-full justify-center">
		<div
			class="max-mobile:w-full flex h-full w-2/5 flex-col outline outline-1 rounded-lg bg-base-300 justify-center gap-2 p-2 shadow-xl max-tablet:w-full"
		>
			<!-- svelte-ignore event_directive_deprecated -->
			<form
				method="POST"
				class="col-span-2 flex flex-col pt-2 justify-evenly gap-2"
				onsubmit={handleSubmit}
			>
				<div class="row-span-2 flex w-full flex-row items-center gap-x-8 gap-y-2">
					<label for="">Naam:</label>
					<input
						class="input input-md input-bordered h-10 w-full max-w-xs"
						name="name"
						type="text"
						value=""
					/>
				</div>
				<div class="row-span-2 flex w-full flex-row items-center gap-x-8 gap-y-2">
					<label for="">Telefoon:</label>
					<input
						class="input input-md input-bordered h-10 w-full max-w-xs"
						name="telephone"
						type="tel"
						value=""
					/>
				</div>
				<div class="row-span-2 flex w-full flex-row items-center gap-x-8 gap-y-2">
					<label for="">Email:</label>
					<input
						class="input input-md input-bordered h-10 w-full max-w-xs"
						name="email"
						type="text"
						value=""
					/>
				</div>
				<div class="row-span-2 flex w-full flex-row items-center gap-x-8 gap-y-2">
					<label for="">Onderwerp:</label>
					<input
						class="input input-md input-bordered h-10 w-full max-w-xs"
						name="subject"
						type="text"
						value="Ik wil graag DJ worden."
					/>
				</div>
				<div class="row-span-2 flex w-full flex-row items-center gap-x-8 gap-y-2">
					<label for="">Motivatie:</label>
					<textarea
						class="textarea textarea-bordered textarea-md h-16 w-full max-w-xs"
						name="body"
						value=""
					></textarea>
				</div>
				<div>
					<button class="btn mt-2 px-5 btn-outline" type="submit">Send</button>
				</div>
			</form>
			<p class="success text-success">{form?.success || ''}</p>
		</div>
	</div>
</div>

<!-- <style>
	@media (min-width: 640px) and (min-width: 320px) {
		.wrapper {
			width: 300px;
			margin: 1em auto;
		}
		.container-fluid {
			display: flex;
			flex-direction: column;
			justify-content: center;
			width: 150px;
		}
		.container-fluid div {
			width: 50%;

			margin-bottom: 5px;
		}
	}
	.wrapper {
		width: 800px;
		margin: 2em auto;
	}
	fieldset {
		padding: 2em;
		box-shadow:
			0 10px 15px -3px #0000001a,
			0 4px 6px -4px #0000001a;
	}
	legend {
		font-weight: bold;
		font-size: 2em;
		padding: 0 0.25em;
		color: #333;
	}
	.container-fluid {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		width: 600px;
	}
	.container-fluid div {
		width: 100%;

		margin-bottom: 10px;
	}
	label {
		justify-content: start;
		font-weight: 600;
		margin-bottom: 0.25em;
		color: #555;
		margin-right: 5%;
	}
	input {
		justify-content: end;
	}
	button {
		cursor: pointer;
		padding: 0.5em 1em;
		border-radius: 4px;
		border: 1px solid rgb(5, 151, 64);
		background-color: rgb(5, 151, 64);
		color: white;
		margin-top: 1em;
		width: 50%;
	}
	.success {
		color: #0a5;
	}
</style> -->
<style>
	.success {
		color: #0a5;
	}
</style>