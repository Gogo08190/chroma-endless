onEvent('recipes', (event) => {
  	const recipes = [
    	{
	      	output: '9x minecraft:ender_pearl',
      		inputs: ['miniutilities:ender_pearl_block'],
      		id: 'miniutilities:ender_pearl_block_uncraft'
    	}
  	];

  	recipes.forEach((recipe) => {
    	event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
  	});
});
