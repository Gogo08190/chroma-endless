onEvent('recipes', (event) => {
    /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

    const recipes = [
      ///Lv wire coil
      {
          output: Item.of('immersiveengineering:wirecoil_copper', 4),
          pattern: ['AAA', 'ABA', 'AAA'],
          key: {
              A:'#forge:wires/copper',
              B:'immersiveengineering:stick_treated'
          },
          id: 'immersiveengineering:crafting/wirecoil_copper'
      },
      ///Mv wire coil
      {
          output: Item.of('immersiveengineering:wirecoil_electrum', 4),
          pattern: ['AAA', 'ABA', 'AAA'],
          key: {
              A:'#forge:wires/electrum',
              B:'immersiveengineering:stick_treated'
          },
          id: 'immersiveengineering:crafting/wirecoil_electrum'
      },
      ///Hv wire coil
      {
          output: Item.of('immersiveengineering:wirecoil_steel', 4),
          pattern: ['ABA', 'BCB', 'ABA'],
          key: {
              A:'#forge:wires/aluminum',
              B:'#forge:wires/steel',
              C:'immersiveengineering:stick_treated'
          },
          id: 'immersiveengineering:crafting/wirecoil_steel'
      },
      ///Lv insulated wire coil
      {
          output: Item.of('immersiveengineering:wirecoil_copper_ins', 4),
          pattern: ['ABA', 'BCB', 'ABA'],
          key: {
              A:'immersiveengineering:hemp_fabric',
              B:'immersiveengineering:wirecoil_copper',
              C:'immersiveengineering:stick_treated'
          },
          id: 'immersiveengineering:crafting/wirecoil_copper_ins'
      },
      ///Redstone wire coil
      {
          output: Item.of('immersiveengineering:wirecoil_redstone', 4),
          pattern: ['ABA', 'BCB', 'ABA'],
          key: {
              A:'extendedcrafting:redstone_ingot',
              B:'#forge:wires/aluminum',
              C:'immersiveengineering:stick_treated'
          },
          id: 'immersiveengineering:crafting/wirecoil_redstone'
      },
      ///Tough Fabric
      {
          output: 'immersiveengineering:hemp_fabric',
          pattern: ['AAA', 'ABA', 'AAA'],
          key: {
              A:'immersiveengineering:hemp_fiber',
              B:'immersiveengineering:stick_treated'
          },
          id: 'immersiveengineering:crafting/hemp_fabric'
      },
      ///Mv insulated wire coil
      {
          output: Item.of('immersiveengineering:wirecoil_electrum_ins', 4),
          pattern: ['ABA', 'BCB', 'ABA'],
          key: {
              A:'immersiveengineering:hemp_fabric',
              B:'immersiveengineering:wirecoil_electrum',
              C:'immersiveengineering:stick_treated'
          },
          id: 'immersiveengineering:crafting/wirecoil_electrum_ins'
      },
      ///Copper coil block
      {
          output: 'immersiveengineering:coil_lv',
          pattern: ['AAA', 'ABA', 'AAA'],
          key: {
              A:'immersiveengineering:wirecoil_copper',
              B:'#forge:ingots/steel'
          },
          id: 'immersiveengineering:crafting/coil_lv'
      },
      ///Electrum coil block
      {
          output: 'immersiveengineering:coil_mv',
          pattern: ['AAA', 'ABA', 'AAA'],
          key: {
              A:'immersiveengineering:wirecoil_electrum',
              B:'#forge:ingots/steel'
          },
          id: 'immersiveengineering:crafting/coil_mv'
      },
      ///High voltage coil block
      {
          output: 'immersiveengineering:coil_hv',
          pattern: ['AAA', 'ABA', 'AAA'],
          key: {
              A:'immersiveengineering:wirecoil_steel',
              B:'#forge:ingots/steel'
          },
          id: 'immersiveengineering:crafting/coil_hv'
      },
      ///Dynamo
      {
          output: 'immersiveengineering:dynamo',
          pattern: ['AAA', 'BCB', 'AAA'],
          key: {
              A:'#forge:ingots/steel',
              B:'extendedcrafting:redstone_ingot',
              C:'immersiveengineering:coil_lv'
          },
          id: 'immersiveengineering:crafting/dynamo'
      },
      ///Steel scaffolding
      {
          output: Item.of('immersiveengineering:steel_scaffolding_standard',3),
          pattern: ['AAA', ' B ', 'B B'],
          key: {
              A:'#forge:ingots/steel',
              B:'#forge:rods/steel'
          },
          id: 'immersiveengineering:crafting/steel_scaffolding_standard'
      },
      ///Aluminum scaffolding
      {
          output: Item.of('immersiveengineering:alu_scaffolding_standard',3),
          pattern: ['AAA', ' B ', 'B B'],
          key: {
              A:'#forge:ingots/aluminum',
              B:'#forge:rods/aluminum'
          },
          id: 'immersiveengineering:crafting/alu_scaffolding_standard'
      },
      ///Redstone engineering block
      {
          output: Item.of('immersiveengineering:rs_engineering',2),
          pattern: ['ABA', 'BCB', 'ABA'],
          key: {
              A:'immersiveengineering:sheetmetal_steel',
              B:'extendedcrafting:redstone_ingot',
              C:'immersiveengineering:sheetmetal_copper'
          },
          id: 'immersiveengineering:crafting/rs_engineering'
      },
      ///Heavy engineering block
      {
          output: Item.of('immersiveengineering:heavy_engineering',2),
          pattern: ['ABA', 'BCB', 'ABA'],
          key: {
              A:'immersiveengineering:sheetmetal_steel',
              B:'immersiveengineering:component_steel',
              C:'immersiveengineering:sheetmetal_electrum'
          },
          id: 'immersiveengineering:crafting/heavy_engineering'
      },
      ///Light engineering block
      {
          output: Item.of('immersiveengineering:light_engineering',2),
          pattern: ['ABA', 'BCB', 'ABA'],
          key: {
              A:'immersiveengineering:sheetmetal_iron',
              B:'immersiveengineering:component_steel',
              C:'immersiveengineering:sheetmetal_copper'
          },
          id: 'immersiveengineering:crafting/light_engineering'
      },
      ///Generator Block
      {
          output: Item.of('immersiveengineering:generator',2),
          pattern: ['ABA', 'BCB', 'ABA'],
          key: {
              A:'immersiveengineering:sheetmetal_steel',
              B:'#forge:plates/electrum',
              C:'immersiveengineering:dynamo'
          },
          id: 'immersiveengineering:crafting/generator'
      },
      ///Radiator Block
      {
          output: Item.of('immersiveengineering:radiator',2),
          pattern: ['ABA', 'BCB', 'ABA'],
          key: {
              A:'immersiveengineering:sheetmetal_steel',
              B:'#forge:plates/copper',
              C:'immersiveengineering:coil_hv'
          },
          id: 'immersiveengineering:crafting/radiator'
      },
      ///Furnace heater
      {
          output: 'immersiveengineering:furnace_heater',
          pattern: ['ABA', 'BCB', 'ADA'],
          key: {
              A:'immersiveengineering:sheetmetal_steel',
              B:'immersiveengineering:sheetmetal_copper',
              C:'immersiveengineering:coil_mv',
              D:'extendedcrafting:redstone_ingot'
          },
          id: 'immersiveengineering:crafting/furnace_heater'
      },
      ///Thermoelectric generator
      {
          output: 'immersiveengineering:thermoelectric_generator',
          pattern: ['AAA', 'BCB', 'BBB'],
          key: {
              A:'immersiveengineering:sheetmetal_steel',
              B:'immersiveengineering:sheetmetal_constantan',
              C:'immersiveengineering:coil_hv'
          },
          id: 'immersiveengineering:crafting/thermoelectric_generator'
      },
      ///Charging station
      {
          output: 'immersiveengineering:charging_station',
          pattern: ['ABA', 'CCC', 'DED'],
          key: {
              A:'#forge:ingots/steel',
              B:'immersiveengineering:connector_hv',
              C:'#forge:glass',
              D:'#forge:treated_wood',
              E:'immersiveengineering:coil_hv'
          },
          id: 'immersiveengineering:crafting/charging_station'
      },
      ///Engineer s workbench
      {
          output: 'immersiveengineering:workbench',
          pattern: ['   ', 'ABB', 'C D'],
          key: {
              A:'immersiveengineering:component_steel',
              B:'#forge:treated_wood_slab',
              C:'immersiveengineering:craftingtable',
              D:'immersiveengineering:treated_fence'
          },
          id: 'immersiveengineering:crafting/workbench'
      },
      ///Insulated glass
      {
          output: 'immersiveengineering:insulating_glass',
          pattern: [' A ', 'BCB', ' A '],
          key: {
              A:'#forge:glass',
              B:'emendatusenigmatica:iron_dust',
              C:'#forge:dyes/green'
          },
          id: 'immersiveengineering:crafting/insulating_glass'
      },
      ///Amplifier electron tube
      {
          output: 'immersiveengineering:toolupgrade_revolver_electro',
          pattern: ['AAA', 'BBB', 'C C'],
          key: {
              A:'immersiveengineering:electron_tube',
              B:'immersiveengineering:wirecoil_steel',
              C:'immersiveengineering:coil_mv'
          },
          id: 'immersiveengineering:crafting/toolupgrade_revolver_electro'
      }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
