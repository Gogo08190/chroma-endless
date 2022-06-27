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
        	    C: '#forge:ingots/brass'
      		},
      		id: 'modularrouters:blank_module'
    	},
    	{
      		output: Item.of('modularrouters:blank_upgrade', 4),
      		pattern: ['ABA', 'BCB', ' BA'],
      		key: {
    			    A: '#forge:ingots/brass',
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
  				    D: '#forge:ingots/brass',
  				    E: 'modularrouters:blank_module'
      		},
      		id: 'modularrouters:activator_module'
    	},
    	{
      		output: Item.of('modularrouters:breaker_module'),
      		pattern: [' A ', 'BCB'],
      		key: {
      		    A: Item.of('minecraft:diamond_pickaxe', '{Damage:0}').weakNBT(),
              B: '#forge:ingots/brass',
              C: 'modularrouters:blank_module'
      		},
      		id: 'modularrouters:breaker_module'
    	},
    	{
      		output: Item.of('modularrouters:puller_module_2'),
      		pattern: [' A ', 'BCB', 'DED'],
      		key: {
      		    A: 'minecraft:ender_pearl',
              B: 'extendedcrafting:redstone_ingot',
              C: 'modularrouters:puller_module_1',
  				    D: '#forge:ingots/brass',
  				    E: 'modularrouters:blank_module'
      		},
      		id: 'modularrouters:puller_module_2'
    	},
    	{
      		output: Item.of('modularrouters:detector_module'),
      		pattern: [' A ', 'BCB', 'DED'],
      		key: {
      		    A: 'rsgauges:industrial_comparator_switch',
              B: 'minecraft:comparator',
              C: '#forge:dusts/redstone',
  				    D: '#forge:ingots/brass',
  				    E: 'modularrouters:blank_module'
      		},
      		id: 'modularrouters:detector_module'
    	},
    	{
      		output: Item.of('modularrouters:distributor_module'),
      		pattern: [' A ', 'ABA', 'CDC'],
      		key: {
    			    A: 'modularrouters:sender_module_3',
        	    B: 'pipez:item_pipe',
				      C: '#forge:ingots/brass',
				      D: 'modularrouters:blank_module'
      		},
      		id: 'modularrouters:distributor_module'
    	},
    	{
      		output: Item.of('modularrouters:dropper_module'),
      		pattern: [' A ', 'BCD', 'EFE'],
      		key: {
    			    A: 'rsgauges:industrial_button',
        	    B: 'engineersdecor:factory_hopper',
        	    C: 'minecraft:dropper',
				      D: 'minecraft:redstone_torch',
		          E: '#forge:ingots/brass',
		          F: 'modularrouters:blank_module'
      		},
      		id: 'modularrouters:dropper_module'
    	},
    	{
      		output: Item.of('modularrouters:energy_distributor_module'),
      		pattern: [' A ', 'BCB', 'DED'],
      		key: {
			        A: 'modularrouters:energy_output_module',
        	    B: '#forge:gems/quartz',
        	    C: 'modularrouters:distributor_module',
		          D: '#forge:ingots/brass',
		          E: 'modularrouters:blank_module'
      		},
      		id: 'modularrouters:energy_distributor_module'
    	},
    	{
      		output: Item.of('modularrouters:energy_output_module'),
      		pattern: [' A ', 'BCB', 'DED'],
      		key: {
    			    A: 'extendedcrafting:redstone_ingot_block',
        	    B: '#forge:gems/quartz',
        	    C: 'immersiveengineering:wirecoil_steel',
		          D: '#forge:ingots/brass',
		          E: 'modularrouters:blank_module'
      		},
      		id: 'modularrouters:energy_output_module'
    	},
    	{
      		output: Item.of('modularrouters:extruder_module_1'),
      		pattern: [' A ', 'BCD', 'EFE'],
      		key: {
    			    A: 'modularrouters:placer_module',
        	    B: 'extendedcrafting:redstone_ingot',
        	    C: 'modularrouters:breaker_module',
		          D: 'pipez:item_pipe',
		          E: '#forge:ingots/brass',
		          F: 'modularrouters:blank_module'
      		},
      		id: 'modularrouters:extruder_module_1'
    	},
    	{
      		output: Item.of('modularrouters:extruder_module_2'),
      		pattern: [' A ', 'BCB', 'DED'],
      		key: {
    			    A: 'pipez:item_pipe',
        		  B: 'extendedcrafting:redstone_ingot',
        		  C: 'modularrouters:extruder_module_1',
		          D: '#forge:ingots/brass',
		          E: 'modularrouters:blank_module'
      		},
      		id: 'modularrouters:extruder_module_2'
    	},
    	{
      		output: Item.of('modularrouters:flinger_module'),
      		pattern: [' A ', 'ABA', 'CDC'],
      		key: {
  			      A: 'thermal:gunpowder_block',
        		  B: 'modularrouters:dropper_module',
		          C: '#forge:ingots/brass',
		          D: 'modularrouters:blank_module'
      		},
      		id: 'modularrouters:flinger_module'
    	},
    	{
      		output: Item.of('modularrouters:fluid_module'),
      		pattern: [' A ', 'BCD', 'EFE'],
      		key: {
  			      A: '#forge:dusts/prismarine',
        		  B: 'extendedcrafting:redstone_ingot',
        		  C: 'minecraft:cauldron',
		          D: 'pipez:fluid_pipe',
		          E: '#forge:ingots/brass',
		          F: 'modularrouters:blank_module'
      		},
      		id: 'modularrouters:fluid_module'
    	},
    	{
      		output: Item.of('modularrouters:fluid_module_2'),
      		pattern: [' A ', 'BCB', 'DED'],
      		key: {
    			    A: 'pipez:fluid_pipe',
        		  B: 'extendedcrafting:redstone_ingot',
        		  C: 'modularrouters:fluid_module',
    	        D: '#forge:ingots/brass',
    		      E: 'modularrouters:blank_module'
      		},
      		id: 'modularrouters:fluid_module_2'
    	},
    	{
      		output: Item.of('modularrouters:placer_module'),
      		pattern: [' A ', 'BCD', 'EFE'],
      		key: {
    			    A: '#forge:grass',
        		  B: 'engineersdecor:factory_placer',
        		  C: '#forge:stone',
		          D: 'minecraft:dispenser',
              E: '#forge:ingots/brass',
		          F: 'modularrouters:blank_module'
      		},
      		id: 'modularrouters:placer_module'
    	},
    	{
      		output: Item.of('modularrouters:player_module'),
      		pattern: [' A ', 'BCD', 'EFE'],
      		key: {
    			    A: 'minecraft:wither_skeleton_skull',
        		  B: 'modularrouters:sender_module_3',
        		  C: 'minecraft:diamond_chestplate',
		          D: 'modularrouters:puller_module_2',
		          E: '#forge:ingots/brass',
		          F: 'modularrouters:blank_module'
      		},
      		id: 'modularrouters:player_module'
    	},
    	{
      		output: Item.of('modularrouters:void_module'),
      		pattern: [' A ', 'BCD', 'EFE'],
      		key: {
    			    A: 'sophisticatedbackpacks:void_upgrade',
        		  B: 'mininggadgets:upgrade_void_junk',
        		  C: 'trashcans:ultimate_trash_can',
		          D: 'storagedrawers:void_upgrade',
		          E: '#forge:ingots/brass',
		          F: 'modularrouters:blank_module'
      		},
      		id: 'modularrouters:void_module'
    	},
    	{
      		output: Item.of('modularrouters:vacuum_module'),
      		pattern: [' A ', 'BCD', 'EFE'],
      		key: {
    			    A: 'minecraft:ender_eye',
        		  B: 'engineersdecor:factory_hopper',
        		  C: 'darkutils:ender_hopper',
		          D: 'minecraft:hopper',
		          E: '#forge:ingots/brass',
		          F: 'modularrouters:blank_module'
      		},
      		id: 'modularrouters:vacuum_module'
    	},
        {
            output: Item.of('modularrouters:sender_module_2'),
            pattern: [' E ', 'DBD', 'CAC'],
            key: {
                A: 'modularrouters:blank_module',
                B: Item.of('modularrouters:sender_module_1'),
                C: '#forge:ingots/brass',
                D: 'extendedcrafting:redstone_ingot',
                E: 'minecraft:ender_pearl'
            },
            id: 'modularrouters:sender_module_2'
        },
        {
            output: Item.of('modularrouters:sender_module_1'),
            pattern: [' F ', 'ECD', 'BAB'],
            key: {
                A: 'modularrouters:blank_module',
                B: '#forge:ingots/brass',
                C: 'create:mechanical_piston',
                D: 'apotheosis:diamond_mining_arrow',
                E: 'extendedcrafting:redstone_ingot',
                F: Item.of('minecraft:crossbow').weakNBT()
            },
            id: 'modularrouters:sender_module_1'
        },
        {
            output: 'modularrouters:blast_upgrade',
            pattern: ['ACA', 'CDC', ' BA'],
            key: {
                A: '#forge:ingots/brass',
                B: 'modularrouters:blank_upgrade',
                C: 'createdeco:netherite_bars',
                D: 'prefab:block_compressed_obsidian'
            },
            id: 'modularrouters:blast_upgrade'
        },
        {
            output: 'modularrouters:camouflage_upgrade',
            pattern: ['ACA', 'DEF', ' BA'],
            key: {
                A: '#forge:ingots/brass',
                B: 'modularrouters:blank_upgrade',
                C: '#forge:dyes/green',
                D: '#forge:dyes/red',
                E: '#forge:dyes/yellow',
                F: '#forge:dyes/blue'
            },
            id: 'modularrouters:camouflage_upgrade'
        },
        {
            output: 'modularrouters:energy_upgrade',
            pattern: ['ACA', 'CDC', ' BA'],
            key: {
                A: '#forge:ingots/brass',
                B: 'modularrouters:blank_upgrade',
                C: '#forge:gems/quartz',
                D: 'extendedcrafting:redstone_ingot_block'
            },
            id: 'modularrouters:energy_upgrade'
        },
        {
            output: 'modularrouters:fluid_upgrade',
            pattern: ['ADA', 'DCD', ' BA'],
            key: {
                A: '#forge:ingots/brass',
                B: 'modularrouters:blank_upgrade',
                C: 'create:fluid_tank',
                D: 'connectedglass:clear_glass'
            },
            id: 'modularrouters:fluid_upgrade'
        },
        {
            output: 'modularrouters:muffler_upgrade',
            pattern: ['ACA', 'CDC', ' BA'],
            key: {
                A: '#forge:ingots/brass',
                B: 'modularrouters:blank_upgrade',
                C: '#chisel:white_wool',
                D: 'immersiveengineering:earmuffs'
            },
            id: 'modularrouters:muffler_upgrade'
        },
        {
            output: 'modularrouters:security_upgrade',
            pattern: ['ACA', 'DEF', ' BA'],
            key: {
                A: '#forge:ingots/brass',
                B: 'modularrouters:blank_upgrade',
                C: '#forge:gems/quartz',
                D: 'extendedcrafting:redstone_ingot',
                E: 'supplementaries:key',
                F: '#forge:ingots/rose_gold'
            },
            id: 'modularrouters:security_upgrade'
        },
        {
            output: 'modularrouters:speed_upgrade',
            pattern: ['ACA', 'DEF', ' BA'],
            key: {
                A: '#forge:ingots/brass',
                B: 'modularrouters:blank_upgrade',
                C: 'botania:blaze_block',
                D: 'extendedcrafting:redstone_ingot',
                E: 'minecraft:sugar',
                F: 'thermal:gunpowder_block'
            },
            id: 'modularrouters:speed_upgrade'
        },
        {
            output: 'modularrouters:stack_upgrade',
            pattern: ['ADA', 'EFC', ' BA'],
            key: {
                A: '#forge:ingots/brass',
                B: 'modularrouters:blank_upgrade',
                C: '#chroma:stonecuttables/bricks',
                D: 'sophisticatedbackpacks:stack_upgrade_tier_1',
                E: 'minecraft:stone_bricks',
                F: 'quark:stick_block'
            },
            id: 'modularrouters:stack_upgrade'
        },
        {
            output: 'modularrouters:sync_upgrade',
            pattern: ['AEA', 'CDC', ' BA'],
            key: {
                A: '#forge:ingots/brass',
                B: 'modularrouters:blank_upgrade',
                C: 'extendedcrafting:redstone_ingot',
                D: 'minecraft:clock',
                E: 'minecraft:redstone_torch'
            },
            id: 'modularrouters:sync_upgrade'
        }
  	];

  	recipes.forEach((recipe) => {
    	event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  	});
});
