// ==UserScript==
// @name Dark webUI for rtorrent flood
// @namespace joker999
// @match *://*/overview
// @grant GM_addStyle
// ==/UserScript==

var css=`
.torrents { background:#363E47; }
.table__row--heading { background:#272D33; }
.torrent--is-condensed { border-top: 1px solid #4E5A68; }
.torrent__detail--name {color: #A1B8D3;}
.action-bar { background:#363E47; }
.context-menu__items { background:#273E52;}
.menu__item.is-selectable {color:#fff;}
.scrollbars__thumb { background: #fff; }
.scrollbars__thumb:hover { background:#DCDCDC; }
.scrollbars__thumb:active { background:#DCDCDC; }
`
GM_addStyle(css);

