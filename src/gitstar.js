// profile => https://github.com/turingou?tab=repositories
// stars => https://github.com/stars

var gitStar = function() {

};

gitStar.prototype.count = function() {
    if (!$('ul.repolist').length) return false;
    var starscount = 0, stars = [];
    $('ul.repolist li.source').each(function(){
        var star = $(this).find('li.stargazers a');
        if (!star.length) return false;
        var count = parseInt(star.text(),10);
        if (isNaN(count)) return false;
        stars.push(count);
        starscount += count;
    });
    console.log(stars);
    console.log(starscount);
    return this;
};

gitStar.prototype.init = function() {
    return this;
};

$(document).ready(function() {
    var local = window.location.href;
    if (local.indexOf('?tab=repositories') > -1) return (new gitStar).count();
    if (local.indexOf('//github.com/stars') > -1) return (new gitStar).init();
    return false;
});
