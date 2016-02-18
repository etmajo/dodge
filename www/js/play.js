//State dodge.play

'use strict'

var dodge = {};

dodge.play = function () {};

dodge.play.prototype = {

  inti: function () {
    console.log("%c~~~ Booting Dodge ~~~/n Compliments of SkilStak", " color:#fdfe3; backround:073642)
  },

  preload function () {
    this.load.image('backgroud', 'assets/space.png')
  create: function () {
    this.background = this.add.tileSprite(0,0,320,568,"space.png");
    this.background.autoScroll(0,50);
    this.background.scale.set(1);
  },

  update: function () {
  }
}
