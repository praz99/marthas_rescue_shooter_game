import Phaser from 'phaser';
import createLabel from '../create_label';

export default class Chapter3EndDialogueScene extends Phaser.Scene {
  constructor() {
    super('Chapter3EndDialogue');
  }

  create() {
    this.add.image(400, 300, 'swamp').setDisplaySize(800, 600);
    const dialog = this.rexUI.add.dialog({
      x: 400,
      y: 300,
      width: 500,

      background: this.rexUI.add.roundRectangle(0, 0, 100, 100, 20, 0x466D1D),

      title: createLabel(this, 'Chapter 3 End').setDraggable(),

      content: createLabel(this, 'Mission Complete!'),

      description: createLabel(this, "Martha: 'This is the third one and\nI still got nothing.Huh, what's\nthat written on the wall?'\nWall: 'Your destiny is in the sleepless mountain'\nMartha: 'Hmmm'"),

      actions: [
        createLabel(this, 'Next'),
      ],

      space: {
        left: 20,
        right: 20,
        top: -20,
        bottom: -20,
        title: 25,
        content: 25,
        description: 25,
        choices: 25,
        leftToolbarItem: 5,
        toolbarItem: 5,
        choice: 15,
        action: 15,
      },

      expand: {
        title: false,
      },

      align: {
        title: 'center',
        actions: 'right',
      },

      click: {
        mode: 'release',
      },
    })
      .setDraggable('background')
      .layout()
      .popUp(1000);

    this.print = this.add.text(0, 0, '');
    dialog
      .on('button.click', function buttonClick() {
        this.scene.start('Chapter3Bonus');
      }, this)
      .on('button.over', (button) => {
        button.getElement('background').setStrokeStyle(1, 0xffffff);
      })
      .on('button.out', (button) => {
        button.getElement('background').setStrokeStyle();
      });
  }
}
