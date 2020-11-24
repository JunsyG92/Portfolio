<template>
	<full-page :options="options" id="fullpage">
		<v-container fluid>
			<Intro />
			<About />
			<Skills />
			<Work />
			<Contact />
		</v-container>
	</full-page>
</template>

<script>
// import section
import About from "../components/About/About";
import Intro from "../components/Intro/Intro";
import Work from "../components/Work/Work";
import Contact from "../components/Contact/Contact";
import Skills from "../components/Skills/Skills";

export default {
	name: "Home",
	components: {
		About,
		Intro,
		Work,
		Contact,
		Skills,
	},
	data() {
		return {
			options: {
				licenseKey: "3936F101-C8A74F32-80C3B0D1-4BA92E67",
				// menu: "#menu",
				anchors: ["home", "about", "skills", "work", "contact"],
			},
		};
	},
};
</script>

<style lang="scss">
.v-application .display-4 {
	font-family: none;
}
._neon._blue {
	text-shadow: 2px 2px 0 #36d8e4, -2px -2px 0 #36d8e4, -2px 2px 0 #36d8e4,
		2px -2px 0 #36d8e4, 2px 2px 15px #36d8e4, -2px -2px 15px #36d8e4;
}
</style>
