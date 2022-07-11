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
          pattern:['HMH','MOM','HMH'],
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
          pattern:['CCC','CFC','CBC'],
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
          pattern:['WPW','CSC','CRC'],
          key: {
            C: 'minecraft:smooth_stone',
            W: '#minecraft:planks',
            P: '#forge:plates/iron_aluminum',
            S: 'create:shaft',
            R: '#forge:dusts/redstone'
          },
          id: 'minecraft:piston'
        },
        //Blast Furnace
        {
          output: 'minecraft:blast_furnace',
          pattern:['PPP','PFP','CLC'],
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
          pattern:['SWS','WFW','SLS'],
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
          pattern:[' B ','DOD','OOO'],
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
          pattern:['NBN',' B ','AAA'],
          key: {
            N: '#forge:nuggets/iron_invar',
            B: '#forge:rods/blaze',
            A: '#forge:ingots/andesite_alloy'
          },
          id: 'minecraft:brewing_stand'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
