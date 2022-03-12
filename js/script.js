$('ul.selector__menu').on('click', 'li:not(.selector__item_active)', function() {
	$(this)
		.addClass('selector__item_active').siblings().removeClass('selector__item_active')
		.closest('body').find('div.block__content').removeClass('block__content_active').eq($(this).index()).addClass('block__content_active');
});
VanillaTilt.init(document.querySelectorAll(".dancer__item"), {
    max: 15,
    speed: 1000,
});
VanillaTilt.init(document.querySelectorAll(".dancer__item_last"), {
    max: 10,
    speed: 1000,
});