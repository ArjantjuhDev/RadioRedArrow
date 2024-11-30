<div class="mb-4 h-[250px] w-[97%]">
	<div class="col-auto flex w-full flex-col">
		<div class="flex h-full w-full flex-col items-center justify-between">
			<div class="w-48 justify-start">
				<a href="/">
					<img src="/Logo-radio-red-arrow-trans-background.gif" alt="logo" />
				</a>
			</div>
		</div>
	</div>
	<div class="flex flex-col bg-transparent no-underline">
		<nav class="navbar navbar-end w-full">
			<div>
				<div class="dropdown">
					<div tabindex="0" role="button" class="m-1 font-bold">Menu</div>
					<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
					<ul
						tabindex="0"
						class="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
					>
						<li><a href="/" class="font-bold">Home</a></li>
						<li>
							<a href="/verzoekje" class="font-bold">Verzoekje</a>
						</li>
						<li>
							<a href="/program" class="font-bold">Programma</a>
						</li>

						<li><a href="/over-ons" class="font-bold">Over ons</a></li>
						<li><a href="/djworden" class="font-bold">Dj Worden</a></li>
						<li><a href="/contact" class="font-bold">Contact</a></li>
					</ul>
				</div>
			</div>
			<div class="divider divider-horizontal"></div>
			<div>
				<div class="dropdown dropdown-left">
					<div tabindex="0" role="button" class="m-1 font-bold">
						Theme
						<svg
							width="12px"
							height="12px"
							class="inline-block h-2 w-2 fill-current opacity-60"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 2048 2048"
						>
							<path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
						</svg>
					</div>
					<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
					<ul
						tabindex="0"
						class="dropdown-content z-[1] w-52 rounded-box bg-base-300 p-2 shadow-2xl"
					>
						<li>
							<input
								type="radio"
								name="theme-dropdown"
								class="theme-controller btn btn-ghost btn-sm btn-block justify-start"
								aria-label="Default"
								value="default"
							/>
						</li>
						<li>
							<input
								type="radio"
								name="theme-dropdown"
								class="theme-controller btn btn-ghost btn-sm btn-block justify-start"
								aria-label="Retro"
								value="retro"
							/>
						</li>
						<li>
							<input
								type="radio"
								name="theme-dropdown"
								class="theme-controller btn btn-ghost btn-sm btn-block justify-start"
								aria-label="Cyberpunk"
								value="cyberpunk"
							/>
						</li>
						<li>
							<input
								type="radio"
								name="theme-dropdown"
								class="theme-controller btn btn-ghost btn-sm btn-block justify-start"
								aria-label="Valentine"
								value="valentine"
							/>
						</li>
						<li>
							<input
								type="radio"
								name="theme-dropdown"
								class="theme-controller btn btn-ghost btn-sm btn-block justify-start"
								aria-label="Aqua"
								value="aqua"
							/>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</div>
