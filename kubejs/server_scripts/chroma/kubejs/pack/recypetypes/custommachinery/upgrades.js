onEvent('cm_upgrades', event => {

    /* EnderIO : Basic Capacitor */

    event.create(Item.of('kubejs:basic_capacitor'), 1)
    .machine("custommachinery:alloy_smelter")
    .machine("custommachinery:slice_n_splice")
    .machine("custommachinery:soul_binder")
    .mulInput("custommachinery:speed", 0.8)
    .mulInput("custommachinery:energy", 0.8)

    /* EnderIO : Double-Layer Capacitor */

    event.create(Item.of('kubejs:double-layer_capacitor'), 1)
    .machine("custommachinery:alloy_smelter")
    .machine("custommachinery:slice_n_splice")
    .machine("custommachinery:soul_binder")
    .mulInput("custommachinery:speed", 0.65)
    .mulInput("custommachinery:energy", 0.65)

    /* EnderIO : Octadic Capacitor */

    event.create(Item.of('kubejs:octadic_capacitor'), 1)
    .machine("custommachinery:alloy_smelter")
    .machine("custommachinery:slice_n_splice")
    .machine("custommachinery:soul_binder")
    .mulInput("custommachinery:speed", 0.5)
    .mulInput("custommachinery:energy", 0.5)

    /* Refined Storage : Speed Upgrade */

    event.create(Item.of('refinedstorage:speed_upgrade'), 1)
    .machine("custommachinery:inscriber")
    .mulInput("custommachinery:speed", 0.8)
    .mulInput("custommachinery:energy", 0.8)
})
