---
layout: essay
type: essay
title: "Proofreading the Code"
# All dates must be YYYY-MM-DD format!
date: 2023-02-07
published: true
labels:
  - Coding Standards
  - ESLint
---

<img width="400px" class="rounded float-start pe-4" src="../img/essays/proofreading.png">

In the United States, computer programs are considered literary works under the definition in the Copyright Act. Although this may be a surprise to some, by definition, they are considered literary works as they are expressed in words, numbers, or other numerical symbols or indicia. As it is a convention for literary works such as books to go through a proofreading process, I believe it is reasonable for computer programs to also go through the "proofreading" process, or in a more accurate term, conform to coding standards.

## Coding standards are like proofreading

Coding standards are a set of guidelines that improve the readability of code, such as having the right indentation, declaration, white space, etc. As an analogy, I consider not conforming to the coding standards as equivalent to publishing a book without going through the proofreading process. Imagine reading a book about a difficult subject, and the book has not gone through the proofreading process. Not only will the reader have to worry about understanding the difficult subject, but also have to worry about understanding the author's writing style and grammar, not to mention some typos that may be found in the book. I believe this is similar to reading computer code that someone had written without following the coding standards. A person who reads the code will not only have to understand the complex code but will also have to spend extra time trying to understand the programmer's coding style. 

Luckily, in the world of software engineering, conforming to coding standards does not require hiring proofreaders. It can be done by simply installing a linting tool such as ESLint, in the case of JavaScript, and running it. Tools such as ESLint make sure that code is conformed to a coding style that is readable to everyone regardless of who wrote it.

## My thoughts on coding standard

As someone who always thought of myself as a meticulous person, I never had a problem spending extra time to fix my code to have the correct indentation and spacing. I liked fixing them because they simply looked good. However, I was unsure if this was a good thing or not since there are both positive and negative outcomes to this. The positive is that I get to submit quality work, and the negative is that it requires extra time. However, with tools like ESLint, which I integrated into IntelliJ IDEA without any trouble, I can fix my code in a short amount of time by using shortcuts like pressing "F2" to find the next error, as well as using features like "Quick Fixes" where IntelliJ automatically fixes some of the errors. Once all of the errors have been fixed, IntelliJ then gives a green check mark to indicate that there are no errors and that the code conforms to the coding standards, which is another great feature that allows me to fix code efficiently. Due to these reasons, I think ESLint is a great tool that every JavaScript programmer should use.

I believe coding standard is a crucial part of software engineering as it makes every programmer's code conform to a universally accepted coding style such as ESLint, which will improve the readability of the programmer's code and allow them to focus on solving actual problems. Tools like ESLint also allow programmers to create quality work without spending too much time on meticulous work.
