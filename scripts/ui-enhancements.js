var hashLoad=window.location.hash;history.pushState("",document.title,window.location.pathname),$(document).ready(function(){hashLoad&&setTimeout(function(){$(window).stop(!0).scrollTo(hashLoad,{duration:500,offset:-89})},500),$(".menu-inner a").click(function(i){if(i.preventDefault(),!$(this).hasClass("menu_highlight")){var t=$(this).attr("href").replace("/","");$(window).stop(!0).scrollTo(t,{duration:500,offset:-89,interrupt:!0})}});var t=[];$(".menu-inner a").each(function(i){t.push([$(this).attr("href").replace("/",""),0,0,this])}),$(t[0][3]).addClass("menu_highlight"),$(window).scroll(function(){var o=$(window).scrollTop();for(i=0;i<t.length;i++){var n=$(t[i][0]).offset().top,e=$(t[i][0]).offset().top+$(t[i][0]).height();t[i][1]=n,t[i][2]=e}for(i=0;i<t.length;i++)o<t[i][2]&&o>t[i][1]-90?$(t[i][3]).addClass("menu_highlight"):$(t[i][3]).removeClass("menu_highlight")})});