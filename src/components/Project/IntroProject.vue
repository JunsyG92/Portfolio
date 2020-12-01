<template>
	<div class="" id="profil0">
		<v-container class="py-9">
			<v-row class="justify-start">
				<v-col cols="10">
					<h3
						class="grey--text text--lighten-3 _title medium text-uppercase py-8 font-weight-black opacity-7"
					>
						{{ this.$props.title }}
					</h3>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="6">
					<div class="d-flex justify-center">
						<div class="w-75">
							<p class="grey--text text--lighten-1">
								{{ this.$props.introduction }}
							</p>
						</div>
					</div>
				</v-col>
				<v-col cols="6">
					<div class="d-flex justify-center">
						<div class="w-75">
							<span class="text-uppercase grey--text text--lighten-3"
								>Role</span
							>
							<ul class="pl-0">
								<li
									class="text-uppercase font-weight-bold mt-2 grey--text"
									v-for="role in roles"
									:key="role.id"
								>
									{{ role.role }}
								</li>
							</ul>
						</div>
					</div>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
export default {
	props: {
		title: String,
		introduction: String,
		roles: Array,
	},
};
</script>

<style lang="scss" scoped></style>
