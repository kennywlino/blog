---
title: Learning Journal - 2023/03/14
description: Summary of top 2-3 topics today.
pubDate: '2023-03-15T04:51:40.000Z'
heroImage: /src/icons/notebook.svg
tags:
  - learning-journal
draft: true
---

## What did you learn or work on today? How does it tie into your goals?

Today, I worked the front-end of PicMySong. I spent some time figuring out how to get a transition going on the icons I have in my hero section. I was trying to get a transition where the icon of a picture would change into a picture of a CD to represent a song. This took me a bit longer than I anticipated, as the [suggestions](http://css3.bradshawenterprises.com/cfimg/ "suggestions") I saw like stacking the images and then changing the opacity of the top image to be 0 on hover didn't quite work the way I wanted them to. Well, to be more precise, the transition worked as expected but the positioning of the image container and the flex container it was in became weird.

Since I realized this was eating up a lot of time, I switched over to setting up the display for my results component. This wasn't too bad as I was able to take advantage of the DaisyUI Card component and more or less tweak the styling via TailwindCSS and display album artwork, the music data and a play button to play a sample of the song. 

In order to get an idea of what this looks like at this stage, feel free to visit the deployed link for the most recent commit under the Links section above. 

## What are some things you'd like to make special note of?

Something that I'd like to make special note of today is that I'm starting to finally understand why some people are so opposed to component libraries and prefer vanilla CSS or at most SCSS. After being exposed to a number of different options from Mantine, Material UI, Bootstrap and now TailwindCSS and DaisyUI, I really appreciate the level that TailwindCSS occupies as it doesn't necessarily give away what styling tool you used immediately. This is especially true with libraries like Bootstrap that got laughed into a corner when everyone decided all Bootstrap websites looked the same. See [Every Fucking Bootstrap Website Ever](https://www.dagusa.com/)

## What are some things you're still curious about?

## What do you plan to work on tomorrow?
