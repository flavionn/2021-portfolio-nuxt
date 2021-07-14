<template lang="pug">

h1
	span
		slot

</template>

<style lang="sass" scoped>

h1
	@apply font-extrabold
	@apply font-serif
	@apply text-6xl

	span
		@apply bg-clip-text
		@apply bg-gradient-to-tl
		@apply from-purple-600
		@apply text-transparent
		@apply to-pink-600

</style>
