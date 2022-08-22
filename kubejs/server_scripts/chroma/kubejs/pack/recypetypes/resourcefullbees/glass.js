onEvent('recipes', e => {
  function dShaped(result, pattern, count) {
    e.custom({
      type: 'cucumber:shaped_no_mirror',
      pattern: pattern,
      key: {
        R: {
          item: 'kubejs:rgb_glass_shard'
        }
      },
      result: Item.of(result, !!count ? count : 1).toResultJson()
    })
  }

  dShaped('minecraft:green_stained_glass', [
    '  R',
    'RR ',
    '   '
  ], 6)
  dShaped('minecraft:light_gray_stained_glass', [
    ' R ',
    ' R ',
    '  R'
  ], 6)
  dShaped('minecraft:lime_stained_glass', [
    '  R',
    '  R',
    '  R'
  ], 6)
  dShaped('minecraft:black_stained_glass', [
    '   ',
    'RR ',
    '  R'
  ], 6)
  dShaped('minecraft:purple_stained_glass', [
    '  R',
    '  R',
    ' R '
  ], 6)
  dShaped('minecraft:pink_stained_glass', [
    'R  ',
    ' R ',
    '  R'
  ], 6)
  dShaped('minecraft:light_blue_stained_glass', [
    'R  ',
    'R  ',
    'R  '
  ], 6)
  dShaped('minecraft:brown_stained_glass', [
    '  R',
    ' R ',
    '  R'
  ], 6)
  dShaped('minecraft:brown_stained_glass', [
    '  R',
    ' R ',
    '  R'
  ], 6)
  dShaped('minecraft:white_stained_glass', [
    'RRR',
    '   ',
    '   '
  ], 6)
  dShaped('minecraft:red_stained_glass', [
    '  R',
    ' R ',
    ' R '
  ], 6)
  dShaped('minecraft:gray_stained_glass', [
    'R R',
    '   ',
    ' R '
  ], 6)
  dShaped('minecraft:magenta_stained_glass', [
    '   ',
    '   ',
    'RRR'
  ], 6)
  dShaped('minecraft:orange_stained_glass', [
    '   ',
    'RRR',
    '   '
  ], 6)
  dShaped('minecraft:blue_stained_glass', [
    '   ',
    ' R ',
    'R R'
  ], 6)
  dShaped('minecraft:yellow_stained_glass', [
    ' R ',
    ' R ',
    ' R '
  ], 6)
  dShaped('minecraft:cyan_stained_glass', [
    'R R',
    ' R ',
    '   '
  ], 6)
  dShaped('minecraft:glass', [
    '   ',
    ' RR',
    'R  '
  ], 6)
})
