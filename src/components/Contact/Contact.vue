<template>
	<div class="section">
		<v-row>
			<v-col cols="6">
				<div class="container-fill-height">
					<div class="container-middle">
						<div class="content__contact">
							<h2 class="_title medium mb-5">
								<span class="sign__word_blue">Contact</span>
							</h2>
							<h3 class="_title small">Would you like to contact me ?</h3>
							<p class="text-uppercase">
								Contact me via LinkedIn, by email or directly by filling out the
								form below. I am available in the Provence-Alpes Côtes d'Azur
								region
							</p>
						</div>
						<v-form v-model="valid">
							<v-col cols="12" md="8" class="mx-auto">
								<v-text-field
									v-model="firstname"
									:rules="nameRules"
									label="First name"
									required
								></v-text-field>
							</v-col>

							<v-col cols="12" md="8" class="mx-auto">
								<v-text-field
									v-model="lastname"
									:rules="nameRules"
									label="Last name"
									required
								></v-text-field>
							</v-col>

							<v-col cols="12" md="8" class="mx-auto">
								<v-text-field
									v-model="email"
									:rules="emailRules"
									label="E-mail"
									required
								></v-text-field>
							</v-col>
							<v-col cols="12" md="8" class="mx-auto">
								<v-textarea
									v-model="message"
									:rules="messageRules"
									label="Your message"
									required
								></v-textarea>
							</v-col>
							<v-col cols="12" md="8" class="mx-auto">
								<v-btn color="primary" outlined x-large block @click="Submit">
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
	width: 100%;
	height: 100%;
	box-shadow: -0.7em 0.5em 1.5em #101010;
	position: absolute;
}
.map {
	padding: 0 !important;
}
.content__contact {
	margin-left: 50px;
	margin-right: 50px;
	margin-bottom: 50px;
}
</style>
