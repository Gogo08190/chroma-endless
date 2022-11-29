onEvent('recipes', (event) => {
  	const recipes = [
    	{
	      	output: 'minecraft:flint_and_steel',
      		inputs: ['#forge:plates/iron', 'minecraft:flint'],
      		id: 'minecraft:flint_and_steel'
    	},
    	{
	      	output: '4x minecraft:clay',
      		inputs: ['#chroma:stonecuttables/clay'],
      		id: 'minecraft:clay_from_clay_block'
    	}
  	];

  	recipes.forEach((recipe) => {
    	event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
  	});
});
