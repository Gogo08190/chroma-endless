onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/pneumaticcraft/pressure_chamber/';

    const recipes = [
        {
            inputs: [
                { item: 'undergarden:cloggrum_ingot', count: 1 }
            ],
            pressure: 2.0,
            results: [{ item: 'pneumaticcraft:ingot_iron_compressed', count: 1 }],
            id: 'pneumaticcraft:pressure_chamber/compressed_iron_ingot'
        },
        {
            inputs: [
                { item: 'undergarden:cloggrum_block', count: 1 }
            ],
            pressure: 2.0,
            results: [{ item: 'pneumaticcraft:compressed_iron_block', count: 1 }],
            id: 'pneumaticcraft:pressure_chamber/compressed_iron_block'
        },
        {
            inputs: [
                { item: 'pneumaticcraft:plastic', count: 1 },
                { item: 'extendedcrafting:redstone_ingot', count: 1 },
                { item: 'emendatusenigmatica:electrum_nugget', count: 3 }
            ],
            pressure: 1.0,
            results: [{ item: 'pneumaticcraft:transistor', count: 1 }],
            id: 'pneumaticcraft:pressure_chamber/transistor'
        },
        {
            inputs: [
                { item: 'pneumaticcraft:plastic', count: 1 },
                { item: 'botania:mana_pearl', count: 2 },
                { item: 'emendatusenigmatica:electrum_nugget', count: 1 }
            ],
            pressure: 1.5,
            results: [{ item: 'pneumaticcraft:capacitor', count: 1 }],
            id: 'pneumaticcraft:pressure_chamber/capacitor'
        },
        {
            inputs: [
                { item: 'pneumaticcraft:plastic', count: 1 },
                { item: 'thermal:redstone_servo', count: 2 },
                { item: 'emendatusenigmatica:electrum_nugget', count: 3 }
            ],
            pressure: 1.5,
            results: [{ item: 'pneumaticcraft:empty_pcb', count: 3 }],
            id: 'pneumaticcraft:pressure_chamber/empty_pcb'
        },
        {
            inputs: [
                { item: 'pneumaticcraft:ingot_iron_compressed', count: 4 },
                { item: 'thermal:hazmat_boots', count: 1 }
            ],
            pressure: 2.0,
            results: [{ item: 'pneumaticcraft:compressed_iron_boots', count: 1 }],
            id: 'pneumaticcraft:compressed_iron_boots'
        },
        {
            inputs: [
                { item: 'pneumaticcraft:ingot_iron_compressed', count: 7 },
                { item: 'thermal:hazmat_leggings', count: 1 }
            ],
            pressure: 2.0,
            results: [{ item: 'pneumaticcraft:compressed_iron_leggings', count: 1 }],
            id: 'pneumaticcraft:compressed_iron_leggings'
        },
        {
            inputs: [
                { item: 'pneumaticcraft:ingot_iron_compressed', count: 8 },
                { item: 'thermal:hazmat_chestplate', count: 1 }
            ],
            pressure: 2.0,
            results: [{ item: 'pneumaticcraft:compressed_iron_chestplate', count: 1 }],
            id: 'pneumaticcraft:compressed_iron_chestplate'
        },
        {
            inputs: [
                { item: 'pneumaticcraft:ingot_iron_compressed', count: 5 },
                { item: 'thermal:hazmat_helmet', count: 1 }
            ],
            pressure: 2.0,
            results: [{ item: 'pneumaticcraft:compressed_iron_helmet', count: 1 }],
            id: 'pneumaticcraft:compressed_iron_helmet'
        },
        {
            inputs: [
                { item: 'pneumaticcraft:unassembled_pcb', count: 1 },
                { item: 'pneumaticcraft:capacitor', count: 2 },
                { item: 'pneumaticcraft:transistor', count: 2 },
                { item: 'extendedcrafting:redstone_ingot', count: 1 },
                { item: 'immersiveengineering:wire_electrum', count: 2 }
            ],
            pressure: 1.5,
            results: [{ item: 'pneumaticcraft:printed_circuit_board', count: 1 }],
            id: 'pneumaticcraft:printed_circuit_board'
        },
        {
            inputs: [
                { item: 'emendatusenigmatica:lead_plate', count: 1 },
                { item: 'extendedcrafting:redstone_ingot', count: 2 },
                { item: 'thermal:redstone_servo', count: 1 }
            ],
            pressure: 1.0,
            results: [{ item: 'pneumaticcraft:turbine_blade', count: 1 }],
            id: 'pneumaticcraft:turbine_blade'
        },
        {
            inputs: [
                { item: 'rftoolsbase:machine_base', count: 1 },
                { item: 'undergarden:utherium_ingot', count: 4 }
            ],
            pressure: 2.5,
            results: [{ item: 'rftoolspower:power_core2', count: 1 }],
            id: 'rftoolspower:power_core2'
        },
        {
            inputs: [
                { item: 'pneumaticcraft:smart_chest', count: 1 },
                { item: 'pneumaticcraft:omnidirectional_hopper', count: 1 },
                { item: 'pneumaticcraft:compressed_brick_tile', count: 1 },
                { item: 'pneumaticcraft:advanced_pcb', count: 1 }
            ],
            pressure: 3.0,
            results: [{ item: 'masterfulmachinery:assemblylaser_assembly_item_port_items_input', count: 1 }],
            id: `${id_prefix}assemblylaser_assembly_item_port_items_input`
        },
        {
            inputs: [
                { item: 'pneumaticcraft:smart_chest', count: 1 },
                { item: 'pneumaticcraft:pressure_chamber_valve', count: 1 },
                { item: 'pneumaticcraft:compressed_brick_tile', count: 1 },
                { item: 'pneumaticcraft:advanced_pcb', count: 1 }
            ],
            pressure: 3.0,
            results: [{ item: 'masterfulmachinery:assemblylaser_assembly_item_port_items_output', count: 1 }],
            id: `${id_prefix}assemblylaser_assembly_item_port_items_output`
        },
        {
            inputs: [
                { item: 'pneumaticcraft:reinforced_air_canister', count: 1 },
                { item: 'pneumaticcraft:advanced_pressure_tube', count: 1 },
                { item: 'pneumaticcraft:compressed_brick_tile', count: 1 },
                { item: 'pneumaticcraft:advanced_pcb', count: 1 }
            ],
            pressure: 3.0,
            results: [{ item: 'masterfulmachinery:assemblylaser_assembly_air_port_pncr_pressure_input', count: 1 }],
            id: `${id_prefix}assemblylaser_assembly_air_port_pncr_pressure_input`
        },
        {
            inputs: [
                { item: 'minecraft:netherite_ingot', count: 1 },
                { item: 'extendedcrafting:redstone_ingot', count: 1 },
                { item: 'pneumaticcraft:plastic', count: 2 }
            ],
            pressure: 1.0,
            results: [{ item: 'kubejs:netherite_transistor', count: 1 }],
            id: `${id_prefix}netherite_transistor`
        },
        {
            inputs: [
                { item: 'emendatusenigmatica:uranium_ingot', count: 1 },
                { item: 'botania:mana_pearl', count: 1 },
                { item: 'pneumaticcraft:plastic', count: 2 }
            ],
            pressure: 1.5,
            results: [{ item: 'kubejs:uranium_capacitor', count: 1 }],
            id: `${id_prefix}uranium_capacitor`
        },
        {
            inputs: [
                { item: 'pneumaticcraft:unassembled_pcb', count: 1 },
                { item: 'kubejs:netherite_transistor', count: 2 },
                { item: 'kubejs:uranium_capacitor', count: 2 },
                { item: 'undergarden:utherium_ingot', count: 2 }
            ],
            pressure: 2.0,
            results: [{ item: 'kubejs:extreme_circuit_board', count: 1 }],
            id: `${id_prefix}extreme_circuit_board`
        },
        {
            inputs: [
                { item: 'kubejs:extreme_circuit_board', count: 4 },
                { item: 'fluxnetworks:flux_core', count: 2 }
            ],
            pressure: 3.0,
            results: [{ item: 'kubejs:advanced_extreme_circuit_board', count: 1 }],
            id: `${id_prefix}advanced_extreme_circuit_board`
        },
        {
            inputs: [
                { item: 'refinedstorage:quartz_enriched_iron', count: 4 },
                { item: 'thermal:machine_frame', count: 1 },
                { item: 'kubejs:netherite_transistor', count: 1 },
                { item: 'pneumaticcraft:ingot_iron_compressed', count: 4 }
            ],
            pressure: 2.5,
            results: [{ item: 'refinedstorage:machine_casing', count: 1 }],
            id: 'refinedstorage:machine_casing'
        },
        //Steel casing
        {
          inputs:[
            { item: 'thermal:machine_frame', count: 1},
            { item: 'emendatusenigmatica:steel_block', count: 2},
            { item: 'createdeco:netherite_sheet', count: 2},
            { item: 'pneumaticcraft:transistor', count: 2}
          ],
          pressure: 3.0,
          results: [{item: 'mekanism:steel_casing', count: 1}],
          id: 'mekanism:steel_casing'
        },
        {
          inputs:[
            { item: 'extendedcrafting:redstone_ingot_block', count: 4},
            { item: 'resourcefulbees:centrifuge_casing', count: 4},
            { item: 'kubejs:extreme_circuit_board', count: 2},
            { item: 'minecraft:iron_bars', count: 4},
            { item: 'resourcefulbees:centrifuge', count: 2}
          ],
          pressure: 4.0,
          results: [{item: 'resourcefulbees:centrifuge_controller', count: 1}],
          id: 'resourcefulbees:centrifuge_controller'
        },
        {
          inputs:[
            { item: 'extendedcrafting:redstone_ingot_block', count: 4},
            { item: 'resourcefulbees:waxed_machine_block', count: 4},
            { item: 'emendatusenigmatica:steel_block', count: 4}
          ],
          pressure: 4.0,
          results: [{item: 'resourcefulbees:centrifuge_casing', count: 3}],
          id: 'resourcefulbees:centrifuge_casing'
        },
        {
          inputs:[
            { item: 'emendatusenigmatica:steel_block', count: 3},
            { item: 'betterendforge:thallasium_bars', count: 4},
            { item: 'supplementaries:cage', count: 1}
            { item: 'dustrial_decor:large_chain', count: 1}
          ],
          pressure: 3.0,
          results: [{item: 'cagedmobs:mobcage', count: 1}],
          id: 'cagedmobs:crafting/mobcage'
        }
    ];
    recipes.forEach((recipe) => {
        let ingredients = [];
        recipe.inputs.forEach((input) => {
            input.type = 'pneumaticcraft:stacked_item';
            ingredients.push(input);
        });

        event
            .custom({
                type: 'pneumaticcraft:pressure_chamber',
                inputs: ingredients,
                pressure: recipe.pressure,
                results: recipe.results
            })
            .id(recipe.id);
    });
});
