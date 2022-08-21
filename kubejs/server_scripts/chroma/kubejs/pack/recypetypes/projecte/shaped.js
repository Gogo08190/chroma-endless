onEvent('recipes', (event) => {
    const recipes = [
      {
          output: 'projecte:alchemical_chest',
          pattern: ['LMH', 'GNG', 'PSP'],
          key: {
            L: 'projecte:low_covalence_dust',
            M: 'projecte:medium_covalence_dust',
            H: 'projecte:high_covalence_dust',
            G: 'enderioalloys:item_material_pulsating_powder',
            N: '#forge:gems/niotic',
            P: 'enderioalloys:item_alloy_ingot_pulsating_iron',
            S: 'pneumaticcraft:smart_chest'
          },
          id: 'projecte:alchemical_chest'
      },
      {
          output: 'projecte:transmutation_tablet',
          pattern: ['DSD', 'STS', 'DSD'],
          key: {
            D: 'projecte:dark_matter_block',
            S: 'mekanism:hdpe_sheet',
            T: 'projecte:transmutation_table'
          },
          id: 'projecte:transmutation_tablet'
      },
      {
          output: 'projecte:dm_furnace',
          pattern: ['DDD', 'DFD', 'DDD'],
          key: {
            D: 'projecte:dark_matter_block',
            F: 'draconicmachinery:draconium_furnace'
          },
          id: 'projecte:dm_furnace'
      },
      {
          output: 'projecte:klein_star_ein',
          pattern: ['DDD', 'DFD', 'DDD'],
          key: {
            F: '#forge:gems/niotic',
            D: 'projecte:mobius_fuel'
          },
          id: 'projecte:klein_star_ein'
      },
      {
          output: 'projecte:dark_matter',
          pattern: ['DDD', 'DFD', 'DDD'],
          key: {
            F: '#forge:storage_blocks/niotic',
            D: 'projecte:aeternalis_fuel'
          },
          id: 'projecte:dark_matter'
      },
      {
          output: 'projectexpansion:basic_relay',
          pattern: ['OGO', 'ODO', 'OWO'],
          key: {
            O: '#forge:ingots/refined_obsidian',
            G: 'botania:elf_glass',
            D: 'projecte:dark_matter',
            W: 'enderioalloys:item_material_weather_crystal'
          },
          id: 'projectexpansion:relay/basic'
      },
      {
          output: 'projecte:relay_mk1',
          pattern: ['OGO', 'ODO', 'OWO'],
          key: {
            O: '#forge:ingots/refined_obsidian',
            G: 'botania:elf_glass',
            D: '#forge:storage_blocks/niotic',
            W: 'enderioalloys:item_material_weather_crystal'
          },
          id: 'projecte:relay_mk1'
      },
      {
          output: 'projecte:collector_mk1',
          pattern: ['OGO', 'ODO', 'OWO'],
          key: {
            O: '#forge:ingots/refined_glowstone',
            G: 'botania:elf_glass',
            D: '#forge:storage_blocks/niotic',
            W: 'powah:capacitor_blazing'
          },
          id: 'projecte:collector_mk1'
      },
      {
          output: 'projectexpansion:basic_collector',
          pattern: ['OGO', 'ODO', 'OWO'],
          key: {
            O: '#forge:ingots/refined_glowstone',
            G: 'botania:elf_glass',
            D: 'projecte:dark_matter',
            W: 'powah:capacitor_blazing'
          },
          id: 'projectexpansion:collector/basic'
      },
      {
          output: 'projectexpansion:basic_emc_link',
          pattern: ['LMH', 'FCF', 'HML'],
          key: {
            L: 'projecte:low_covalence_dust',
            M: 'projecte:medium_covalence_dust',
            H: 'projecte:high_covalence_dust',
            F: 'projecte:aeternalis_fuel_block',
            C: 'projecte:condenser_mk1'
          },
          id: 'projectexpansion:emc_link/basic'
      },
      {
          output: 'projecte:body_stone',
          pattern: ['ABC', 'DED', 'FGH'],
          key: {
            A: 'sushigocrafting:tuna_california',
            B: 'sushigocrafting:tuna_temaki',
            C: 'sushigocrafting:tuna_nigiri',
            D: 'projecte:red_matter',
            E: 'projecte:high_covalence_dust',
            F: 'sushigocrafting:salmon_california',
            G: 'sushigocrafting:salmon_temaki',
            H: 'sushigocrafting:salmon_nigiri'
          },
          id: 'projecte:body_stone'
      },
      {
          output: 'projecte:soul_stone',
          pattern: ['HCH', 'DED', 'HCH'],
          key: {
            H: 'ars_nouveau:glyph_heal',
            C: 'botania:mana_cookie',
            D: 'projecte:red_matter',
            E: 'projecte:high_covalence_dust'
          },
          id: 'projecte:soul_stone'
      },
      {
          output: 'projecte:mind_stone',
          pattern: ['HCH', 'DED', 'HCH'],
          key: {
            H: 'mob_grinding_utils:solid_xp_baby',
            C: 'mob_grinding_utils:absorption_hopper',
            D: 'projecte:red_matter',
            E: 'projecte:high_covalence_dust'
          },
          id: 'projecte:mind_stone'
      },
      {
          output: 'projecte:life_stone',
          pattern: ['HAH', 'DED', 'HCH'],
          key: {
            H: 'projectexpansion:magenta_fuel',
            C: 'projecte:soul_stone',
            A: 'projecte:body_stone',
            D: 'projecte:red_matter',
            E: 'projecte:high_covalence_dust'
          },
          id: 'projecte:life_stone'
      },
      {
          output: '#curios:necklace',
          pattern: ['TNT', 'NPN', 'GGG'],
          key: {
            T: 'undergarden:shard_torch',
            N: '#forge:gems/niotic',
            P: 'projecte:philosophers_stone',
            G: '#forge:ingots/refined_glowstone'
          },
          id: '#curios:necklace'
      },
      {
          output: 'projecte:interdiction_torch',
          pattern: ['SSS', 'SLS', 'SSS'],
          key: {
            S: '#forge:ingots/steel',
            L: ['projecte:volcanite_amulet', 'minecraft:lava_bucket']
          },
          id: 'projecte:interdiction_torch'
      },
      {
          output: 'projecte:relay_mk2',
          pattern: ['ODO', 'OCO', 'OOO'],
          key: {
            O: '#forge:ingots/refined_obsidian',
            D: 'projecte:dark_matter_block',
            C: 'projecte:relay_mk1'
          },
          id: 'projecte:relay_mk2'
      },
      {
          output: 'projecte:relay_mk3',
          pattern: ['ODO', 'OCO', 'OOO'],
          key: {
            O: '#forge:ingots/refined_obsidian',
            D: 'projecte:red_matter_block',
            C: 'projecte:relay_mk2'
          },
          id: 'projecte:relay_mk3'
      },
      {
          output: 'projecte:collector_mk2',
          pattern: ['ODO', 'OCO', 'OOO'],
          key: {
            O: '#forge:ingots/refined_glowstone',
            D: 'projecte:dark_matter_block',
            C: 'projecte:collector_mk1'
          },
          id: 'projecte:collector_mk2'
      },
      {
          output: 'projecte:collector_mk3',
          pattern: ['ODO', 'OCO', 'OOO'],
          key: {
            O: '#forge:ingots/refined_glowstone',
            D: 'projecte:red_matter_block',
            C: 'projecte:collector_mk2'
          },
          id: 'projecte:collector_mk3'
      }
    ];

    recipes.forEach((recipe) => {
      event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
