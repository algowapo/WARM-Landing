<template>
	<button>
		<span class="material-icons"> {{ iconName }} </span>
	</button>
</template>

<script>
export default {
	props: { iconName: String },
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
	padding: 0.5em 0.5em;
	border-radius: 50%;
	border: 2px solid #ffffff;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.3s ease-out;
}

button:hover {
	cursor: pointer;
	background: none;
	color: #ffffff;
}
</style>
