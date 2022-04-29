<template>
	<button>{{ text }}</button>
</template>

<script>
export default {
	props: { text: String },
}
</script>

<style scoped>
button {
	background: #ffffff;
	color: #000000;
	border: none;
	font-family: 'Poppins', sans-serif;
	font-weight: 600;
	font-size: 1rem;
	padding: 0.5em 1.2em;
	border-radius: 10px;
	border: 2px solid #ffffff;
	transition: all 0.3s ease-out;
}

button:hover {
	cursor: pointer;
	background: none;
	color: #ffffff;
}
</style>
