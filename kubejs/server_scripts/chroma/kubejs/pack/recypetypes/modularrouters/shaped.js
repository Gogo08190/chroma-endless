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
      		output: 'modularrouters:activator_module',
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
      		output: 'modularrouters:breaker_module',
      		pattern: [' A ', 'BCB'],
      		key: {
      		    A: Item.of('minecraft:diamond_pickaxe', '{Damage:0}').weakNBT(),
              B: '#forge:ingots/brass',
              C: 'modularrouters:blank_module'
      		},
      		id: 'modularrouters:breaker_module'
    	},
    	{
      		output: 'modularrouters:puller_module_2',
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
      		output: 'modularrouters:puller_module_1',
      		pattern: [' A ', 'BCB', 'DED'],
      		key: {
      		    A: 'minecraft:ender_pearl',
              B: 'extendedcrafting:redstone_ingot',
              C: 'create:mechanical_piston',
  				    D: '#forge:ingots/brass',
  				    E: 'modularrouters:blank_module'
      		},
      		id: 'modularrouters:puller_module_1'
    	},
    	{
      		output: 'modularrouters:detector_module',
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
      		output: 'modularrouters:distributor_module',
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
      		output: 'modularrouters:dropper_module',
      		pattern: [' A ', 'BCD', 'EFE'],
      		key: {
    			    A: 'rsgauges:industrial_button',
        	    B: 'engineersdecor:factory_hopper',
        	    C: 'minecraft:dropper',
				      D: '#chroma:stonecuttables/redstone_torch',
		          E: '#forge:ingots/brass',
		          F: 'modularrouters:blank_module'
      		},
      		id: 'modularrouters:dropper_module'
    	},
    	{
      		output: 'modularrouters:energy_distributor_module',
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
      		output: 'modularrouters:energy_output_module',
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
      		output: 'modularrouters:extruder_module_1',
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
      		output: 'modularrouters:extruder_module_2',
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
      		output: 'modularrouters:flinger_module',
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
      		output: 'modularrouters:fluid_module',
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
      		output: 'modularrouters:fluid_module_2',
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
      		output: 'modularrouters:placer_module',
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
      		output: 'modularrouters:player_module',
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
      		output: 'modularrouters:void_module',
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
      		output: 'modularrouters:vacuum_module',
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
            output: 'modularrouters:sender_module_3',
            pattern: ['ABC', 'BDB', 'EFE'],
            key: {
                A: '#forge:end_stones',
                B: 'extendedcrafting:redstone_ingot',
                C: 'minecraft:ender_chest',
                D: 'modularrouters:sender_module_2',
                E: '#forge:ingots/brass',
                F: 'modularrouters:blank_module'
            },
            id: 'modularrouters:sender_module_3'
        },
        {
            output: 'modularrouters:sender_module_2',
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
            output: 'modularrouters:sender_module_1',
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
            output: Item.of('modularrouters:fluid_upgrade', 3),
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
            output: Item.of('modularrouters:muffler_upgrade', 4),
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
            output: Item.of('modularrouters:speed_upgrade', 3),
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
            output: Item.of('modularrouters:sync_upgrade', 16),
            pattern: ['AEA', 'CDC', ' BA'],
            key: {
                A: '#forge:ingots/brass',
                B: 'modularrouters:blank_upgrade',
                C: 'extendedcrafting:redstone_ingot',
                D: 'minecraft:clock',
                E: '#chroma:stonecuttables/redstone_torch'
            },
            id: 'modularrouters:sync_upgrade'
        },
        {
            output: 'modularrouters:fast_pickup_augment',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#forge:ingots/brass',
                B: 'miniutilities:speed_upgrade',
                C: 'minecraft:sugar',
                D: Item.of('minecraft:fishing_rod', '{Damage:0}').weakNBT(),
                E: 'modularrouters:augment_core'
            },
            id: 'modularrouters:fast_pickup_augment'
        },
        {
            output: 'modularrouters:filter_round_robin_augment',
            pattern: ['ABA', 'CDE', 'AFA'],
            key: {
                A: '#forge:ingots/brass',
                B: 'sophisticatedbackpacks:advanced_filter_upgrade',
                C: 'prettypipes:round_robin_sorting_modifier',
                D: 'create:cuckoo_clock',
                E: 'create:attribute_filter',
                F: 'modularrouters:augment_core'
            },
            id: 'modularrouters:filter_round_robin_augment'
        },
        {
            output: 'modularrouters:mimic_augment',
            pattern: ['ABA', 'CDE', 'AFA'],
            key: {
                A: '#forge:ingots/brass',
                B: '#forge:chests/trapped',
                C: 'extendedcrafting:redstone_ingot',
                D: 'prefab:block_compressed_obsidian',
                E: '#forge:storage_blocks/glowstone',
                F: 'modularrouters:augment_core'
            },
            id: 'modularrouters:mimic_augment'
        },
        {
            output: 'modularrouters:pickup_delay_augment',
            pattern: ['ABA', 'CCC', 'ADA'],
            key: {
                A: '#forge:ingots/brass',
                B: Item.of('rftoolsutility:clock_module', '{Damage:0}').weakNBT(),
                C: '#forge:slimeballs',
                D: 'modularrouters:augment_core'
            },
            id: 'modularrouters:pickup_delay_augment'
        },
        {
            output: 'modularrouters:pushing_augment',
            pattern: ['ABA', 'CCC', 'ADA'],
            key: {
                A: '#forge:ingots/brass',
                B: 'create:piston_extension_pole',
                C: 'create:mechanical_piston',
                D: 'modularrouters:augment_core'
            },
            id: 'modularrouters:pushing_augment'
        },
        {
            output: Item.of('modularrouters:range_down_augment', 4),
            pattern: ['ABA', 'CDC', 'ACA'],
            key: {
                A: '#forge:ingots/brass',
                B: 'modularrouters:augment_core',
                C: '#forge:gems/quartz',
                D: 'quark:stick_block'
            },
            id: 'modularrouters:range_down_augment'
        },
        {
            output: Item.of('modularrouters:range_up_augment', 4),
            pattern: ['ABA', 'BCB', 'ADA'],
            key: {
                A: '#forge:ingots/brass',
                B: '#forge:gems/quartz',
                C: 'quark:stick_block',
                D: 'modularrouters:augment_core'
            },
            id: 'modularrouters:range_up_augment'
        },
        {
            output: 'modularrouters:redstone_augment',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#forge:ingots/brass',
                B: '#chroma:stonecuttables/redstone_torch',
                C: 'extendedcrafting:redstone_ingot',
                D: '#forge:dusts/redstone',
                E: 'modularrouters:augment_core'
            },
            id: 'modularrouters:redstone_augment'
        },
        {
            output: 'modularrouters:regulator_augment',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#forge:ingots/brass',
                B: '#forge:gems/quartz',
                C: 'minecraft:comparator',
                D: 'jecalculation:item_calculator_craft',
                E: 'modularrouters:augment_core'
            },
            id: 'modularrouters:regulator_augment'
        },
        {
            output: 'modularrouters:stack_augment',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: '#forge:ingots/brass',
                B: 'sophisticatedbackpacks:stack_upgrade_tier_1',
                C: 'modularrouters:stack_upgrade',
                D: 'modularrouters:augment_core'
            },
            id: 'modularrouters:stack_augment'
        },
        {
            output: 'modularrouters:xp_vacuum_augment',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#forge:ingots/brass',
                B: 'ars_nouveau:greater_experience_gem',
                C: '#chipped:soul_sand',
                D: 'darkutils:ender_hopper',
                E: 'modularrouters:augment_core'
            },
            id: 'modularrouters:xp_vacuum_augment'
        },
        {
            output: 'modularrouters:bulk_item_filter',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: '#forge:gems/diamond',
                B: '#forge:glass',
                C: 'modularrouters:blank_module',
                D: 'immersiveengineering:sheetmetal_iron'
            },
            id: 'modularrouters:bulk_item_filter'
        },
        {
            output: 'modularrouters:inspection_filter',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: '#forge:gems/diamond',
                B: '#chroma:paper_wall',
                C: 'minecraft:fermented_spider_eye',
                D: 'modularrouters:bulk_item_filter'
            },
            id: 'modularrouters:inspection_filter'
        },
        {
            output: 'modularrouters:mod_filter',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: '#forge:gems/diamond',
                B: '#chroma:stonecuttables/redstone_torch',
                C: 'minecraft:repeater',
                D: 'modularrouters:bulk_item_filter'
            },
            id: 'modularrouters:mod_filter'
        },
        {
            output: 'modularrouters:regex_filter',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: '#forge:gems/diamond',
                B: '#chroma:stonecuttables/redstone_torch',
                C: 'minecraft:comparator',
                D: 'modularrouters:bulk_item_filter'
            },
            id: 'modularrouters:regex_filter'
        }
  	];

  	recipes.forEach((recipe) => {
    	event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  	});
});
