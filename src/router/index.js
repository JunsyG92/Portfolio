import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Project from "../views/Project";
import Admin from "../views/Admin";
import Login from "../views/Login";
import NotFound from "../views/NotFound";

import axios from "axios";

Vue.use(VueRouter);

const routes = [
	{
		path: "*",
		component: NotFound,
	},
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/work/",
		name: "Project",
		component: Project,
	},
	{
		path: "/admin",
		name: "AdminPanel",
		component: Admin,
		beforeEnter(route, redirect, next) {
			axios
				.get("https://api.ipify.org/?format=json")
				.then((res) => {
					let token = localStorage.getItem("token");
					let allIpsEnv = process.env.VUE_APP_IP_ADDRESS;
					const ipArray = allIpsEnv.split(", ");
					const ipExist = ipArray.find((ips) => ips == res.data.ip);
					if (ipExist) {
						!token ? next({ path: "/admin/login" }) : next();
					} else {
						next({ name: "Home" });
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
	{
		path: "/admin/login",
		name: "AdminLogin",
		component: Login,
		beforeEnter(route, redirect, next) {
			axios
				.get("https://api.ipify.org/?format=json")
				.then((res) => {
					let token = localStorage.getItem("token");
					let allIpsEnv = process.env.VUE_APP_IP_ADDRESS;
					const ipArray = allIpsEnv.split(", ");
					const ipExist = ipArray.find((ips) => ips == res.data.ip);
					if (ipExist) {
						token ? next({ name: "AdminPanel" }) : next();
					} else {
						next({ name: "Home" });
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
];
const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
