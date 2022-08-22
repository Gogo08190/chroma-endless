onEvent('recipes', e => {
  function dShaped(result, pattern, count) {
    e.custom({
      type: 'cucumber:shaped_no_mirror',
      pattern: pattern,
      key: {
        R: {
          item: 'kubejs:rgb_jelly'
        }
      },
      result: Item.of(result, !!count ? count : 1).toResultJson()
    })
  }

  dShaped('minecraft:green_dye', [
    '  R',
    'RR ',
    '   '
  ], 6)
  dShaped('minecraft:light_gray_dye', [
    ' R ',
    ' R ',
    '  R'
  ], 6)
  dShaped('minecraft:lime_dye', [
    '  R',
    '  R',
    '  R'
  ], 6)
  dShaped('minecraft:black_dye', [
    '   ',
    'RR ',
    '  R'
  ], 6)
  dShaped('minecraft:purple_dye', [
    '  R',
    '  R',
    ' R '
  ], 6)
  dShaped('minecraft:pink_dye', [
    'R  ',
    ' R ',
    '  R'
  ], 6)
  dShaped('minecraft:light_blue_dye', [
    'R  ',
    'R  ',
    'R  '
  ], 6)
  dShaped('minecraft:brown_dye', [
    '  R',
    ' R ',
    '  R'
  ], 6)
  dShaped('minecraft:brown_dye', [
    '  R',
    ' R ',
    '  R'
  ], 6)
  dShaped('minecraft:white_dye', [
    'RRR',
    '   ',
    '   '
  ], 6)
  dShaped('minecraft:red_dye', [
    '  R',
    ' R ',
    ' R '
  ], 6)
  dShaped('minecraft:gray_dye', [
    'R R',
    '   ',
    ' R '
  ], 6)
  dShaped('minecraft:magenta_dye', [
    '   ',
    '   ',
    'RRR'
  ], 6)
  dShaped('minecraft:orange_dye', [
    '   ',
    'RRR',
    '   '
  ], 6)
  dShaped('minecraft:blue_dye', [
    '   ',
    ' R ',
    'R R'
  ], 6)
  dShaped('minecraft:yellow_dye', [
    ' R ',
    ' R ',
    ' R '
  ], 6)
  dShaped('minecraft:cyan_dye', [
    'R R',
    ' R ',
    '   '
  ], 6)
})
