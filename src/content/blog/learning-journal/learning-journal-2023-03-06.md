---
title: Learning Journal - 2023/03/06
description: Summary of top 2-3 topics today.
pubDate: '2023-03-06T08:00:00.000Z'
heroImage: '' 
tags:
  - learning-journal
---

## What did you learn or work on today? How does it tie into your goals?

Today, I worked on a few things for my personal website, including importing some of my old posts I wrote locally and purchasing and setting up a domain! That felt pretty exciting to me, since I've gone through a number of iterations of personal websites in the past, but I always left it as the hostname, like .github.io. For some reason, I imagined that it would be a lot harder to set it up, but it was as simple as purchasing a domain from Google Domains, copying some values from Vercel into the settings for my domain on the Google Domains platform, and waiting a few minutes. Vercel also offers the option to purchase a domain from them directly and they'd take care of the set up for you it seems, but Google Domains was slightly cheaper and since I've had my Google account for so long, it only made sense to tie my domain to my Google account.

I also went back to working on PicMySong again. I worked mainly on the back-end finishing the function to flatten the labels returned from the AWS Rekognition call, writing functions to get a random number of labels from a list of labels to prepare for the Spotify search, and reorganizing my code overall so that the AWS functions would be separate from the Spotify functions and the router itself by putting all of the functions inside a controllers folder.

I also added some samples of the AWS Rekognition data and Spotify music search results so it'd be easier to reference when figuring out how to shape the data and drilling into the right layers without making unnecessary calls. This helped me start writing the function to get just the necessary data I need from the Spotify search results, such as the artist, title, song, the link to the 30 second sample, etc.

Finally, I noticed when I went to go and start writing my learning journal for to day that build for my personal page was failing. That took me for a spin since I thought I had gotten past the growing pains phase with TinaCMS, but it keep throwing a strange error:

```javascript
Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: undefined.
```

'Introspection' was certainly not a word I expected to find while coding and it definitely had me 'introspecting' what this even meant. After a quick search, I was able to deduce that this was GraphQL-related, which I knew Tina uses to manage all of the content. I tried to investigate by making a new branch and going many commits back, but each time I found the same error towards the end of the build. This in itself was questionable, since I had been able to build and deploy my website just last Friday and I was taking a look at commits beyond that, but then it hit me that I had been seeing an issue with `getStaticPaths()` from Astro and it not finding paths for files like `'./imagePreview.png'`. I concluded that this was because my assets would fall in the same path as the actual text content, so the `getStaticPaths()`, so I tried moving them and ultimately removed the hero image data line from all of my learning journal posts, as that's what was making use of `'./imagePreview.png'`. After all of this investigating, I tested building the site once again and finally got things working again. Phew!

## What are some things you'd like to make special note of?

For the back-end, instead of CommonJS, I've been using ES6 syntax such as imports since I wanted a bit more consistency in the syntax I used on both ends. I learned from this [Stack Overflow question](https://stackoverflow.com/questions/71009393/why-is-default-required-in-importing-json-file-in-js-code "") something new about importing JSON files, which is that while they can be imported using `import * as data from './data.json'`, doing so will 'wrap' the data in a 'default' object since it is being imported as a module, much like 'export default'. Instead, we can use `import { default as data } from './data.json'`. I also had to add `assert { type: 'json' }` to import the json.

## What are some things you're still curious about?

Something that was on my mind today is how I could make the `getSongs()` functionality in PicMySong more robust. For now, I'm fairly close to an MVP of selecting a label at random, and getting 10 songs related to the label to display to the user. However, while I already had a feeling this would happen, my suspicions were confirmed that in some cases, a single label like "rodent" returned about 10 songs that were titled just "Rodent" (I used a capybara image!).

I'd like to figure out how to get more variation for the user so that they're not limited to one word or concept for the image they gave, especially since they say "An image is worth a thousand words".

## What do you plan to work on tomorrow?

Tomorrow, I plan on striving towards getting an MVP version of PicMySong where the hero, search, and search results are adequately displayed. From there, I'd like to plan towards adding some additional features I have in mind, like adding an option for users to have general CRUD functionality for the app as an ode to the original PicMySong we built for my bootcamp course. Then, we were asked to use APIs and make sure that our apps include CRUD, and since this is a rebuild more or less, it makes sense to include it.
