jQuery(document).ready(function () {

    /*
    // можем получить DOM-объект меню через JS
    var menu = document.getElementsByClassName('menu')[0];
    menu.addEventListener('click', function () {
        console.log(event);
        event.preventDefault();
    });

    // можем получить DOM-объект меню через jQuery
    $('.menu').on('click', 'a', function () {
        console.log('event', event);
        console.log('this', this);
        console.log('event.target', event.target);
        event.preventDefault();
    });

    // получаем атрибут href
    $('.menu').on('click', 'a', function () {
        var target_href = event.target.href;
        if (target_href) {
            console.log('нужно перейти: ', target_href);
        }
        event.preventDefault();
    });
    */

    // добавляем ajax-обработчик для обновления количества товара
    $('.basket_list').on('click', 'input[type="number"]', function () {
        let target_href = event.target;
        if (target_href) {

            $('#quantity' + target_href.id).prop('disabled', true);

            $.ajax({
                url: "/basket/edit/" + target_href.name + "/" + target_href.value + "/",
                success: function (data) {

                    console.log('ajax done');

                    if (data.page) {
                        $('.basket_list').html(data.page);
                    }

                    if (data.quantity) {
                        $('#quantity' + target_href.id).val(data.quantity);
                        $('#quantity' + target_href.id).prop('disabled', false);
                    }

                },
            });
        }
        event.preventDefault();
    });
});