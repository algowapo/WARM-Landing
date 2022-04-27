<template>
	<nav>
		<div class="brand">
			<img class="nav-logo" src="../../public/favicon.png" alt="brand logo" />
			<p class="nav-title offset-margin">warm</p>
		</div>
		<div class="links-container">
			<ScrollLink text="Funciones" href="#funciones" />
			<ScrollLink text="Planes" href="#planes" />
			<RedirectLink text="Regístrate" href="#registrate" />
			<MainButton text="Inicia Sesión" />
		</div>
	</nav>
</template>

<script>
import ScrollLink from './ScrollLink.vue'
import RedirectLink from './RedirectLink.vue'
import MainButton from './MainButton.vue'

export default {
	components: { ScrollLink, RedirectLink, MainButton },
}
</script>

<style>
nav {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 0 10vw;
	padding: 1vh 0;
}

a {
	font-size: 1rem;
}

.offset-margin {
	margin-top: 4px;
}

.brand {
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: center;
	transition: opacity 0.3s ease-out;
}

.brand:hover {
	cursor: pointer;
	opacity: 0.7;
}

.nav-logo {
	height: 4vh;
	margin: auto 0;
	margin-right: 1.5vh;
	padding-bottom: 5px;
}

.nav-title {
	padding: 20px 10px;
	line-height: 24px;
	min-width: 100px;
	font-weight: 500;
	color: #ffffff;
	transition: text-decoration-color 0.3s ease-out;
	text-decoration: underline 0.1em rgba(255, 255, 255, 0);
	font-size: 1rem;
}

.links-container {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: flex-start;
}

.links-container > * {
	margin-right: 5vh;
}
</style>
