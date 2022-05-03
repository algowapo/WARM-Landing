<template>
	<section id="home" class="min-h-[70vh] pt-14 pb-20">
		<div class="flex items-center">
			<span class="material-icons material-symbols-outlined"> payments </span>
			<p class="text-lg font-medium ml-2">Ahorra en tus recibos mensuales</p>
		</div>
		<div class="w-full lg:w-1/2 my-10">
			<h1 class="text-6xl sm:text-7xl font-semibold">
				El consumo de tus utilidades en tus manos
			</h1>
		</div>
		<div class="w-full lg:w-1/3 my-10">
			<p class="text-lg text-[#d2d3d4] font-normal">
				La única aplicación que necesita para realizar un seguimiento de los
				recursos en su hogar. El uso de luz, agua y gas nunca fue tan fácil de
				gestionar.
			</p>
		</div>
		<div
			class="flex flex-col sm:flex-row items-start space-y-8 sm:space-x-8 sm:space-y-0 mt-20 sm:mt-14"
		>
			<MainButton text="Inicia Ahora" />
			<div class="flex items-center space-x-4">
				<p class="text-lg">Como funciona</p>
				<IconButton icon-name="play_arrow" />
			</div>
		</div>
	</section>
</template>

<script>
import MainButton from '../components/MainButton.vue'
import IconButton from '../components/IconButton.vue'
export default {
	components: { MainButton, IconButton },
}
</script>

<style scoped></style>
