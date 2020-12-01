<template>
	<header class="position-fixed h-100 d-flex align-center" style="width: 8%">
		<div class="menu_background_filter"></div>
		<div class="nav-menu-app w-100">
			<ul class="nav d-flex flex-column ">
				<NavLink to_link="home" name="Home" />
				<NavLink to_link="about" name="About" />
				<NavLink to_link="skills" name="Skills" />
				<NavLink to_link="work" name="Work" />
				<NavLink to_link="contact" name="Contact" />
			</ul>
		</div>
	</header>
</template>

<script>
import NavLink from "./NavLink";
export default {
	components: {
		NavLink,
	},
	data: () => ({
		drawer: false,
		group: null,
		anchor: "",
	}),
};
</script>

<style lang="scss">
header {
	z-index: 10;
}
.nav-menu-app {
	z-index: 10;
}
.menu_background_filter {
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 1;
	background: -moz-linear-gradient(
		left,
		rgba(255, 255, 255, 0.7) 0%,
		rgba(200, 200, 200, 0) 80%
	);
	background: -webkit-linear-gradient(
		left,
		rgba(255, 255, 255, 0.7) 0%,
		rgba(200, 200, 200, 0) 80%
	);
	background: linear-gradient(
		to right,
		rgba(255, 255, 255, 0.7) 0%,
		rgba(200, 200, 200, 0) 80%
	);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00c8c8c8',GradientType=1 );
}
</style>
