<template>
	<v-tab @click="Adobe">Adobe</v-tab>
</template>

<script>
export default {
	methods: {
		Adobe() {
			this.chartData = [
				{ label: "Illustrator", level: 85 },
				{ label: "XD", level: 60 },
				{ label: "Photoshop", level: 70 },
				{ label: "Premiere Pro", level: 50 },
				{ label: "InDesign", level: 55 },
				{ label: "After Effect", level: 45 },
			];
		},
	},
};
</script>

<style lang="scss"></style>
