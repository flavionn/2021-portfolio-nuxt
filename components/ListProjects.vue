<template lang="pug">

ListContainer
	li(v-for="project in projects", :key="project.title")
		NuxtLink(:to="{ name: 'slug', params: { slug: project.slug } }") {{ project.title }}

</template>

<script>

import projects from '@/data/projects'

export default {
	data() {
		return {
			projects
		}
	}
}

</script>
