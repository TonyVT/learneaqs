// JavaScript
define([], function() {
	return { 
		type: "items",
		component: "accordion",
		items: {
			dimensions: {
				uses: "dimensions",
				min: 1,
				max: 2
			},
			measures: {
				uses: "measures",
				min: 1,
				max: 3
			},
			sorting : {
				uses: "sorting"
			},
			settings: {
				uses: "settings"				
			}
		}
	};
})

