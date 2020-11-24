<template>
	<v-tab @click="SQL">SQL / NoSQL</v-tab>
</template>

<script>
export default {
	methods: {
		SQL() {
			this.chartData = [
				{ label: "MySQL", level: 75 },
				{ label: "FireBase", level: 55 },
				{ label: "MongoDB", level: 50 },
			];
		},
	},
};
</script>

<style lang="scss" scoped></style>
