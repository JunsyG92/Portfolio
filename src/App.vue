<template>
	<v-app>
		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>

<script>
// import Reseau from "./components/Header/Reseau/Reseau";
export default {
	name: "App",
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

.container {
	padding-left: 0 !important;
	padding-right: 0 !important;
}
.theme--dark.v-application {
	background: transparent !important;
}
.slide-fade-enter-active {
	transition: all 0.3s ease;
}
.slide-fade-leave-active {
	transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
	transform: translateX(10px);
	opacity: 0;
}
</style>
