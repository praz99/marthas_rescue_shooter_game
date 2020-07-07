import Entity from '../entities';

export default class DiagonalRightMissile extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'missile');
    this.body.velocity.y = 200;
    this.body.velocity.x = 200;
  }
}
