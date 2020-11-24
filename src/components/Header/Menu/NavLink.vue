<template>
	<li class="nav-list design">
		<a :href="'/#' + to_link" class="nav-link sign__block_blue">
			<span>{{ name }}</span>
		</a>
	</li>
</template>

<script>
export default {
	props: {
		to_link: String,
		name: String,
	},
};
</script>

<style lang="scss">
.nav-list {
	margin-top: 25px;
	margin-bottom: 25px;
}
.nav-link {
	padding: 0 !important;
	width: 15px;
	height: 15px;
	border-radius: 50px;
	border: 1px solid #fff;
	transition-duration: 200ms;
	span {
		display: none;
	}
	&:hover {
		transition-duration: 200ms;
		width: 150px;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		span {
			display: block;
			font-weight: bold;
		}
	}
}
</style>
