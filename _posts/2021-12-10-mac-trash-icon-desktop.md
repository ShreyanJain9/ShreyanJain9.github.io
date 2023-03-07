---
id: 62
title: 'Get a Windows-Style Trash icon on your Mac&#8217;s desktop'
date: '2021-12-10T03:47:00+00:00'
author: shreyan
layout: post
guid: 'http://localhost:10004/mac-trash-icon-desktop/'
permalink: /mac-trash-icon-desktop/
categories:
    - Uncategorized
tags:
    - Mac
---

<span style="font-family: Lucida Sans;"> Are you a Mac user? Of course you are, you’re reading this. Did you come over from Windows and are having trouble adjusting to macOS? Or do you just like the idea of a Trash icon on your desktop? It doesn’t matter. Whatever your reason, there’s a way to get Trash on your desktop. And it’s not even that hard. </span>

<span style="font-family: Lucida Sans;">Notice that there *is* one bug with this implementation. That bug is that whenever you drag anything onto the icon, while it will be deleted, this will also automatically open the Trash folder in Finder. However, I find that just a minor annoyance, and if you would like, you can add a confirmation dialog here. Anyhow, without further ado, here’s what you do!</span>

1. <span style="font-family: Lucida Sans;">Start by opening the Automator app on your Mac 💻 . If you don’t know where this is, just hit ⌘+Space to search for it. </span>
2. <span style="font-family: Lucida Sans;">In the New Document confirmation, select “Application” and hit create. </span>
3. <span style="font-family: Lucida Sans;">Now find the item “Move Finder Items to Trash” and drag it into the workspace. If you only want the item to delete items, skip to step 10. If you want double-clicking the icon to open the Trash 🗑 folder 📁 as well, continue.</span>
4. <span style="font-family: Lucida Sans;">Now drag both “Get specified Finder Items” and “Open Finder Items” into the workspace. </span>
5. <span style="font-family: Lucida Sans;">In “Get specified Finder Items”, if any defaults were inserted, remove them. </span>
6. <span style="font-family: Lucida Sans;">Now open a Finder window anywhere on the desktop and hit ⌘+Shift+G. </span>
7. <span style="font-family: Lucida Sans;">Here, type ~/.Trash and hit enter.</span>
8. <span style="font-family: Lucida Sans;">Now grab the Folder proxy icon from the top of the Finder window and drag it into the “Get specified Finder items” area. Now your workspace will look like this: <div class="separator" style="clear: both; text-align: center;">[![](https://terrenly.com/wp-content/uploads/2021/12/image.png)](https://lh3.googleusercontent.com/-0kpNJsi9Wu0/YbLLoQXFtUI/AAAAAAAAW0Q/1e9cpj9UpTM6Rj6eCF6av1hfcdjK4pPqgCNcBGAsYHQ/image.png) *Blurry screenshot, apologies 🙁</div><div class="separator" style="clear: both; text-align: center;"></div></span>
9. <div class="separator" style="clear: both; text-align: left;"><span style="font-family: Lucida Sans;">Also, if you want to display a confirmation dialog before opening the Trash folder 📂 , find and insert the Ask for Confirmation box into the workspace before the “Open Finder Items” action. Add whatever text you want.</span></div>
10. <div class="separator" style="clear: both; text-align: left;"><span style="font-family: Lucida Sans;">Now, in the menubar, click “File” and then “Export”. In the “Export as” box, you will probably want to type “Trash”, although you can name it whatever you want. Location should be “Desktop”. Once you’ve confirmed these settings, hit Save. </span></div>
11. <div class="separator" style="clear: both; text-align: left;"><span style="font-family: Lucida Sans;">Now, if you want the icon to look like a Trash can 🗑 , find any icon you like online and use it. Use [this](https://www.howtogeek.com/677739/how-to-change-app-file-and-folder-icons-on-mac/) tutorial to change the icon. </span></div>
12. <div class="separator" style="clear: both; text-align: left;"><span style="font-family: Lucida Sans;">You’re done!</span></div>

<div></div>