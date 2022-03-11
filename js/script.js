$('ul.selector__menu').on('click', 'li:not(.selector__item_active)', function() {
	$(this)
		.addClass('selector__item_active').siblings().removeClass('selector__item_active')
		.closest('body').find('div.block__content').removeClass('block__content_active').eq($(this).index()).addClass('block__content_active');
});