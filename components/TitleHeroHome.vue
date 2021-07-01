<template lang="pug">

h1
	span
		slot

</template>

<style lang="sass" scoped>

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
