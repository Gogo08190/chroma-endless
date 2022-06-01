onEvent('block.registry', event => {
    event.create('spirit_attuned_block')
            .material('metal')
         .hardness(5)
         .displayName('Spirit attuned gem block') // No longer required in 1.18.2+

  })