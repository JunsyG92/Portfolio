<template>
	<div class="section">
		<div class="project">
			<div
				class="project__container_background"
				:style="{ backgroundImage: 'url(' + items[currentIndex].src + ')' }"
			></div>
			<div class="project__carousel">
				<v-carousel hide-delimiters v-model="currentIndex">
					<v-carousel-item
						v-for="(item, i) in items"
						:key="i"
						:src="item.src"
						reverse-transition="fade-transition"
						transition="fade-transition"
					>
						<v-container fill-height ma-0 pb-3 pl-5 pr-5>
							<v-layout fill-height align-end pb-4 mb-4>
								<v-flex xs12>
									<v-card color="transparent" class="pa-2" elevation="0">
										<h3 class="_title medium_white">
											<router-link to="/work" class="text-white link" exact>
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
	methods: {
		test(val) {
			console.log(val);
		},
	},
	watch: {
		currentIndex(val) {
			console.log(val);
		},
	},
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
	filter: blur(5px);
	opacity: 0.6;
	transition: 300ms;
}
.project__carousel {
	width: 800px;
	height: 500px;
	background-color: rgba(255, 255, 255, 0.3);
	box-shadow: 0 0 3em #101010;
	position: absolute;
}
</style>
