<template>
	<div class="scoll-container">
		<a class="scroll down animate" href="#about" alt=""> </a>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.scoll-container {
	position: relative;
	display: block;
	height: 70px;
	left: 50%;
	top: 220px;
}
.scroll {
	position: absolute;
	top: 14%;
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
