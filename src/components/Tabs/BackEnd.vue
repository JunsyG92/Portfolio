<template>
	<v-tab @click="BackEnd">Back-End</v-tab>
</template>

<script>
export default {
	methods: {
		BackEnd() {
			this.$store.commit("CHANGE_CHART_DATA", [
				{ label: "JavaScript", level: 75 },
				{ label: "Python", level: 45 },
				{ label: "PHP", level: 65 },
			]);
		},
	},
};
</script>

<style lang="scss" scoped></style>
