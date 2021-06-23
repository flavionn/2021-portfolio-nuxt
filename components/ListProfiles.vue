<template lang="pug">

ListContainer
	li(v-for="profile in profiles", :key="profile.name")
		a(:href="profile.url", target="_blank") {{ profile.name }}

</template>

<script>

import profiles from '@/data/profiles'

export default {
	data() {
		return {
			profiles
		}
	}
}

</script>
