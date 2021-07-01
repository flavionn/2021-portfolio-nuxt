export default {

	// target
	target: 'static',

	// components
	components: true,

	// css
	css: ['@/assets/style/global.scss'],

	// publicRuntimeConfig
	publicRuntimeConfig: {
		appDescription: process.env.APP_DESCRIPTION,
		appName: process.env.APP_NAME,
		appUrl: process.env.APP_URL
	},

	// head
	head: {
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'og:site_name', property: 'og:site_name', content: process.env.APP_NAME },
			{ hid: 'og:type', property: 'og:type', content: 'website' }
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
