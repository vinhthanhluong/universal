export default function CartBagModule() {
    $('.header-cart').on('click', function () {
        $('.cart-popup').css('right', 0);
        $('body').addClass('modal-open');
    });

    $('.cart-popup .btn-close , .bg-cart').on('click', function () {
        $('.cart-popup').css('right', "-100%");
        $('body').removeClass('modal-open');
    });

}