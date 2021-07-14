<template lang="pug">

div(class="flex")
	h2(v-if="title", class="flex-1") {{ title }}
	div(class="flex-1")
		slot

</template>

<script>

export default {
	props: [
		'title'
	]
}

</script>
