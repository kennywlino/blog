---
title: Learning Journal - 2023/03/08
description: >-
  First animation today with Three.js. Added more styling to PicMySong with
  icons, etc.
pubDate: '2023-03-08T08:00:00.000Z'
heroImage: "/src/icons/notebook.svg"
tags:
  - learning-journal
---

## What did you learn or work on today? How does it tie into your goals?

Today, I continued a bit further into Bruno Simon's Three.js Journey course. I learned more about how to transform objects in Three.js, including resizing, repositioning, and rotating. I also finally got to my first animation with Three.js, where we used the  `window.requestAnimationFrame()` to tell the JavaScript window object to run our callback on the next frame. Inside this function, we then can use some of the transform functions from before, like positioning or size.

One important thing Bruno mentioned was that the frame rate of everyone's machines may not necessarily be the same. This can actually impact the speed of an animation and make the experience different for those with different FPS. In order to avoid this, we can rely on some form of timestamp and find the elapsed time between each `requestAnimationFrame()` call. Three.js offers the Clock object to make this easy.

With all of this info, our animation code looked like the following:

```javascript
const clock = new THREE.Clock()
const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    camera.position.x = Math.cos(elapsedTime)
    camera.position.y = Math.sin(elapsedTime)
    camera.lookAt(mesh.position)
}

tick()
```

I also continued working on the front-end for PicMySong. I looked around the web for some icons and images to incorporate into the front-end to make it more visually appealing as I'd like to gain more skill in that area, but creatively figuring out what works well is still tricky. Aside from figuring out what works well aesthetically, something that I also think about is the overall user experience and whether everything tells a clear story and is easy to understand.

## What are some things you'd like to make special note of?

What I'd like to make note of today are all the numerous icon and asset websites out there.

Today, I learned a bit more about:

* [The Noun Project](https://thenounproject.com/ "") - has over 5 million icons available
* [Icons8](https://icons8.com/ "")

## What do you plan to work on tomorrow?

Tomorrow, I plan on continuing to develop the front-end for PicMySong without getting too bogged down by all of the possible details. I also would like to get to fixing some of the bugs in my personal page and work through the ThreeJS course a bit more as I'm excited for what's coming.
