export default {

	// target
	target: 'static',

	// components
	components: true,

	// css
	css: [ '@/assets/global.scss' ],

	// head
	head: {
		title: process.env.APP_NAME,
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.APP_DESCRIPTION },
			{ hid: 'og:site_name', property: 'og:site_name', content: process.env.APP_NAME }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

	// build modules
	buildModules: [
		'@nuxtjs/google-analytics',
		'@nuxtjs/google-fonts',
		'nuxt-vite',
		'nuxt-windicss'
	],

	// google analytics
	googleAnalytics: {
		id: process.env.GOOGLE_ANALYTICS_ID
	},

	//  google fonts
	googleFonts: {
		families: {
			Inter: [400, 500, 600, 700],
			Bitter: [800, 900]
		}
	}
}
