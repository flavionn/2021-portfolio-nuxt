<template lang="pug">

div(class="space-y-32")
	title-hero-home {{ info.textHero }}
	section-projects
	section-about(:text="info.textAbout")
	section-profiles

</template>

<script>

import info from '@/content/info'

export default {
	data() {
		return {
			info
		}
	},
	head() {
		const description = this.$config.appDescription
		const image = ''
		const title = this.$config.appName + ' - ' + this.$config.appDescription
		const url = this.$config.appUrl

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
