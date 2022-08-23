onEvent('item.tags', (event) => {
  event.add('itemfilters:check_nbt', [
      'extendedcrafting:singularity',
      'patchouli:guide_book',
      'immersiveengineering:blueprint',
      'tconstruct:pickaxe_head'
  ]);
});
