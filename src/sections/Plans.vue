<template>
	<section id="planes">
		<h2 class="plan-title">Escoge tu plan</h2>
		<div class="cards-row">
			<TallCard />
			<TallCard />
			<TallCard />
		</div>
	</section>
</template>

<script>
import TallCard from '../components/TallCard.vue'
export default { components: { TallCard } }
</script>

<style scoped>
#planes {
	display: flex;
	align-items: center;
	flex-direction: column;
}
.plan-title {
	font-size: 3rem;
	font-weight: 600;
	margin-bottom: 4rem;
}

.cards-row {
	display: flex;
}

.cards-row > * {
	margin: 0 2rem 2rem 0;
}
</style>
