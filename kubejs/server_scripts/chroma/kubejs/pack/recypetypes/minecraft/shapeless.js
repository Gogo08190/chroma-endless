onEvent('recipes', (event) => {
  	const recipes = [
    	{
	      	output: 'minecraft:flint_and_steel',
      		inputs: ['#forge:plates/iron', 'minecraft:flint'],
      		id: 'minecraft:flint_and_steel'
    	},
    	{
	      	output: '4x minecraft:clay_ball',
      		inputs: ['#chroma:stonecuttables/clay'],
      		id: 'minecraft:clay_from_clay_block'
    	},
      {
          output: 'akashictome:tome',
          inputs: ['minecraft:stick', 'minecraft:book'],
          id: 'akashictome:tome_rcp'
      },
      {
          output: 'betterendforge:twisted_vine',
          inputs: ['betterendforge:dragon_tree_leaves'],
          id: 'betterendforge:twisted_vine'
      },
      {
          output: 'betterendforge:chorus_mushroom_raw',
          inputs: ['#forge:mushrooms', 'minecraft:chorus_flower'],
          id: 'betterendforge:chorus_mushroom_raw'
      },
      {
          output: 'byg:soul_shroom',
          inputs: ['#forge:mushrooms', 'nethers_delight:rich_soul_soil'],
          id: 'byg:soul_shroom'
      }
  	];

  	recipes.forEach((recipe) => {
    	event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
  	});
});
