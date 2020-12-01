<template>
	<div class="section" id="section1">
		<v-row>
			<v-col cols="8">
				<div class="container-fill-height">
					<div class="container-middle text-center">
						<h2 class="_title big grey--text text--darken-2">About me</h2>
					</div>
				</div>
			</v-col>
			<v-col cols="4" class="map">
				<div id="picture">
					<div class="about_container_filter"></div>
					<img src="../../assets/images/index.png" class="photo" />
				</div>
			</v-col>
		</v-row>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#picture {
	width: 100%;
	height: 100%;
	position: relative;
}
.photo {
	// width: 100%;
	height: 100%;
}
.about_container_filter {
	width: 100%;
	height: 100%;
	position: absolute;
	background: -moz-linear-gradient(
		top,
		rgba(255, 255, 255, 0) 0%,
		rgba(203, 203, 203, 1) 95%,
		rgba(200, 200, 200, 1) 100%
	);
	background: -webkit-linear-gradient(
		top,
		rgba(255, 255, 255, 0) 0%,
		rgba(203, 203, 203, 1) 95%,
		rgba(200, 200, 200, 1) 100%
	);
	background: linear-gradient(
		to bottom,
		rgba(255, 255, 255, 0) 0%,
		rgba(203, 203, 203, 1) 95%,
		rgba(200, 200, 200, 1) 100%
	);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#c8c8c8',GradientType=0 );
}
</style>
