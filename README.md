# time-keepr
Previous repo of this project https://github.com/jajan20/time-keeper
Had some issues with git, Vue create etc. should be working now.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

## Introduction
This will be a two-part project. The first part will be focused on getting frontend to work. The user experience and the frontend functionality. After which I'll start working on part 2, in which I'll focus on working on the backend.

## The Problem
Whenever a co-worker is making hours outside the planning they have to input their difference in time manually in an Excel document. Below you'll find a snippet on how that looks.

![](https://raw.githubusercontent.com/jajan20/time-keepr/master/assets/media/image_01.png)

This document is only accessible when logged in on a desktop computer. The desktop computers they work with are okay, but not the best. In other words it's slow. Which means that some co-workers forget to do it, some ask others to do it when they are at home. Some just don't do it because it's a hassle to do.

Working on a document like this, it leaves a lot of room for human error. Someone accidently deletes a table, or calculates the wrong time. Making this document a bit chaotic.

## The Solution
I believe a simple web application would be a tremendous help. Imagine a situation where you've forgotten to log your time. Simply open the web-page, navigate through the few input fields and press send. The web-app will do the rest. Just input your start time, end time and the lunch breaks you've had. The app will calculate how many hours you've worked, how many lunch breaks you've had (and were supossed to have) and will save it to the database(backend).

## List of Requirements
- [ ] Simple, intuitive interface
- [ ] Accessible on smartphone browser
- [ ] User shouldn't have to think to much
- [ ] Design should be forgiving, when an error occurs this should be fixed elegantly.

## Issues along the way.
> Octal literals are not allowed in strict mode

[Source](https://stackoverflow.com/questions/23609042/how-to-avoid-octal-literals-are-not-allowed-in-strict-mode-with-createwritestr)
