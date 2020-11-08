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
							'@layout-body-background': 'transparent',
							'@layout-header-background': 'transparent',
							'@layout-header-color': '@primary-color',
						},
						javascriptEnabled: true,
					},
				},
			},
		},
	],
}
