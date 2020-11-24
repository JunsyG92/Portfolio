<template>
	<header class="position-fixed h-100 d-flex align-center">
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
</style>
