<template>
	<v-tab @click="ToolsDev">Tools for Dev</v-tab>
</template>

<script>
export default {
	methods: {
		ToolsDev() {
			this.chartData = [
				{ label: "GitHub", level: 60 },
				{ label: "Visual Studio", level: 70 },
				{ label: "Sublime Merge", level: 50 },
				{ label: "InDesign", level: 55 },
				{ label: "After Effect", level: 45 },
			];
		},
	},
};
</script>

<style lang="scss" scoped></style>
