/*
 * Copyright (c) 2020 Bowser65
 * Licensed under the Open Software License version 3.0
 */

const { Plugin } = require('powercord/entities');

module.exports = class HeySenko extends Plugin {
  constructor () {
    super();
    this.URLs = [
      'https://cdn.discordapp.com/attachments/460918145566375936/605158488586453131/602431001288769566.png',
      'https://cdn.discordapp.com/attachments/460918145566375936/605146064726523934/Senko-san.gif',
      'https://cdn.discordapp.com/attachments/460918145566375936/605146018690105376/59.jpg',
      'https://cdn.discordapp.com/attachments/460918145566375936/605146018690105375/57.jpg',
      'https://cdn.discordapp.com/attachments/460918145566375936/605146018228469762/65.jpg',
      'https://cdn.discordapp.com/attachments/460918145566375936/605146018228469760/56.jpg',
      'https://cdn.discordapp.com/attachments/460918145566375936/605146017633009705/58.jpg',
      'https://cdn.discordapp.com/attachments/401755854744846337/605111862354509849/unknown.png',
      'https://cdn.discordapp.com/attachments/460918145566375936/606988991413092402/Download-2.jpg',
      'https://cdn.discordapp.com/attachments/460918145566375936/606988522880106518/My_favorite_moment_in_the_anime.jpg',
      'https://cdn.discordapp.com/attachments/460918145566375936/606988492450299959/54.jpg',
      'https://cdn.discordapp.com/attachments/460918145566375936/606988489405366284/53.jpg',
      'https://cdn.discordapp.com/attachments/460918145566375936/606988488755380244/56a.jpg',
      'https://cdn.discordapp.com/attachments/460918145566375936/606982882371698698/70.jpg',
      'https://cdn.discordapp.com/attachments/460918145566375936/606259036282683404/69.jpg',
      'https://cdn.discordapp.com/attachments/460918145566375936/606248863950700545/68.jpg',
      'https://cdn.discordapp.com/attachments/460918145566375936/606248863950700544/67.jpg',
      'https://cdn.discordapp.com/attachments/460918145566375936/606211245242056735/unknown.png',
      'https://cdn.discordapp.com/attachments/460918145566375936/606210785848459314/unknown.png',
      'https://cdn.discordapp.com/attachments/460918145566375936/606208547193225237/unknown.png',
      'https://cdn.discordapp.com/attachments/460918145566375936/606207264289718289/unknown.png',
      'https://cdn.discordapp.com/attachments/460918145566375936/605547076805197835/66.jpg',
      'https://cdn.discordapp.com/attachments/460918145566375936/605547076805197834/PSX_20190730_024618.jpg',
      'https://cdn.discordapp.com/attachments/460918145566375936/605146017196933164/62.jpg'
    ];
  }

  startPlugin () {
    powercord.api.commands.registerCommand({
      command: 'heysenko',
      description: 'Replaces every image with a random image of Senko.',
      usage: '{c}',
      executor: this.heysenko.bind(this)
    })
  }

  pluginWillUnload () {
    powercord.api.commands.unregisterCommand('command-name')
  }

  getRandomURL () {
    return this.URLs[Math.floor(Math.random() * this.URLs.length)];
  }

  heysenko () {
    document.querySelectorAll('[style*="background-image"]')
      .forEach(({ style }) => (
        style.backgroundImage = `url("${this.getRandomURL()}")`
      ));

    document.querySelectorAll('img')
      .forEach(image => (
        image.src = this.getRandomURL()
      ));
  }
};
