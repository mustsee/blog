---
layout: "../layouts/BlogPost.astro"
title: "Github"
description: "First steps with github"
pubDate: "Jan 11 2023"
heroImage: "/blog/create-repository.png"
---

### Introduction

GitHub is an online service that hosts your repository. In this case, it’s called a **remote repository** as it isn’t stored on your machine.


### Create a repository

To put your project on GitHub, you need to create a repository for it. Go to your github account and click on create a new repository.

After creating a new repository, you can link your git project with the remote repository with the commands
proposed by github.

Congratulations, you made your first push to github !

Modify your index.html file, add a paragraph for example.

You can check the *status* of your local repository with the following command:

`git status`

Commit your changes locally like we saw previously with the following commands:

`git add --all`

`git commit -m "Paragraph change"`

Then you can send the new version to the remote repository using the command:

`git push origin main`

You can check your commits history with the following command:

`git log`