<template>
	<section id="icons" class="py-10">
		<div
			class="mb-20 flex justify-center flex-col lg:flex-row lg:justify-start lg:space-x-4"
		>
			<p class="font-medium">
				Las redes de utilidades más grandes del Perú son compatibles con:
			</p>
			<BrandIcon />
		</div>
		<div
			class="flex space-y-20 items-center flex-col lg:flex-row lg:justify-center lg:space-x-20 lg:space-y-0 mt-10"
		>
			<img
				class="h-16 lg:h-12"
				src="../assets/sedapal.png"
				alt="Sedapal Logo"
			/>
			<img
				class="h-16 lg:h-12"
				src="../assets/Luz_del_Sur.png"
				alt="Luz del Sur Logo"
			/>
			<img
				class="h-16 md:h-12"
				src="../assets/Enel_Group_logo.png"
				alt="Enel Logo"
			/>
			<img class="h-16 md:h-12" src="../assets/kallpa.png" alt="Kallpa Logo" />
			<img class="h-16 md:h-12" src="../assets/enosa.png" alt="Enosa Logo" />
		</div>
	</section>
</template>

<script>
import BrandIcon from '../components/BrandIcon.vue'
export default {
	components: { BrandIcon },
}
</script>

<style scoped></style>
