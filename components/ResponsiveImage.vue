<template lang="pug">

picture(class="space-y-8")
	//- source(
		:srcset="filename"
		type="image/webp"
		)
	img(
		:src="imgSrc"
		:class="imgClass"
		)

</template>

<script>

export default {
	data() {
		const baseUrl = 'https://res.cloudinary.com/flavionn/image/upload'
		const singleSizeConfig = ''
		const testFormat = '.webp'

		return {
			imgSrc: baseUrl + '/' + singleSizeConfig + '/' + this.cloudinaryFilename + testFormat
		}
	},
	props: [
		'cloudinaryFilename',
		'imgClass'
	]
}

</script>
