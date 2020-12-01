<template>
	<div>
		<Menu />
		<full-page :options="options" id="fullpage">
			<v-container fluid>
				<Intro />
				<About />
				<Skills />
				<Work />
				<Contact />
			</v-container>
		</full-page>
	</div>
</template>

<script>
import Menu from "../components/Header/Menu/Menu";

import About from "../components/About/About";
import Intro from "../components/Intro/Intro";
import Work from "../components/Work/Work";
import Contact from "../components/Contact/Contact";
import Skills from "../components/Skills/Skills";

export default {
	name: "Home",
	components: {
		Menu,
		About,
		Intro,
		Work,
		Contact,
		Skills,
	},
	data() {
		return {
			options: {
				// menu: "#menu",
				anchors: ["home", "about", "skills", "work", "contact"],
				onLeave: this.onLeave,
				autoScrolling: true,
				scrollHorizontally: true,
				controlArrows: false,
				navigationTooltips: ["firstSlide", "secondSlide", "thirdSlide"],
				licenseKey: "3936F101-C8A74F32-80C3B0D1-4BA92E67",
				scrollHorizontallyKey: "012C4ADE-048E489C-82763FBF-C5ACE3DA",
			},
			anchor: null,
		};
	},
	methods: {
		onLeave(origin, destination) {
			this.$store.commit("CURRENT_ANCHOR", destination.anchor);
		},
	},
};
</script>

<style lang="scss">
.v-application .display-4 {
	font-family: none;
}
</style>
