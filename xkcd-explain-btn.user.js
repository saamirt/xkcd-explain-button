// ==UserScript==
// @name         XKCD Explain Button
// @namespace    https://aamirtahir.com
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://xkcd.com/*
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js

// ==/UserScript==

'use strict';

(function() {
    let path = window.location.pathname.slice(1);
    path = path.slice(0,path.search('/'));
    $('.comicNav').last().after(
    `<div id="explanation-button">
        <ul class="comicNav">
            <li>
                <a href="https://www.explainxkcd.com/wiki/index.php/${path}">Explanation</a>
            </li>
        </ul>
    </div>`
    );
})()