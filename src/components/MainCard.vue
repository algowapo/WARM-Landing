<template>
	<div
		class="w-full lg:w-9/12 flex flex-col rounded-lg lg:flex-row p-10 bg-dark-gray space-x-0 xl:space-x-4 lg:space-x-2"
	>
		<div class="w-full lg:w-1/2 xl:w-8/12">
			<img
				class="rounded-lg w-[300px] h-[300px] mx-auto lg:mx-0"
				src="../assets/PlaceholderHolo.png"
				alt="PlaceHolder Holo Image"
			/>
			<p class="text-light-gray uppercase my-6 text-center lg:text-left my-10">
				SMALL PRE-TITLE - USE A HIGHLIGHT COLOR
			</p>
			<h2 class="text-4xl font-semibold text-center lg:text-left my-10">
				Nice and simple header
			</h2>
			<p class="card-text font-regular text-center lg:text-left my-10">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim.
			</p>
			<div class="flex justify-center lg:justify-start my-10">
				<MainButton text="Button" />
			</div>
		</div>
		<div
			class="w-full lg:w-1/2 xl:w-4/12 flex flex-col items-around justify-around"
		>
			<div class="min-h-[30%] py-4 flex items-center border-b border-white">
				<Segment />
			</div>
			<div class="min-h-[30%] py-4 flex items-center border-b border-white">
				<Segment />
			</div>
			<div class="min-h-[30%] py-4 flex items-center">
				<Segment />
			</div>
		</div>
	</div>
</template>

<script>
import MainButton from './MainButton.vue'
import Segment from './Segment.vue'
export default {
	components: { MainButton, Segment },
}
</script>

<style scoped></style>
