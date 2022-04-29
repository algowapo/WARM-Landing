<template>
	<article id="segment">
		<div class="icon-col">
			<span class="material-symbols-outlined segment-icon"> schedule </span>
		</div>
		<div class="text-col">
			<h3 class="segment-title">Header Of Segment</h3>
			<p class="segment-text">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium lacus
				eget diam.
			</p>
		</div>
	</article>
</template>

<script>
export default {}
</script>

<style scoped>
#segment {
	display: flex;
	margin: 0 auto;
}

#segment > * {
	margin-right: 1rem;
}

.segment-icon {
	font-size: 3rem;
}
.segment-text {
	font-weight: 400;
	text-align: justify;
	margin-top: 1rem;
}
</style>
