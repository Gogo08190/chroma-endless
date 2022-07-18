onEvent('recipes', (event) => {
    const id_prefex = 'chroma:pack/';
    const recipes = [

        //Enrichment Chamber
        {
          output: 'mekanism:enrichment_chamber',
          pattern: ['IMI','CSC','IEI'],
          key: {
            E: 'kubejs:extreme_circuit_board',
            I: 'pneumaticcraft:ingot_iron_compressed',
            C: 'pneumaticcraft:capacitor',
            S: 'mekanism:steel_casing',
            M: 'mekanism:metallurgic_infuser'
          },
          id: 'mekanism:enrichment_chamber'
        },
        //Basic Tier installer
        {
          output: 'mekanism:basic_tier_installer',
          pattern: ['RBR','CTC','RBR'],
          key: {
            B: 'mekanism:basic_control_circuit',
            T: 'immersiveengineering:treated_wood_horizontal',
            C: 'pneumaticcraft:ingot_iron_compressed',
            R: 'extendedcrafting:redstone_ingot_block'
          },
          id: 'mekanism:tier_installer/basic'
        },
        //Advanced Tier Installer
        {
          output: 'mekanism:advanced_tier_installer',
          pattern: ['CAC','EBE','CAC'],
          key: {
            C: 'enderioalloys:block_alloy_conductive_iron',
            A: 'mekanism:advanced_control_circuit',
            E: 'enderioalloys:item_alloy_ingot_energetic_silver',
            B: 'mekanism:basic_tier_installer'
          },
          id: 'mekanism:tier_installer/advanced'
        },
        //Basic Chemical Tank
        {
          output: 'mekanism:basic_chemical_tank',
          pattern: ['RIR','IGI','RIR'],
          key: {
            R: 'extendedcrafting:redstone_ingot',
            I: 'occultism:iesnium_ingot',
            G: 'pneumaticcraft:gas_lift'
          },
          id: 'mekanism:chemical_tank/basic'
        },
        //Advanced Chemical Tank
        {
          output: 'mekanism:advanced_chemical_tank',
          pattern: ['ACA','CBC','ACA'],
          key: {
            B: 'mekanism:basic_chemical_tank',
            A: 'mekanism:alloy_infused',
            C: 'pneumaticcraft:ingot_iron_compressed'
          },
          id: 'mekanism:chemical_tank/advanced'
        },
        //Elite Chemical Tank
        {
          output: 'mekanism:elite_chemical_tank',
          pattern: ['RER','EAE','RER'],
          key: {
            E: 'enderioalloys:item_alloy_ingot_energetic_silver',
            R: 'mekanism:alloy_reinforced',
            A: 'mekanism:advanced_chemical_tank'
          },
          id: 'mekanism:chemical_tank/elite'
        },
        //Ultimate Chemical Tank
        {
          output: 'mekanism:ultimate_chemical_tank',
          pattern: ['ANA','NEN','ANA'],
          key: {
            A: 'mekanism:alloy_atomic',
            N: 'createdeco:netherite_sheet',
            E: 'mekanism:elite_chemical_tank'
          },
          id: 'mekanism:chemical_tank/ultimate'
        },
        //Basic Fluid Tank
        {
          output: 'mekanism:basic_fluid_tank',
          pattern: ['RSR','SCS','RSR'],
          key: {
            S: 'emendatusenigmatica:steel_ingot',
            R: 'extendedcrafting:redstone_ingot',
            C: 'industrialforegoing:common_black_hole_tank'
          },
          id: 'mekanism:fluid_tank/basic'
        },
        //Advanced Fluid Tank
        {
          output: 'mekanism:advanced_fluid_tank',
          pattern: ['ACA','CBC','ACA'],
          key: {
            A: 'mekanism:alloy_infused',
            C: 'pneumaticcraft:ingot_iron_compressed',
            B: 'mekanism:basic_fluid_tank'
          },
          id: 'mekanism:fluid_tank/advanced'
        },
        //Elite Fluid Tank
        {
          output: 'mekanism:elite_fluid_tank',
          pattern: ['RER','EAE','RER'],
          key: {
            R: 'mekanism:alloy_reinforced',
            E: 'enderioalloys:item_alloy_ingot_energetic_silver',
            A: 'mekanism:advanced_fluid_tank'
          },
          id: 'mekanism:fluid_tank/elite'
        },
        //Elite Fluid Tank
        {
          output: 'mekanism:ultimate_fluid_tank',
          pattern: ['ANA','NEN','ANA'],
          key: {
            A: 'mekanism:alloy_atomic',
            N: 'createdeco:netherite_sheet',
            E: 'mekanism:elite_fluid_tank'
          },
          id: 'mekanism:fluid_tank/ultimate
        },
    ];
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
