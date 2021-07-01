<template lang="pug">

section
	h2(level="2", v-if="title") {{ title }}
	slot

</template>

<script>

export default {
	props: [
		'title'
	]
}

</script>
