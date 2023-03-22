---
title: Learning Journal - 2023/03/20
description: Summary of top 2-3 topics today.
pubDate: '2023-03-20T07:00:00.000Z'
heroImage: /src/icons/notebook.svg
tags:
  - learning-journal
draft: false
---

## What did you learn or work on today? How does it tie into your goals?

After thinking over the serverless function idea to fix the issue with PicMySong where the free back-end servers need time to start-up after being idle, I had a great idea over the weekend. I looked into whether it was possible to show the status of the server in the front-end itself, so that the users can tell whether the server is ready to process an image or not.

Before this, there was really no way to tell why the app was failing except for looking at the console. With the serverless option, I'm sure we could avoid issues with start-up time, but I decided against pursuing it at the moment since it seemed just a bit overkill when the issue with the free Render server was that it just needs a bit of time to start-up.

Creating a component to show the status of the server was actually simpler than I thought. I started out the idea with using the useEffect hook to immediately send a GET request to the server on page load. The component would start out on page load as saying "Server offline" and once the server returned a successful GET request, it would change to "Server online". This was a great start, but I also was somewhat afraid users would immediately close the page if they say a red box that said "Server offline", so I made a change so that "Server offline" would only appear if there was an error with the GET request, and otherwise it would show a yellow box that says "Server Loading" on page load and hopefully a green box that says "Server online" within about ~15 to 30s. I figured this would let the user know to wait just a bit as opposed to the previous option.

Aside from adding a server status component, I also updated some of the styling within the Results section and the SongCard component. In particular, I added the option to listen to a song preview by clicking on the album art. I also tried to make the SongCard component and the display of the image a bit more responsive as I've noticed that sometimes there's too much white space on a larger screen.

On the back-end, I modified a bit of the image-to-songs functionality to test how increasing the number of labels searched on Spotify could improve the overall results. I did notice a little increase in lag when increasing the number of searches, but this amounted to maybe ~1s or so, so I think it should be fine for the user. Having variety is also helpful as well as sometimes some of the songs that came back were just plain hilarious 😂

## What are some things you'd like to make special note of?

The yak shaving concept I learned about on Friday really helped me avoid putting in unnecessary time into serverless functions. Although I would love to eventually get to working with them, it just didn't feel necessary to include it at this time. 

## What do you plan to work on tomorrow?

Tomorrow, I'd like to tweak the image-to-songs functionality a bit more as one problem I'm having is that I don't recognize many of the songs or artists. For users, ideally they would probably like to at least see some familiar songs so I'm going to see how utilizing the popularity metric that comes with the data can help. I may also consider increasing the number of labels I use to see if that helps anything.
