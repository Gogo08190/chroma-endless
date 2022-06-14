onEvent('recipes', (event) => {
/*
    ,
    {
        output: ,
        pattern: ['', '', ''],
        key: {
            A:
        },
        id: ''
    }
*/
    const recipes = [
        //Reactor Basic
        {
            output: 'bigreactors:wrench',
            pattern: [' BC', 'DAB', 'A  '],
            key: {
                A: '#forge:plates/iron',
                B: '#forge:ingots/graphite',
                C: 'pneumaticcraft:compressed_iron_gear',
                D: '#forge:dyes/green'
            },
            id: 'bigreactors:misc/wrench'
        },
        {
            output: Item.of('bigreactors:basic_reactorcasing', 2),
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:plates/iron',
                B: '#forge:ingots/graphite',
                C: 'pneumaticcraft:reinforced_stone'
            },
            id: 'bigreactors:reactor/basic/casing'
        },
        {
            output: 'bigreactors:basic_reactorglass',
            pattern: ['BAB'],
            key: {
                A: 'bigreactors:basic_reactorcasing',
                B: 'pneumaticcraft:pressure_chamber_glass'
            },
            id: 'bigreactors:reactor/basic/glass'
        },
        {
            output: 'bigreactors:basic_reactorcontroller',
            pattern: ['ACA', 'DED', 'ABA'],
            key: {
                A: 'bigreactors:basic_reactorcasing',
                B: 'extendedcrafting:redstone_ingot',
                C: 'thermal:rf_coil',
                D: '#forge:ingots/uranium',
                E: 'kubejs:extreme_circuit_board'
            },
            id: 'bigreactors:reactor/basic/controller_ingots_uranium'
        },
        {
            output: 'bigreactors:basic_reactorcontrolrod',
            pattern: ['ADA', 'CEC', 'ABA'],
            key: {
                A: 'bigreactors:basic_reactorcasing',
                B: '#forge:ingots/graphite',
                C: '#forge:plates/iron',
                D: 'thermal:rf_coil',
                E: 'create:mechanical_piston'
            },
            id: 'bigreactors:reactor/basic/controlrod'
        },
        {
            output: 'bigreactors:basic_reactorfuelrod',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: '#forge:plates/iron',
                B: '#forge:ingots/graphite',
                C: 'pneumaticcraft:pressure_chamber_glass',
                D: '#forge:ingots/uranium'
            },
            id: 'bigreactors:reactor/basic/fuelrod_ingots_uranium'
        },
        {
            output: 'bigreactors:basic_reactorsolidaccessport',
            pattern: ['AEA', 'BDB', 'ACA'],
            key: {
                A: 'bigreactors:basic_reactorcasing',
                B: '#forge:plates/iron',
                C: 'create:mechanical_piston',
                D: 'pneumaticcraft:smart_chest',
                E: 'create:smart_chute'
            },
            id: 'bigreactors:reactor/basic/solidaccessport'
        },
        {
            output: 'bigreactors:basic_reactorpowertapfe_active',
            pattern: ['ACA', 'CBC', 'ACA'],
            key: {
                A: 'bigreactors:basic_reactorcasing',
                B: 'thermal:rf_coil',
                C: 'extendedcrafting:redstone_ingot_block'
            },
            id: 'bigreactors:reactor/basic/activetap_fe'
        },
        {
            output: 'bigreactors:basic_reactorpowertapfe_passive',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'bigreactors:basic_reactorcasing',
                B: 'thermal:rf_coil',
                C: 'extendedcrafting:redstone_ingot_block'
            },
            id: 'bigreactors:reactor/basic/passivetap_fe'
        },
        {
            output: 'bigreactors:basic_reactorredstoneport',
            pattern: ['ACA', 'BEB', 'ADA'],
            key: {
                A: 'bigreactors:basic_reactorcasing',
                B: '#forge:plates/iron',
                C: 'thermal:rf_coil',
                D: 'thermal:redstone_servo',
                E: '#forge:ingots/swift_alloy'
            },
            id: 'bigreactors:reactor/basic/redstoneport'
        },
        {
            output: 'bigreactors:basic_reactorchargingportfe',
            pattern: ['BCB', 'DAD', 'BCB'],
            key: {
                A: 'bigreactors:basic_reactorpowertapfe_active',
                B: 'extendedcrafting:redstone_ingot',
                C: '#forge:ingots/manasteel',
                D: 'pneumaticcraft:pressure_chamber_glass'
            },
            id: 'bigreactors:reactor/basic/chargingfe'
        },
        //Reactor Reinforced
        {
            output: 'bigreactors:reinforced_reactorcasing',
            pattern: ['BCB', 'CAC', 'BCB'],
            key: {
                A: 'bigreactors:basic_reactorcasing',
                B: '#forge:plates/steel',
                C: '#forge:ingots/graphite'
            },
            id: 'bigreactors:reactor/reinforced/casing_upgrade'
        },
        {
            output: 'bigreactors:reinforced_reactorglass',
            pattern: ['BAB'],
            key: {
                A: 'bigreactors:reinforced_reactorcasing',
                B: 'pneumaticcraft:pressure_chamber_glass'
            },
            id: 'bigreactors:reactor/reinforced/glass'
        },
        {
            output: 'bigreactors:reinforced_reactorcontroller',
            pattern: ['ACA', 'BEB', 'ADA'],
            key: {
                A: 'bigreactors:reinforced_reactorcasing',
                B: '#forge:ingots/uranium',
                C: 'thermal:rf_coil',
                D: 'extendedcrafting:redstone_ingot',
                E: 'botania:mana_diamond_block'
            },
            id: 'bigreactors:reactor/reinforced/controller_ingots_uranium'
        },
        {
            output: 'bigreactors:reinforced_reactorcontrolrod',
            pattern: ['ADA', 'BEB', 'ACA'],
            key: {
                A: 'bigreactors:reinforced_reactorcasing',
                B: '#forge:plates/steel',
                C: '#forge:ingots/graphite',
                D: 'thermal:rf_coil',
                E: 'create:mechanical_piston',
            },
            id: 'bigreactors:reactor/reinforced/controlrod'
        },
        {
            output: 'bigreactors:reinforced_reactorfuelrod',
            pattern: ['ACA', 'BDB', 'ACA'],
            key: {
                A: '#forge:plates/steel',
                B: 'pneumaticcraft:pressure_chamber_glass',
                C: '#forge:ingots/graphite',
                D: '#forge:ingots/uranium'
            },
            id: 'bigreactors:reactor/reinforced/fuelrod_ingots_uranium'
        },
        {
            output: 'bigreactors:reinforced_reactorsolidaccessport',
            pattern: ['ACA', 'DED', 'ABA'],
            key: {
                A: 'bigreactors:reinforced_reactorcasing',
                B: 'create:mechanical_piston',
                C: 'create:smart_chute',
                D: '#forge:plates/steel',
                E: 'pneumaticcraft:smart_chest'
            },
            id: 'bigreactors:reactor/reinforced/solidaccessport'
        },
        {
            output: 'bigreactors:reinforced_reactorfluidaccessport',
            pattern: ['ACA', 'DED', 'ABA'],
            key: {
                A: 'bigreactors:reinforced_reactorcasing',
                B: 'create:mechanical_piston',
                C: 'create:smart_chute',
                D: '#forge:plates/steel',
                E: 'minecraft:bucket'
            },
            id: 'bigreactors:reactor/reinforced/fluidaccessport'
        },
        {
            output: 'bigreactors:reinforced_reactorpowertapfe_active',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'bigreactors:reinforced_reactorcasing',
                B: 'extendedcrafting:redstone_ingot_block',
                C: 'thermal:rf_coil'
            },
            id: 'bigreactors:reactor/reinforced/activetap_fe'
        },
        {
            output: 'bigreactors:reinforced_reactorpowertapfe_passive',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'bigreactors:reinforced_reactorcasing',
                B: 'thermal:rf_coil',
                C: 'extendedcrafting:redstone_ingot_block'
            },
            id: 'bigreactors:reactor/reinforced/passivetap_fe'
        },
        {
            output: 'bigreactors:reinforced_reactorcomputerport',
            pattern: ['ABA', 'CEC', 'ADA'],
            key: {
                A: 'bigreactors:reinforced_reactorcasing',
                B: '#forge:ingots/manasteel',
                C: '#forge:plates/steel',
                D: '#forge:dusts/glowstone',
                E: 'elementalcraft:swift_alloy_block'
            },
            id: 'bigreactors:reactor/reinforced/computerport'
        },
        {
            output: 'bigreactors:reinforced_reactorredstoneport',
            pattern: ['ADA', 'BCB', 'AEA'],
            key: {
                A: 'bigreactors:reinforced_reactorcasing',
                B: '#forge:plates/steel',
                C: 'elementalcraft:swift_alloy_block',
                D: 'thermal:rf_coil',
                E: 'thermal:redstone_servo'
            },
            id: 'bigreactors:reactor/reinforced/redstoneport'
        },
        {
            output: 'bigreactors:reinforced_reactorfluidport_forge_active',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'bigreactors:reinforced_reactorcasing',
                B: 'extendedcrafting:redstone_ingot',
                C: Item.of('elementalcraft:element_holder_fire', '{Damage:0,element_amount:10000}'),
                D: Item.of('elementalcraft:element_holder_water', '{Damage:0,element_amount:10000}')
            },
            id: 'bigreactors:reactor/reinforced/activefluidport_forge'
        },
        {
            output: 'bigreactors:reinforced_reactorfluidport_forge_passive',
            pattern: ['ABA', 'DCD', 'ABA'],
            key: {
                A: 'bigreactors:reinforced_reactorcasing',
                B: 'extendedcrafting:redstone_ingot',
                C: Item.of('elementalcraft:element_holder_fire', '{Damage:0,element_amount:10000}'),
                D: Item.of('elementalcraft:element_holder_water', '{Damage:0,element_amount:10000}')
            },
            id: 'bigreactors:reactor/reinforced/passivefluidport_forge'
        },
        {
            output: 'bigreactors:reinforced_reactorfluidport_mekanism_passive',
            pattern: ['ADA', 'CBC', 'ADA'],
            key: {
                A: 'bigreactors:reinforced_reactorcasing',
                B: 'botanicalmachinery:mana_emerald_block',
                C: Item.of('elementalcraft:element_holder_fire', '{Damage:0,element_amount:10000}'),
                D: Item.of('elementalcraft:element_holder_water', '{Damage:0,element_amount:10000}')
            },
            id: 'bigreactors:reactor/reinforced/passivefluidport_mekanism'
        },
        {
            output: 'bigreactors:reinforced_reactorchargingportfe',
            pattern: ['ABA', 'DCD', 'ABA'],
            key: {
                A: 'extendedcrafting:redstone_ingot_block',
                B: 'botania:manasteel_block',
                C: 'bigreactors:reinforced_reactorpowertapfe_active',
                D: 'pneumaticcraft:pressure_chamber_glass'
            },
            id: 'bigreactors:reactor/reinforced/chargingfe'
        },
        //Turbine Basic
        {
            output: Item.of('bigreactors:basic_turbinecasing', 2),
            pattern: ['BCB', 'CAC', 'BCB'],
            key: {
                A: 'extendedcrafting:redstone_ingot_block',
                B: 'pneumaticcraft:ingot_iron_compressed',
                C: 'bigreactors:cyanite_ingot'
            },
            id: 'bigreactors:turbine/basic/casing'
        },
        {
            output: 'bigreactors:basic_turbineglass',
            pattern: ['BAB'],
            key: {
                A: 'bigreactors:basic_turbinecasing',
                B: 'thermal:enderium_glass'
            },
            id: 'bigreactors:turbine/basic/glass'
        },
        {
            output: 'bigreactors:basic_turbinecontroller',
            pattern: ['ABA', 'EDE', 'ACA'],
            key: {
                A: 'bigreactors:basic_turbinecasing',
                B: 'kubejs:advanced_extreme_circuit_board',
                C: 'thermal:redstone_servo',
                D: 'botania:mana_diamond',
                E: 'bigreactors:cyanite_block'
            },
            id: 'bigreactors:turbine/basic/controller'
        },
        {
            output: 'bigreactors:basic_turbinerotorbearing',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'pneumaticcraft:ingot_iron_compressed',
                B: 'extendedcrafting:redstone_ingot_block',
                C: 'emendatusenigmatica:steel_block',
                D: 'pneumaticcraft:printed_circuit_board'
            },
            id: 'bigreactors:turbine/basic/bearing'
        },
        {
            output: 'bigreactors:basic_turbinerotorshaft',
            pattern: [' A ', 'ABA', ' A '],
            key: {
                A: '#forge:plates/steel',
                B: 'bigreactors:cyanite_ingot'
            },
            id: 'bigreactors:turbine/basic/shaft'
        },
        {
            output: 'bigreactors:basic_turbinerotorblade',
            pattern: ['ABA'],
            key: {
                A: '#forge:plates/steel',
                B: 'bigreactors:cyanite_ingot'
            },
            id: 'bigreactors:turbine/basic/blade'
        },
        {
            output: 'bigreactors:basic_turbinepowertapfe_active',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'bigreactors:basic_turbinecasing',
                B: 'extendedcrafting:redstone_ingot_block',
                C: 'thermal:rf_coil'
            },
            id: 'bigreactors:turbine/basic/activetap_fe'
        },
        {
            output: 'bigreactors:basic_turbinepowertapfe_passive',
            pattern: ['ACA', 'CBC', 'ACA'],
            key: {
                A: 'bigreactors:basic_turbinecasing',
                B: 'extendedcrafting:redstone_ingot_block',
                C: 'thermal:rf_coil'
            },
            id: 'bigreactors:turbine/basic/passivetap_fe'
        },
        {
            output: 'bigreactors:basic_turbinefluidport_forge_active',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'bigreactors:basic_turbinecasing',
                B: Item.of('elementalcraft:element_holder_fire', '{Damage:0,element_amount:10000}'),
                C: Item.of('elementalcraft:element_holder_water', '{Damage:0,element_amount:10000}')
            },
            id: 'bigreactors:turbine/basic/activefluidport_forge'
        },
        {
            output: 'bigreactors:basic_turbinefluidport_forge_passive',
            pattern: ['ACA', 'CBC', 'ACA'],
            key: {
                A: 'bigreactors:basic_turbinecasing',
                B: Item.of('elementalcraft:element_holder_fire', '{Damage:0,element_amount:10000}'),
                C: Item.of('elementalcraft:element_holder_water', '{Damage:0,element_amount:10000}')
            },
            id: 'bigreactors:turbine/basic/passivefluidport_forge'
        },
        {
            output: 'bigreactors:basic_turbineredstoneport',
            pattern: ['ADA', 'BCB', 'ADA'],
            key: {
                A: 'bigreactors:basic_turbinecasing',
                B: '#forge:plates/steel',
                C: '#forge:ingots/lumium',
                D: 'thermal:redstone_servo'
            },
            id: 'bigreactors:turbine/basic/redstoneport'
        },
        {
            output: 'bigreactors:basic_turbinechargingportfe',
            pattern: ['ACA', 'BDB', 'ACA'],
            key: {
                A: 'extendedcrafting:redstone_ingot_block',
                B: 'thermal:enderium_glass',
                C: 'pneumaticcraft:logistics_core',
                D: 'bigreactors:basic_turbinepowertapfe_active'
            },
            id: 'bigreactors:turbine/basic/chargingfe'
        },
        //Turbine reinforced
        {
            output: 'bigreactors:reinforced_turbinecasing',
            pattern: ['ACB', 'CDC', 'BCA'],
            key: {
                A: '#forge:plates/steel',
                B: 'pneumaticcraft:ingot_iron_compressed',
                C: 'bigreactors:cyanite_ingot',
                D: 'bigreactors:basic_turbinecasing'
            },
            id: 'bigreactors:turbine/reinforced/casing_upgrade'
        },
        {
            output: 'bigreactors:reinforced_turbineglass',
            pattern: ['BAB'],
            key: {
                A: 'bigreactors:reinforced_turbinecasing',
                B: 'thermal:enderium_glass'
            },
            id: 'bigreactors:turbine/reinforced/glass'
        },
        {
            output: 'bigreactors:reinforced_turbinecontroller',
            pattern: ['AEA', 'BDB', 'ACA'],
            key: {
                A: 'bigreactors:reinforced_turbinecasing',
                B: 'bigreactors:cyanite_block',
                C: 'thermal:redstone_servo',
                D: 'botania:mana_diamond_block',
                E: 'rftoolscontrol:advanced_network_card'
            },
            id: 'bigreactors:turbine/reinforced/controller'
        },
        {
            output: 'bigreactors:reinforced_turbinerotorbearing',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'pneumaticcraft:ingot_iron_compressed',
                B: 'extendedcrafting:redstone_ingot_block',
                C: 'emendatusenigmatica:steel_block',
                D: 'kubejs:advanced_extreme_circuit_board'
            },
            id: 'bigreactors:turbine/reinforced/bearing'
        },
        {
            output: 'bigreactors:reinforced_turbinerotorshaft',
            pattern: [' A ', 'ABA', ' A '],
            key: {
                A: '#forge:plates/steel',
                B: 'bigreactors:blutonium_ingot'
            },
            id: 'bigreactors:turbine/reinforced/shaft'
        },
        {
            output: 'bigreactors:reinforced_turbinerotorblade',
            pattern: ['ABA'],
            key: {
                A: '#forge:plates/steel',
                B: 'bigreactors:blutonium_ingot'
            },
            id: 'bigreactors:turbine/reinforced/blade'
        },
        {
            output: 'bigreactors:reinforced_turbinepowertapfe_active',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'bigreactors:reinforced_turbinecasing',
                B: 'extendedcrafting:redstone_ingot_block',
                C: 'thermal:rf_coil'
            },
            id: 'bigreactors:turbine/reinforced/activetap_fe'
        },
        {
            output: 'bigreactors:reinforced_turbinepowertapfe_passive',
            pattern: ['ACA', 'CBC', 'ACA'],
            key: {
                A: 'bigreactors:reinforced_turbinecasing',
                B: 'extendedcrafting:redstone_ingot_block',
                C: 'thermal:rf_coil'
            },
            id: 'bigreactors:turbine/reinforced/passivetap_fe'
        },
        {
            output: 'bigreactors:reinforced_turbinefluidport_forge_active',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'bigreactors:reinforced_turbinecasing',
                B: Item.of('elementalcraft:element_holder_fire', '{Damage:0,element_amount:10000}'),
                C: Item.of('elementalcraft:element_holder_water', '{Damage:0,element_amount:10000}')
            },
            id: 'bigreactors:turbine/reinforced/activefluidport_forge'
        },
        {
            output: 'bigreactors:reinforced_turbinefluidport_forge_passive',
            pattern: ['ACA', 'CBC', 'ACA'],
            key: {
                A: 'bigreactors:reinforced_turbinecasing',
                B: Item.of('elementalcraft:element_holder_fire', '{Damage:0,element_amount:10000}'),
                C: Item.of('elementalcraft:element_holder_water', '{Damage:0,element_amount:10000}')
            },
            id: 'bigreactors:turbine/reinforced/passivefluidport_forge'
        },
        {
            output: 'bigreactors:reinforced_turbineredstoneport',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'bigreactors:reinforced_turbinecasing',
                B: 'thermal:redstone_servo',
                C: '#forge:plates/steel',
                D: 'emendatusenigmatica:lumium_ingot'
            },
            id: 'bigreactors:turbine/reinforced/redstoneport'
        },
        {
            output: 'bigreactors:reinforced_turbinecomputerport',
            pattern: ['ACA', 'BDB', 'AEA'],
            key: {
                A: 'bigreactors:reinforced_turbinecasing',
                B: '#forge:plates/steel',
                C: 'pneumaticcraft:upgrade_matrix',
                D: 'rftoolscontrol:advanced_network_card',
                E: 'botania:mana_powder'
            },
            id: 'bigreactors:turbine/reinforced/computerport'
        },
        {
            output: 'bigreactors:reinforced_turbinechargingportfe',
            pattern: ['ACA', 'BDB', 'ACA'],
            key: {
                A: 'extendedcrafting:redstone_ingot_block',
                B: 'thermal:enderium_glass',
                C: 'pneumaticcraft:logistics_core',
                D: 'bigreactors:reinforced_turbinepowertapfe_active'
            },
            id: 'bigreactors:turbine/reinforced/chargingfe'
        },
        //Reprocessor
        {
            output: 'bigreactors:reprocessorcasing',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'pneumaticcraft:ingot_iron_compressed',
                B: 'bigreactors:cyanite_ingot',
                C: 'elementalcraft:watercrystal'
            },
            id: 'bigreactors:reprocessor/casing'
        },
        {
            output: 'bigreactors:reprocessorglass',
            pattern: ['BAB'],
            key: {
                A: 'bigreactors:reprocessorcasing',
                B: 'thermal:lumium_glass'
            },
            id: 'bigreactors:reprocessor/glass'
        },
        {
            output: 'bigreactors:reprocessorcontroller',
            pattern: ['AEA', 'BCB', 'ADA'],
            key: {
                A: 'bigreactors:reprocessorcasing',
                B: 'bigreactors:cyanite_ingot',
                C: 'arsarsenal:source_steel_ingot',
                D: 'ars_elemental:earth_focus',
                E: 'thermal:redstone_servo'
            },
            id: 'bigreactors:reprocessor/controller'
        },
        {
            output: 'bigreactors:reprocessorwasteinjector',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'bigreactors:reprocessorcasing',
                B: 'bigreactors:cyanite_ingot',
                C: 'extendedcrafting:redstone_ingot',
                D: 'create:sticky_mechanical_piston'
            },
            id: 'bigreactors:reprocessor/wasteinjector'
        },
        {
            output: 'bigreactors:reprocessorfluidinjector',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'bigreactors:reprocessorcasing',
                B: 'thermal:diving_fabric',
                C: '#forge:plates/lapis',
                D: 'create:mechanical_piston'
            },
            id: 'bigreactors:reprocessor/fluidinjector'
        },
        {
            output: 'bigreactors:reprocessoroutputport',
            pattern: ['ADA', 'BCB', 'ADA'],
            key: {
                A: 'bigreactors:reprocessorcasing',
                B: 'pneumaticcraft:smart_chest',
                C: 'engineersdecor:factory_placer',
                D: 'kubejs:extreme_circuit_board'
            },
            id: 'bigreactors:reprocessor/outputport'
        },
        {
            output: 'bigreactors:reprocessorpowerport',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'bigreactors:reprocessorcasing',
                B: 'extendedcrafting:redstone_ingot_block',
                C: 'botania:mana_diamond',
                D: 'thermal:rf_coil'
            },
            id: 'bigreactors:reprocessor/powerport'
        },
        {
            output: 'bigreactors:reprocessorcollector',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'bigreactors:reprocessorcasing',
                B: 'pneumaticcraft:ingot_iron_compressed',
                C: 'arsarsenal:source_steel_ingot',
                D: 'create:smart_chute'
            },
            id: 'bigreactors:reprocessor/collector'
        },
        //Fluidizer
        {
            output: 'bigreactors:fluidizercasing',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'pneumaticcraft:ingot_iron_compressed',
                B: '#forge:ingots/uranium',
                C: 'elementalcraft:watercrystal'
            },
            id: 'bigreactors:fluidizer/casing'
        },
        {
            output: 'bigreactors:fluidizerglass',
            pattern: ['BAB'],
            key: {
                A: 'bigreactors:fluidizercasing',
                B: 'thermal:signalum_glass'
            },
            id: 'bigreactors:fluidizer/glass'
        },
        {
            output: 'bigreactors:fluidizercontroller',
            pattern: ['ACA', 'BEB', 'ADA'],
            key: {
                A: 'bigreactors:fluidizercasing',
                B: 'bigreactors:cyanite_ingot',
                C: 'thermal:redstone_servo',
                D: 'ars_elemental:water_focus',
                E: 'kubejs:advanced_extreme_circuit_board'
            },
            id: 'bigreactors:fluidizer/controller'
        },
        {
            output: 'bigreactors:fluidizersolidinjector',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'bigreactors:fluidizercasing',
                B: 'bigreactors:cyanite_ingot',
                C: 'extendedcrafting:redstone_ingot',
                D: 'create:sticky_mechanical_piston'
            },
            id: 'bigreactors:fluidizer/solidinjector'
        },
        {
            output: 'bigreactors:fluidizerfluidinjector',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'bigreactors:fluidizercasing',
                B: 'thermal:diving_fabric',
                C: '#forge:plates/lapis',
                D: 'create:mechanical_piston'
            },
            id: 'bigreactors:fluidizer/fluidinjector'
        },
        {
            output: 'bigreactors:fluidizeroutputport',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'bigreactors:fluidizercasing',
                B: 'kubejs:extreme_circuit_board',
                C: 'pneumaticcraft:smart_chest',
                D: 'engineersdecor:factory_placer'
            },
            id: 'bigreactors:fluidizer/outputport'
        },
        {
            output: 'bigreactors:fluidizerpowerport',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'bigreactors:fluidizercasing',
                B: 'extendedcrafting:redstone_ingot_block',
                C: 'botania:mana_diamond',
                D: 'thermal:rf_coil'
            },
            id: 'bigreactors:fluidizer/powerport'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
