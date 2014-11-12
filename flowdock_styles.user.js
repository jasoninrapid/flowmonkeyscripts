// ==UserScript==
// @name         Flowdock Script
// @namespace    http://clownpenis.fart
// @version      0.1
// @description  Styling and such for Flowdock
// @author       Jason Jackson
// @match        https://www.flowdock.com/*
// @grant        Anyone can use this, nooch
// ==/UserScript==

$('<style type="text/css"> .comment-message { color:#777777; } .comment-message .message-author { margin-left: 40px;} .comment-message .bubble-icon { margin-left:40px;} .comment-message .content { font-size:11px;margin-left:40px;padding-top:-5px;padding-bottom:-5px;color:#555555; }</style>').appendTo("head");
