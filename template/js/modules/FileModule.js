export default function FileModule() {
  var sections = $('.id-scroll')
    , header = $('.header')
    , header_height = header.outerHeight()
    , content_list = $('.content-list');

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
      var top = $(this).offset().top - header_height,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        content_list.find('a').removeClass('active');
        // sections.removeClass('active');
        // console.log($(this));
        // $(this).addClass('active');
        content_list.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
      }
    });
  });

  content_list.find('a').on('click', function () {
    var $el = $(this)
      , id = $el.attr('href');

    $('html, body').animate({
      scrollTop: $(id).offset().top - header_height
    }, 500);

    return false;
  });
}