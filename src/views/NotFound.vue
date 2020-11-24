<template>
	<div class="h-100">
		<Menu />
		<v-container class="notfound d-flex justify-center align-center h-100">
			<v-row>
				<v-col cols="12" class="d-flex">
					<div class="mx-auto">
						<h2 class="_title big _neon _blue">404</h2>
						<h1 class="_title medium">Page not found.</h1>
						<router-link
							to="/"
							class="d-block text-white item nav-link nav-hover"
						>
							<v-btn color="primary" outlined x-large block>
								Go Home
							</v-btn>
						</router-link>
					</div>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
// @ is an alias to /src
import Menu from "../components/Header/Menu/Menu";
export default {
	name: "NotFound",
	components: {
		Menu,
	},
};
</script>
<style lang="scss" scoped></style>
