//State dodge.play

'use strict'

var dodge = {};

dodge.play = function () {};

dodge.play.prototype = {

  inti: function () {
    console.log("%c~~~ Booting Dodge ~~~/n Compliments of SkilStak", " color:#fdfe3; background:#073642");

  },

  preload: function () {
    this.load.image('background','assets/space.png');
    this.load.sprintsheet('dodger','assets/ship.png',46,64,2);
    this.load.sprintsheet('dodging','assets/',46,64,2)
  },

  create: function () {
    this.background = this.add.tileSprite(0,0,320,568,"space.png");
    this.background.autoScroll(0,50);
    this.background.scale.set(1);

    this.dodger = this.add.sprite(160,518, 'dodger');
    this.dodger.set.anchor.set(0.5,0.5);

    this.dodging = this.add.sprite(160,518, 'dodging')
    this.dodging.set.anchor.set(0.5,0.5);

    this.cursors = game.input.keybourd.createCursorekeys()
  },

  update: function () {
    if (this.cursore.left.isDown) {
      this.dodger.x -= 10;
    }
    if (this.cursore.right.isDown) {
      this.dodger.x -= 10;
    }
  }
};

