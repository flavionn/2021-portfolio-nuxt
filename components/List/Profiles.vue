<template lang="pug">

list-container
	li(v-for="profile in profiles", :key="profile.name")
		a(:href="profile.url", target="_blank") {{ profile.name }}

</template>

<script>

import profiles from '@/content/profiles'

export default {
	data() {
		return {
			profiles
		}
	}
}

</script>
