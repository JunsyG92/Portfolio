<template>
	<li class="nav-item">
		<router-link :to="to_link" class="nav-link">
			{{ name }}
		</router-link>
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

<style lang="scss"></style>
