<template>
	<section class="pannel">
		<div class="pannel__admin">
			<MenuAdmin />
			<div class="pannel__content">
				<h1>Admin Panel</h1>
			</div>
		</div>
	</section>
</template>

<script>
import MenuAdmin from "../components/Header/Menu/MenuAdmin";
// let token = sessionStorage.getItem("token");
export default {
	components: {
		MenuAdmin,
	},
	data() {
		return {};
	},
	created() {
		// let token = sessionStorage.getItem("token");
	},
};
</script>

<style lang="scss">
.pannel {
	display: initial;
}
.pannel__admin {
	width: 100%;
	height: 100%;
	display: flex;
}
.pannel__content {
	padding: 20px 35px;
}
</style>
