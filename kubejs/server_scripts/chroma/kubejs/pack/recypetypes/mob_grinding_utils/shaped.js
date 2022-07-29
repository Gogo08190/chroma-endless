onEvent('recipes', (event) => {
    const recipes = [
      // Singularity Tank
      {
        output: 'mob_grinding_utils:tank',
        pattern: ['ABA', 'CCC', 'ABA'],
        key: {
            A: 'emendatusenigmatica:iron_plate',
            B: 'create:fluid_tank',
            C: '#forge:glass'
        },
        id: 'mob_grinding_utils:recipe_tank'
      },
      // XP Solidifier
      {
        output: 'mob_grinding_utils:xpsolidifier',
        pattern: [' A ', 'BCB', ' D '],
        key: {
            A: 'minecraft:piston',
            B: 'create:cogwheel',
            C: 'minecraft:hopper',
            D: 'mob_grinding_utils:tank'
        },
        id: 'mob_grinding_utils:recipe_solidifier'
      },
      // XP Mould Blank
      {
        output: 'mob_grinding_utils:solid_xp_mould_blank',
        pattern: ['AAA', 'ABA', 'AAA'],
        key: {
            A: 'emendatusenigmatica:brass_plate',
            B: 'industrialforegoing:essence_bucket'
        },
        id: 'mob_grinding_utils:recipe_mould_blank'
      },
      // Mob Fan
      {
        output: 'mob_grinding_utils:fan',
        pattern: [' A ', 'BCB', ' D '],
        key: {
            A: 'create:andesite_alloy',
            B: 'emendatusenigmatica:iron_plate',
            C: 'create:electron_tube',
            D: 'create:propeller'
        },
        id: 'mob_grinding_utils:recipe_fan'
      },
      // Mob Masher
      {
        output: 'mob_grinding_utils:saw',
        pattern: [' A ', 'BCB', ' D '],
        key: {
            A: 'miniutilities:iron_spikes',
            B: 'minecraft:diamond',
            C: 'create:crushing_wheel',
            D: 'create:electron_tube',
            E: 'emendatusenigmatica:diamond_gear',
            F: 'minecraft:iron_block'
        },
        id: 'mob_grinding_utils:recipe_saw'
      },
      // Absorption Hopper
      {
        output: 'mob_grinding_utils:absorption_hopper',
        pattern: [' A ', 'BCB', ' D '],
        key: {
            A: 'create:fluid_tank',
            B: '#forge:obsidian',
            C: 'darkutils:ender_hopper',
            D: '#forge:chests/wooden'
        },
        id: 'mob_grinding_utils:recipe_absorbtion_hopper'
      },
      // Ender Inhibitor Active
      {
        output: 'mob_grinding_utils:ender_inhibitor_on',
        pattern: [' A ', 'BCB', ' D '],
        key: {
            A: 'minecraft:redstone',
            B: 'create:shadow_steel',
            C: 'minecraft:ender_eye',
            D: 'minecraft:glowstone_dust'
        },
        id: 'mob_grinding_utils:recipe_ender_inhibitor'
      },
      // Jumbo Tank
      {
        output: 'mob_grinding_utils:jumbo_tank',
        pattern: ['ABA', 'B B', 'ABA'],
        key: {
            A: 'emendatusenigmatica:steel_plate',
            B: 'mob_grinding_utils:tank'
        },
        id: 'mob_grinding_utils:recipe_jumbotank'
      }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
