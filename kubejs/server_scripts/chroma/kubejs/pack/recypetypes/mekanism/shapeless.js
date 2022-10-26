onEvent('recipes', (event) => {
  	const recipes = [
    	{
	      	output: 'mekanism:creative_fluid_tank',
      		inputs: ['mekanism:creative_fluid_tank'],
      		id: 'mekanism:creative_fluid_tank_empty'
    	},
    	{
	      	output: 'mekanism:creative_chemical_tank',
      		inputs: ['mekanism:creative_chemical_tank'],
      		id: 'mekanism:creative_chemical_tank_empty'
    	}
  	];

  	recipes.forEach((recipe) => {
    	event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
  	});
});
