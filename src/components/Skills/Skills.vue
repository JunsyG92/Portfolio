<template>
	<div class="container-fill-height section">
		<div class="container-middle d-block content__skills">
			<v-row>
				<v-col cols="12" class="mt-8">
					<h2 class="_title medium mb-5">
						<span class="sign__word_blue">Skills</span>
					</h2>
					<p class="text-uppercase">
						Click on one of the tabs to see a quick overview of my skills on the
						technologies I use every day.
					</p>
					<v-tabs background-color="transparent" class="mb-8">
						<FrontEnd />
						<BackEnd />
						<SQL />
						<Adobe />
						<Tools />
						<NoCode />
						<CMS />
					</v-tabs>
					<div class="d-flex justify-center">
						<div class="mx-auto">
							<Chart
								:chartData="chartData"
								:options="charOptions"
								label="Test de vue-chartjs"
							/>
						</div>
					</div>
				</v-col>
			</v-row>
		</div>
	</div>
</template>

<script>
import Chart from "../ActivityGraph/Chart";

import FrontEnd from "../Tabs/FrontEnd";
import BackEnd from "../Tabs/BackEnd";
import SQL from "../Tabs/SQL";
import Adobe from "../Tabs/Adobe";
import Tools from "../Tabs/Tools";
import NoCode from "../Tabs/NoCode";
import CMS from "../Tabs/CMS";

export default {
	components: {
		Chart,
		FrontEnd,
		BackEnd,
		SQL,
		Adobe,
		Tools,
		NoCode,
		CMS,
	},
	data() {
		return {
			chartData: [
				{ name: "HTML5", level: 90 },
				{ name: "CSS3", level: 90 },
				{ name: "JavaScript", level: 75 },
			],
			charOptions: {
				responsive: true,
				maintainAspectRatio: false,
				legend: {
					display: false,
				},
				scale: {
					angleLines: {
						display: false,
					},
					gridLines: {
						display: true,
						circular: true,
						color: "rgba(255, 255, 255, .5)",
						borderDash: [0],
						borderDashOffset: [0.0],
						lineWidth: 0.2,
						drawBorder: true,
						drawOnChartArea: true,
						drawTicks: true,
						tickMarkLength: 10,
						zeroLineWidth: 1,
						zeroLineColor: "rgba(0, 0, 0, 1)",
						zeroLineBorderDash: [],
						zeroLineBorderDashOffset: 0.0,
						offsetGridLines: false,
					},
					pointLabels: {
						display: true,
						fontColor: "#fff",
						fontSize: 16,
					},
					ticks: {
						beginAtZero: true,
						suggestedMin: 0,
						suggestedMax: 100,
						stepSize: 10,
						showLabelBackdrop: false,
						backdropPaddingY: 2,
					},
				},
			},
		};
	},
};
</script>

<style lang="scss">
#radar-chart {
	width: 550px;
	height: 550px;
}
.content__skills {
	margin-left: 50px;
	margin-right: 50px;
	margin-bottom: 50px;
}
</style>
