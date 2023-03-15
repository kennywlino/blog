---
title: Learning Journal - 2023/03/14
description: >-
  Looked into transitions/animations for hero icons. Set up the Results
  component display with mock data from previous Spotify API calls.
pubDate: '2023-03-15T04:51:40.000Z'
heroImage: /src/icons/notebook.svg
tags:
  - learning-journal
draft: false
---

## Links

[PicMySong: Latest Updates](https://pic-my-song-client-oaw0lrkm5-kennywlino.vercel.app/ "")

## What did you learn or work on today? How does it tie into your goals?

Today, I worked the front-end of PicMySong. I spent some time figuring out how to get a transition going on the icons I have in my hero section. I was trying to get a transition where the icon of a picture would change into a picture of a CD to represent a song. This took me a bit longer than I anticipated, as the [suggestions](http://css3.bradshawenterprises.com/cfimg/ "suggestions") I saw like stacking the images and then changing the opacity of the top image to be 0 on hover didn't quite work the way I wanted them to. Well, to be more precise, the transition worked as expected but the positioning of the image container and the flex container it was in became weird.

Since I realized this was eating up a lot of time, I switched over to setting up the display for my results component. This wasn't too bad as I was able to take advantage of the DaisyUI Card component and more or less tweak the styling via TailwindCSS and display album artwork, the music data and a play button to play a sample of the song.

In order to get an idea of what this looks like at this stage, feel free to visit the deployed link for the most recent commit under the Links section above.

## What are some things you'd like to make special note of?

Something that I'd like to make special note of today is that I'm starting to finally understand why some people are so opposed to component libraries and prefer vanilla CSS or at most SCSS. After being exposed to a number of different options from Mantine, Material UI, Bootstrap and now TailwindCSS and DaisyUI, I really appreciate the level that TailwindCSS occupies as it doesn't necessarily give away what styling tool you used immediately. This is especially true with libraries like Bootstrap that got laughed into a corner when everyone decided all Bootstrap websites looked the same. See [Every Fucking Bootstrap Website Ever](https://www.dagusa.com/ "") for an example.

However, while DaisyUI integrates and takes advantage of Tailwind, working with the Card component in particular wasn't as smooth as some of my experiences with other Card components in other libraries. I had to tweak the styling for the image and the card a bit to get the image to sit correctly in the card. I also tried to use the Divider component from DaisyUI inside the cards, but those would sometimes stick outside the boundaries of the card so I ended up removing it.

All in all, I certainly have not reached the camp of styling from scratch. Using the Intellisense inside VSCode to preview the actual CSS Tailwind and DaisyUI are using under the hood, I definitely enjoy reaping the benefits of using a few words to get 10s of lines of actual CSS since in most cases, it tends to get me very far. However, moments like the one I had today with the card does make me want to dive a bit deeper into handling the CSS myself.

## What are some things you're still curious about?

I think something I was curious about today was figuring out how to find the appropriate design. For example, in displaying the song data as a result of searching with a picture, I could display the data as a carousel, table, cards, etc. However, with each type of display, there comes separate pros and cons. With the carousel, what stands out immediately is that we can only ever see 1 song at a time and we can never see all of them at the same time. With the table it might look a little unstylish, etc.

As a full-stack developer, I think I'm getting much better at styling and making these type of decisions as I think through them, but it would be nice if there was some form of reference that shows you what are some common layouts in these types of scenarios. I've had success with looking around at various websites in general and [UX Exchange](https://ux.stackexchange.com/ "") has helped me answer some of these questions, but I definitely would like another tool in this area.

## What do you plan to work on tomorrow?

Tomorrow, I'd like to get closer to wrapping up PicMySong. Today, I was able to see a concrete MVP by using the data I had saved from a previous Spotify call, so tomorrow all that's left to do functionality-wise is to confirm that I can use an image to search and get results to display. From there, there's a few enhancements I'd like to work on which including making the file upload component a proper drop zone-- in other words, getting the drag-and-drop upload to work. I'd also like to add the option for using an image URL as well, but that will also require some changes on the back-end to properly wire everything up.

From there, I think I could take a look at the hero icons again and see if I can style and animate them exactly how I want them. I'd also like to consider the final layout and decide whether I think a 3-panel scroll snap with Hero - Search - Results is best or change it somehow so that Search is hidden when there are Results, etc.
