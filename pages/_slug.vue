<template lang="pug">

div(class="project space-y-16")
	h1 {{ project.title }}
	div(class="-mx-8 bg-gray-100")
		div(class="h-60 flex items-center justify-center text-gray-300 text-lg") Screens under development
	p(v-if="project.description", v-html="project.description")
	hr
	section(v-if="project.links")
		h2 Links
		ul
			li(v-for="item in project.links", class="flex space-x-2")
				a(:href="item.url", target="_blank") {{ item.label }}
				SvgIconExternalLink
	section(v-if="project.year")
		h2 Year
		span {{ project.year }}
	section
		h2 What I did
		ul
			li(v-for="item in project.did") {{ item }}
	section
		h2 Tools
		ul
			li(v-for="item in project.tools") {{ item }}
	hr
	div(class="space-y-8")
		h2 Work
		ListProjects

</template>

<script>

import projects from '@/data/projects'

export default {
	data() {
		return {
			project: projects.find(project => project.slug === this.$route.params.slug)
		}
	},
	computed: {
		nextProject() {
		},
		previousProject() {
		}
	}
}

</script>

<style lang="sass" scoped>

.project
	section
		@apply flex

		h2, ul, span
			@apply flex-1

</style>
