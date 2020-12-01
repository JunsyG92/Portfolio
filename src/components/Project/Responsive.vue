<template>
	<section>
		<div class="header__responsive">
			<!-- <v-container class="mb-9">
				<h2
					class="_title ultra grey--text text--darken-2 opacity-3 font-weight-black"
				>
					Responsive
				</h2>
				<v-row>
					<v-col cols="6">
						<p class="grey--text">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
							doloremque necessitatibus porro labore suscipit ratione ab aliquid
							laboriosam distinctio. Ab officiis deleniti nostrum perferendis
							aspernatur, nobis quod dolorum totam consequuntur!
						</p>
					</v-col>
				</v-row>
			</v-container> -->
		</div>
		<div class="d-flex justify-center">
			<div class="responsive d-flex justify-center align-center">
				<div class="responsive__tablets">
					<div class="responsive__tablets_container">
						<img
							src="https://www.plezi.co/wp-content/uploads/2019/03/plezi-infographie-succes-content-marketeur.jpg"
							alt=""
						/>
					</div>
					<div class="responsive__tablets_down">
						<div class="responsive_button"></div>
					</div>
				</div>
				<div class="responsive__desktop">
					<div class="responsive__desktop_up">
						<span class="dot _reduce"></span>
						<span class="dot _small"></span>
						<span class="dot _close"></span>
					</div>
					<div class="responsive__desktop_container">
						<img
							src="https://www.plezi.co/wp-content/uploads/2019/03/plezi-infographie-succes-content-marketeur.jpg"
							alt=""
						/>
					</div>
				</div>

				<div class="responsive__mobile">
					<div class="responsive__mobile_container">
						<img
							src="https://www.plezi.co/wp-content/uploads/2019/03/plezi-infographie-succes-content-marketeur.jpg"
							alt=""
						/>
					</div>
					<div class="responsive__tablets_down">
						<div class="responsive_button"></div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.responsive {
	width: 100%;
	height: 100%;
}
.responsive__tablets {
	position: absolute;
	left: 13%;
	bottom: 12%;
	z-index: 2;
	width: 350px;
	height: 500px;
	background: white;
	box-shadow: 0 0 25px #000;
	overflow: hidden;
	z-index: 5;
	.responsive__tablets_down {
		width: 100%;
		height: 11%;
		display: flex;
		position: absolute;
		justify-content: center;
		align-items: center;
		background: white;
		bottom: 0;
		.responsive_button {
			width: 35px;
			height: 35px;
			border: 1px solid #424242;
			border-radius: 50px;
		}
	}
}
.responsive__mobile {
	position: absolute;
	right: 20%;
	bottom: 12%;
	z-index: 2;
	width: 220px;
	height: 370px;
	background: white;
	box-shadow: 0 0 25px #000;
	overflow: hidden;
}
.responsive__tablets_down {
	width: 100%;
	height: 10%;
	display: flex;
	position: absolute;
	justify-content: center;
	align-items: center;
	background: white;
	bottom: 0;
	.responsive_button {
		width: 20px;
		height: 20px;
		border: 1px solid #424242;
		border-radius: 50px;
	}
}
.responsive__desktop {
	width: 900px;
	height: 580px;
	background: white;
	box-shadow: 0 0 25px #000;
	overflow: hidden;
}
.responsive__desktop_up {
	width: 100%;
	height: 5%;
	display: flex;
	position: relative;
	justify-content: flex-end;
	align-items: center;
	background: white;
	z-index: 3;
	.dot {
		width: 12px;
		height: 12px;
		border-radius: 50px;
		background: green;
		margin-left: 8px;
		&:last-child {
			margin-right: 18px;
		}
		&._reduce {
			background: #cccccc;
		}
		&._small {
			background: #9b9b9b;
		}
		&._close {
			background: #6d6d6d;
		}
	}
}
.responsive__tablets_container img,
.responsive__desktop_container img,
.responsive__mobile_container img {
	width: 100%;
	height: 100%;
	background-size: cover;
	animation-duration: 8s;
	animation-name: scrollProject;
	animation-timing-function: cubic-bezier(1, 0.005, 0.305, 1);
	animation-direction: alternate;
	animation-iteration-count: infinite;
	animation-fill-mode: none;
}
@keyframes scrollProject {
	10% {
		transform: translateY(0%);
	}
	50% {
		transform: translateY(calc(-50% + 285px));
	}
	100% {
		transform: translateY(calc(-100% + 570px));
	}
}
</style>
