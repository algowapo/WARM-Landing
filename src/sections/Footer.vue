<template>
	<footer class="py-4">
		<div class="flex items-center justify-between mb-6">
			<BrandIcon />
			<RedirectLink text="Contacto" href="#contact" />
		</div>
		<div class="flex items-center pb-6 mb-6 border-b border-white">
			<p class="font-medium text-neutral-300 text-base w-2/3 md:w-1/4">
				Únete a las miles de personas que ahorra con warm
			</p>
		</div>
		<div class="flex items-center justify-between mb-6">
			<p class="text-sm text-neutral-400">made by: AlgoWapo</p>
			<div class="flex space-x-4">
				<img src="/instagram.png" />
				<img src="/twitter.png" />
				<img src="/facebook.png" />
			</div>
		</div>
	</footer>
</template>

<script>
import BrandIcon from '../components/BrandIcon.vue'
import RedirectLink from '../components/RedirectLink.vue'
export default {
	components: { BrandIcon, RedirectLink },
}
</script>

<style></style>
