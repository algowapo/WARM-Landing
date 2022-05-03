<template>
	<div class="max-w-xs min-h-[50%] bg-dark-gray rounded-lg py-10 px-10">
		<h3 class="text-4xl font-semibold">Basic</h3>
		<h4 class="text-4xl font-semibold my-8">S/0</h4>
		<p class="border-t border-white pt-8 mb-8">
			Id elementum donec congue ipsum at.
		</p>
		<MainButton text="Button" />
	</div>
</template>

<script>
import MainButton from './MainButton.vue'
export default {
	components: { MainButton },
}
</script>

<style scoped></style>
