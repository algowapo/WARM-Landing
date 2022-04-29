<template>
	<section id="funciones">
		<h2 class="function-title">Funciones</h2>
		<div class="first-row">
			<div class="img-col">
				<img
					class="function-image"
					src="../assets/PlaceholderHolo.png"
					alt="PlaceHolder Image"
				/>
			</div>
			<div class="text-col">
				<h3 class="text-col-title">Simple Header</h3>
				<p class="text-col-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat ut
					bibendum nunc, sapien volutpat morbi. Elit, augue in risus
					pellentesque ridiculus id dictum congue. Dignissim.
				</p>
				<MainButton text="Button" />
			</div>
		</div>
		<div class="first-row">
			<div class="text-col">
				<h3 class="text-col-title">Simple Header</h3>
				<p class="text-col-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat ut
					bibendum nunc, sapien volutpat morbi. Elit, augue in risus
					pellentesque ridiculus id dictum congue. Dignissim.
				</p>
				<MainButton text="Button" />
			</div>
			<div class="img-col">
				<img
					class="function-image"
					src="../assets/PlaceholderHolo.png"
					alt="PlaceHolder Image"
				/>
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

.function-title {
	font-size: 3rem;
	font-weight: 600;
	margin-bottom: 4rem;
}

.first-row {
	display: flex;
	width: 70%;
	margin-bottom: 5rem;
}

.img-col {
	width: 50%;
	display: flex;
	justify-content: center;
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

.text-col-text {
	font-size: 1rem;
	font-weight: 300;
	margin-bottom: 2rem;
}

.text-col > button {
	margin: 0;
}
</style>
