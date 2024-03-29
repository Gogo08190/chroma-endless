onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/pneumaticcraft/assembly/';

    const recipes = [
      {
          input: { item: 'kubejs:unassembled_1k_storage_part', count: 1 },
          output: { item: 'refinedstorage:1k_storage_part', count: 1 },
          program: 'laser',
          id: 'refinedstorage:1k_storage_part'
      },
      {
          input: { item: 'kubejs:unassembled_4k_storage_part', count: 1 },
          output: { item: 'refinedstorage:4k_storage_part', count: 1 },
          program: 'laser',
          id: 'refinedstorage:4k_storage_part'
      },
      {
          input: { item: 'kubejs:unassembled_16k_storage_part', count: 1 },
          output: { item: 'refinedstorage:16k_storage_part', count: 1 },
          program: 'laser',
          id: 'refinedstorage:16k_storage_part'
      },
      {
          input: { item: 'kubejs:unassembled_64k_storage_part', count: 1 },
          output: { item: 'refinedstorage:64k_storage_part', count: 1 },
          program: 'laser',
          id: 'refinedstorage:64k_storage_part'
      },
      {
          input: { item: 'kubejs:unassembled_256k_storage_part', count: 1 },
          output: { item: 'extrastorage:storagepart_256k', count: 1 },
          program: 'laser',
          id: 'extrastorage:part/storagepart_256k'
      },
      {
          input: { item: 'kubejs:unassembled_1024k_storage_part', count: 1 },
          output: { item: 'extrastorage:storagepart_1024k', count: 1 },
          program: 'laser',
          id: 'extrastorage:part/storagepart_1024k'
      },
      {
          input: { item: 'kubejs:unassembled_4096k_storage_part', count: 1 },
          output: { item: 'extrastorage:storagepart_4096k', count: 1 },
          program: 'laser',
          id: 'extrastorage:part/storagepart_4096k'
      },
      {
          input: { item: 'kubejs:unassembled_16384k_storage_part', count: 1 },
          output: { item: 'extrastorage:storagepart_16384k', count: 1 },
          program: 'laser',
          id: 'extrastorage:part/storagepart_16384k'
      },
      {
          input: { item: 'kubejs:unassembled_64k_fluid_storage_part', count: 1 },
          output: { item: 'refinedstorage:64k_fluid_storage_part', count: 1 },
          program: 'laser',
          id: 'refinedstorage:64k_fluid_storage_part'
      },
      {
          input: { item: 'kubejs:unassembled_256k_fluid_storage_part', count: 1 },
          output: { item: 'refinedstorage:256k_fluid_storage_part', count: 1 },
          program: 'laser',
          id: 'refinedstorage:256k_fluid_storage_part'
      },
      {
          input: { item: 'kubejs:unassembled_1024k_fluid_storage_part', count: 1 },
          output: { item: 'refinedstorage:1024k_fluid_storage_part', count: 1 },
          program: 'laser',
          id: 'refinedstorage:1024k_fluid_storage_part'
      },
      {
          input: { item: 'kubejs:unassembled_4096k_fluid_storage_part', count: 1 },
          output: { item: 'refinedstorage:4096k_fluid_storage_part', count: 1 },
          program: 'laser',
          id: 'refinedstorage:4096k_fluid_storage_part'
      },
      {
          input: { item: 'kubejs:unassembled_16384k_fluid_storage_part', count: 1 },
          output: { item: 'extrastorage:storagepart_16384k_fluid', count: 1 },
          program: 'laser',
          id: 'extrastorage:part/storagepart_16384k_fluid'
      },
      {
          input: { item: 'kubejs:unassembled_65536k_fluid_storage_part', count: 1 },
          output: { item: 'extrastorage:storagepart_65536k_fluid', count: 1 },
          program: 'laser',
          id: 'extrastorage:part/storagepart_65536k_fluid'
      },
      {
          input: { item: 'kubejs:unassembled_262144k_fluid_storage_part', count: 1 },
          output: { item: 'extrastorage:storagepart_262144k_fluid', count: 1 },
          program: 'laser',
          id: 'extrastorage:part/storagepart_262144k_fluid'
      },
      {
          input: { item: 'kubejs:unassembled_1048576k_fluid_storage_part', count: 1 },
          output: { item: 'extrastorage:storagepart_1048576k_fluid', count: 1 },
          program: 'laser',
          id: 'extrastorage:part/storagepart_1048576k_fluid'
      },
      {
          input: { item: 'kubejs:contained_litherite_crystal', count: 1 },
          output: { item: 'envirocore:litherite_crystal', count: 2 },
          program: 'laser',
          id: 'envirocore:items/ct_litherite2'
      },
      {
          input: { item: 'industrialforegoing:laser_lens0', count: 1 },
          output: { item: 'envirocore:lens', count: 1 },
          program: 'laser',
          id: 'envirotech:block/ct_lens'
      },
      {
          input: { item: 'draconicevolution:draconium_dust', count: 1 },
          output: { item: 'kubejs:purified_draconium_dust', count: 2 },
          program: 'laser',
          id: `${id_prefix}purified_draconium_dust`
      },
      {
          input: { item: 'ironjetpacks:terrasteel_cell', count: 1 },
          output: { item: 'ironjetpacks:regalium_cell', count: 1 },
          program: 'laser',
          id: `${id_prefix}regalium_cell`
      }
    ];

    recipes.forEach((recipe) => {
        recipe.input.type = 'pneumaticcraft:stacked_item';
        event
            .custom({
                type: `pneumaticcraft:assembly_${recipe.program}`,
                input: recipe.input,
                result: recipe.output,
                program: recipe.program
            })
            .id(recipe.id);
    });
});
