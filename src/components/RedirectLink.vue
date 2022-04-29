<template>
	<a class="redirect-link" :href="`${href}`">{{ text }}</a>
</template>

<script>
export default {
	props: { text: String, href: String },
}
</script>

<style scoped>
.redirect-link {
	display: inline-block;
	vertical-align: top;
	padding-bottom: 10px;
	position: relative;
	text-align: center;
	padding: 20px 10px;
	line-height: 24px;
	min-width: 100px;
	font-weight: 400;
	color: #ffffff;
	transition: text-decoration-color 0.3s ease-out;
	text-decoration: underline 0.1em rgba(255, 255, 255, 0);
}

.redirect-link:hover {
	text-decoration: underline 0.1em rgba(255, 255, 255, 1);
}
</style>
