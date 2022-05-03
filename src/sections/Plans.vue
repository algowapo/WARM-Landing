<template>
	<section id="planes" class="py-40">
		<h2 class="text-5xl font-semibold mb-20">Escoge tu plan</h2>
		<div class="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
			<TallCard class="lg:translate-y-8" />
			<TallCard class="bg-[#2C2D3A]" />
			<TallCard class="lg:translate-y-8" />
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

.cards-row {
	display: flex;
}

.cards-row > * {
	margin: 0 2rem 2rem 0;
}
</style>
