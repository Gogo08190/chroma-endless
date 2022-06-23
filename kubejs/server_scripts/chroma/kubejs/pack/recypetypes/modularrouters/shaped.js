onEvent('recipes', (event) => {
  	const recipes = [
  		{
      		output: Item.of('modularrouters:item_router', 2),
      		pattern: ['ABA', 'CDC', 'ABA'],
      		key: {
        		A: 'immersiveengineering:sheetmetal_steel',
        		B: 'pipez:fluid_pipe',
        		C: 'pipez:item_pipe',
        		D: 'immersiveengineering:rs_engineering'
      		},
      		id: 'modularrouters:item_router'
    	},
    	{
    		output: Item.of('modularrouters:blank_module', 6),
      		pattern: [' A ', 'ABA', 'CAC'],
      		key: {
        		A: '#chroma:paper_wall',
        		B: 'extendedcrafting:redstone_ingot',
        		C: '#forge:ingots/gold'
      		},
      		id: 'modularrouters:blank_module'
    	},
    	{
      		output: Item.of('modularrouters:blank_upgrade', 4),
      		pattern: ['ABA', 'BCB', ' BA'],
      		key: {
    			A: '#forge:ingots/gold',
        		B: '#chroma:paper_wall',
        		C: '#forge:gears/lapis'
      		},
      		id: 'modularrouters:blank_upgrade'
    	},
    	{
      		output: Item.of('modularrouters:activator_module'),
      		pattern: [' A ', 'BCB', 'DED'],
      		key: {
      			A: 'create:analog_lever',
          		B: 'minecraft:repeater',
          		C: '#forge:gears/steel',
  				D: '#forge:ingots/gold',
  				E: 'modularrouters:blank_module'
      		},
      		id: 'modularrouters:activator_module'
    	},
    	{
      		output: Item.of('modularrouters:breaker_module'),
      		pattern: ['A ', 'BCB'],
      		key: {
      			A: Item.of('mekanismtools:diamond_paxel', '{Damage:0}').weakNBT(),
          		B: '#forge:ingots/gold',
          		C: 'modularrouters:blank_module'
      		},
      		id: 'modularrouters:breaker_module'
    	},
    	{
      		output: Item.of('modularrouters:puller_module_2'),
      		pattern: ['A ', 'BCB', 'DED'],
      		key: {
      			A: 'minecraft:ender_pearl',
          		B: 'extendedcrafting:redstone_ingot',
          		C: 'modularrouters:puller_module_1',
  				D: '#forge:ingots/gold',
  				E: 'modularrouters:blank_module'
      		},
      		id: 'modularrouters:puller_module_2'
    	},
    	{
      		output: Item.of('modularrouters:detector_module'),
      		pattern: ['A ', 'BCB', 'DED'],
      		key: {
      			A: 'rsgauges:industrial_comparator_switch',
          		B: 'minecraft:comparator',
          		C: '#forge:dusts/redstone',
  				D: '#forge:ingots/gold',
  				E: 'modularrouters:blank_module'
      		},
      		id: 'modularrouters:detector_module'
    	},
    	{
      		output: Item.of('modularrouters:distributor_module'),
      		pattern: ['A ', 'ABA', 'CDC'],
      		key: {
    			A: 'modularrouters:sender_module_3',
        		B: 'pipez:item_pipe',
				C: '#forge:ingots/gold',
				D: 'modularrouters:blank_module'
      		},
      		id: 'modularrouters:distributor_module'
    	},
    	{
      		output: Item.of('modularrouters:dropper_module'),
      		pattern: ['A ', 'BCD', 'EFE'],
      		key: {
    			A: 'rsgauges:industrial_button',
        		B: 'engineersdecor:factory_hopper',
        		C: 'minecraft:dropper',
				D: 'minecraft:redstone_torch',
		        E: '#forge:ingots/gold',
		        F: 'modularrouters:blank_module'
      		},
      		id: 'modularrouters:dropper_module'
    	},
    	{
      		output: Item.of('modularrouters:energy_distributor_module'),
      		pattern: ['A ', 'BCB', 'DED'],
      		key: {
			    A: 'modularrouters:energy_output_module',
        		B: '#forge:gems/quartz',
        		C: 'modularrouters:distributor_module',
		        D: '#forge:ingots/gold',
		        E: 'modularrouters:blank_module'
      		},
      		id: 'modularrouters:energy_distributor_module'
    	},
    	{
      		output: Item.of('modularrouters:energy_output_module'),
      		pattern: ['A ', 'BCB', 'DED'],
      		key: {
    			A: 'extendedcrafting:redstone_ingot_block',
        		B: '#forge:gems/quartz',
        		C: 'immersiveengineering:wirecoil_steel',
		        D: '#forge:ingots/gold',
		        E: 'modularrouters:blank_module'
      		},
      		id: 'modularrouters:energy_output_module'
    	},
    	{
      		output: Item.of('modularrouters:extruder_module_1'),
      		pattern: ['A ', 'BCD', 'EFE'],
      		key: {
    			A: 'modularrouters:placer_module',
        		B: 'extendedcrafting:redstone_ingot_block',
        		C: 'modularrouters:breaker_module',
		        D: 'pipez:item_pipe',
		        E: '#forge:ingots/gold',
		        F: 'modularrouters:blank_module'
      		},
      		id: 'modularrouters:extruder_module_1'
    	},
    	{
      		output: Item.of('modularrouters:extruder_module_2'),
      		pattern: ['A ', 'BCB', 'DED'],
      		key: {
    			A: 'pipez:item_pipe',
        		B: 'extendedcrafting:redstone_ingot_block',
        		C: 'modularrouters:extruder_module_1',
		        D: '#forge:ingots/gold',
		        E: 'modularrouters:blank_module'
      		},
      		id: 'modularrouters:extruder_module_2'
    	},
    	{
      		output: Item.of('modularrouters:flinger_module'),
      		pattern: ['A ', 'ABA', 'CDC'],
      		key: {
  			    A: 'thermal:gunpowder_block',
        		B: 'modularrouters:dropper_module',
		        C: '#forge:ingots/gold',
		        D: 'modularrouters:blank_module'
      		},
      		id: 'modularrouters:flinger_module'
    	},
    	{
      		output: Item.of('modularrouters:fluid_module'),
      		pattern: ['A ', 'BCD', 'EFE'],
      		key: {
  			    A: '#forge:dusts/prismarine',
        		B: 'extendedcrafting:redstone_ingot_block',
        		C: 'minecraft:cauldron',
		        D: 'pipez:fluid_pipe',
		        E: '#forge:ingots/gold',
		        F: 'modularrouters:blank_module'
      		},
      		id: 'modularrouters:fluid_module'
    	},
    	{
      		output: Item.of('modularrouters:fluid_module_2'),
      		pattern: ['A ', 'BCB', 'DED'],
      		key: {
    			A: 'pipez:fluid_pipe',
        		B: 'extendedcrafting:redstone_ingot_block',
        		C: 'modularrouters:fluid_module',
			    D: '#forge:ingots/gold',
				E: 'modularrouters:blank_module'
      		},
      		id: 'modularrouters:fluid_module_2'
    	},
    	{
      		output: Item.of('modularrouters:placer_module'),
      		pattern: ['A ', 'BCD', 'EFE'],
      		key: {
    			A: '#forge:grass',
        		B: 'engineersdecor:factory_placer',
        		C: '#forge:stone',
		        D: 'minecraft:dispenser',
            	E: '#forge:ingots/gold',
		        F: 'modularrouters:blank_module'
      		},
      		id: 'modularrouters:placer_module'
    	},
    	{
      		output: Item.of('modularrouters:player_module'),
      		pattern: ['A ', 'BCD', 'EFE'],
      		key: {
    			A: 'minecraft:wither_skeleton_skull',
        		B: 'modularrouters:sender_module_3',
        		C: 'minecraft:diamond_chestplate',
		        D: 'modularrouters:puller_module_2',
		        E: '#forge:ingots/gold',
		        F: 'modularrouters:blank_module'
      		},
      		id: 'modularrouters:player_module'
    	}
  	];

  	recipes.forEach((recipe) => {
    	event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  	});
});
