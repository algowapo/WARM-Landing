<template>
	<button>{{ text }}</button>
</template>

<script>
export default {
	props: { text: String },
}
</script>

<style>
button {
	background: #ffffff;
	color: #000000;
	border: none;
	font-family: 'Poppins', sans-serif;
	font-weight: 600;
	font-size: 1rem;
	padding: 0.4em 1.8em;
	margin: 1em 0;
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
