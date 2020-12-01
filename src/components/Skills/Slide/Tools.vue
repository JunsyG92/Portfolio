<template>
	<v-row>
		<v-col cols="6">
			<div class="d-flex justify-center">
				<div class="w-75">
					<h3 class="_title medium grey--text text--darken-2 mb-8">
						Tools
					</h3>
					<p class="grey--text text--darken-2 skill--text-big">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
						deleniti, dolore adipisci inventore rerum, alias perferendis
						accusantium error praesentium nihil voluptatibus ea, earum eligendi
						autem enim itaque? Dolorem, nostrum delectus!
					</p>
				</div>
			</div>
		</v-col>
		<v-col cols="6">
			<Chart
				:chartData="Tools"
				:options="this.$props.charOptions"
				label="Test de vue-chartjs"
			/>
		</v-col>
	</v-row>
</template>

<script>
import Chart from "../../ActivityGraph/Chart";
export default {
	components: {
		Chart,
	},
	props: {
		charOptions: Object,
	},
	data() {
		return {
			Tools: [
				{ name: "GitHub", level: 60 },
				{ name: "Visual Studio", level: 90 },
				{ name: "Canva", level: 80 },
				{ name: "Slack", level: 80 },
				{ name: "Monday", level: 80 },
			],
		};
	},
	mounted() {
		console.log(this.$props.charOptions);
	},
};
</script>

<style lang="scss" scoped></style>
