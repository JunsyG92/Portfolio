<template>
	<div class="section" id="section4">
		<div class="slide" data-anchor="contact">
			<v-row>
				<v-col cols="6">
					<div class="container-fill-height">
						<div class="container-middle">
							<div class="content__contact">
								<h2 class="_title big mb-5">
									<span class="grey--text text--darken-3">Contact</span>
								</h2>
								<h3 class="_title small grey--text text--darken-2">
									Would you like to contact me ?
								</h3>
								<p class="text-uppercase grey--text text--darken-2">
									Contact me via LinkedIn, by email or directly by filling out
									the form below. I am available in the Provence-Alpes Côtes
									d'Azur region
								</p>
							</div>
							<v-form v-model="valid">
								<v-col cols="12" md="8" class="mx-auto">
									<v-text-field
										v-model="firstname"
										:rules="nameRules"
										label="First name"
										color="grey darken-2"
										required
									></v-text-field>
								</v-col>

								<v-col cols="12" md="8" class="mx-auto">
									<v-text-field
										v-model="lastname"
										:rules="nameRules"
										label="Last name"
										color="grey darken-2"
										required
									></v-text-field>
								</v-col>

								<v-col cols="12" md="8" class="mx-auto">
									<v-text-field
										v-model="email"
										:rules="emailRules"
										label="E-mail"
										color="grey darken-2"
										required
									></v-text-field>
								</v-col>
								<v-col cols="12" md="8" class="mx-auto">
									<v-textarea
										v-model="message"
										:rules="messageRules"
										label="Your message"
										color="grey darken-2"
										required
									></v-textarea>
								</v-col>
								<v-col cols="12" md="8" class="mx-auto">
									<v-btn
										color="grey darken-3"
										outlined
										x-large
										block
										@click="Submit"
									>
										Submit
									</v-btn>
								</v-col>
							</v-form>
						</div>
					</div>
				</v-col>
				<v-col cols="6" class="map">
					<div id="map"></div>
				</v-col>
			</v-row>
		</div>
		<div class="slide" data-anchor="social">
			<div class="container-fill-height section" id="section2">
				<div class="container-middle d-block text-center">
					<span class="_title medium grey--text mb-8">SOCIAL</span>
					<div class="d-flex justify-center">
						<div class="my-5 mx-3">
							<i
								class="fab fa-linkedin icon_small grey--text text--darken-2"
							></i>
						</div>
						<div class="my-5 mx-3">
							<i
								class="fab fa-github-square icon_small grey--text text--darken-2"
							></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		valid: false,
		firstname: "",
		lastname: "",
		message: "",
		messageRules: [(v) => !!v || "Message is required"],
		nameRules: [(v) => !!v || "Name is required"],
		email: "",
		emailRules: [
			(v) => !!v || "E-mail is required",
			(v) => /.+@.+/.test(v) || "E-mail must be valid",
		],
	}),
	methods: {
		Submit() {
			alert("Envoie de l'e-mail");
		},
	},
};
</script>

<style lang="scss">
#map {
	width: 99%;
	height: 100%;
	position: relative;
}
.map {
	padding: 0 !important;
}
.content__contact {
	margin-left: 50px;
	margin-right: 50px;
	margin-bottom: 50px;
}
.icon_small {
	font-size: 32px;
}
.theme--dark.v-label {
	color: #424242 !important;
}
.theme--dark.v-text-field > .v-input__control > .v-input__slot:before {
	border-color: #242424 !important;
}
</style>
