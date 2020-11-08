const CracoLessPlugin = require('craco-less')

module.exports = {
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: {
							'@body-backroudng': '#d8ede2',
							'@primary-color': '#13AE7A',
							'@border-radius-base': '5px',
							'@border-color-base': '#cccccc',
							'@layout-body-background': 'transparent',
							'@layout-header-background': 'transparent',
							'@layout-header-color': '@primary-color',

							'@screen-xs': '480px',
							'@screen-xs-min': '@screen-xs',

							'@screen-sm': '576px',
							'@screen-sm-min': '@screen-sm',

							'@screen-md': '768px',
							'@screen-md-min': '@screen-md',

							'@screen-lg': '1368px',
							'@screen-lg-min': '@screen-lg',

							'@screen-xl': '1600px',
							'@screen-xl-min': '@screen-xl',

							'@screen-xxl': '1920px',
							'@screen-xxl-min': '@screen-xxl',
						},
						javascriptEnabled: true,
					},
				},
			},
		},
	],
}
