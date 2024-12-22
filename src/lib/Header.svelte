<div class="max-mobile:w-full mb-8 h-[300px] w-[97%]">
	<div class="flex w-full flex-col bg-transparent no-underline">
		<nav class="navbar navbar-end h-[50px] w-full">
			<!-- Menu Component -->
			<div>
				<div class="max-mobile:dropdown-right dropdown dropdown-left dropdown-bottom">
					<div tabindex="0" role="button" class="m-1 font-bold">
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
					<ul tabindex="0" class="dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow">
						<li>
							<a
								href="/"
								class="max-tablet:text-2xl max-mobile:text-2xl btn btn-ghost btn-sm btn-block font-bold"
								>Home</a
							>
						</li>
						<!-- <li>
							<a
								href="/verzoekje"
								class="btn btn-ghost btn-sm btn-block font-bold max-tablet:text-2xl max-mobile:text-2xl"
								>Verzoekje</a
							>
						</li> -->
						<li>
							<a
								href="/program"
								class="max-tablet:text-2xl max-mobile:text-2xl btn btn-ghost btn-sm btn-block font-bold"
								>Programma</a
							>
						</li>

						<li>
							<a
								href="/over-ons"
								class="max-tablet:text-2xl max-mobile:text-2xl btn btn-ghost btn-sm btn-block font-bold"
								>Over ons</a
							>
						</li>
						<li>
							<a
								href="/djworden"
								class="max-tablet:text-2xl max-mobile:text-2xl btn btn-ghost btn-sm btn-block font-bold"
								>Dj Worden</a
							>
						</li>
						<li>
							<a
								href="/contact"
								class="max-tablet:text-2xl max-mobile:text-2xl btn btn-ghost btn-sm btn-block font-bold"
								>Contact</a
							>
						</li>
					</ul>
				</div>
			</div>
			<div class="divider divider-horizontal"></div>
			<!-- Theme Component -->
			<div>
				<div class="dropdown dropdown-left dropdown-bottom">
					<div tabindex="0" role="button" class="m-1 font-bold">Theme</div>
					<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
					<ul
						tabindex="0"
						class="dropdown-content z-[1] w-52 justify-center rounded-box bg-base-300 p-2 shadow-2xl"
					>
						<li>
							<input
								type="radio"
								name="theme-dropdown"
								class="max-tablet:text-xl max-mobile:text-xl theme-controller btn btn-ghost btn-sm btn-block justify-center"
								aria-label="Default"
								value="default"
							/>
						</li>

						<li>
							<input
								type="radio"
								name="theme-dropdown"
								class="max-tablet:text-xl max-mobile:text-xl theme-controller btn btn-ghost btn-sm btn-block justify-center"
								aria-label="Dark"
								value="dark"
							/>
						</li>
						<li>
							<input
								type="radio"
								name="theme-dropdown"
								class="max-tablet:text-xl max-mobile:text-xl theme-controller btn btn-ghost btn-sm btn-block justify-center"
								aria-label="Sunset"
								value="sunset"
							/>
						</li>
						<li>
							<input
								type="radio"
								name="theme-dropdown"
								class="max-tablet:text-xl max-mobile:text-xl theme-controller btn btn-ghost btn-sm btn-block justify-center"
								aria-label="Dim"
								value="dim"
							/>
						</li>
						<li>
							<input
								type="radio"
								name="theme-dropdown"
								class="max-tablet:text-xl max-mobile:text-xl theme-controller btn btn-ghost btn-sm btn-block justify-center"
								aria-label="Night"
								value="night"
							/>
						</li>
						<li>
							<input
								type="radio"
								name="theme-dropdown"
								class="max-tablet:text-xl max-mobile:text-xl theme-controller btn btn-ghost btn-sm btn-block justify-center"
								aria-label="Forest"
								value="forest"
							/>
						</li>
						<li>
							<input
								type="radio"
								name="theme-dropdown"
								class="max-tablet:text-xl max-mobile:text-xl theme-controller btn btn-ghost btn-sm btn-block justify-center"
								aria-label="Luxury"
								value="luxury"
							/>
						</li>
						<li>
							<input
								type="radio"
								name="theme-dropdown"
								class="max-tablet:text-xl max-mobile:text-xl theme-controller btn btn-ghost btn-sm btn-block justify-center"
								aria-label="Dracula"
								value="dracula"
							/>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
	<!-- Header picture -->
	<div class="max-mobile:-mt-5 col-auto -mt-16 flex h-[250px] w-full flex-col">
		<div class="flex h-full w-full flex-col items-center justify-between">
			<div class="w-52 justify-start">
				<a href="/">
					<img src="/Logo-radio-red-arrow-trans-background.gif" aria-label="logo" alt="logo" />
				</a>
			</div>
		</div>
	</div>
</div>
