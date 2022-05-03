<template>
	<main>
		<NavBar />
		<Home />
		<Companies />
		<Main />
		<Functions />
		<Plans />
		<Footer />
	</main>
</template>

<script lang="ts">
import NavBar from './components/NavBar.vue'
import Home from './sections/Home.vue'
import Companies from './sections/Companies.vue'
import Main from './sections/Main.vue'
import Functions from './sections/Functions.vue'
import Plans from './sections/Plans.vue'
import Footer from './sections/Footer.vue'
export default {
	components: { NavBar, Home, Companies, Main, Functions, Plans, Footer },
}
</script>

<style>
* {
	box-sizing: border-box;
	margin: 0;
}

html {
	font-size: 16px;
}

body {
	min-height: 100vh;
	margin: 0;
	background: black;
	color: #ffffff;
	font-family: 'Poppins', sans-serif;
	font-weight: 500;
}

#app {
	min-height: 100vh;
	margin: 0;
	background-image: url('../src/assets/BG.png');
	background-repeat: no-repeat;
	background-size: cover;
	padding: 0 10vw;
}
</style>
