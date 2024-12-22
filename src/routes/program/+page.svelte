<script lang="ts">
	import { BackgroundGradient } from '$lib/ui/BackgroundGradient';
	let autodjimg = '/autodj.jpg';
	let stefimg = '/Stef_Lobregt.jpg';
</script>

<svelte:head>
	<title>Programma</title>
</svelte:head>

<div aria-hidden="true" class="mb-4 flex w-full justify-center">
	<h1 class="h1 font-serif text-5xl font-semibold">PROGRAMMA</h1>
</div>

<BackgroundGradient
	className="mx-auto flex w-full flex-col"
	containerClass="flex mt-5 w-full items-center justify-center"
	animate={true}
>
	<div class="h-[500px] w-full overflow-x-auto rounded-lg border bg-base-100 shadow-lg">
		<table class="table table-zebra table-pin-rows table-xs">
			<!-- head -->
			<thead>
				<tr>
					<th>DAG</th>
					<th>DJ</th>
					<th>ONAIR</th>
					<th>PROGRAMMA</th>
				</tr>
			</thead>
			<tbody>
				<!-- row Maandag -->
				<tr>
					<th>Maandag Ochted/Middag</th>
					<!-- DJ -->
					<td>
						<div class="flex items-center gap-3">
							<div class="avatar">
								<div class="mask mask-squircle h-12 w-12">
									<img src={autodjimg} alt="Avatar Tailwind CSS Component" />
								</div>
							</div>
							<div>
								<div class="font-bold">AUTO DJ</div>
								<div class="text-sm opacity-50">Offline Studio</div>
							</div>
						</div></td
					>
					<!-- ONAIR -->
					<td>08:00 / 18:00</td>
					<!-- PROGRAMMA -->
					<td>Gevarieerd</td>
				</tr>
				<!-- row Maandag -->
				<tr>
					<th>Maandag Avond</th>
					<!-- DJ -->
					<td>
						<div class="flex items-center gap-3">
							<div class="avatar">
								<div class="mask mask-squircle h-12 w-12">
									<img src={autodjimg} alt="Avatar Tailwind CSS Component" />
								</div>
							</div>
							<div>
								<div class="font-bold">AUTO DJ</div>
								<div class="text-sm opacity-50">Offline Studio</div>
							</div>
						</div></td
					>
					<!-- ONAIR -->
					<td>18:00 / 23:00</td>
					<!-- PROGRAMMA -->
					<td>Gevarieerd</td>
				</tr>
				<!-- row Maandag -->
				<tr>
					<th>Maandag Nacht</th>
					<!-- DJ -->
					<td>
						<div class="flex items-center gap-3">
							<div class="avatar">
								<div class="mask mask-squircle h-12 w-12">
									<img src={autodjimg} alt="Avatar Tailwind CSS Component" />
								</div>
							</div>
							<div>
								<div class="font-bold">AUTO DJ</div>
								<div class="text-sm opacity-50">Offline Studio</div>
							</div>
						</div></td
					>
					<!-- ONAIR -->
					<td>23:00 / 08:00</td>
					<!-- PROGRAMMA -->
					<td>Gevarieerd</td>
				</tr>
				<!-- row Dinsdag -->
				<tr>
					<th>Dinsdag Ochtend/Middag</th>
					<!-- DJ -->
					<td
						><div class="flex items-center gap-3">
							<div class="avatar">
								<div class="mask mask-squircle h-12 w-12">
									<img src={autodjimg} alt="Avatar Tailwind CSS Component" />
								</div>
							</div>
							<div>
								<div class="font-bold">AUTO DJ</div>
								<div class="text-sm opacity-50">Offline Studio</div>
							</div>
						</div></td
					>
					<!-- ONAIR -->
					<td>08:00 / 18:00</td>
					<!-- PROGRAMMA -->
					<td>Gevarieerd</td>
				</tr>
				<!-- row Dinsdag -->
				<tr>
					<th>Dinsdag Avond</th>
					<!-- DJ -->
					<td
						><div class="flex items-center gap-3">
							<div class="avatar">
								<div class="mask mask-squircle h-12 w-12">
									<img src={autodjimg} alt="Avatar Tailwind CSS Component" />
								</div>
							</div>
							<div>
								<div class="font-bold">AUTO DJ</div>
								<div class="text-sm opacity-50">Offline Studio</div>
							</div>
						</div></td
					>
					<!-- ONAIR -->
					<td>18:00 / 23:00</td>
					<!-- PROGRAMMA -->
					<td>Gevarieerd</td>
				</tr>
				<!-- row Dinsdag -->
				<tr>
					<th>Dinsdag Nacht</th>
					<!-- DJ -->
					<td
						><div class="flex items-center gap-3">
							<div class="avatar">
								<div class="mask mask-squircle h-12 w-12">
									<img src={autodjimg} alt="Avatar Tailwind CSS Component" />
								</div>
							</div>
							<div>
								<div class="font-bold">AUTO DJ</div>
								<div class="text-sm opacity-50">Offline Studio</div>
							</div>
						</div></td
					>
					<!-- ONAIR -->
					<td>23:00 / 08:00</td>
					<!-- PROGRAMMA -->
					<td>Gevarieerd</td>
				</tr>
				<!-- row Woensdag -->
				<tr>
					<th>Woensdag Ochtend/Middag</th>
					<!-- DJ -->
					<td
						><div class="flex items-center gap-3">
							<div class="avatar">
								<div class="mask mask-squircle h-12 w-12">
									<img src={autodjimg} alt="Avatar Tailwind CSS Component" />
								</div>
							</div>
							<div>
								<div class="font-bold">AUTO DJ</div>
								<div class="text-sm opacity-50">Offline Studio</div>
							</div>
						</div></td
					>
					<!-- ONAIR -->
					<td>08:00 / 19:00</td>
					<!-- PROGRAMMA -->
					<td>Gevarieerd</td>
				</tr>
				<!-- row Woensdag Stef -->
				<tr>
					<th>Woensdag Avond</th>
					<!-- DJ -->
					<td
						><div class="flex items-center gap-3">
							<div class="avatar">
								<div class="mask mask-squircle h-12 w-12">
									<a href="/stef-lobregt">
										<img src={stefimg} alt="Avatar Tailwind CSS Component" />
									</a>
								</div>
							</div>
							<div>
								<div class="font-bold">DJ STEF</div>
								<div class="text-sm opacity-50">Online Studio</div>
							</div>
						</div></td
					>
					<!-- ONAIR -->
					<td>19:00 / 22:00</td>
					<!-- PROGRAMMA -->
					<td>Live uit zijn studio.</td>
				</tr>
				<!-- row Woensdag Avond/Nacht -->
				<tr>
					<th>Woensdag Nacht</th>
					<!-- DJ -->
					<td
						><div class="flex items-center gap-3">
							<div class="avatar">
								<div class="mask mask-squircle h-12 w-12">
									<img src={autodjimg} alt="Avatar Tailwind CSS Component" />
								</div>
							</div>
							<div>
								<div class="font-bold">AUTO DJ</div>
								<div class="text-sm opacity-50">Offline Studio</div>
							</div>
						</div></td
					>
					<!-- ONAIR -->
					<td>22:00 / 08:00</td>
					<!-- PROGRAMMA -->
					<td>Gevarieerd</td>
				</tr>
				<!-- row Donderdag -->
				<tr>
					<th>Donderdag Ochtend/Middag</th>
					<!-- DJ -->
					<td
						><div class="flex items-center gap-3">
							<div class="avatar">
								<div class="mask mask-squircle h-12 w-12">
									<img src={autodjimg} alt="Avatar Tailwind CSS Component" />
								</div>
							</div>
							<div>
								<div class="font-bold">AUTO DJ</div>
								<div class="text-sm opacity-50">Offline Studio</div>
							</div>
						</div></td
					>
					<!-- ONAIR -->
					<td>08:00 / 18:00</td>
					<!-- PROGRAMMA -->
					<td>Gevarieerd</td>
				</tr>
				<!-- row Donderdag -->
				<tr>
					<th>Donderdag Avond</th>
					<!-- DJ -->
					<td
						><div class="flex items-center gap-3">
							<div class="avatar">
								<div class="mask mask-squircle h-12 w-12">
									<img src={autodjimg} alt="Avatar Tailwind CSS Component" />
								</div>
							</div>
							<div>
								<div class="font-bold">AUTO DJ</div>
								<div class="text-sm opacity-50">Offline Studio</div>
							</div>
						</div></td
					>
					<!-- ONAIR -->
					<td>18:00 / 23:00</td>
					<!-- PROGRAMMA -->
					<td>Gevarieerd</td>
				</tr>
				<!-- row Donderdag -->
				<tr>
					<th>Donderdag Nacht</th>
					<!-- DJ -->
					<td
						><div class="flex items-center gap-3">
							<div class="avatar">
								<div class="mask mask-squircle h-12 w-12">
									<img src={autodjimg} alt="Avatar Tailwind CSS Component" />
								</div>
							</div>
							<div>
								<div class="font-bold">AUTO DJ</div>
								<div class="text-sm opacity-50">Offline Studio</div>
							</div>
						</div></td
					>
					<!-- ONAIR -->
					<td>23:00 / 08:00</td>
					<!-- PROGRAMMA -->
					<td>Gevarieerd</td>
				</tr>
				<!-- row Vrijdag -->
				<tr>
					<th>Vrijdag Ochtend/Middag</th>
					<!-- DJ -->
					<td
						><div class="flex items-center gap-3">
							<div class="avatar">
								<div class="mask mask-squircle h-12 w-12">
									<img src={autodjimg} alt="Avatar Tailwind CSS Component" />
								</div>
							</div>
							<div>
								<div class="font-bold">AUTO DJ</div>
								<div class="text-sm opacity-50">Offline Studio</div>
							</div>
						</div></td
					>
					<!-- ONAIR -->
					<td>08:00 / 18:00</td>
					<!-- PROGRAMMA -->
					<td>Gevarieerd</td>
				</tr>
				<!-- row Vrijdag -->
				<tr>
					<th>Vrijdag Avond</th>
					<!-- DJ -->
					<td
						><div class="flex items-center gap-3">
							<div class="avatar">
								<div class="mask mask-squircle h-12 w-12">
									<img src={autodjimg} alt="Avatar Tailwind CSS Component" />
								</div>
							</div>
							<div>
								<div class="font-bold">AUTO DJ</div>
								<div class="text-sm opacity-50">Offline Studio</div>
							</div>
						</div></td
					>
					<!-- ONAIR -->
					<td>18:00 / 23:00</td>
					<!-- PROGRAMMA -->
					<td>Gevarieerd</td>
				</tr>
				<!-- row Vrijdag -->
				<tr>
					<th>Vrijdag Nacht</th>
					<!-- DJ -->
					<td
						><div class="flex items-center gap-3">
							<div class="avatar">
								<div class="mask mask-squircle h-12 w-12">
									<img src={autodjimg} alt="Avatar Tailwind CSS Component" />
								</div>
							</div>
							<div>
								<div class="font-bold">AUTO DJ</div>
								<div class="text-sm opacity-50">Offline Studio</div>
							</div>
						</div></td
					>
					<!-- ONAIR -->
					<td>23:00 / 08:00</td>
					<!-- PROGRAMMA -->
					<td>Gevarieerd</td>
				</tr>
				<!-- row Zaterdag -->
				<tr>
					<th>Zaterdag Ochtend/Middag</th>
					<!-- DJ -->
					<td
						><div class="flex items-center gap-3">
							<div class="avatar">
								<div class="mask mask-squircle h-12 w-12">
									<img src={autodjimg} alt="Avatar Tailwind CSS Component" />
								</div>
							</div>
							<div>
								<div class="font-bold">AUTO DJ</div>
								<div class="text-sm opacity-50">Offline Studio</div>
							</div>
						</div></td
					>
					<!-- ONAIR -->
					<td>08:00 / 18:00</td>
					<!-- PROGRAMMA -->
					<td>Gevarieerd</td>
				</tr>
				<!-- row Zaterdag -->
				<tr>
					<th>Zaterdag Avond</th>
					<!-- DJ -->
					<td
						><div class="flex items-center gap-3">
							<div class="avatar">
								<div class="mask mask-squircle h-12 w-12">
									<img src={autodjimg} alt="Avatar Tailwind CSS Component" />
								</div>
							</div>
							<div>
								<div class="font-bold">AUTO DJ</div>
								<div class="text-sm opacity-50">Offline Studio</div>
							</div>
						</div></td
					>
					<!-- ONAIR -->
					<td>18:00 / 23:00</td>
					<!-- PROGRAMMA -->
					<td>Gevarieerd</td>
				</tr>
				<!-- row Zaterdag -->
				<tr>
					<th>Zaterdag Nacht</th>
					<!-- DJ -->
					<td
						><div class="flex items-center gap-3">
							<div class="avatar">
								<div class="mask mask-squircle h-12 w-12">
									<img src={autodjimg} alt="Avatar Tailwind CSS Component" />
								</div>
							</div>
							<div>
								<div class="font-bold">AUTO DJ</div>
								<div class="text-sm opacity-50">Offline Studio</div>
							</div>
						</div></td
					>
					<!-- ONAIR -->
					<td>23:00 / 08:00</td>
					<!-- PROGRAMMA -->
					<td>Gevarieerd</td>
				</tr>
				<!-- row Zondag -->
				<tr>
					<th>Zondag Ochtend/Middag</th>
					<!-- DJ -->
					<td
						><div class="flex items-center gap-3">
							<div class="avatar">
								<div class="mask mask-squircle h-12 w-12">
									<img src={autodjimg} alt="Avatar Tailwind CSS Component" />
								</div>
							</div>
							<div>
								<div class="font-bold">AUTO DJ</div>
								<div class="text-sm opacity-50">Offline Studio</div>
							</div>
						</div></td
					>
					<!-- ONAIR -->
					<td>08:00 / 18:00</td>
					<!-- PROGRAMMA -->
					<td>Gevarieerd</td>
				</tr>
				<!-- row Zondag -->
				<tr>
					<th>Zondag Avond</th>
					<!-- DJ -->
					<td
						><div class="flex items-center gap-3">
							<div class="avatar">
								<div class="mask mask-squircle h-12 w-12">
									<img src={autodjimg} alt="Avatar Tailwind CSS Component" />
								</div>
							</div>
							<div>
								<div class="font-bold">AUTO DJ</div>
								<div class="text-sm opacity-50">Offline Studio</div>
							</div>
						</div></td
					>
					<!-- ONAIR -->
					<td>18:00 / 23:00</td>
					<!-- PROGRAMMA -->
					<td>Gevarieerd</td>
				</tr>
				<!-- row Zondag -->
				<tr>
					<th>Zondag Nacht</th>
					<!-- DJ -->
					<td
						><div class="flex items-center gap-3">
							<div class="avatar">
								<div class="mask mask-squircle h-12 w-12">
									<img src={autodjimg} alt="Avatar Tailwind CSS Component" />
								</div>
							</div>
							<div>
								<div class="font-bold">AUTO DJ</div>
								<div class="text-sm opacity-50">Offline Studio</div>
							</div>
						</div></td
					>
					<!-- ONAIR -->
					<td>23:00 / 08:00</td>
					<!-- PROGRAMMA -->
					<td>Gevarieerd</td>
				</tr>
			</tbody>
		</table>
	</div>
</BackgroundGradient>
