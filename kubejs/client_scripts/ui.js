events.listen("ui.main_menu", (event) => {
    event.replace((ui) => {
        ui.background("chroma:textures/bg.png");
        ui.widgetTexture = "chroma:textures/widgets.png";

        //Singleplayer
        ui.button((b) => {
            b.name = text.translate("menu.singleplayer");
            b.width = 150;
            b.x = (ui.width - 150) / 2;
            b.y = ui.height / 2 - 40;
            b.action = "minecraft:singleplayer";
            b.shadow = false;
        });

        //multiplayer
        ui.button((b) => {
            b.name = text.translate("menu.multiplayer");
            b.width = 150;
            b.x = (ui.width - 150) / 2;
            b.y = ui.height / 2 - 14;
            b.action = "minecraft:multiplayer";
            b.shadow = false;
        });

        //Pipe top
        ui.image((i) => {
            i.height = 227 * 0.25;
            i.width = 1815 * 0.25;
            i.x = (ui.width + 70) / 2;
            i.y = ui.height / 2 - 96;
            i.texture = "chroma:textures/pipetop.png";
        });

        //Pipe bottom
        ui.image((i) => {
            i.height = 198 * 0.25;
            i.width = 1870 * 0.25;
            i.x = (ui.width - 1010) / 2;
            i.y = ui.height / 2 + 83;
            i.texture = "chroma:textures/pipebottom.png";
        });

        //Mods
        ui.button((b) => {
            b.name = text.translate("fml.menu.mods");
            b.width = 73;
            b.x = (ui.width - 150) / 2;
            b.y = ui.height / 2 + 12;
            b.action = "forge:mod_list";
            b.shadow = false;
        });

        //Discord
        ui.button((b) => {
            b.name = text.of("Discord");
            b.width = 73;
            b.x = ((ui.width - 150) / 2) + b.width + 5;
            b.y = ui.height / 2 + 12;
            b.action = "https://discord.gg/cVEMguY";
            b.shadow = false;
        });

        //Bisect
        ui.button((b) => {
            b.name = text.of("Get a server !");
            b.width = 150;
            b.x = (ui.width - 150) / 2;
            b.y = ui.height / 2 + 38;
            b.action = "https://www.bisecthosting.com/chromatech";
            b.shadow = false;
        });

        //Options
        ui.button((b) => {
            b.name = text.translate("menu.options");
            b.width = 73;
            b.x = (ui.width - 150) / 2;
            b.y = ui.height / 2 + 64;
            b.action = "minecraft:options";
            b.shadow = false;
        });

        //Quit
        ui.button((b) => {
            b.name = text.of("Quit");
            b.width = 73;
            b.x = ((ui.width - 150) / 2) + b.width + 5;
            b.y = ui.height / 2 + 64;
            b.action = "minecraft:quit";
            b.shadow = false;
        });

        //Pack name
        ui.image((i) => {
            i.height = 320 * 0.30;
            i.width = 845 * 0.30;
            // i.x = (ui.width - 20) / 2;
            i.x = (ui.width - 250) / 2;
            i.y = ui.height / 2 - 125;
            i.texture = "chroma:textures/logo.png";
        });

        //Forge version
        ui.label((l) => {
            l.height = 10;
            l.name = "Forge Version: " + Platform.mods.forge.version;
            l.x = ui.width - l.width - 2;
            l.y = ui.height - 31;
        });

        //Mods loaded
        ui.label((l) => {
            l.height = 10;
            l.name = Platform.mods.size() + " Mods Loaded";
            l.x = ui.width - l.width - 2;
            l.y = ui.height - 21;
        });

        //Mojang
        ui.label((l) => {
            l.height = 10;
            l.name = "Copyright Mojang AB";
            l.x = ui.width - l.width - 2;
            l.y = ui.height - 11;
        });
    });
});
