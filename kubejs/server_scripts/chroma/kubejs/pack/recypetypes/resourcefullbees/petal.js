onEvent('recipes', e => {
  function dShaped(result, pattern, count) {
    e.custom({
      type: 'cucumber:shaped_no_mirror',
      pattern: pattern,
      key: {
        R: {
          item: 'kubejs:rgb_petal'
        }
      },
      result: Item.of(result, !!count ? count : 1).toResultJson()
    })
  }

  dShaped('botania:green_petal', [
    '  R',
    'RR ',
    '   '
  ], 6)
  dShaped('botania:light_gray_petal', [
    ' R ',
    ' R ',
    '  R'
  ], 6)
  dShaped('botania:lime_petal', [
    '  R',
    '  R',
    '  R'
  ], 6)
  dShaped('botania:black_petal', [
    '   ',
    'RR ',
    '  R'
  ], 6)
  dShaped('botania:purple_petal', [
    '  R',
    '  R',
    ' R '
  ], 6)
  dShaped('botania:pink_petal', [
    'R  ',
    ' R ',
    '  R'
  ], 6)
  dShaped('botania:light_blue_petal', [
    'R  ',
    'R  ',
    'R  '
  ], 6)
  dShaped('botania:brown_petal', [
    '  R',
    ' R ',
    '  R'
  ], 6)
  dShaped('botania:brown_petal', [
    '  R',
    ' R ',
    '  R'
  ], 6)
  dShaped('botania:white_petal', [
    'RRR',
    '   ',
    '   '
  ], 6)
  dShaped('botania:red_petal', [
    '  R',
    ' R ',
    ' R '
  ], 6)
  dShaped('botania:gray_petal', [
    'R R',
    '   ',
    ' R '
  ], 6)
  dShaped('botania:magenta_petal', [
    '   ',
    '   ',
    'RRR'
  ], 6)
  dShaped('botania:orange_petal', [
    '   ',
    'RRR',
    '   '
  ], 6)
  dShaped('botania:blue_petal', [
    '   ',
    ' R ',
    'R R'
  ], 6)
  dShaped('botania:yellow_petal', [
    ' R ',
    ' R ',
    ' R '
  ], 6)
  dShaped('botania:cyan_petal', [
    'R R',
    ' R ',
    '   '
  ], 6)
})
