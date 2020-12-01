<template>
	<v-container class="py-9">
		<v-row class="justify-center">
			<v-col cols="6">
				<div class="styleguide">
					<section class="mb-9">
						<h3 class="_title medium gray--text text-lighten-3">Typography</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
							molestiae fugiat ipsa qui ratione repellat eum beatae. Expedita
							amet laborum modi ullam delectus accusamus, neque esse, sunt
							corrupti labore accusantium!
						</p>
						<div class="styleguide__typohraphy my-9">
							<v-col cols="6">
								<div class="typo__preview_small">
									<span
										class="_title big grey--text text--lighten-3 text-capitalize"
										:style="{
											color: '#cecece !important',
										}"
									>
										Aa
									</span>
								</div>
							</v-col>
							<v-col cols="6">
								<div class="typo__preview_large">
									<span
										class="_title big grey--text text--lighten-3 text-capitalize"
										:style="{
											color: '#cecece !important',
										}"
									>
										Aa
									</span>
								</div>
							</v-col>
						</div>
					</section>
					<section class="styleguide__colors">
						<h3 class="_title medium gray--text text-lighten-3">
							Color pallet
						</h3>
						<div class="pallet d-flex justify-center">
							<div
								v-for="color in colors"
								:key="color.id"
								class=" d-flex flex-column text-center"
							>
								<div
									class="pallet__color mx-9 mt-9 mb-5"
									:style="{ 'background-color': color.code }"
								></div>
								<span class="text-uppercase grey--text text-lighten-3">
									{{ color.code }}
								</span>
							</div>
						</div>
					</section>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			colors: [
				{ id: 1, code: "#861657" },
				{ id: 2, code: "#5f0a87" },
				{ id: 3, code: "#a4508b" },
			],
		};
	},
};
</script>

<style lang="scss">
.styleguide__typohraphy {
	display: flex;
	justify-content: center;
}
.styleguide {
	display: flex;
	text-align: center;
	flex-direction: column;
	justify: center;
}
.pallet__color {
	width: 70px;
	height: 70px;
	border-radius: 50px;
}
.typo__preview_small {
	width: 190px;
	height: 190px;
	border-radius: 25px;
	background-color: #cecece;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
