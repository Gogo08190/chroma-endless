onEvent('recipes', (event) => {
  	const recipes = [
    	{
	      	output: 'minecraft:flint_and_steel',
      		inputs: ['#forge:plates/iron', 'minecraft:flint'],
      		id: 'minecraft:flint_and_steel'
    	}
  	];

  	recipes.forEach((recipe) => {
    	event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
  	});
});
