<template lang="pug">

section-container(title="About")
	p(v-html="text")

</template>

<script>

export default {
	props: [
		'text'
	]
}

</script>
