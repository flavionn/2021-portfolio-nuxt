<template lang="pug">

section(class="space-y-8")
	h2(v-if="title") {{ title }}
	slot

</template>

<script>

export default {
	props: [
		'title'
	]
}

</script>
