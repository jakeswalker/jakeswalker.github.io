---
layout: essay
type: essay
title: "Pull Myself Up By My Bootstrap"
# All dates must be YYYY-MM-DD format!
date: 2023-02-23
published: true
labels:
  - Framework
  - Bootstrap
---

In the last few weeks, I experienced Bootstrap for the first time. Although I have used a JavaScript framework (jQuery) before, this was my first time using a CSS framework. Despite knowing that it is difficult to master Bootstrap, I was eager to learn about it as frameworks are extensively used in software engineering. After learning the basics of Bootstrap, it came as no surprise that I found a few things that I think Bootstrap will benefit software engineers.

## Why Use Bootstrap?
One of the most beneficial things I think a software engineer might get out of Bootstrap is the ability to build mobile-first/responsive websites easily. I have personally built a responsive website before using only CSS, but I always found that writing separate CSS code for different screen sizes to be time consuming. However, with Bootstrap, there is no need to write separate CSS code for different screen sizes as the framework is already designed to adjust sizes automatically, which I find extremely convenient.

To demonstrate, here is a simple webpage that I built using Bootstrap:

<div class="container my-3">
<img width="600px" class="rounded me-2" style="border-style: solid; border-color: #D3D3D3;" src="../img/essays/bootstrap-large.png">
<img width="250px" class="rounded" style="border-style: solid; border-color: #D3D3D3;" src="../img/essays/bootstrap-small.png">
</div>

As shown in the images, the contents of the webpage is adjusted automatically according to its screen size. And as one can seen from the [code](https://github.com/jakeswalker/bootstrapexample/blob/main/index.html), only a few Bootstrap keywords have been added to the HTML file. Clearly, this is not possible with raw CSS and I find this feature of Bootstrap to be extremely powerful.

Another beneficial thing that I found about Bootstrap is that it allows websites to have the same look and feel as many other well-designed websites. This is not surprising as Bootstrap was originally developed by Twitter to have common design patterns within the company. I personally find this to be extremely useful, as I believe that clients want designs that are aesthetically pleasing to many, and not designs that are aesthetically pleasing to the programmer. Although this may sound a bit anti-creative, I believe it is sometimes best to suppress programmer's own taste to have a good design, and with Bootstrap, programmers can rely on the designs that were built by a successful company, which I think is safe to say that the designs are aesthetically pleasing to many.

## No pain, no gain
Although there are a lot of great things about Bootstrap, there are a few things that still make me want to go back to just using raw CSS. One of the reasons is that Bootstrap is not easy to learn. I think this is partly because it is different from how most programmers are used to styling websites—that is, in Bootstrap, styling is done by adding predefined keywords to a class of each HTML tag. This requires a lot of memorization of the keywords and many visits to the Bootstrap documentation. However, once a programmer masters the keywords, I believe this characteristic of applying directly to HTML element's classes is more advantageous than styling from a stylesheet using only CSS, as all styling can be done in the HTML file with only a simple keywords and while examining the HTML code, which I believe will make it a lot easier to keep track of the code, and thus save time.

In conclusion, I believe every programmer should learn how to use frameworks such as Bootstrap it saves time, one can easily build websites that have the same look and feel, and building mobile-first website with very little time.
