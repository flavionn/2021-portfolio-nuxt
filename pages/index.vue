<template lang="pug">

div(class="home space-y-32")
	h1
		span {{ info.heroText }}
	section
		h2 Work
		ListProjects
	section
		h2 About
		p(v-html="info.aboutText")
	section
		h2 Contact
		ListProfiles

</template>

<script>

import info from '@/data/info'

export default {
	data() {
		return {
			info
		}
	}
}

</script>

<style lang="sass" scoped>

.home
	section
		@apply space-y-8

	h1
		@apply text-6xl
		@apply font-extrabold
		@apply font-serif

		span
			@apply bg-clip-text
			@apply text-transparent
			@apply bg-gradient-to-tl
			@apply from-purple-600
			@apply to-pink-600

</style>
