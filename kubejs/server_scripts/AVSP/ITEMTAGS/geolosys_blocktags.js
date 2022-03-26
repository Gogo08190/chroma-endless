//   #    #     #  #####  ######  
//  # #   #     # #     # #     # 
// #   #  #     # #       #     # 
//#     # #     #  #####  ######  
//#######  #   #        # #       
//#     #   # #   #     # #       
//#     #    #     #####  #       
//
//SCRIPT FOR RETAGGING GEOLOSYS ORES
//BY NEEPNOOP & ANOKKA / 2021
//
onEvent('block.tags', event => {
//GEOLOSYS AZURITE
	event.remove('forge:ores', 'geolosys:azurite_ore')
	event.remove('forge:ores/copper', 'geolosys:azurite_ore')
	event.add('forge:ores/lead', 'geolosys:azurite_ore')
	event.add('forge:ores', 'geolosys:azurite_ore')

//GEOLOSYS LIMONITE
	event.remove('forge:ores', 'geolosys:limonite_ore')
	event.remove('forge:ores/nickel', 'geolosys:limonite_ore')
	event.remove('forge:ores/iron', 'geolosys:limonite_ore')
	event.add('forge:ores/nickel', 'geolosys:limonite_ore')
	event.add('forge:ores', 'geolosys:limonite_ore')

//GEOLOSYS TEALLITE
	event.remove('forge:ores', 'geolosys:teallite_ore')
	event.remove('forge:ores/tin', 'geolosys:teallite_ore')
	event.remove('forge:ores/emerald', 'geolosys:teallite_ore')
	event.add('forge:ores/tin', 'geolosys:teallite_ore')
	event.add('forge:ores', 'geolosys:limonite_ore')

//GEOLOSYS GALENA
	event.remove('forge:ores', 'geolosys:galena_ore')
	event.remove('forge:ores/lead', 'geolosys:galena_ore')
	event.remove('forge:ores/silver', 'geolosys:galena_ore')
	event.add('forge:ores/silver', 'geolosys:galena_ore')
	event.add('forge:ores', 'geolosys:galena_ore')

//GEOLOSYS PLATINUM
	event.remove('forge:ores', 'geolosys:platinum_ore')
	event.remove('forge:ores/platinum', 'geolosys:platinum_ore')
	event.remove('forge:ores/osmium', 'geolosys:platinum_ore')
	event.add('forge:ores/osmium', 'geolosys:platinum_ore')
	event.add('forge:ores', 'geolosys:platinum_ore')

//GEOLOSYS AUTUNITE
	event.remove('forge:ores', 'geolosys:autunite_ore')
	event.remove('forge:ores/uranium', 'geolosys:autunite_ore')
	event.remove('forge:ores/yellorium', 'geolosys:autunite_ore')
	event.add('forge:ores/uranium', 'geolosys:autunite_ore')
	event.add('forge:ores', 'geolosys:autunite_ore')
//
//fin
//
})