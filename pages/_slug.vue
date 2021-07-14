<template lang="pug">

div(class="space-y-16")

	header(class="space-y-4")
		h1 {{ project.title }}
		p(v-if="project.subtitle", v-html="project.subtitle")

	responsive-media(
		v-if="project.featured.public_id"
		:classContainer="project.featured.class_container"
		:classImage="project.featured.class_image"
		:publicId="project.featured.public_id"
		:version="project.featured.version"
		)

	p(v-if="project.description", v-html="project.description")

	hr

	page-project-row-info(title="Links")
		ul
			li(v-for="item in project.links", class="flex space-x-2")
				a(:href="item.url", target="_blank") {{ item.label }}
				svg-icon-external-link

	page-project-row-info(title="Year")
		span {{ project.year }}

	page-project-row-info(title="What I did")
		ul
			li(v-for="item in project.did") {{ item }}

	page-project-row-info(title="Tools")
		ul
			li(v-for="item in project.tools") {{ item }}

	div(class="space-y-1px")
		template(v-for="item in project.preview")
			responsive-media(
				v-if="item.public_id"
				:classContainer="item.class_container"
				:classImage="item.class_image"
				:publicId="item.public_id"
				:version="item.version"
				)

	section-projects
	section-profiles

</template>

<script>

import projects from '@/content/projects'

export default {
	data() {
		return {
			project: projects.find(project => project.slug === this.$route.params.slug)
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
