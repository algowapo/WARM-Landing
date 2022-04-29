<template>
	<div class="main-card">
		<div class="left-col">
			<img
				class="main-card-img"
				src="../assets/PlaceholderHolo.png"
				alt="PlaceHolder Holo Image"
			/>
			<p class="card-pre-title">SMALL PRE-TITLE - USE A HIGHLIGHT COLOR</p>
			<h2 class="card-title">Nice and simple header</h2>
			<p class="card-text">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim.
			</p>
			<MainButton text="Button" />
		</div>
		<div class="right-col">
			<div class="top-row">
				<Segment />
			</div>
			<div class="middle-row">
				<Segment />
			</div>
			<div class="bottom-row">
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

<style scoped>
.main-card {
	width: 70%;
	background: #1f2029;
	display: flex;
	flex-direction: row;
	border-radius: 20px;
	padding: 2rem;
}

.left-col {
	width: 60%;
	margin: 2vh 4vh;
}

.main-card-img {
	height: 300px;
	width: 300px;
	border-radius: 10px;
}

.card-pre-title {
	color: #cdced9;
	text-transform: uppercase;
	margin: 2rem 0;
}

.card-title {
	font-size: 3rem;
	font-weight: 600;
	line-height: 3rem;
}

.card-text {
	font-weight: 400;
	margin-top: 2rem;
	margin-right: 3rem;
	margin-bottom: 1.5rem;
}

.right-col {
	width: 40%;
}

.right-col > * {
	display: flex;
	align-items: center;
	height: 33.33%;
	margin: 0 2rem;
}

.right-col > *:nth-child(1),
.right-col > *:nth-child(2) {
	border-bottom: 1px solid #ffffff;
}
</style>
