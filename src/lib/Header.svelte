<script>
	
import Themes from './Themes.svelte';

</script>

<div class="mb-2 h-[160px] w-[97%] max-mobile:w-full">
	<div class="flex w-full flex-col bg-transparent no-underline">
		<nav class="navbar navbar-end h-[50px] w-full mobile:mb-5">
			<!-- Menu Component -->
			<div>
				<div class="dropdown dropdown-left dropdown-bottom">
					<div tabindex="0" aria-label="button" role="button" class="m-1 font-bold">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							class="inline-block h-5 w-5 stroke-current"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							></path>
						</svg>
					</div>
					<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
					<ul
						tabindex="0"
						class="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow max-mobile:left-0 max-mobile:-ml-24"
					>
						<li>
							<a
								href="/"
								class="btn btn-ghost btn-sm btn-block font-bold max-tablet:text-2xl max-mobile:text-2xl"
								>Home</a
							>
						</li>
						<li>
							<a
								href="/verzoekje"
								class="btn btn-ghost btn-sm btn-block font-bold max-tablet:text-2xl max-mobile:text-2xl"
								>Verzoekje</a
							>
						</li>
						<li>
							<a
								href="/program"
								class="btn btn-ghost btn-sm btn-block font-bold max-tablet:text-2xl max-mobile:text-2xl"
								>Programma</a
							>
						</li>

						<li>
							<a
								href="/over-ons"
								class="btn btn-ghost btn-sm btn-block font-bold max-tablet:text-2xl max-mobile:text-2xl"
								>Over ons</a
							>
						</li>
						<li>
							<a
								href="/djworden"
								class="btn btn-ghost btn-sm btn-block font-bold max-tablet:text-2xl max-mobile:text-2xl"
								>Dj Worden</a
							>
						</li>
						<li>
							<a
								href="/contact"
								class="btn btn-ghost btn-sm btn-block font-bold max-tablet:text-2xl max-mobile:text-2xl"
								>Contact</a
							>
						</li>
					</ul>
				</div>
			</div>
			<div class="divider divider-horizontal"></div>
			<!-- Theme Component -->
			<Themes />
		</nav>
	</div>
	<!-- Header picture -->
	<div class="col-auto mb-10 mt-0 ml-7 flex h-[190px] w-full flex-col max-mobile:mt-5 max-mobile:ml-0 max-tablet:ml-0">
		<div class="-mt-10 flex h-full w-full flex-col items-center justify-between">
			<div class="w-52 justify-start">
				<a href="/" aria-label="logo">
					<img src="/Logo-radio-red-arrow-trans-background.gif" alt="logo" />
				</a>
			</div>
		</div>
	

	</div>
</div>
