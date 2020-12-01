import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		chart: [
			{ name: "HTML5", level: 90 },
			{ name: "CSS3", level: 90 },
			{ name: "JavaScript", level: 75 },
		],
		anchor: "",
	},
	mutations: {
		CHANGE_CHART_DATA(state, payload) {
			state.chart = payload;
		},
		CURRENT_ANCHOR(state, payload) {
			state.anchor = payload;
		},
	},
	actions: {},
	modules: {},
});
