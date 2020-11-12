<template>
	<div class="scoll-container">
		<a class="scroll down animate" href="#!" alt=""> </a>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.scoll-container {
	position: absolute;
	display: block;
	height: 100%;
	left: 50%;
}
.scroll {
	position: absolute;
	bottom: 30px;
	width: 40px;
	height: 70px;
	border: 1px solid #fff;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	.animate {
		animation: 3s linear 1s infinite alternate slidein;
	}
}
</style>
