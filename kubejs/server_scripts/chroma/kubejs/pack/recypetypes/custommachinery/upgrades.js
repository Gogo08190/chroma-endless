onEvent('cm_upgrades', event => {

    /* EnderIO : Basic Capacitor */

    event.create(Item.of('kubejs:basic_capacitor'), 1)
    .machine("custommachinery:alloy_smelter")
    .machine("custommachinery:slice_n_splice")
    .machine("custommachinery:soul_binder")
    .mulInput("custommachinery:speed", 1.25)
    .mulInput("custommachinery:energy", 1.25)

    /* EnderIO : Double-Layer Capacitor */

    event.create(Item.of('kubejs:double-layer_capacitor'), 1)
    .machine("custommachinery:alloy_smelter")
    .machine("custommachinery:slice_n_splice")
    .machine("custommachinery:soul_binder")
    .mulInput("custommachinery:speed", 1.5)
    .mulInput("custommachinery:energy", 1.5)

    /* EnderIO : Octadic Capacitor */

    event.create(Item.of('kubejs:octadic_capacitor'), 1)
    .machine("custommachinery:alloy_smelter")
    .machine("custommachinery:slice_n_splice")
    .machine("custommachinery:soul_binder")
    .mulInput("custommachinery:speed", 2)
    .mulInput("custommachinery:energy", 2)

    /* Refined Storage : Speed Upgrade */

    event.create(Item.of('refinedstorage:speed_upgrade'), 1)
    .machine("custommachinery:inscriber")
    .mulInput("custommachinery:speed", 1.25)
    .mulInput("custommachinery:energy", 1.25)
})
