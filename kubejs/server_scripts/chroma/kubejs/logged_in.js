// Listen to player login event
onEvent('player.logged_in', event => {
  // Check if player doesn't have "starting_items" stage yet
  if (!event.player.stages.has('starting_items')) {
    // Add the stage
    event.player.stages.add('starting_items')
    // Give some items to player
    event.player.give('waystones:waystone')
    event.player.give('8x minecraft:apple')
    event.player.give('akashictome:tome')
    event.player.give('ftbquests:book')
  }
})
