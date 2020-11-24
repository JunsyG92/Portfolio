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
	beforeCreate() {},
	created() {},
	mounted() {
		let datas = this.$store.state.chart;
		let name = [];
		let level = [];
		datas.map((data) => {
			name.push(data.name);
			level.push(data.level);
		});
		this.$store.subscribe((mutation) => {
			if (mutation.type == "CHANGE_CHART_DATA") {
				let datas = mutation.payload;
				datas.map((data) => {
					name.push(data.name);
					level.push(data.level);
				});
			}
		});

		this.chart.name = name;
		this.chart.level = level;
		let canvas = document.getElementById("radar-chart"),
			ctx = canvas.getContext("2d"),
			grad = ctx.createLinearGradient(1, 1, 1, window.innerHeight);

		grad.addColorStop(1, "rgba(0, 212, 246, .7)");
		grad.addColorStop(0, "rgba(150, 212, 246, .7)");
		grad.addColorStop(0, "rgba(0, 212, 246, 0)");
		this.renderChart(
			{
				labels: this.chart.name,
				datasets: [
					{
						label: this.chart.label,
						data: this.level,
						fill: true,
						lineTension: 0.5,
						backgroundColor: grad,
						borderColor: "#00d4f6",
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
