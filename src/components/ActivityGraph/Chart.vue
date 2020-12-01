<script>
import { Radar } from "vue-chartjs";
export default {
	extends: Radar,
	props: {
		label: {
			type: String,
		},
		chartData: {
			type: Array,
		},
		options: {
			type: Object,
		},
	},
	data() {
		return {
			chart: {
				name: null,
				level: null,
			},
		};
	},
	mounted() {
		let datas = this.$props.chartData;
		let name = [];
		let level = [];
		datas.forEach((data) => {
			name.push(data.name);
			level.push(data.level);
		});
		this.chart.name = name;
		this.chart.level = level;
		let canvas = document.getElementById("radar-chart"),
			ctx = canvas.getContext("2d"),
			grad = ctx.createLinearGradient(1, 1, 1, window.innerHeight);

		grad.addColorStop(1, "rgba(60, 60, 60, .7)");
		grad.addColorStop(0, "rgba(80, 80, 80, .7)");
		grad.addColorStop(0, "rgba(210, 210, 210, 0)");
		this.renderChart(
			{
				labels: name,
				datasets: [
					{
						label: this.chart.label,
						data: level,
						fill: true,
						lineTension: 0.5,
						backgroundColor: grad,
						borderColor: "#7a7a7a",
						borderCapStyle: "butt",
						circular: true,
						display: false,
					},
				],
			},
			this.options
		);
	},
	watch: {
		chart(val) {
			console.log(val);
		},
	},
};
</script>
