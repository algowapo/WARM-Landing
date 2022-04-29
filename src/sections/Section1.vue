<template>
	<section id="section1">
		<MainCard />
	</section>
</template>

<script>
import MainCard from '../components/MainCard.vue'
export default {
	components: { MainCard },
}
</script>

<style scoped>
#section1 {
	display: flex;
	justify-content: center;
	padding-top: 20vh;
	padding-bottom: 10vh;
}
</style>
