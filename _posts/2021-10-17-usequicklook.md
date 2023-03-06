---
id: 8
title: 'Open files in Quick Look instead of full applications in macOS'
date: '2021-10-17T03:58:00+00:00'
author: shreyan
layout: post
guid: 'http://localhost:10004/usequicklook/'
permalink: /usequicklook/
categories:
    - Uncategorized
tags:
    - Mac
---

<span style="font-family: Lucida Sans;"><span> </span>Are you a Mac user? Do you LOVE the Quick Look feature because it’s a lightweight way to open a file without a full application? But maybe you wish that when you double-click a file, it opens in Quick Look instead of in Preview or Microsoft Word or whatever. It’s actually a lot easier to do this than you might think. Then again, it’s not super easy, either.</span>

<span style="font-family: Lucida Sans;">  
</span>

## <span style="font-family: Lucida Sans;">Set up the App</span>

<div><span style="font-family: Lucida Sans;"><span> </span>You ARE installing an app when you do this. But don’t worry – you don’t need to download a single file for this. Just follow these simple directions to quickly build the app yourself! </span></div><div><span style="font-family: Lucida Sans;">  
</span></div><div><span style="font-family: Lucida Sans;"><span> </span>First, hit </span><span style="font-family: "Lucida Sans";">⌘+Space. Now type “Script Editor” into Spotlight and hit Return on your keyboard. You’ve now opened Script Editor, where you’ll be creating this script. </span></div><div><span style="font-family: "Lucida Sans";">  
</span></div><div><span style="font-family: "Lucida Sans";"><span> </span>Type (or Copy and Paste) the following into the window: </span></div><span class="s1" style="font-variant-ligatures: no-common-ligatures;">**on** </span><span class="s3" style="color: blue; font-variant-ligatures: no-common-ligatures;">**run**</span>

<span class="s4" style="color: black; font-variant-ligatures: no-common-ligatures;"><span class="Apple-tab-span" style="white-space: pre;"> </span>**set** </span><span class="s1" style="font-variant-ligatures: no-common-ligatures;">this\_application\_file</span><span class="s4" style="color: black; font-variant-ligatures: no-common-ligatures;"> **to** **the** </span><span class="s5" style="color: #0016b0; font-variant-ligatures: no-common-ligatures;">**path to**</span><span class="s4" style="color: black; font-variant-ligatures: no-common-ligatures;"> **me**</span>

<span class="s1" style="font-variant-ligatures: no-common-ligatures;"><span class="Apple-tab-span" style="white-space: pre;"> </span>**tell** </span><span class="s3" style="color: blue; font-variant-ligatures: no-common-ligatures;">*application*</span><span class="s1" style="font-variant-ligatures: no-common-ligatures;"> “System Events”</span>

<span class="s4" style="color: black; font-variant-ligatures: no-common-ligatures;"><span class="Apple-tab-span" style="white-space: pre;"> </span><span class="Apple-tab-span" style="white-space: pre;"> </span>**set** </span><span class="s1" style="font-variant-ligatures: no-common-ligatures;">this\_version</span><span class="s4" style="color: black; font-variant-ligatures: no-common-ligatures;"> **to** (**the** </span><span class="s6" style="color: #6c05d3; font-variant-ligatures: no-common-ligatures;">short version</span><span class="s4" style="color: black; font-variant-ligatures: no-common-ligatures;"> **of** </span><span class="s1" style="font-variant-ligatures: no-common-ligatures;">this\_application\_file</span><span class="s4" style="color: black; font-variant-ligatures: no-common-ligatures;">) **as** </span><span class="s3" style="color: blue; font-variant-ligatures: no-common-ligatures;">*string*</span>

<span class="s1" style="font-variant-ligatures: no-common-ligatures;"><span class="Apple-tab-span" style="white-space: pre;"> </span>**end** **tell**</span>

<span class="s4" style="color: black; font-variant-ligatures: no-common-ligatures;"><span class="Apple-tab-span" style="white-space: pre;"> </span>**set** **the** </span><span class="s1" style="font-variant-ligatures: no-common-ligatures;">dialog\_title</span><span class="s4" style="color: black; font-variant-ligatures: no-common-ligatures;"> **to** </span><span class="s1" style="font-variant-ligatures: no-common-ligatures;">application\_name</span><span class="s4" style="color: black; font-variant-ligatures: no-common-ligatures;"> &amp; </span><span class="s6" style="color: #6c05d3; font-variant-ligatures: no-common-ligatures;">space</span><span class="s4" style="color: black; font-variant-ligatures: no-common-ligatures;"> &amp; “v” &amp; </span><span class="s1" style="font-variant-ligatures: no-common-ligatures;">this\_version</span>

<span class="s1" style="font-variant-ligatures: no-common-ligatures;"><span class="Apple-tab-span" style="white-space: pre;"> </span></span>

<span class="s4" style="color: black; font-variant-ligatures: no-common-ligatures;"><span class="Apple-tab-span" style="white-space: pre;"> </span></span><span class="s1" style="font-variant-ligatures: no-common-ligatures;">**activate**</span>

<span class="s1" style="font-variant-ligatures: no-common-ligatures;"><span class="Apple-tab-span" style="white-space: pre;"> </span></span><span class="s5" style="color: #0016b0; font-variant-ligatures: no-common-ligatures;">**display dialog**</span><span class="s1" style="font-variant-ligatures: no-common-ligatures;"> “Open a file with this app or drop it onto this Dock icon to show it in Quick Look” </span><span class="s5" style="color: #0016b0; font-variant-ligatures: no-common-ligatures;">buttons</span><span class="s1" style="font-variant-ligatures: no-common-ligatures;"> {“Cool”} </span><span class="s5" style="color: #0016b0; font-variant-ligatures: no-common-ligatures;">default button</span><span class="s1" style="font-variant-ligatures: no-common-ligatures;"> 1 </span><span class="s5" style="color: #0016b0; font-variant-ligatures: no-common-ligatures;">with icon</span><span class="s1" style="font-variant-ligatures: no-common-ligatures;"> 1 </span><span class="s5" style="color: #0016b0; font-variant-ligatures: no-common-ligatures;">with title</span><span class="s1" style="font-variant-ligatures: no-common-ligatures;"> </span><span class="s2" style="color: #408000; font-variant-ligatures: no-common-ligatures;">dialog\_title</span>

<span class="s1" style="font-variant-ligatures: no-common-ligatures;">**end** </span><span class="s3" style="color: blue; font-variant-ligatures: no-common-ligatures;">**run**</span>

<span class="s1" style="font-variant-ligatures: no-common-ligatures;"></span>

<span class="s4" style="color: black; font-variant-ligatures: no-common-ligatures;">**on** </span><span class="s3" style="color: blue; font-variant-ligatures: no-common-ligatures;">**open**</span><span class="s4" style="color: black; font-variant-ligatures: no-common-ligatures;"> </span><span class="s1" style="font-variant-ligatures: no-common-ligatures;">these\_items</span>

<span class="s1" style="font-variant-ligatures: no-common-ligatures;"><span class="Apple-tab-span" style="white-space: pre;"> </span>**set** </span><span class="s2" style="color: #408000; font-variant-ligatures: no-common-ligatures;">these\_paths</span><span class="s1" style="font-variant-ligatures: no-common-ligatures;"> **to** “”</span>

<span class="s1" style="font-variant-ligatures: no-common-ligatures;"><span class="Apple-tab-span" style="white-space: pre;"> </span>**repeat** **with** </span><span class="s2" style="color: #408000; font-variant-ligatures: no-common-ligatures;">i</span><span class="s1" style="font-variant-ligatures: no-common-ligatures;"> **from** 1 **to** **the** </span><span class="s3" style="color: blue; font-variant-ligatures: no-common-ligatures;">**count**</span><span class="s1" style="font-variant-ligatures: no-common-ligatures;"> **of** </span><span class="s2" style="color: #408000; font-variant-ligatures: no-common-ligatures;">these\_items</span>

<span class="s1" style="font-variant-ligatures: no-common-ligatures;"><span class="Apple-tab-span" style="white-space: pre;"> </span><span class="Apple-tab-span" style="white-space: pre;"> </span>**set** </span><span class="s2" style="color: #408000; font-variant-ligatures: no-common-ligatures;">these\_paths</span><span class="s1" style="font-variant-ligatures: no-common-ligatures;"> **to** </span><span class="s2" style="color: #408000; font-variant-ligatures: no-common-ligatures;">these\_paths</span><span class="s1" style="font-variant-ligatures: no-common-ligatures;"> &amp; </span><span class="s6" style="color: #6c05d3; font-variant-ligatures: no-common-ligatures;">space</span><span class="s1" style="font-variant-ligatures: no-common-ligatures;"> &amp; (**the** </span><span class="s6" style="color: #6c05d3; font-variant-ligatures: no-common-ligatures;">quoted form</span><span class="s1" style="font-variant-ligatures: no-common-ligatures;"> **of** **the** </span><span class="s6" style="color: #6c05d3; font-variant-ligatures: no-common-ligatures;">POSIX path</span><span class="s1" style="font-variant-ligatures: no-common-ligatures;"> **of** (</span><span class="s3" style="color: blue; font-variant-ligatures: no-common-ligatures;">*item*</span><span class="s1" style="font-variant-ligatures: no-common-ligatures;"> </span><span class="s2" style="color: #408000; font-variant-ligatures: no-common-ligatures;">i</span><span class="s1" style="font-variant-ligatures: no-common-ligatures;"> **of** </span><span class="s2" style="color: #408000; font-variant-ligatures: no-common-ligatures;">these\_items</span><span class="s1" style="font-variant-ligatures: no-common-ligatures;">))</span>

<span class="s1" style="font-variant-ligatures: no-common-ligatures;"><span class="Apple-tab-span" style="white-space: pre;"> </span>**end** **repeat**</span>

<span class="s1" style="font-variant-ligatures: no-common-ligatures;"><span class="Apple-tab-span" style="white-space: pre;"> </span></span>

<span class="s1" style="font-variant-ligatures: no-common-ligatures;"><span class="Apple-tab-span" style="white-space: pre;"> </span></span><span class="s5" style="color: #0016b0; font-variant-ligatures: no-common-ligatures;">**do shell script**</span><span class="s1" style="font-variant-ligatures: no-common-ligatures;"> “qlmanage -p ” &amp; </span><span class="s2" style="color: #408000; font-variant-ligatures: no-common-ligatures;">these\_paths</span><span class="s1" style="font-variant-ligatures: no-common-ligatures;"> &amp; ” &gt;&amp; /dev/null”</span>

<span class="s1" style="font-variant-ligatures: no-common-ligatures;">**end** </span><span class="s3" style="color: blue; font-variant-ligatures: no-common-ligatures;">**open**</span>

<div><span style="font-family: "Lucida Sans";">  
</span></div><div><span style="font-family: "Lucida Sans";"><span> </span>Now, hit ⌘+S. In the following dialog, make sure everything looks EXACTLY like this: </span></div><div><span style="font-family: "Lucida Sans";">  
</span></div><div>| [![](https://terrenly.com/wp-content/uploads/2021/10/image.png)](https://lh3.googleusercontent.com/-4XOQyZUu0y4/YWubOo_NWcI/AAAAAAAAWE8/OPAKnBRHw3MccvoCaLi5-TbxEOWxZ91iACLcBGAsYHQ/image.png) |
|---|
|  |

<div class="separator" style="clear: both; text-align: center;"></div><div class="separator" style="clear: both; text-align: center;"></div><span style="font-family: Lucida Sans;"><span> </span>Now click Save to continue. Do you want files to open in Quick Look instead of their default application? Or do you just want a way to show a file in Quick Look as if it’s an app?</span>

</div><div><span style="font-family: Lucida Sans;">  
</span></div><div><span style="font-family: Lucida Sans;"> Before continuing, I assume you’ll want to give this app a better looking icon. That’s up to you. If you want to, I’m sure you can figure out how. However, if you can’t, [here’s](https://9to5mac.com/2020/12/01/change-mac-icons/) a tutorial on how to change a Mac App’s icon. </span></div><div><span style="font-family: Lucida Sans;">  
</span></div>## <span style="font-family: Lucida Sans;">Pin to Dock </span>

<div> <span style="font-family: Lucida Sans;">To pin your app to the Mac’s Dock, open your Mac’s Applications folder. Hit ⌘+F, select “Applications”, and search for “Quick Look”. Find the one you think is right. Drag it onto the Dock. Whenever you want to view a file in Quick Look, you now have the option to drag it onto an icon in your Dock to view it in Quick Look. </span></div>## <span style="font-family: Lucida Sans;">Set default app to Quick Look</span>

<div><span style="font-family: Lucida Sans;"><span> </span>If you want a particular file type to always open in a lightweight Quick Look viewer instead of, say, the full-fledged and unnecessarily weighty Preview application, here’s how. </span></div><div><span style="font-family: Lucida Sans;">  
</span></div><div><span style="font-family: Lucida Sans;"> First, find the file type that you’re looking for, in this case JPG Images. Highlight it using your cursor, and then hit ⌘+I. Then, in the Open with section, open the dropdown, the click “Other”. Hit ⌘+F again. Search for “Quick Look”. Click the little applet we made earlier and click “Add”. </span></div><div><span style="font-family: Lucida Sans;">  
</span></div><div><span style="font-family: Lucida Sans;"><span> To set all files of this type to open in Quick Look, just hit the Change All button. And that’s all there is to it! </span></span></div><div><span style="font-family: Lucida Sans;">  
</span></div><div><span style="font-family: Lucida Sans;"><span> </span>  
</span></div><div><span style="font-family: "Lucida Sans";">  
</span></div><div><span style="font-family: "Lucida Sans";">  
</span></div>