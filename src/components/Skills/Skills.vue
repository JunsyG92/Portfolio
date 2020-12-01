<template>
	<div class="container-fill-height section" id="section2">
		<div class="container-middle d-block content__skills ">
			<div class="slide text-center" data-anchor="skill">
				<h2 class="_title big  grey--text text--darken-2">My skills</h2>
				<div class="position-absolute itsTo d-flex align-center">
					<router-link
						to="/#skills/Front-End"
						class="grey--text text--lighten-1 pr-3"
						>Go right</router-link
					>
					<svg
						width="1em"
						height="1em"
						viewBox="0 0 16 16"
						class="bi bi-arrow-bar-right grey--text"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"
						/>
					</svg>
				</div>
			</div>
			<div class="slide" data-anchor="Front-End">
				<FrontEnd :charOptions="charOptions" />
			</div>
			<div class="slide" data-anchor="Back-End">
				<BackEnd :charOptions="charOptions" />
			</div>
			<div class="slide" data-anchor="SQL-NoSQL">
				<SQL :charOptions="charOptions" />
			</div>
			<div class="slide" data-anchor="Adobe">
				<Adobe :charOptions="charOptions" />
			</div>
			<div class="slide" data-anchor="CMS">
				<CMS :charOptions="charOptions" />
			</div>
			<div class="slide" data-anchor="NoCode-LowCode">
				<NoCode :charOptions="charOptions" />
			</div>
			<div class="slide" data-anchor="Tools">
				<Tools :charOptions="charOptions" />
			</div>
		</div>
	</div>
</template>

<script>
import FrontEnd from "./Slide/FrontEnd.vue";
import BackEnd from "./Slide/BackEnd.vue";
import SQL from "./Slide/SQL";
import Adobe from "./Slide/Adobe";
import Tools from "./Slide/Tools";
import NoCode from "./Slide/NoCode";
import CMS from "./Slide/CMS";

export default {
	components: {
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
						color: "rgba(120, 120, 120, .5)",
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
						fontColor: "#7a7a7a",
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
.skill--text-big {
	font-size: 30px;
}
.itsTo {
	left: 11.5%;
	bottom: 3%;
}
</style>
