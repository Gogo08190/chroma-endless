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
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
