<template>
	<div>
		<div class="position-fixed w-100 mt-5">
			<ul class="nav justify-center d-flex">
				<NavLink to_link="/" name="Home" />
				<NavLink to_link="/about" name="About" />
				<NavLink to_link="/work" name="Work" />
				<NavLink to_link="/contact" name="Contact" />
			</ul>
		</div>
	</div>
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

<style lang="scss"></style>
