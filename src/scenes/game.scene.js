export default class GameScene extends Phaser.Scene {

  constructor() {
    super('Game Scene')
  }

  init() {

  }

  preload() {
    this.load.image('sky', 'assets/space3.png')
    this.load.image('logo', 'assets/phaser3-logo.png')
    this.load.image('red', 'assets/red.png')
  }

  create() {
    this.add.image(400, 300, 'sky')

    const particles = this.add.particles('red')

    const emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD'
    })

    const logo = this.physics.add.image(400, 100, 'logo')

    logo.setVelocity(100, 200)
    logo.setBounce(1, 1)
    logo.setCollideWorldBounds(true)

    emitter.startFollow(logo)
  }

  update() {

  }
}