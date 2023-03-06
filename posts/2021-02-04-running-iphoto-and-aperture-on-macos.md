---
id: 17
title: 'Running iPhoto and Aperture on macOS Catalina &#038; Big Sur'
date: '2021-02-04T22:22:00+00:00'
author: shreyan
layout: post
guid: 'http://localhost:10004/running-iphoto-and-aperture-on-macos/'
permalink: /running-iphoto-and-aperture-on-macos/
categories:
    - Uncategorized
tags:
    - Mac
---

#### <font face="Lucida Grande" size="3">*Maybe also an old version of iTunes*</font>

![](https://terrenly.com/wp-content/uploads/2021/02/2021-02-04.png)

<font color="#000000" face="Lucida Grande" size="2">Hey, have you upgraded from macOS Mohave to one of the newer OSes, like Catalina or Big Sur? In that case, some of your apps might have stopped working. For example, Microsoft Office 2011 for Mac, iPhoto, Aperture, and old versions of Adobe Photoshop stop launching, with a dialog box something like this:</font>

<font color="#000000" face="Lucida Grande" size="2"> ![](https://lh3.googleusercontent.com/-X4pbggciM8I/YBxjsjCXtvI/AAAAAAAAMBY/3MF31KsLyLsAX8lNmZHXn_H7QlToKqQnwCK8BGAsYHg/s512/2021-02-04.png)</font>

<font color="#000000" face="Lucida Grande" size="2">However the dialog box for your app looks, the message is clear: *the app won’t run*. And the reason is incredibly simple: macOS Catalina drops 32-bit support. Big Sur, being released after Catalina, naturally doesn’t support it either. For the user, what this means is older apps don’t run. However, iPhoto and Aperture, being 64-bit apps with some 32-bit code, can be patched to run on Catalina &amp; Big Sur. Here’s how. </font>

<font color="#000000" size="2"></font>

# <font color="#000000" face="Lucida Grande">Using Retroactive to patch iPhoto and Aperture</font>

<font color="#000000" face="Lucida Grande" size="3">Somebody has taken the trouble to create an app named Retroactive which patches iPhoto and Aperture to run on macOS Catalina and Big Sur. While we only tested it on Catalina, others have tested it on Big Sur and it works perfectly there too. The app itself is pretty self-explanatory. Here’s a direct download [link](https://github.com/cormiertyshawn895/Retroactive/releases/download/1.9/Retroactive.1.9.zip). Unzip the zip and right-click the Retroactive app. Click open. It will ask you to confirm your decision. Click Open. Now, if you have installed iPhoto or Aperture, you can click on the Unlock button for that app to make the app run again on Catalina. Also, you can click the iTunes button in order to install iTunes rather than Catalina’s Music, Podcasts, and TV apps. For reference, here’s iPhoto running on my Catalina test device:</font>

<font color="#000000" face="Lucida Grande" size="3"> ![](https://terrenly.com/wp-content/uploads/2021/02/2021-02-04.png)</font>

<font color="#000000" face="Lucida Grande" size="3">That’s it. </font>

<font color="#000000" face="Lucida Grande" size="3"></font>

<font color="#000000" face="Lucida Grande" size="3"></font>