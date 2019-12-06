---
 title: "The Art of Pull Requests"
#  description: "Common pitfalls using PRs and some tips on getting the best from them."
 path: "/blogs/the-art-of-prs"
 type: "blog"
#  tags: [ "git", "PR", "feature branches" ]
 date: "2019-11-27"
#  categories: ["tech"]
#  slug: "the-art-of-prs"
#  draft: false
#  author: "Charlotte Fereday"
#  author_link: "https://www.charlottebrf.dev/"
#  engineer_name: "Charlotte Fereday"
#  image_url: "imgs/talk-bubbles-art-of-pr.png"
#  keywords: ["PR", "git", "tes"]
---

I joined TES 3 months ago and in that time have been reflecting on some things I have learnt - raising good PRs is one of them. My prior experience is using trunk based development, where everyone on the team commits to the master branch.

I work in the [Security Engineering team](https://engineering.tes.com/post/tes-eng-sec-team/) now and we use PRs a lot, which was new for me. One of our responsibilities in the team is to look after the [AAA services](https://en.wikipedia.org/wiki/AAA_(computer_security)). This blog post will focus on the challenges I experienced whilst working with PRs: namely some pitfalls I encountered and some tips I would like to share as a result.  

Being less familiar with using PRs in my daily work I have noticed that creating high quality PRs is a particular skill.

## Pull requests
For our team a PR approach was taken because the SecEng services have the potential to have a big impact on our users. PRs enable us to mitigate that risk by ensuring code reviews are carried for these services. 
In my previous role I would sit down with another developer in person and get feedback in the moment. This is not always possible when working remotely. Also as a member of the SecEng team, where we may change code owned by other teams, we want to communicate to the whole team why certain changes are being made.

### What were some of the challenges?
Here are some of the key challenges I experienced when working with PRs:

<img src="/imgs/prs/big.jpg" alt="Sometimes a PR can feel like this" loading="lazy" />

Credit: [Flickr](https://www.flickr.com/photos/flickcoolpix/7883578162)

#### Too large
It is very easy to make very large PRs which correlate to the completion of a piece of work, e.g. an entire story.
The effect of this is that the changes are overwhelming for reviewers. In the end the team can't get the intended benefit of using a PR being a placeholder for conversation because the scale of change is too big and the focus unclear.

<img src="/imgs/prs/cluttered.jpg" alt="Messy history" loading="lazy" />

Credit: [Wikimedia commons](https://commons.wikimedia.org/wiki/File:Messy_storage_room_with_boxes.jpg)

#### Cluttered git history
It can feel natural to want to give as much detail as possible in the git history and certainly I initially thought it would be better to be ‘honest’ and keep the commit history exactly as it was during the development process. 
Ultimately though rather than adding helpful detail and context, a cluttered git history distracts from the key intent of the work being completed.

<img src="/imgs/prs/repetition.jpg" alt="Stuck in a loop" loading="lazy" />

Credit: [Infinity circuit](https://www.needpix.com/photo/download/895832/infinity-circuit-loop-eight-infinite-symbol-endless-paradox-vicious-circle)

#### PR comments
It is very tempting to copy the descriptions from the commits and use these to describe the changes in the PR comment. I found this was especially true when the PR has too many commits: repeating the commits in the comment became a strategy to ensure that the history isn't lost. 
The chances are that having a PR with many commits could be a sign that the scope is too big and / or the git history too cluttered. 

<img src="/imgs/prs/scrapyard.jpg" alt="Sometimes PRs can feel like a scrapyard" loading="lazy" />

Credit: [Pxhere](https://pxhere.com/en/photo/1141570)

#### Automatically merging code
The end goal of any PR is to get merged- right?... In my experience I have found that the goal of any PR is to be a placeholder for conversation and make steps towards getting to a solution that is merged. 
 However, there are times that if a PR becomes so large and complex, merging that particular PR might not always be the best way forward.

## Top tips
Based on this recent experience, here are my top tips for creating high quality PRs which are a placeholder for conversation and aimed at giving future engineers the information they need to know:

<img src="/imgs/prs/cake.jpg" alt="A nice slice" loading="lazy" />

Credit: [Needpix](https://www.needpix.com/photo/1543583/chocolate-cake-chocolatecake-slice-piece-isolated-white-background-food)

#### Thin vertical slices
Make PRs that correlate to thin vertical slices of work that enable reviewers to get into the details. 
For instance I recently worked on replacing a http client for a service, and decided to open up PRs for each endpoint substitution. 
Not only did this enable faster and more detailed feedback, it also made it safer to release continuously. Releasing one change at a time meant it would be low risk to properly test and roll back if necessary in live.

<img src="/imgs/prs/book.jpg" alt="A lovely read" loading="lazy" />

Credit: [Pixabay](https://pixabay.com/photos/book-read-page-text-literature-3773783/)

#### A git history authored for its readers
Remember that the git history you created as you developed the work might not be the clearest way to tell the story of that work. Squash commits where relevant and think about the history existing primarily to give clarity to the work done for the current and future engineers.
Write a high level clear description of the changes for the first line of the commit and think about how this would read in the version control history. Consider: can the single commit line give a high level overview that anyone else could understand? 
Don’t forget that the detail can be added to the body of the commit. I like using bullet points to break up descriptions but see what works for you.

<img src="/imgs/prs/talk-bubble.png" alt="A great conversation" loading="lazy" />

Credit: [Pixabay](https://pixabay.com/vectors/talk-bubbles-conversation-4525725/)

#### A PR comment that adds context
Step back from the work you’ve done and consider from a bird’s eye perspective: what key changes does this PR introduce? This is an opportunity to open up the conversation and frame it clearly.
Writing the comment can be split into different sections:
One high level overview (similar to the first line on a commit) which gives the key information quickly. E.g. ‘This PR changes the httpClient for X endpoint’.
Subsequent detail of key areas of change. E.g. ‘This adds a client wrapper to protect the service from subsequent changes of client and isolate changes to X file’

<img src="/imgs/prs/sunk-boat.jpg" alt="Sunk cost fallacy is real" loading="lazy" />

Credit: [Maxpixel](https://www.maxpixel.net/Sunken-Wreck-Boat-Shipwrecked-1686719)

#### Beware the sunk cost fallacy
When you’ve worked hard on a PR it can be really difficult to distance yourself emotionally from the code. Sometimes if a PR has become too unwieldy the best thing you and your team can do is close/ revert it and redo the work. 
Instead of focusing on the ‘waste’ of time invested in the initial PR, consider that the new PR (or PRs) will inherit the learning that was gained along the way. 
For an interesting perspective on the power of deleting and rewriting the code, check out Corey Haines article on [short-lived branches](https://articles.coreyhaines.com/posts/short-lived-branches).