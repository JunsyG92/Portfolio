<template>
	<v-tab @click="CMS">CMS</v-tab>
</template>

<script>
export default {
	methods: {
		CMS() {
			this.chartData = [{ label: "WordPress", level: 75 }];
		},
	},
};
</script>

<style lang="scss" scoped></style>
