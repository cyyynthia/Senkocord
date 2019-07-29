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
      'https://cdn.discordapp.com/attachments/460918145566375936/605146017196933164/62.jpg'
    ];
  }

  startPlugin () {
    this.registerCommand(
      'heysenko',
      [],
      'Replaces every image with a random image of Senko.',
      '{c}',
      this.heysenko.bind(this)
    );
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
