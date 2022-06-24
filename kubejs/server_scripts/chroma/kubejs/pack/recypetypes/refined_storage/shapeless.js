onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/refined_storage/shapeless/';

    const recipes = [
      {
          output: 'kubejs:unassembled_1k_storage_part',
          inputs: ['refinedstorage:1k_storage_part'],
          id: `${id_prefix}unasambled_1k_storage_part_from_1k_storage_part`
      },
      {
          output: 'kubejs:unassembled_4k_storage_part',
          inputs: ['refinedstorage:4k_storage_part'],
          id: `${id_prefix}unasambled_4k_storage_part_from_4k_storage_part`
      },
      {
          output: 'kubejs:unassembled_16k_storage_part',
          inputs: ['refinedstorage:16k_storage_part'],
          id: `${id_prefix}unasambled_16k_storage_part_from_16k_storage_part`
      },
      {
          output: 'kubejs:unassembled_64k_storage_part',
          inputs: ['refinedstorage:64k_storage_part'],
          id: `${id_prefix}unasambled_64k_storage_part_from_64k_storage_part`
      },
      {
          output: 'kubejs:unassembled_256k_storage_part',
          inputs: ['extrastorage:storagepart_256k'],
          id: `${id_prefix}unasambled_256k_storage_part_from_256k_storage_part`
      },
      {
          output: 'kubejs:unassembled_1024k_storage_part',
          inputs: ['extrastorage:storagepart_1024k'],
          id: `${id_prefix}unasambled_1024k_storage_part_from_1024k_storage_part`
      },
      {
          output: 'kubejs:unassembled_4096k_storage_part',
          inputs: ['extrastorage:storagepart_4096k'],
          id: `${id_prefix}unasambled_4096k_storage_part_from_4096k_storage_part`
      },
      {
          output: 'kubejs:unassembled_16384k_storage_part',
          inputs: ['extrastorage:storagepart_16384k'],
          id: `${id_prefix}unasambled_16384k_storage_part_from_16384k_storage_part`
      },
      {
          output: 'kubejs:unassembled_64k_fluid_storage_part',
          inputs: ['refinedstorage:64k_fluid_storage_part'],
          id: `${id_prefix}unasambled_64k_fluid_storage_part_from_64k_fluid_storage_part`
      },
      {
          output: 'kubejs:unassembled_1024k_fluid_storage_part',
          inputs: ['refinedstorage:1024k_fluid_storage_part'],
          id: `${id_prefix}unasambled_1024k_fluid_storage_part_from_1024k_fluid_storage_part`
      },
      {
          output: 'kubejs:unassembled_256k_fluid_storage_part',
          inputs: ['refinedstorage:256k_fluid_storage_part'],
          id: `${id_prefix}unasambled_256k_fluid_storage_part_from_256k_fluid_storage_part`
      },
      {
          output: 'kubejs:unassembled_4096k_fluid_storage_part',
          inputs: ['refinedstorage:4096k_fluid_storage_part'],
          id: `${id_prefix}unasambled_4096k_fluid_storage_part_from_4096k_fluid_storage_part`
      },
      {
          output: 'kubejs:unassembled_16384k_fluid_storage_part',
          inputs: ['extrastorage:storagepart_16384k_fluid'],
          id: `${id_prefix}unasambled_16384k_fluid_storage_part_from_16384k_fluid_storage_part`
      },
      {
          output: 'kubejs:unassembled_65536k_fluid_storage_part',
          inputs: ['extrastorage:storagepart_65536k_fluid'],
          id: `${id_prefix}unasambled_65536k_fluid_storage_part_from_65536k_fluid_storage_part`
      },
      {
          output: 'kubejs:unassembled_262144k_fluid_storage_part',
          inputs: ['extrastorage:storagepart_262144k_fluid'],
          id: `${id_prefix}unasambled_262144k_fluid_storage_part_from_262144k_fluid_storage_part`
      },
      {
          output: 'kubejs:unassembled_1048576k_fluid_storage_part',
          inputs: ['extrastorage:storagepart_1048576k_fluid'],
          id: `${id_prefix}unasambled_1048576k_fluid_storage_part_from_1048576k_fluid_storage_part`
      }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
