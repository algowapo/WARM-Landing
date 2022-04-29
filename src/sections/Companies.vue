<template>
	<section id="icons">
		<p class="icons-text">
			Las redes de utilidades más grandes del Perú son compatibles con
		</p>
		<div class="icons-row">
			<img src="../assets/sedapal.png" alt="Sedapal Logo" />
			<img src="../assets/Luz_del_Sur.png" alt="Luz del Sur Logo" />
			<img src="../assets/Enel_Group_logo.png" alt="Enel Logo" />
			<img src="../assets/kallpa.png" alt="Kallpa Logo" />
			<img src="../assets/enosa.png" alt="Enosa Logo" />
		</div>
	</section>
</template>

<script>
export default {}
</script>

<style scoped>
#icons {
	padding: 1vh 0;
	padding-top: 5vh;
	padding-bottom: 5vh;
}

.icons-text {
	font-weight: 400;
	margin-bottom: 5vh;
}

.icons-row {
	display: flex;
	justify-content: space-around;
	align-items: center;
}
</style>
