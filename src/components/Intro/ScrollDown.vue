<template>
	<div class="scoll-container">
		<a class="scroll down animate" href="#about" alt="">
			<div class="arrow-scroll">
				<div class="arrow-scroll__wrapper">
					<svg
						width="1em"
						height="1em"
						viewBox="0 0 16 16"
						class="bi bi-chevron-double-down"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
						/>
						<path
							fill-rule="evenodd"
							d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
						/>
					</svg>
				</div>
			</div>
		</a>
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
a.scroll {
	color: #b4b4b4 !important;
}
.scroll {
	position: absolute;
	top: 14%;
	width: 40px;
	height: 70px;
	border: 2.5px solid #b4b4b4;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	.animate {
		animation: 3s linear 1s infinite alternate slidein;
	}
}
.arrow-scroll {
	position: absolute;
	z-index: 9;
	right: 0;
	left: -1px;
	bottom: 20px;
	text-align: center;

	&__wrapper {
		animation: arrow-scroll 1.7s infinite ease;
	}
}

@keyframes arrow-scroll {
	0%,
	100% {
		transform: translateY(15px);
		opacity: 0;
	}

	50% {
		transform: translateY(-10px);
	}

	55% {
		transform: translateY(-10px);
		opacity: 1;
	}
}
</style>
