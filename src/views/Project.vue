<template>
	<transition name="fade">
		<full-page :options="options" id="fullpage" class="back">
			<div class="section fp-auto-height">
				<BackgroundParallax
					title="Titre du projet"
					backgroundUrl="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
				/>

				<IntroProject
					title="Context"
					introduction="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis nihil debitis eaque ea obcaecati laudantium sapiente deserunt iure quis harum, excepturi esse eum sint, similique vitae fuga id. Suscipit, vitae."
					:roles="[
						{ id: 1, role: 'Lorem ipsum' },
						{ id: 2, role: 'Lorem ipsum' },
						{ id: 3, role: 'Lorem ipsum' },
					]"
				/>
			</div>
			<div class="section py-9" id="profil1">
				<Responsive />
			</div>
			<div class="section fp-auto-height" id="profil2">
				<StyleGuide />
			</div>
		</full-page>
	</transition>
</template>

<script>
import BackgroundParallax from "../components/Project/BackgroundParallax.vue";
import IntroProject from "../components/Project/IntroProject.vue";
import Responsive from "../components/Project/Responsive.vue";
import StyleGuide from "../components/Project/StyleGuide.vue";
export default {
	components: {
		BackgroundParallax,
		IntroProject,
		Responsive,
		StyleGuide,
	},
	data() {
		return {
			options: {
				// menu: "#menu",
				onLeave: this.onLeave,
				autoScrolling: true,
				scrollHorizontally: true,
				controlArrows: false,
				navigationTooltips: ["firstSlide", "secondSlide", "thirdSlide"],
				licenseKey: "3936F101-C8A74F32-80C3B0D1-4BA92E67",
				scrollHorizontallyKey: "012C4ADE-048E489C-82763FBF-C5ACE3DA",
			},
		};
	},
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
.back {
	background-color: #424242;
}
</style>
