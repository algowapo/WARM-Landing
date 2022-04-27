<template>
	<a class="scroll-link offset-margin" :href="`${href}`" v-smooth-scroll>{{
		text
	}}</a>
</template>

<script>
export default {
	props: { text: String, href: String },
}
</script>

<style>
.scroll-link {
	display: inline-block;
	vertical-align: top;
	position: relative;
	text-align: center;
	/* TODO: change to em/rem */
	padding: 20px 10px 10px 10px;
	line-height: 24px;
	min-width: 100px;
	font-weight: 400;
	color: #ffffff;
	text-decoration: none;
}

.scroll-link::before {
	transform: translateX(-50%);
	border-radius: 100%;
	position: absolute;
	background: white;
	bottom: 5px;
	height: 6px;
	content: '';
	width: 6px;
	left: 50%;
	opacity: 0;
	transition: opacity 0.3s ease-out;
}

.scroll-link:hover::before {
	opacity: 1;
}
</style>
