<template>
	<v-container class="login d-flex align-center h-100">
		<v-row>
			<v-col cols="4" class="mx-auto">
				<form method="post">
					<v-text-field v-model="email" type="email" label="E-mail" required />
					<v-text-field
						v-model="password"
						type="password"
						label="Password"
						required
					/>

					<v-btn
						:loading="loading"
						color="primary"
						outlined
						x-large
						block
						@click="Login"
					>
						Submit
					</v-btn>
				</form>
				<v-alert
					class="mt-5"
					v-if="message"
					color="red"
					dense
					outlined
					prominent
					text
					type="error"
				>
					{{ message }}
				</v-alert>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			email: null,
			password: null,
			message: null,
			loading: false,
		};
	},
	methods: {
		Login() {
			console.log("test");
			this.loading = !this.loading;
			this.$axios
				.post("/admin/login", {
					email: this.email,
					password: this.password,
				})
				.then((res) => {
					var status = res.status;
					var message = res.data.erreur;
					status ? (this.message = message) : "";
					console.log(res);
					localStorage.setItem("token", res.data.token);
					this.loading = !this.loading;
					// window.location.reload();
				})
				.catch((err) => {
					// console.log(err);
					this.loading = !this.loading;
					var status = err.response.status;
					var message = err.response.data.erreur;
					status ? (this.message = message) : "";
				});
		},
	},
};
</script>

<style lang="scss"></style>
