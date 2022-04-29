<template>
	<div class="tall-card">
		<h3 class="tall-card-title">Basic</h3>
		<h4 class="tall-card-price">S/0</h4>
		<p class="tall-card-text">Id elementum donec congue ipsum at.</p>
		<MainButton text="Button" />
	</div>
</template>

<script>
import MainButton from './MainButton.vue'
export default {
	components: { MainButton },
}
</script>

<style scoped>
.tall-card {
	background: #1f2029;
	border-radius: 10px;
	padding: 2rem 3rem;
	margin-bottom: 5vh;
}

.tall-card-title {
	font-size: 1.5rem;
	font-weight: 600;
}

.tall-card-price {
	font-size: 2.5rem;
	font-weight: 600;
	margin: 2rem 0;
}

.tall-card-text {
	border-top: 1px solid #ffffff;
	padding-top: 2rem;
	margin-bottom: 2rem;
}
</style>
