<template>
	<v-row>
		<v-col cols="6">
			<div class="d-flex justify-center">
				<div class="w-75">
					<h3 class="_title medium grey--text text--darken-2 mb-8">
						Front-End
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
				:chartData="FrontEnd"
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
			FrontEnd: [
				{ name: "HTML5", level: 90 },
				{ name: "CSS3", level: 90 },
				{ name: "JavaScript", level: 75 },
			],
		};
	},
	mounted() {
		console.log(this.$props.charOptions);
	},
};
</script>

<style lang="scss" scoped></style>
