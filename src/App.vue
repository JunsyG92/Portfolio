<template>
	<v-app>
		<v-main>
			<Menu />
			<router-view />
		</v-main>
	</v-app>
</template>

<script>
// import Reseau from "./components/Header/Reseau/Reseau";
import Menu from "./components/Header/Menu/Menu";
export default {
	name: "App",
	components: {
		Menu,
	},
	data: () => ({
		//
	}),
};
</script>

<style lang="scss">
@import "./assets/styles/main.scss";
.cairo {
	font-family: "Cairo", sans-serif;
}
.rajdhani {
	font-family: "Rajdhani", sans-serif;
}
.newscycle {
	font-family: "News Cycle", sans-serif;
}
.rufina {
	font-family: "Rufina", sans-serif;
}
.thasadith {
	font-family: "Thasadith", sans-serif;
}
.scopeone {
	font-family: "Scope One", sans-serif;
}
html {
	/* background: rgba(50,50,58,1); */
	// background: #fff !important;
	background: #251b2e !important;
	background: -moz-linear-gradient(top, #251b2e 0%, #06001e 100%) !important;
	background: -webkit-linear-gradient(top, #251b2e 0%, #06001e 100%) !important;
	background: linear-gradient(to bottom, #251b2e 0%, #06001e 100%) !important;
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#251b2e', endColorstr='#06001e',GradientType=0 ) !important;
}
.container {
	padding-left: 0 !important;
	padding-right: 0 !important;
}
.theme--dark.v-application {
	background: transparent !important;
}
</style>
