<template>
	<div class="">
		<v-parallax height="600" :src="this.$props.backgroundUrl">
			<div class="paralax_background_filter"></div>
			<div class="text-left">
				<h1
					class="_title opacity-7 font-weight-black ultra grey--text text--lighten-3 ml-9"
				>
					{{ this.$props.title }}
				</h1>
			</div>
		</v-parallax>
	</div>
</template>

<script>
export default {
	props: {
		backgroundUrl: String,
		title: String,
	},
};
</script>

<style lang="scss">
.paralax_background_filter {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	background: -moz-linear-gradient(
		top,
		rgba(200, 200, 200, 0) 0%,
		rgba(66, 66, 66, 1) 100%
	);
	background: -webkit-linear-gradient(
		top,
		rgba(200, 200, 200, 0) 0%,
		rgba(66, 66, 66, 1) 100%
	);
	background: linear-gradient(
		to bottom,
		rgba(200, 200, 200, 0) 0%,
		rgba(66, 66, 66, 1) 100%
	);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#424242',GradientType=0 );
}
</style>
