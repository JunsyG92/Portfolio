<template>
	<li class="nav-list design">
		<a
			:href="'/#' + to_link"
			class="nav-link sign__block_blue"
			:class="classes"
		>
			<span class="nav-link-item">{{ name }}</span>
		</a>
	</li>
</template>

<script>
export default {
	props: {
		to_link: String,
		name: String,
	},
	data() {
		return {
			anchor: "",
			classes: "",
		};
	},
	mounted() {
		this.$store.subscribe((mutation) => {
			if (mutation.type == "CURRENT_ANCHOR") {
				this.anchor = mutation.payload;
			}
		});
	},
	watch: {
		anchor(anchor) {
			anchor == this.$props.to_link
				? (this.$data.classes = "active")
				: (this.$data.classes = "");
		},
	},
};
</script>

<style lang="scss">
.nav-list {
	margin-top: 20px;
	margin-bottom: 20px;
}
.nav-link {
	padding: 0 !important;
	width: 15px;
	height: 15px;
	border-radius: 50px;
	border: 2.5px solid #424242;
	transition-duration: 200ms;
	span {
		display: none;
	}
	&:hover,
	&.active {
		transition-duration: 200ms;
		transform: scale(1.3);
		display: flex;
		justify-content: center;
		align-items: center;
		background: #424242;
		.nav-link-item {
			display: block;
		}
	}

	.nav-link-item {
		display: none;
		transition: 300ms;
		position: absolute;
		left: 30px;
		font-size: 12px;
		color: #424242;
	}
}
</style>
