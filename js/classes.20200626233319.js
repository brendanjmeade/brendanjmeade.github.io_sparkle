(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js7').attr('src', (dpi>1) ? 'images/ikedamap-420.jpg' : 'images/ikedamap-210.jpg');
$('.js4').attr('src', (dpi>1) ? 'images/hurricane-420.jpg' : 'images/hurricane-210.jpg');
$('.js5').attr('src', (dpi>1) ? 'images/smallnn-420.jpg' : 'images/smallnn-210.jpg');};
if(!window.HTMLPictureElement){r();}

});