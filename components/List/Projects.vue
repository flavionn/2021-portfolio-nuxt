<template lang="pug">

list-container
	li(v-for="project in projects", :key="project.title")
		nuxt-link(:to="{ name: 'slug', params: { slug: project.slug } }") {{ project.title }}

</template>

<script>

import projects from '@/content/projects'

export default {
	data() {
		return {
			projects
		}
	}
}

</script>
