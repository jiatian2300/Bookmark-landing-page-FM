# Frontend Mentor - Bookmark landing page solution

This is a solution to the [Bookmark landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the newsletter form is submitted if:
  - The input field is empty
  - The email address is not formatted correctly

### Links

- Live Site URL: [Active Github Page](https://jiatian2300.github.io/Bookmark-landing-page-FM/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- SCSS


### What I learned

Email validation & SetTimeout function

```js
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (error.classList.contains("error") || input.value.length === 0) {
        return;
    } else {
        input.value = "";
        error.classList.remove("error");
        error.classList.add("success");

        setTimeout(function () {
            error.classList.remove("success");
        }, 3000);
    }
});
}
```

### Useful resources

- [Tabs](https://www.w3schools.com/howto/howto_js_tabs.asp)
- [Accordian](https://www.w3schools.com/howto/howto_js_accordion.asp)


