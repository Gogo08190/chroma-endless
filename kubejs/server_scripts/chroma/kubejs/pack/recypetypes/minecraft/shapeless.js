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
      },
      {
          output: 'byg:death_cap',
          inputs: ['#forge:mushrooms', 'minecraft:rotten_flesh'],
          id: 'byg:death_cap'
      },
      {
          output: 'byg:nightshade_berries',
          inputs: ['minecraft:sweet_berries', 'minecraft:warped_fungus'],
          id: 'byg:nightshade_berries'
      },
      {
          output: 'byg:crimson_berries',
          inputs: ['minecraft:sweet_berries', 'minecraft:crimson_fungus'],
          id: 'byg:crimson_berries'
      }
  	];

  	recipes.forEach((recipe) => {
    	event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
  	});
});
