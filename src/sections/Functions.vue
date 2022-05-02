<template>
	<section id="funciones" class="space-y-20">
		<h2 class="font-semibold mb-10 text-5xl">Funciones</h2>
		<div class="w-full lg:w-9/12 flex flex-col items-center lg:flex-row mb-10">
			<div class="max-w-[50%] flex justify-center lg:justify-start">
				<img
					class="function-image"
					src="../assets/PlaceholderHolo.png"
					alt="PlaceHolder Image"
				/>
			</div>
			<div class="w-9/12 lg:1/12">
				<h3
					class="text-4xl font-semibold text-center lg:text-left mt-10 lg:mt-0 mb-8"
				>
					Simple Header
				</h3>
				<p class="font-light text-center lg:text-left mb-8">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat ut
					bibendum nunc, sapien volutpat morbi. Elit, augue in risus
					pellentesque ridiculus id dictum congue. Dignissim.
				</p>
				<div class="flex justify-center lg:justify-start my-8">
					<MainButton text="Button" />
				</div>
			</div>
		</div>
		<div
			class="w-full lg:w-9/12 flex flex-col items-center lg:flex-row-reverse mb-10"
		>
			<div class="max-w-[50%] flex justify-center lg:justify-end">
				<img
					class="function-image"
					src="../assets/PlaceholderHolo.png"
					alt="PlaceHolder Image"
				/>
			</div>
			<div class="w-9/12 lg:1/12">
				<h3
					class="text-4xl font-semibold text-center lg:text-left mt-10 lg:mt-0 mb-8"
				>
					Simple Header
				</h3>
				<p class="font-light text-center lg:text-left mb-8">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat ut
					bibendum nunc, sapien volutpat morbi. Elit, augue in risus
					pellentesque ridiculus id dictum congue. Dignissim.
				</p>
				<div class="flex justify-center lg:justify-start my-8">
					<MainButton text="Button" />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import MainButton from '../components/MainButton.vue'
export default { components: { MainButton } }
</script>

<style scoped>
#funciones {
	display: flex;
	align-items: center;
	flex-direction: column;
}

.first-row {
	display: flex;
	width: 70%;
	margin-bottom: 5rem;
}

.function-image {
	border-radius: 10px;
	width: 80%;
	aspect-ratio: 1/1;
}

.text-col {
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding: 1rem 5rem;
}

.text-col-title {
	font-size: 2.5rem;
	font-weight: 600;
	margin-bottom: 2rem;
}

.text-col > button {
	margin: 0;
}
</style>
