<template>
	<div class="section" id="section3">
		<div class="project">
			<div
				class="project__container_background"
				:style="{ backgroundImage: 'url(' + items[currentIndex].src + ')' }"
			>
				<div class="project_container_filter"></div>
			</div>
			<div
				class="project__carousel"
				v-tilt="{
					reverse: true,
					max: 10,
					perspective: 1000,
					scale: 1,
					speed: 300,
					transition: true,
					axis: null,
					reset: true,
					easing: 'cubic-bezier(.03,.98,.52,.99)',
					glare: true,
					'max-glare': 1,
					'glare-prerender': false,
				}"
			>
				<v-carousel
					show-arrows-on-hover
					cycle
					hide-delimiters
					interval="3000"
					v-model="currentIndex"
				>
					<v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
						<v-container fill-height ma-0 pb-3 pl-5 pr-5 mb-4>
							<v-layout fill-height align-center text-center>
								<v-flex xs12>
									<v-card color="transparent" class="pa-2" elevation="0">
										<h3 class="_title medium_white tilt_3d">
											<router-link to="/work" class="text-white" exact>
												{{ item.title }}
											</router-link>
										</h3>
									</v-card>
								</v-flex>
							</v-layout>
						</v-container>
					</v-carousel-item>
				</v-carousel>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			currentIndex: 0,
			items: [
				{
					src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
					title: "Groupomania",
				},
				{
					src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
					title: "Orinico",
				},
				{
					src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
					title: "Businace",
				},
				{
					src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
					title: "Wurnip",
				},
			],
		};
	},
	// methods: {
	// 	test(val) {
	// 		console.log(val);
	// 	},
	// },
	// watch: {
	// 	currentIndex(val) {
	// 		console.log(val);
	// 	},
	// },
};
</script>

<style lang="scss">
.project {
	width: 100%;
	height: 100%;
	// background-color: rgba(150, 150, 150, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
}
.project__container_background {
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	filter: blur(3px);
	filter: grayscale(50%);
	opacity: 1;
	transition: 300ms;
}
.project__carousel {
	width: 800px;
	height: 500px;
	box-shadow: 0 0 3em #101010;
	position: absolute;
	transition: 300ms;
}
.tilt_3d {
	transform: translateZ(150px);
}
.project_container_filter {
	width: 100%;
	height: 100%;
	position: relative;
	background: -moz-linear-gradient(
		top,
		rgba(255, 255, 255, 1) 0%,
		rgba(228, 228, 228, 0) 50%,
		rgba(200, 200, 200, 1) 100%
	);
	background: -webkit-linear-gradient(
		top,
		rgba(255, 255, 255, 1) 0%,
		rgba(228, 228, 228, 0) 50%,
		rgba(200, 200, 200, 1) 100%
	);
	background: linear-gradient(
		to bottom,
		rgba(255, 255, 255, 1) 0%,
		rgba(228, 228, 228, 0) 50%,
		rgba(200, 200, 200, 1) 100%
	);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#c8c8c8',GradientType=0 );
}
</style>
