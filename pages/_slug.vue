<template lang="pug">

div(class="space-y-16")
	div(class="space-y-4")
		h1 {{ project.title }}
		p(v-if="project.subtitle", v-html="project.subtitle")

	template(v-if="project.screenFeatured")
		div(:class="project.screenFeatured.classContainer")
			responsive-image(:cloudinaryFilename="project.screenFeatured.cloudinaryFilename", :imgClass="project.screenFeatured.classImage")

	p(v-if="project.description", v-html="project.description")

	hr

	section(v-if="project.links")
		h2 Links
		ul
			li(v-for="item in project.links", class="flex space-x-2")
				a(:href="item.url", target="_blank") {{ item.label }}
				svg-icon-external-link

	section(v-if="project.year")
		h2 Year
		span {{ project.year }}

	section(v-if="project.did")
		h2 What I did
		ul
			li(v-for="item in project.did") {{ item }}

	section(v-if="project.tools")
		h2 Tools
		ul
			li(v-for="item in project.tools") {{ item }}

	template(v-if="project.screens")
		div(class="space-y-1px")
			template(v-for="item in project.screens")
				div(:class="item.classContainer")
					responsive-image(:cloudinaryFilename="item.cloudinaryFilename", :imgClass="item.classImage")

	section-projects
	section-profiles

</template>

<script>

import projects from '@/content/projects'

export default {
	data() {
		return {
			project: projects.find(project => project.slug === this.$route.params.slug),
		}
	},
	head() {
		const description = this.project.description
		const image = ''
		const title = this.project.title + ' project info by ' + this.$config.appName
		const url = this.$config.appUrl + this.$route.path

		return {
			title,
			meta: [
				{ hid: 'description', name: 'description', content: description },
				{ hid: 'og:description', property: 'og:description', content: description },
				{ hid: 'og:image', property: 'og:image', content: image },
				{ hid: 'og:title', property: 'og:title', content: title },
				{ hid: 'og:url', property: 'og:url', content: url }
			]
		}
	}
}

</script>
