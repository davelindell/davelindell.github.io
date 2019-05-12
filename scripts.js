"use strict";
var scripts = scripts || {};
scripts = function() {
    var ths = {};
    ths.begin = function() {
        ths.pubs = document.getElementsByClassName("publication");

        for (var i = 0; i < ths.pubs.length; ++i) {
            ths.pubs[i].onclick = ths.expandPub(i);
        }
    };

    ths.expandPub = function(pubID) {
        var clickFn = function(evt) {
           if (this.classList.contains("pub-collapsed")) {
               this.classList.remove("pub-collapsed");
           }
           else {
               this.classList.add("pub-collapsed");
           }
        }
        return clickFn;
    }

    ths.navbar = document.getElementsByClassName("navbar-collapse")[0];
    setTimeout(function() {
        ths.navbar.classList.add("transitions");
    }, 100);


    // make sure image height is at least 300 pixels, or set margin to make up difference
    //var divs = document.getElementsByClassName("pubwrap");
    //for (var i = 0; i < divs.length; ++i) {
    //    var img = divs[i].getElementsByTagName('img')[0]
    //    if (img.height < 175) {
    //        img.style.marginBottom = (175 - img.height).toString() + "px";
    //    }
    //}

    return ths;
};

window.addEventListener("load", scripts().begin);

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-85065092-1', 'auto');
ga('send', 'pageview');

