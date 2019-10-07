# Time Keepr
Started with a different repo, had some issues.
Below you'll find a table with URL's to all the correct repo's.

| Repository  | URL                                        |
|-------------|--------------------------------------------|
| Frontend v1 | https://github.com/jajan20/time-keeper     |
| Frontend V2 | https://github.com/jajan20/time-keepr      |
| Backend     | https://github.com/jajan20/time-keepr-nuxt |

## Table of Content
- [Project Setup](#project-setup)
- [Introduction](#introduction)
- [Ambitions](#ambitions)
- [Sources](#sources)
- [Initial Planning](#initial-planning)
- [Deliverables](#deliverables)
- [Goals](#goals)
- [The Problem](#the-problem)
- [The Solution](#the-solution)
- [Issues](#issues)


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

## Ambitions

In my last year at the HVA I learned that I like to make work flow's more efficient. As developer I want to create web apps that can help other's work better, faster and with less error margin.

## Sources

I used to work at the kitchen department in IKEA. Every couple of months I had this itch in my brain where I was sure I could do something to help. I'll ask my co-workers for input on this project and test it out with them.

## Initial Planning

- [x]  UX Design
- [x]  Build frontend
- [x]  Connect the backend
- [x]  Testing

While working on this project I'll document the steps, struggles and findings in my GitHub repositories.

## Deliverables

- [x]  User can register: **start time, end time, lunch time.**
- [ ]  User can register: **clocked, yes or no.**
- [ ]  User can add comment as to why time is of compared to schedule.
- [ ]  Team-manager can request an overview of all registration.

The user can register start, end and lunch time. While testing I've found out that wether the user is clocked in or not. Doesn't really add much value to the product. Later down the road when the management function is added it might by included. But right now this information is pulled from the registration system that works with our check in cards.

An other finding was that the **add comment** section wasn't really necessarily either. Team-managers don't look at the comment. If they think something isn't registered properly they will ask for a meeting in which you can explain.

The overview for team-managers turned out to be a lot more work that initially anticipated. Right now a single user can check their overview and show that to the team-manager. The roadmap will include this feature.

# Goals

- [x]  Test JS, HTML, SCSS, VueJS knowlegde.
- [x]  Compare my growth to my third year at school.
- [x]  Proof that I can create a tool that's more efficient than writing in excel.

Even though I learned a lot in the last couple of years. By doing this project I realised there is so much more to learn. What I found out the hard way is that when I stop working with a framework like VueJS and continue working with VanillaJS, is that it's really hard to pick it up again. I needed to start from the basics and really learn VueJS again. (Much faster of course).

If I compare myself to my third year self I can proudly say that I really grew as a developer. In this instance, I must say I've really completed this goal.

The tool that I've created is more efficient, my co-workers found that It's really easy to register your hours. But since I haven't included the management function it's not ready for use yet. But it's a good Proof of Concept.

## The Problem
Whenever a co-worker is making hours outside the planning they have to input their difference in time manually in an Excel document. Below you'll find a snippet on how that looks.

![](https://raw.githubusercontent.com/jajan20/time-keepr/master/assets/media/image_01.png)

This document is only accessible when logged in on a desktop computer. The desktop computers they work with are okay, but not the best. In other words it's slow. Which means that some co-workers forget to do it, some ask others to do it when they are at home. Some just don't do it because it's a hassle to do.

Working on a document like this, it leaves a lot of room for human error. Someone accidently deletes a table, or calculates the wrong time. Making this document a bit chaotic.

## The Solution
I believe a simple web application would be a tremendous help. Imagine a situation where you've forgotten to log your time. Simply open the web-page, navigate through the few input fields and press send. The web-app will do the rest. Just input your start time, end time and the lunch breaks you've had. The app will calculate how many hours you've worked, how many lunch breaks you've had (and were supossed to have) and will save it to the database(backend).

## List of Requirements
- [x] Simple, intuitive interface
- [x] Accessible on smartphone browser
- [x] User shouldn't have to think to much
- [ ] Design should be forgiving, when an error occurs this should be fixed elegantly.
- [x] Input fields should have a maximum input length (this was not needed because of the ```<input type="time"```)
- [x] When maximum input is met continue to next input (this was not needed because of the ```<input type="time"```)
- [x] Connect to a backend

## Issues
### Octal literals
> Octal literals are not allowed in strict mode

[Source](https://stackoverflow.com/questions/23609042/how-to-avoid-octal-literals-are-not-allowed-in-strict-mode-with-createwritestr)

### Auto tab input fields
> Issues with auto tab input fields

So one of the most troublesome issues that I had was getting the auto tab function to work.<br>
**How it should work:** When a user inputs something in the input field (with a attribute of ```maxlength="2"```) as soon as the condition is met the focus should automaticly go to the next input field.

**What went wrong:** First I tried to make a simple fiddle to get the hang of it. I created four input fields and used ```nextElementSibling``` function to select the next element. This worked great. Sadly this didn't work because of the different set-up in my HTML.

```nextElementSibling``` will go the next element within the same container. Since my inputs are in seperate containers it wouldn't work.
