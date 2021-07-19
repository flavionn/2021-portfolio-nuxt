<template lang="pug">

div(:class="classContainer")
	picture
		source(
			:srcset="sourceSrcSet"
			type="image/webp"
			)
		img(
			:srcset="imgSrcSet"
			:src="imgSrc"
			:class="classImage"
			)

</template>

<script>

export default {
	data() {

		const formats = [ 'jpg', 'webp' ]
		var sizes = [ '300', '600', '1200' ]

		var sourceSrcSet = []
		var imgSrcSet = []

		const newSizes = []

		for(const s of sizes) {
			console.log(s)
			if(s < this.mediaWidth) {
				newSizes.push(parseInt(s))
			}
		}

		var sizes = [...newSizes, this.mediaWidth]

		function makeImageUrl(publicId, version, size, format) {
			const cloudinaryBaseUrl = 'https://res.cloudinary.com/flavionn/image/upload'
			const cloudinaryTransformation = '/w_' + size + ',q_60/'
			const filename = publicId + '.' + format
			const imageUrl = cloudinaryBaseUrl + cloudinaryTransformation + version + '/' + filename

			return imageUrl
		}

		function makeSrcSetItem(url, size) {
			const srcSetItem = url + ' ' + size + 'w'

			return srcSetItem
		}

		sizes.forEach(s => {
			formats.forEach(f => {
				const makeUrl = makeImageUrl(this.publicId, this.version, s, f)
				const makeItem = makeSrcSetItem(makeUrl, s)
				if(f === 'webp') {
					sourceSrcSet.push(makeItem)
				} else if(f === 'jpg') {
					imgSrcSet.push(makeItem)
				}
			})
		})

		var sourceSrcSet = sourceSrcSet.toString()
		var imgSrcSet = imgSrcSet.toString()
		const imgSrc = makeImageUrl(this.publicId, this.version, this.mediaWidth, 'jpg')

		return {
			sourceSrcSet,
			imgSrcSet,
			imgSrc
		}
	},
	props: [
		'classContainer',
		'classImage',
		'publicId',
		'version',
		'mediaWidth'
	]
}

</script>
