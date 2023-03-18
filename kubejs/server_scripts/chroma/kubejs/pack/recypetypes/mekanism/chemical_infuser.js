onEvent('recipes', (event) => {

    const id_prefix = 'chroma:pack/mekanism/chemical_infusing/';

    const recipes = [
      //Phénolsulfonephtaléine = PSP
      {
        inputLeft: 'mekanism:oxygen',
        inputRight: 'mekanism:hydrogen',
        outputGas: 'kubejs:phenolsulfonephtaleine',
        id: `${id_prefix}phenolsulfonephtaleine`
      },
      //Red Gas
      {
        inputLeft: 'kubejs:black',
        inputRight: 'kubejs:phenolsulfonephtaleine',
        outputGas: 'kubejs:red',
        id: `${id_prefix}red_gas`
      },
      //Orange Gas
      {
        inputLeft: 'kubejs:red',
        inputRight: 'mekanism:lithium',
        outputGas: 'kubejs:orange',
        id: `${id_prefix}orange_gas`
      },
      //Purple Gas
      {
        inputLeft: 'kubejs:orange',
        inputRight: 'mekanism:sulfur_trioxide',
        outputGas: 'kubejs:purple',
        id: `${id_prefix}purple_gas`
      },
      //Pink Gas
      {
        inputLeft: 'kubejs:purple',
        inputRight: 'mekanism:ethene',
        outputGas: 'kubejs:pink',
        id: `${id_prefix}pink_gas`
      },
      //Blue Gas
      {
        inputLeft: 'kubejs:pink',
        inputRight: 'mekanism:hydrogen_chloride',
        outputGas: 'kubejs:blue',
        id: `${id_prefix}blue_gas`
      },
      //Lime hexasulfuric
      {
        inputLeft: 'mekanism:sulfuric_acid',
        inputRight: 'mekanism:chlorine',
        outputGas: 'kubejs:lime_hexasulfuric',
        id: `${id_prefix}lime_hexasulfuric`
      },
      //Green Gas
      {
        inputLeft: 'kubejs:blue',
        inputRight: 'kubejs:lime_hexasulfuric',
        outputGas: 'kubejs:green',
        id: `${id_prefix}green_gas`
      },
      //Green Gas
      {
        inputLeft: 'kubejs:green',
        inputRight: 'mekanism:hydrofluoric_acid',
        outputGas: 'kubejs:light',
        id: `${id_prefix}light_gas`
      },
    ];

    recipes.forEach((recipe) => {
      event
        .custom({
            type: 'mekanism:chemical_infusing',
            leftInput: {amount:50, gas:`${recipe.inputLeft}`},
            rightInput: {amount:50, gas:`${recipe.inputRight}`},
            output: {gas:`${recipe.outputGas}`, amount:25}
        })
        .id(recipe.id);
    });
});
