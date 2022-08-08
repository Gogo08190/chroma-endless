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
        //Osmium Compressor
        {
          output: 'mekanism:osmium_compressor',
          pattern: ['IMI','CSC','IEI'],
          key: {
            E: 'kubejs:extreme_circuit_board',
            I: 'pneumaticcraft:ingot_iron_compressed',
            C: 'pneumaticcraft:capacitor',
            S: 'mekanism:steel_casing',
            M: 'mekanism:basic_chemical_tank'
          },
          id: 'mekanism:osmium_compressor'
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
          id: 'mekanism:fluid_tank/ultimate'
        },
        //Basic Smelting Factory
        {
          output: 'mekanism:basic_smelting_factory',
          pattern: ['RBR','IMI','RBR'],
          key: {
            R: 'extendedcrafting:redstone_ingot',
            I: 'pneumaticcraft:ingot_iron_compressed',
            B: 'mekanism:basic_control_circuit',
            M: 'mekanism:energized_smelter'
          },
          id: 'mekanism:factory/basic/smelting'
        },
        //Basic Enriching Factory
        {
          output: 'mekanism:basic_enriching_factory',
          pattern: ['RBR','IMI','RBR'],
          key: {
            R: 'extendedcrafting:redstone_ingot',
            I: 'pneumaticcraft:ingot_iron_compressed',
            B: 'mekanism:basic_control_circuit',
            M: 'mekanism:enrichment_chamber'
          },
          id: 'mekanism:factory/basic/enriching'
        },
        //Basic Crushing Factory
        {
          output: 'mekanism:basic_crushing_factory',
          pattern: ['RBR','IMI','RBR'],
          key: {
            R: 'extendedcrafting:redstone_ingot',
            I: 'pneumaticcraft:ingot_iron_compressed',
            B: 'mekanism:basic_control_circuit',
            M: 'mekanism:crusher'
          },
          id: 'mekanism:factory/basic/crushing'
        },
        //Basic Compressing Factory
        {
          output: 'mekanism:basic_compressing_factory',
          pattern: ['RBR','IMI','RBR'],
          key: {
            R: 'extendedcrafting:redstone_ingot',
            I: 'pneumaticcraft:ingot_iron_compressed',
            B: 'mekanism:basic_control_circuit',
            M: 'mekanism:osmium_compressor'
          },
          id: 'mekanism:factory/basic/compressing'
        },
        //Basic Combining Factory
        {
          output: 'mekanism:basic_combining_factory',
          pattern: ['RBR','IMI','RBR'],
          key: {
            R: 'extendedcrafting:redstone_ingot',
            I: 'pneumaticcraft:ingot_iron_compressed',
            B: 'mekanism:basic_control_circuit',
            M: 'mekanism:combiner'
          },
          id: 'mekanism:factory/basic/combining'
        },
        //Basic Infusing Factory
        {
          output: 'mekanism:basic_infusing_factory',
          pattern: ['RBR','IMI','RBR'],
          key: {
            R: 'extendedcrafting:redstone_ingot',
            I: 'pneumaticcraft:ingot_iron_compressed',
            B: 'mekanism:basic_control_circuit',
            M: 'mekanism:metallurgic_infuser'
          },
          id: 'mekanism:factory/basic/infusing'
        },
        //Basic Sawing Factory
        {
          output: 'mekanism:basic_sawing_factory',
          pattern: ['RBR','IMI','RBR'],
          key: {
            R: 'extendedcrafting:redstone_ingot',
            I: 'pneumaticcraft:ingot_iron_compressed',
            B: 'mekanism:basic_control_circuit',
            M: 'mekanism:precision_sawmill'
          },
          id: 'mekanism:factory/basic/sawing'
        },
        //Advanced Smelting Factory
        {
          output: 'mekanism:advanced_smelting_factory',
          pattern: ['CAC','EME','CAC'],
          key:{
            C: 'enderioalloys:item_alloy_ingot_conductive_iron',
            A: 'mekanism:advanced_control_circuit',
            E: 'enderioalloys:item_alloy_ingot_energetic_silver',
            M: 'mekanism:basic_smelting_factory'
          },
          id: 'mekanism:factory/advanced/smelting'
        },
        //Advanced Enriching Factory
        {
          output: 'mekanism:advanced_enriching_factory',
          pattern: ['CAC','EME','CAC'],
          key:{
            C: 'enderioalloys:item_alloy_ingot_conductive_iron',
            A: 'mekanism:advanced_control_circuit',
            E: 'enderioalloys:item_alloy_ingot_energetic_silver',
            M: 'mekanism:basic_enriching_factory'
          },
          id: 'mekanism:factory/advanced/enriching'
        },
        //Advanced Crushing Factory
        {
          output: 'mekanism:advanced_crushing_factory',
          pattern: ['CAC','EME','CAC'],
          key:{
            C: 'enderioalloys:item_alloy_ingot_conductive_iron',
            A: 'mekanism:advanced_control_circuit',
            E: 'enderioalloys:item_alloy_ingot_energetic_silver',
            M: 'mekanism:basic_crushing_factory'
          },
          id: 'mekanism:factory/advanced/crushing'
        },
        //Advanced Compressing Factory
        {
          output: 'mekanism:advanced_compressing_factory',
          pattern: ['CAC','EME','CAC'],
          key:{
            C: 'enderioalloys:item_alloy_ingot_conductive_iron',
            A: 'mekanism:advanced_control_circuit',
            E: 'enderioalloys:item_alloy_ingot_energetic_silver',
            M: 'mekanism:basic_compressing_factory'
          },
          id: 'mekanism:factory/advanced/compressing'
        },
        //Advanced Combining Factory
        {
          output: 'mekanism:advanced_combining_factory',
          pattern: ['CAC','EME','CAC'],
          key:{
            C: 'enderioalloys:item_alloy_ingot_conductive_iron',
            A: 'mekanism:advanced_control_circuit',
            E: 'enderioalloys:item_alloy_ingot_energetic_silver',
            M: 'mekanism:basic_combining_factory'
          },
          id: 'mekanism:factory/advanced/combining'
        },
        //Advanced Infusing Factory
        {
          output: 'mekanism:advanced_infusing_factory',
          pattern: ['CAC','EME','CAC'],
          key:{
            C: 'enderioalloys:item_alloy_ingot_conductive_iron',
            A: 'mekanism:advanced_control_circuit',
            E: 'enderioalloys:item_alloy_ingot_energetic_silver',
            M: 'mekanism:basic_infusing_factory'
          },
          id: 'mekanism:factory/advanced/infusing'
        },
        //Advanced Sawing Factory
        {
          output: 'mekanism:advanced_sawing_factory',
          pattern: ['CAC','EME','CAC'],
          key:{
            C: 'enderioalloys:item_alloy_ingot_conductive_iron',
            A: 'mekanism:advanced_control_circuit',
            E: 'enderioalloys:item_alloy_ingot_energetic_silver',
            M: 'mekanism:basic_sawing_factory'
          },
          id: 'mekanism:factory/advanced/sawing'
        },
        //Module base
        {
          output: Item.of('mekanism:module_base', 2 ),
          pattern: ['RER','EHE','RER'],
          key:{
            R: 'undergarden:regalium_nugget',
            E: 'enderioalloys:item_alloy_ingot_energetic_silver',
            H: 'mekanism:hdpe_sheet'
          },
          id: 'mekanism:module_base'
        },
        //Hazmat mask
        {
          output: Item.of('mekanism:hazmat_mask', '{HideFlags:2}'),
          pattern: ['LLL','LOL','   '],
          key:{
            L: 'emendatusenigmatica:lead_ingot',
            O: 'botania:orange_petal'
          },
          id: 'mekanism:hazmat_mask'
        },
        //Hazmat Gown
        {
          output: Item.of('mekanism:hazmat_gown', '{HideFlags:2}'),
          pattern: ['LOL','LLL','LLL'],
          key:{
            L: 'emendatusenigmatica:lead_ingot',
            O: 'botania:orange_petal'
          },
          id: 'mekanism:hazmat_gown'
        },
        //Hazmat pants
        {
          output: Item.of('mekanism:hazmat_pants', '{HideFlags:2}'),
          pattern: ['LLL','LOL','L L'],
          key:{
            L: 'emendatusenigmatica:lead_ingot',
            O: 'botania:orange_petal'
          },
          id: 'mekanism:hazmat_pants'
        },
        //Hazmat Boots
        {
          output: Item.of('mekanism:hazmat_boots', '{HideFlags:2}'),
          pattern: ['   ','L L','LBL'],
          key:{
            L: 'emendatusenigmatica:lead_ingot',
            B: 'botania:black_petal'
          },
          id: 'mekanism:hazmat_boots'
        },
        //Energy Tablet
        {
          output: 'mekanism:energy_tablet',
          pattern: ['ARA','IRI','ARA'],
          key:{
            A: 'enderioalloys:item_alloy_ingot_redstone_alloy',
            R: 'undergarden:regalium_ingot',
            I: 'mekanism:alloy_infused'
          },
          id: 'mekanism:energy_tablet'
        },
        //Robit
        {
          output: 'mekanism:robit',
          pattern: ['DSD','EAE','RPR'],
          key:{
            D: 'kubejs:sac',
            S: 'emendatusenigmatica:steel_ingot',
            E: 'mekanism:energy_tablet',
            A: 'mekanism:alloy_atomic',
            R: 'mekanism:ingot_refined_obsidian',
            P: 'mekanism:personal_chest'
          },
          id: 'mekanism:robit'
        },
        //Basic Mechanical Pipe
        {
          output: Item.of('mekanism:basic_mechanical_pipe', 8),
          pattern: ['   ','EBE','   '],
          key:{
            E: 'enderioalloys:item_alloy_ingot_electrical_steel',
            B: 'minecraft:bucket'
          },
          id: 'mekanism:transmitter/mechanical_pipe/basic'
        }


    ];
    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
