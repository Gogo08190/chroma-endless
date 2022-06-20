onEvent('ponder.registry', (event) => {
    event
        .create(
            'test:learnponder',
            'kubejs:sac'
        )
        .scene(
            'SAC',
            `L'existance d'un sac`,
            'chroma:test/learponder/le_sac',
            (scene, util) => {
            
            scene.showBasePlate();

            scene.idle(20);

            scene
            .overlay()
            .showText(80)
            .colored(PonderPalette.WHITE)
            .text(`Vous voulez comprendre comment fonctionne ponder et ou comment fonctionne le SAC, ce test est fait pour vous.`)
            .independent(60);

            scene.idle(60);
            }
        )




});