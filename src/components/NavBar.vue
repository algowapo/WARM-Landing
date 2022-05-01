<template>
	<nav class="border-gray-200 px-2 sm:px-4 py-5 rounded">
		<div class="container flex flex-wrap justify-between items-center mx-auto">
			<a href="#home" class="flex items-center">
				<BrandIcon />
			</a>
			<button
				data-collapse-toggle="mobile-menu"
				type="button"
				class="collapse inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				aria-controls="mobile-menu"
				aria-expanded="false"
				@click="toggleNavbar"
			>
				<span class="sr-only">Open main menu</span>
				<svg
					class="w-6 h-6"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clip-rule="evenodd"
					></path>
				</svg>
				<svg
					class="hidden w-6 h-6"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clip-rule="evenodd"
					></path>
				</svg>
			</button>
			<div
				class="w-full lg:block lg:w-auto"
				:class="{ hidden: this.show_mobile }"
				id="mobile-menu"
			>
				<ul
					class="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium"
				>
					<li>
						<ScrollLink text="Funciones" href="#funciones" />
					</li>
					<li>
						<ScrollLink text="Planes" href="#planes" />
					</li>
					<li>
						<RedirectLink text="Regístrate" href="#registrate" />
					</li>
					<li class="flex items-center">
						<MainButton text="Inicia Sesión" />
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
import BrandIcon from './BrandIcon.vue'
import ScrollLink from './ScrollLink.vue'
import RedirectLink from './RedirectLink.vue'
import MainButton from './MainButton.vue'

export default {
	components: { BrandIcon, ScrollLink, RedirectLink, MainButton },
	methods: {
		toggleNavbar() {
			this.show_mobile = !this.show_mobile
		},
	},
	data() {
		return {
			show_mobile: false,
		}
	},
}
</script>

<style scoped></style>
