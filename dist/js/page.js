var $news = $('.news');
var $nav = $('.nav');
var $cons = $('.header').find('.con');
var $news_con = $('.news_con');

$nav.find('a').hover(function(){
	if ($(this).parent('li').hasClass('active')) return;
	$nav.find('.active').removeClass('active');
	$(this).parent('li').addClass('active');
	var index = $nav.find('a').index(this);
	$cons.hide();
	$cons.eq(index).show();
}, function(){

});

$news.find('a').hover(function(){
	if ($(this).parent('li').hasClass('active')) return;
	$news.find('.active').removeClass('active');
	$(this).parent('li').addClass('active');
	var index = $news.find('a').index(this);
	$news_con.find('.slide').animate({'margin-left':(-705*index)+'px'}, 300);
}, function(){
	$news_con.find('.slide').stop(true,true);

});

