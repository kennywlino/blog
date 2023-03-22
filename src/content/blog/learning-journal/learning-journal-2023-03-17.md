---
title: Learning Journal - 2023/03/17
description: >-
  Looked into serverless functions to fix issue with free back-end services that
  need start-up time. Learned about the concept of "Yak Shaving".
pubDate: '2023-03-17T19:48:38.000Z'
heroImage: /src/icons/notebook.svg
tags:
  - learning-journal
draft: false
---

## What did you learn or work on today? How does it tie into your goals?

Today, I looked into migrating my back-end from being a standalone server to a few serverless functions. I mentioned that I was curious about serverless functions yesterday as I was looking into whether it was possible to deploy an Express app on Vercel to keep all of my work deployed in one place. However, since the process was a bit different from the general experience I've had with Heroku and Render, I figured I'd leave it for another day until I remembered something. Free Render servers wind down after 15 minutes of inactivity which means that it takes some time for the server to spin up when someone tries to use our app.

I ran into this after I tried to show a friend how PicMySong worked and then this jogged my memory of my experiences with some other apps that had a free Render server behind it. I took a look at Railway, another popular Heroku replacement, and although their free tier is generous at 500 credit hours a month, they themselves note in [their documentation](https://docs.railway.app/reference/plans#execution-time-limit "") that running even 2 services-- an API and Postgres database could only run about 3 weeks until the credits ran out. This seemed like a better option than Render but at the same time, the more apps deployed, the more credit hours that get used, and Railway also limits the number of projects you can have running, so in the long-run both Railway and Render seemed like inferior options if I wanted something free.

## What are some things you'd like to make special note of?

Something that I want to make special note of is the concept of ["Yak Shaving"](https://americanexpress.io/yak-shaving/ ""). I saw it mentioned in a comment in the /r/webdev subreddit when someone was asking for advice [re: their portfolio](https://www.reddit.com/r/webdev/comments/11txn1h/comment/jcm5j2t/).

The concept of "Yak Shaving" essentially points to the idea of "going down the rabbit hole" or getting distracted by other related tasks. An example they give in the article I linked above related to coding is that our main task is to fix a bug. However, as we start to take a look at the code, maybe we notice our code needs to be refactored a bit. In fact, they should be refactored and organized into different files! And like that, we can continue to derail ourselves from our original goal. 

I wanted to make note of this concept as although it's not a unique concept, it helped me remind myself to stay focused on my MVP for PicMySong. This issue with the backend needing time to load is a perfect example as I never originally intended to pursue serverless functions. The Reddit discussion also was helpful to read, as the original poster was lamenting how hard it was to build a portfolio as they needed to spend time learning Figma, animations, responsive layouts, etc. that they felt like they would never finish. I've shared similar feelings at certain points where it feels like it's a never ending amount of things to learn, but I also try to remember that I have a choice in learning what I do, so if I don't enjoy it, I deprioritize it.

## What do you plan to work on tomorrow?

I plan on figuring out what I want to do regarding the Render server needing time to start up before someone can use PicMySong. 
