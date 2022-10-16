onEvent('recipes', (event) => {
    const id_prefex = 'chroma:pack/';
    const recipes = [
        {
            output: 'minecraft:furnace',
            pattern: ['AAA', 'A A', 'AAA'],
            key: {
                A: '#quark:stone_tool_materials'
            },
            id: 'minecraft:furnace'
        },
        {
            output: Item.of('minecraft:stick', 16),
            pattern: ['A', 'A'],
            key: {
                A: '#minecraft:logs'
            },
            id: `${id_prefex}sticks_16`
        },
        //Crying Obsidian
        {
          output: Item.of('minecraft:crying_obsidian', 16),
          pattern: ['HMH', 'MOM', 'HMH'],
          key: {
            H: 'tconstruct:hepatizon_ingot',
            M: 'tconstruct:manyullyn_ingot',
            O: 'minecraft:obsidian'
          },
          id: 'minecraft:crying_obsidian'
        },
        //Furnace
        {
          output: 'minecraft:furnace',
          pattern: ['CCC', 'CFC', 'CBC'],
          key: {
            C: '#quark:stone_tool_materials',
            B: '#forge:storage_blocks/coal',
            F: 'minecraft:campfire'
          },
          id: 'minecraft:furnace'
        },
        //Piston
        {
          output: 'minecraft:piston',
          pattern: ['WPW', 'CSC', 'CRC'],
          key: {
            C: 'minecraft:smooth_stone',
            W: '#minecraft:planks',
            P: '#forge:ingots/iron',
            S: 'create:shaft',
            R: '#forge:dusts/redstone'
          },
          id: 'minecraft:piston'
        },
        //Blast Furnace
        {
          output: 'minecraft:blast_furnace',
          pattern: ['PPP', 'PFP', 'CLC'],
          key: {
            C: 'minecraft:smooth_stone',
            P: '#forge:plates/iron_aluminum',
            F: 'minecraft:furnace',
            L: 'minecraft:campfire'
          },
          id: 'minecraft:blast_furnace'
        },
        //Smoker
        {
          output: 'minecraft:smoker',
          pattern: ['SWS', 'WFW', 'SLS'],
          key: {
            F: 'minecraft:furnace',
            L: 'minecraft:campfire',
            S: '#forge:rods/wooden',
            W: '#minecraft:logs'
          },
          id: 'minecraft:smoker'
        },
        //Enchanting Table
        {
          output: 'minecraft:enchanting_table',
          pattern: [' B ', 'DOD', 'OOO'],
          key: {
            B: 'minecraft:book',
            D: '#forge:plates/diamond',
            O: 'minecraft:obsidian'
          },
          id: 'minecraft:enchanting_table'
        },
        //Brewing Stand
        {
          output: 'minecraft:brewing_stand',
          pattern: ['NBN', ' B ', 'AAA'],
          key: {
            N: '#forge:nuggets/iron_invar',
            B: '#forge:rods/blaze',
            A: '#forge:ingots/andesite_alloy'
          },
          id: 'minecraft:brewing_stand'
        },
        //Hopper
        {
          output: 'minecraft:hopper',
          pattern: ['P P', 'PCP', ' P '],
          key: {
            C: '#forge:chests',
            P: '#forge:plates/iron'
          },
          id: 'minecraft:hopper'
        },
        //Cauldron
        {
          output: 'minecraft:cauldron',
          pattern: ['P P', 'P P', 'PPP'],
          key: {
            P: '#forge:plates/iron'
          },
          id: 'minecraft:cauldron'
        },
        //Shield
        {
          output: 'minecraft:shield',
          pattern: ['WPW', 'WWW', ' W '],
          key: {
            P: '#forge:plates/iron',
            W: '#minecraft:planks'
          },
          id: 'minecraft:shield'
        },
        //Clock
        {
          output: 'minecraft:clock',
          pattern: [' P ', 'PRP', ' P '],
          key: {
            P: '#forge:plates/gold',
            R: 'extendedcrafting:redstone_ingot'
          },
          id: 'minecraft:clock'
        },
        //Compass
        {
          output: 'minecraft:compass',
          pattern: [' P ', 'PRP', ' P '],
          key: {
            P: '#forge:plates/iron',
            R: 'extendedcrafting:redstone_ingot'
          },
          id: 'minecraft:compass'
        },
        //Stonecutter
        {
          output: 'minecraft:stonecutter',
          pattern: [' B ', 'OSO'],
          key: {
            B: 'thermal:saw_blade',
            O: '#minecraft:logs',
            S: 'minecraft:stone'
          },
          id: 'minecraft:stonecutter'
        },
        //Sawmill
        {
          output: 'environmental:sawmill',
          pattern: ['OB ', 'O  ', 'OS '],
          key: {
            B: 'thermal:saw_blade',
            O: '#minecraft:planks',
            S: '#minecraft:wooden_slabs'
          },
          id: 'environmental:crafting/sawmill'
        },
        //Crafting table
        {
          output: 'minecraft:crafting_table',
          pattern: ['SS', 'BB'],
          key: {
            S: 'minecraft:flint',
            B: '#minecraft:planks'
          },
          id: 'minecraft:crafting_table'
        },
        //Grindstone
        {
          output: 'minecraft:grindstone',
          pattern: ['TCT', 'SCS', 'S S'],
          key: {
            T: 'immersiveengineering:treated_wood_horizontal',
            C: 'prefab:block_compressed_stone',
            S: 'immersiveengineering:stick_treated'
          },
          id: 'minecraft:grindstone'
        },
        //End-crystal
        {
          output: 'minecraft:end_crystal',
          pattern: ['ABA', 'ACA', 'ADA'],
          key: {
            A: '#forge:glass',
            B: 'minecraft:dragon_breath',
            C: 'minecraft:ender_eye',
            D: 'minecraft:ghast_tear'
          },
          id: 'minecraft:end_crystal'
        },
        //Smithing Table
        {
          output: 'minecraft:smithing_table',
          pattern: ['AAA', 'BCD', 'CCC'],
          key: {
            A: 'create:shadow_steel',
            B: 'betterendforge:iron_hammer',
            C: 'immersiveengineering:treated_wood_horizontal',
            D: 'minecraft:shears'
          },
          id: 'minecraft:smithing_table'
        },
        // Shard -> glass
        {
          output: 'minecraft:glass',
          pattern: ['AA', 'AA'],
          key: {
            A:'quark:clear_shard'
          },
          id: `${id_prefex}glass`
        },
        {
          output: 'minecraft:white_stained_glass',
          pattern: ['AA', 'AA'],
          key: {
            A:'quark:white_shard'
          },
          id: `${id_prefex}white_stained_glass`
        },
        {
          output: 'minecraft:orange_stained_glass',
          pattern: ['AA', 'AA'],
          key: {
            A:'quark:orange_shard'
          },
          id: `${id_prefex}orange_stained_glass`
        },
        {
          output: 'minecraft:magenta_stained_glass',
          pattern: ['AA', 'AA'],
          key: {
            A:'quark:magenta_shard'
          },
          id: `${id_prefex}magenta_stained_glass`
        },
        {
          output: 'minecraft:light_blue_stained_glass',
          pattern: ['AA', 'AA'],
          key: {
            A:'quark:light_blue_shard'
          },
          id: `${id_prefex}light_blue_stained_glass`
        },
        {
          output: 'minecraft:yellow_stained_glass',
          pattern: ['AA', 'AA'],
          key: {
            A:'quark:yellow_shard'
          },
          id: `${id_prefex}yellow_stained_glass`
        },
        {
          output: 'minecraft:lime_stained_glass',
          pattern: ['AA', 'AA'],
          key: {
            A:'quark:lime_shard'
          },
          id: `${id_prefex}lime_stained_glass`
        },
        {
          output: 'minecraft:pink_stained_glass',
          pattern: ['AA', 'AA'],
          key: {
            A:'quark:pink_shard'
          },
          id: `${id_prefex}pink_stained_glass`
        },
        {
          output: 'minecraft:gray_stained_glass',
          pattern: ['AA', 'AA'],
          key: {
            A:'quark:gray_shard'
          },
          id: `${id_prefex}gray_stained_glass`
        },
        {
          output: 'minecraft:light_gray_stained_glass',
          pattern: ['AA', 'AA'],
          key: {
            A:'quark:light_gray_shard'
          },
          id: `${id_prefex}light_gray_stained_glass`
        },
        {
          output: 'minecraft:cyan_stained_glass',
          pattern: ['AA', 'AA'],
          key: {
            A:'quark:cyan_shard'
          },
          id: `${id_prefex}cyan_stained_glass`
        },
        {
          output: 'minecraft:purple_stained_glass',
          pattern: ['AA', 'AA'],
          key: {
            A:'quark:purple_shard'
          },
          id: `${id_prefex}purple_stained_glass`
        },
        {
          output: 'minecraft:blue_stained_glass',
          pattern: ['AA', 'AA'],
          key: {
            A:'quark:blue_shard'
          },
          id: `${id_prefex}blue_stained_glass`
        },
        {
          output: 'minecraft:brown_stained_glass',
          pattern: ['AA', 'AA'],
          key: {
            A:'quark:brown_shard'
          },
          id: `${id_prefex}brown_stained_glass`
        },
        {
          output: 'minecraft:green_stained_glass',
          pattern: ['AA', 'AA'],
          key: {
            A:'quark:green_shard'
          },
          id: `${id_prefex}green_stained_glass`
        },
        {
          output: 'minecraft:red_stained_glass',
          pattern: ['AA', 'AA'],
          key: {
            A:'quark:red_shard'
          },
          id: `${id_prefex}red_stained_glass`
        },
        {
          output: 'minecraft:black_stained_glass',
          pattern: ['AA', 'AA'],
          key: {
            A:'quark:black_shard'
          },
          id: `${id_prefex}black_stained_glass`
        },
        {
          output: 'explorerscompass:explorerscompass',
          pattern: ['SAS', 'ACA', 'SAS'],
          key: {
            A: '#forge:ingots/andesite_alloy',
            S: '#chipped:cobweb',
            C: 'minecraft:compass'
          },
          id: 'explorerscompass:explorers_compass'
        },
        {
          output: 'naturescompass:naturescompass',
          pattern: ['SAS', 'ACA', 'SAS'],
          key: {
            A: '#minecraft:logs',
            S: '#minecraft:leaves',
            C: 'minecraft:compass'
          },
          id: 'naturescompass:natures_compass'
        },
        {
          output: 'minecraft:heart_of_the_sea',
          pattern: ['NNN', 'PDP', 'NNN'],
          key: {
            N: 'minecraft:nautilus_shell',
            P: 'minecraft:prismarine_shard',
            D: 'rftoolsbase:infused_diamond'
          },
          id: `${id_prefex}heart_of_the_sea`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
