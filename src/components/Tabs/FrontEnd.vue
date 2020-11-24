<template>
	<v-tab @click="FrontEnd()" active="false">Front-End</v-tab>
</template>

<script>
export default {
	methods: {
		FrontEnd() {
			this.$store.commit("CHANGE_CHART_DATA", [
				{ label: "HTML5", level: 90 },
				{ label: "CSS3", level: 90 },
				{ label: "JavaScript", level: 75 },
			]);
		},
	},
};
</script>

<style lang="scss" scoped></style>
