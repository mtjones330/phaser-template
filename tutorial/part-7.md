# Part 7 - Controlling the player with the keyboard

[Example Code](example-code/part-7.js)

Colliding is all good and well, but we really need the player to move. Phaser has a built-in Keyboard manager and one of the benefits of using that is the `createCursorKeys()` method.

Add a `cursors` property to the `Main` scene class and assign it the value of `createCursorKeys()` in the `create` method:

```
this.cursors = this.input.keyboard.createCursorKeys();
```

This assigns an object to `cursors` that has four properties: up, down, left, right, which are all instances of Key objects. Then all we need to do is poll these in our `update` loop:

```
if (this.cursors.left.isDown) {
  this.player.setVelocityX(-160);
  this.player.anims.play('left', true);
}
else if (this.cursors.right.isDown) {
  this.player.setVelocityX(160);
  this.player.anims.play('right', true);
}
else {
  this.player.setVelocityX(0);
  this.player.anims.play('turn');
}

if (this.cursors.up.isDown && this.player.body.touching.down) {
  this.player.setVelocityY(-330);
}
```

Although we've added a lot of code it should all be pretty readable.

The first thing it does is check to see if the left key is being held down. If it is we apply a negative horizontal velocity and start the 'left' running animation. If they are holding down 'right' instead we literally do the opposite. By clearing the velocity and setting it in this manner, every frame, it creates a 'stop-start' style of movement.

The player sprite will move only when a key is held down and stop immediately they are not. Phaser also allows you to create more complex motions, with momentum and acceleration, but this gives us the effect we need for this game. The final part of the key check sets the animation to 'turn' and zero the horizontal velocity if no key is held down.

## Jump to it

The final part of the code adds the ability to jump. The up cursor is our jump key and we test if that is down. However we also test if the player is touching the floor, otherwise they could jump while in mid-air.

If both of these conditions are met we apply a vertical velocity of 330 px/sec sq. The player will fall to the ground automatically because of gravity. With the controls in place we now have a game world we can explore. Load up the game and have a play. Try tweaking values like the 330 for the jump to lower and higher values to see the effect it will have.

![](images/part7.png)

[Back](part-6.md) | [Next](part-8.md)