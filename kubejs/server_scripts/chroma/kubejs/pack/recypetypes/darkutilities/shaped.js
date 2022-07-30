onEvent('recipes', (event) => {
    const recipes = [
      {
        output: 'darkutils:charm_sleep',
        pattern: ['BWB', 'DPY', 'BRB'],
        key: {
            B: '#minecraft:beds',
            D: '#forge:dyes/black',
            R: '#forge:dyes/red',
            P: 'minecraft:phantom_membrane',
            Y: '#forge:dyes/yellow',
            W: '#forge:dyes/white'
        },
        id: 'darkutils:crafting/charm_sleep'
      },
      {
        output: 'darkutils:charm_experience',
        pattern: ['SHS', 'EXE', 'SES'],
        key: {
            S: '#forge:string',
            E: 'botanicalmachinery:mana_emerald',
            X: 'minecraft:experience_bottle',
            H: 'darkutils:ender_hopper'
        },
        id: 'darkutils:crafting/charm_experience'
      },
      {
        output: 'darkutils:charm_gluttony',
        pattern: ['SAS', 'CGC', 'SAS'],
        key: {
            S: '#forge:string',
            A: 'minecraft:golden_apple',
            C: 'minecraft:golden_carrot',
            G: '#botania:runes/gluttony'
        },
        id: 'darkutils:crafting/charm_gluttony'
      }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
