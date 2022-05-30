# Part 6 - Body Velocity: A World of Physics

[Example Code](example-code/part-6.js)

Phaser has support for a variety of different physics systems, each acting as a plugin available to any Phaser Scene. At the time of writing it ships with Arcade Physics, Impact Physics and Matter.js Physics. For the sake of this tutorial we will be using the Arcade Physics system for our game, which is simple and light-weight, perfect for mobile browsers.

When a Physics Sprite is created it is given a `body` property, which is a reference to its Arcade Physics Body. This represents the sprite as a physical body in Phasers Arcade Physics engine. The body object has a lot of properties and methods that we can play with.

For example, to simulate the effects of gravity on a sprite, it's as simple as writing:

`this.player.body.setGravityY(300)`

This is an arbitrary value, but logically, the higher the value, the heavier your object feels and the quicker it falls. If you add this to your code you will see that the player falls down without stopping, completely ignoring the ground we created earlier:

![](images/part5.png)

The reason for this is that we're not yet testing for collision between the ground and the player.

We already told Phaser that our ground and platforms would be static bodies. Had we not done that, and created dynamic ones instead, then when the player collided with them it would stop for a moment and then everything would have collapsed. This is because unless told otherwise, the ground sprite is a moving physical object and when the player hits it, the resulting force of the collision is applied to the ground, therefore, the two bodies exchange their velocities and ground starts falling as well.

In order to allow the player to collide with the platforms we can create a Collider object. This object monitors two physics objects (which can include Groups) and checks for collisions or overlap between them. If that occurs it can then optionally invoke your own callback, but for the sake of just colliding with platforms we don't require that:

```
this.physics.add.collider(this.player, this.platforms);
```

The Collider is the one that performs the magic. It takes two objects and tests for collision and performs separation against them. In this case we're giving it the player sprite and the platforms Group. It's clever enough to run collision against all Group members, so this one call will collide against the ground and all platforms. The result is a firm platform that doesn't collapse:

![](images/part6.png)

[Back](part-5.md) | [Next](part-7.md)