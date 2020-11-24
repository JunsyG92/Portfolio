<template>
	<section class="container-fill-height section">
		<div class="container-content-middle">
			<div class="d-flex justify-center">
				<div class="mx-auto sign">
					<p class="_title small">What's up ?</p>
					<h1 class="_title big _neon _blue">
						<span class="sign__word_blue">I'm </span>
						<span class="sign__word_blue">Mathieu </span>
						<span class="sign__word_blue">N.</span><br />
					</h1>
					<h2 class="_title medium">
						Graphist and <br />Developper web full-stack
					</h2>
				</div>
			</div>
			<ScrollDown />
		</div>
	</section>
</template>

<script>
import ScrollDown from "./ScrollDown";
export default {
	components: {
		ScrollDown,
	},
};
</script>

<style lang="scss"></style>
