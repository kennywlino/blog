---
title: Learning Journal - 2023/03/16
description: Summary of top 2-3 topics today.
pubDate: '2023-03-17T01:22:57.000Z'
heroImage: /src/icons/notebook.svg
tags:
  - learning-journal
draft: false
---

## What did you learn or work on today? How does it tie into your goals?

Today, I worked on fixing some TypeScript errors that were preventing deployment on the front-end for PicMySong. I also continued to working on fixing the display for my SongCard component as I noticed things looked a little off on mobile. I also added buttons that link to Spotify and YouTube to listen to the songs in full.

I also spent a good amount of time doing a write-up for my overall process working on PicMySong including my motivation, design process and challenges since I felt like I was approaching a good point to finally wrap this project up.

Finally, I took a look at how I could improve the image-to-song process. Since the labels I get back from the image recognition API isn't always the most applicable-- for example, I uploaded a picture of orange juice and one of the labels it suggested was "tin" when there wasn't any "tin" in the photo. Since I'm only using one of the labels at random to get songs, I decided to work on improving the process by taking the top 3 or so most confident labels to get more variation in the songs I could show the users.

## What are some things you'd like to make special note of?

One feature I wanted PicMySong to have is the ability to provide user easy access to a full version of a song. Since I was already using the Spotify API as a music database, providing users a link to the song on Spotify was simple as that came back with the search results. However, I wanted to acknowledge that not everyone uses Spotify, so I wanted to think of a good alternative.

At first I thought about looking for a tool that could provide links to songs on multiple music services, but a quick fix that came across my mind was to just take the artist + song and use them as search parameters on YouTube Search. While there's a YouTube Search API, it has a starting limit of 100 searches a day from what I could understand in their documentation. Specifically, [their documentation](https://developers.google.com/youtube/v3/getting-started#quota "") says that at first, you're limited to 10,000 units a day with each search request costing 100 units. Although I doubt I would regularly get 100 clicks a day at the stage, I figured it was a bit limiting for the benefit it could provide. At best, I could use the API to grab the first search result and link the user to that. However, it's also possible that the first result isn't also always the "canonical" video we want (i.e. maybe the music video version is longer so we might want the "audio" only version), so setting up the API for little return didn't make a lot of sense.

## What are some things you're still curious about?

After getting PicMySong to a good state, I think something I'm getting more curious about getting back into is more complex back-ends. With PicMySong, since I chose to forego adding CRUD functionality and users since that wasn't the focus, my Express server ended up being quite simple. I would like to see if there's a way I can leverage some of the older projects I worked on such as a Bug Tracker app I was working on with my classmates as I've started to see that building from scratch even with help from libraries is generally time-consuming. 

Another thing that I became slightly curious about recently, which is using serverless functions in place of a separate Express server. I was looking at the Vercel documentation when I was deploying my server for PicMySong as I wanted to know if I could keep everything on Vercel. However, from what I could find in [their documentation](https://vercel.com/guides/using-express-with-vercel ""), Vercel really advocates for serverless functions although they do offer ways to deploy Express servers. Since their set-up was slightly unconventional from what I'm used to, I just deployed it via Render.  At the end of the day, the functionality of the app would be the same so it would be more for convenience's sake, but I would love to see how it changes my developer's experience.

## What do you plan to work on tomorrow?

Tomorrow, I'd like to see complete my work on improving the image-to-word process as I think there's still a lot of low-hanging fruit there that could make it a lot better. I also would like to get closer to finishing up the write-up I have and hopefully be closer to sharing PicMySong publically. Before that, I intend to test it a little more on mobile and get some friends to take a look as I always get great feedback and just another pair of eyes that help me find little bugs I didn't see before.
