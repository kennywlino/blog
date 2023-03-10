---
title: Learning Journal - 2023/03/07
description: >-
  Began Three.js Journey course. Worked on PicMySong front-end with focus on
  displaying results. Found some bugs in personal page thanks to my friends.
pubDate: '2023-03-07T08:00:00.000Z'
heroImage: ''
tags:
  - learning-journal
---

## What did you learn or work on today? How does it tie into your goals?

Today, I continued work on PicMySong by adjusting the Results component I defined to display the uploaded image and the results from the Spotify API search. For some reason, figuring out what data type the image needed to be in in order for me to be able to render it took me a bit to understand since I saw suggestions to use the `FileReader` object and its `readAsDataUrl()` function, while some others also mentioned using `URL.createObjectURL()`. I think part of the issue was also coming from TypeScript, as I had originally defined the type for the image in the Results component's prop object.

I also took the time to start Bruno Simon's [Three.js Journey](https://threejs-journey.com "") course.
I purchased this course about 3-4 months ago around Black Friday, but because I was busy focused on learning more of the fundamentals during my coding bootcamp, I left this for when I would have a more flexible schedule. Although I have a long list of things I'm curious to learn about, like TypeScript and AWS, ultimately I'd like to find some space to priortize my creative energy. I became curious about this realm of tech when I first saw [Awwwards](https://www.awwwards.com/ ""), which is a website that showcases and celebrates some of the best web design in the world. This led me down a rabbit hole of highly interactive websites, and eventually Three.js. Simply put, Three.js is a tool that allows us to create 3D experiences in a web application.

While I'd like to still maintain room for proper full-stack development, I'm excited to incorporate and gain skills as a creative developer as well.

## What are some things you'd like to make special note of?

Since I recently purchased my domain for this page, I figured I'd show some of my friends so they could get an idea of my progress since I always say that I'm busy working on projects. Even though I know there are still a number of things that need to be changed before I can say it's where I'd want it to be, showing it to my friends also helped me spot some mobile-specific bugs that I wouldn't have noticed without our interaction. For example, I learned that the theme selector I have in the top right corner doesn't close the menu onclick on mobile, which was something I didn't expect. I also forgot that I have a sidebar that's mobile only, while I use a menu bar in the header for desktop. Since developing for multiple platforms is something that's somewhat new to me, I completely forgot about doing these checks, but now I feel much more aware about these type of bugs as I continue to develop more applications.

Related to this, I learned from Bruno Simon's Three.js course that we can access any development servers we have running on mobile by using the IP address + port Vite or whatever tool we uses provides instead of localhost. I always knew that the IP address + port was an option, but I was so used to using localhost that I didn't think to see how I could preview items on a physical phone. Of course, I know that the Chrome Dev Tools has options to debug for various device sizes, but I like the idea of seeing it on my phone.

## What are some things you're still curious about?

I think I'm still a bit curious about how to properly read and write files via JavaScript. While I was able to get it working in the end, I think the material I ended up referencing made it harder for me to wrap my head around how to get it working, so I think my impression of it is still relatively hazy.

## What do you plan to work on tomorrow?

Tomorrow, I'm going to continue working on the three things I have going on at the moment, which are: PicMySong, my personal page, and the Three.js course.

For PicMySong, I'm at the point where I still need to prune the Spotify API data to get just what I need and figure out a good way to display the data such as a card. Then, I think from there, a few small touches on the front-end stylistically would give us a fairly basic MVP by the end of the week.

For the personal page, I'd like to find some time to do a few finishing things like updating the bugs I mentioned with the theme selector and sidebar. I also still have a number of posts I need to import that I have from before I launched this site.

Finally, for Three.js I plan to continue to work on it for about 2 or so hours a day, but mainly priortizing the other two projects.
