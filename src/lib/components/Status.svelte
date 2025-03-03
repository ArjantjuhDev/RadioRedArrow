<script>
	import { onMount } from 'svelte';
	let status = 'Loading...';
	let error = null;

	// URL to fetch the DJ status
	const url = 'https://cast6.asurahosting.com/proxy/stef/stats?json=1';

	// Fetching the data
	onMount(async () => {
		try {
			const res = await fetch(url);
			if (!res.ok) throw new Error('Network response was not ok');

			const data = await res.json();
			// Check if "current DJ" field exists to determine if it's live DJ or auto DJ
			if (data && data.current_dj) {
				status = 'Live DJ: ' + data.current_dj;
			} else {
				status = 'Auto DJ';
			}
		} catch (err) {
			error = 'Failed to load DJ status: ' + (err instanceof Error ? err.message : 'Unknown error');
			status = 'Error fetching DJ status';
		}
	});
</script>

<div class="status p-4 text-center">
	{#if $error}
		<div class="text-red-500">{$error}</div>
	{:else}
		<div class="text-green-500">{status}</div>
	{/if}
</div>

<style>
	.status {
		padding: 10px;
		font-size: 1.2rem;
	}
</style>
