<script lang="ts">
	 import { onMount } from 'svelte'
  import { themes } from './themes'

  let current_theme = ''

  onMount(() => {
	if (typeof window !== 'undefined') {
	  const theme = window.localStorage.getItem('theme')
	  if (theme && themes.some(t => t.color === theme)) {
		document.documentElement.setAttribute('data-theme', theme)
		current_theme = theme
	  }
	}
  })

  function set_theme(event: Event) {
	const select = event.target as HTMLSelectElement
	const theme = select.value
	if (themes.some(t => t.color === theme)) {
	  const one_year = 60 * 60 * 24 * 365
	  window.localStorage.setItem('theme', theme)
	  document.cookie = `theme=${theme}; max-age=${one_year}; path=/;`
	  document.documentElement.setAttribute('data-theme', theme)
	  current_theme = theme
	}
  }
</script>

<div>
	<div class="dropdown dropdown-left dropdown-bottom">
		<div tabindex="0" role="button" aria-label="themes button" class="m-1 font-bold">Theme</div>
		<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
		<ul
			data-choose-theme
			tabindex="0"
			class="dropdown-content z-[1] w-52 justify-center rounded-box bg-base-300 p-2 shadow-2xl"
		>
			{#each themes as theme}
				<li>
					<input
						type="radio"
						name="theme-dropdown"
						class="theme-controller btn btn-ghost btn-sm btn-block justify-center max-tablet:text-xl max-mobile:text-xl"
						value={theme.color}
						aria-label={theme.name}
						checked={theme.color === current_theme}
						onchange={set_theme}
					/>
				</li>
			{/each}
		</ul>
	</div>
</div>
