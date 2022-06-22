onEvent('recipes', (event) => {
  	const recipes = [
    	{
	      	output: '4x modularrouters:augment_core',
      		inputs: [
				'2x modularrouters:blank_module',
				'2x modularrouters:blank_upgrade'
			],
      		id: 'modularrouters:augment_core'
    	}
  	];

  	recipes.forEach((recipe) => {
    	event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
  	});
});
