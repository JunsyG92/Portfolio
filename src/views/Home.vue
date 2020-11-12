<template>
	<v-container class="home d-flex align-center h-100">
		<v-row>
			<v-col cols="4" class="mx-auto">
				<p class="_title small">What's up ?</p>
				<h1 class="_title big _neon _blue">Hi ! I'm Mathieu,<br /></h1>
				<h2 class="_title medium">Developper web full-stack</h2>
			</v-col>
		</v-row>
		<ScrollDown />
	</v-container>
</template>

<script>
// @ is an alias to /src
import ScrollDown from "../components/Intro/ScrollDown";
export default {
	name: "Home",
	components: {
		ScrollDown,
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
