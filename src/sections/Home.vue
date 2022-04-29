<template>
	<section id="home">
		<div class="box-top">
			<span class="material-icons material-symbols-outlined"> payments </span>
			<p class="home-top">Ahorra en tus recibos mensuales</p>
		</div>
		<div class="box-title">
			<h1 class="home-title">El consumo de tus utilidades en tus manos</h1>
		</div>
		<div class="box-subtitle">
			<p class="home-subtitle">
				La única aplicación que necesita para realizar un seguimiento de los
				recursos en su hogar. El uso de luz, agua y gas nunca fue tan fácil de
				gestionar.
			</p>
		</div>

		<div class="cta-row">
			<MainButton text="Inicia Ahora" />
			<p class="bottom-text">Como funciona</p>
			<IconButton icon-name="play_arrow" />
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

<style scoped>
#home {
	min-height: 40vh;
	padding: 1vh 0;
	margin-bottom: 5vh;
}

.box-top {
	display: flex;
	align-items: center;
}

.home-top {
	font-size: 1.1rem;
	font-weight: 400;
	margin-left: 1rem;
}

.box-title {
	width: 700px;
	margin-top: 2rem;
}

.home-title {
	font-size: calc(60px + (80 - 60) * ((100vw - 300px) / (1600 - 300)));
	font-weight: 600;
	line-height: 11vh;
}

.box-subtitle {
	width: 550px;
	margin-top: 3rem;
}

.home-subtitle {
	font-size: 1.2rem;
	color: #d2d3d4;
	font-weight: 400;
}

.cta-row {
	display: flex;
	align-items: center;
	margin-top: 4rem;
}

.cta-row > * {
	margin-right: 2vw;
}

.bottom-text {
	font-size: 1.2rem;
}
</style>
