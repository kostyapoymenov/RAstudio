$(document).ready(function(){

    $(".place-slider__block").owlCarousel({
        startPosition: 2
    });

    $(".arhitec").owlCarousel({
        items: 1
    });

    function showContact(){
        $('.hero-btn--contact').on('click',function() {
            $('.hero-contact').addClass('hero-contact-active')
        });
        $('.hero-contact__close').on('click',function() {
            $('.hero-contact').removeClass('hero-contact-active')
        });
    }
    showContact();


    function scollTo() {
        $(".hero-btn--down").on("click","a", function (event) {
            event.preventDefault();

            var id  = $(this).attr('href'),

                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    }
    scollTo();

    function showAcordeonMenu(){
        const   navItem = $('.nav-bottom__item');

        navItem.click(function(){
            if(!($(this).hasClass('nav-bottom__item--active'))){
                if(!$(this).find('.nav-bottom__drop-list').length == 0){
                    navItem.removeClass('nav-bottom__item--active');
                    $(this).addClass('nav-bottom__item--active');
                    $(this).find('.nav-bottom__drop-list').show('slow');
                }
            } else {
                $(this).removeClass('nav-bottom__item--active');
                $(this).find('.nav-bottom__drop-list').hide('slow');
            }
        });
    }
    showAcordeonMenu();

    function menuFixed(){
        const   sectionPlace    = document.querySelector('.section-place'),
            coordPlace       = sectionPlace.getBoundingClientRect(),
            menu            = document.querySelector('.nav');
        const event = function(e){
            if(coordPlace.top <= window.pageYOffset){
                menu.classList.add('posit-fixed');
            }else {
                menu.classList.remove('posit-fixed');
            }
        }
        window.addEventListener('wheel', event);
    }
    menuFixed();

    function aboutShow() {
        const   aboutItem           = $('.about-left__item'),
            aboutLeft           = $('.about-left__item'),
            aboutRight          = $('.about-left__item'),
            itemTitle         = $('.about-left__title'),
            itemContent         = $('.about-left__content'),
            aboutRightBlock     = $('.about-right__block'),
            aboutRightTitle     = $('.about-right__title'),
            aboutRightText      = $('.about-right__text');

        aboutItem.click(function(){
            aboutRightBlock.removeClass('active');
            aboutRightTitle.html('');
            aboutRightText.html('');

            aboutItem.removeClass('active');
            $(this).addClass('active');

            var aboutContentTitle = $(this).find(itemTitle).html(),
                aboutContent = $(this).find(itemContent).html();

            $(this).parents(aboutLeft).siblings(aboutRight).find(aboutRightTitle).html(aboutContentTitle);
            $(this).parents(aboutLeft).siblings(aboutRight).find(aboutRightText).html(aboutContent);

            setTimeout(function addActiveClass(){
                aboutRightBlock.addClass('active');
            }, 200);

        });
    }
    aboutShow();

    ymaps.ready(init);
    function init() {
        var map = new ymaps.Map("map", {
            center: [59.93, 30.32],
            zoom: 12,
            behaviors: ['drag']
        });

        var placemark1 = new ymaps.Placemark([59.95, 30.39], {
            hintContent: "ул. Литераторов, д.19",
            balloonContent: "Наш главный офис"
        }, {
            iconLayout: 'default#image',
            iconImageHref: './images/content/marker-place.png',
            iconImageSize: [45, 55]
        });

        map.geoObjects
            .add(placemark1);
    }

    ymaps.ready(init2);
    function init2() {
        var map = new ymaps.Map("map2", {
            center: [59.93, 30.32],
            zoom: 12,
            behaviors: ['drag']
        });

        var placemark1 = new ymaps.Placemark([59.95, 30.39], {
            hintContent: "ул. Литераторов, д.19",
            balloonContent: "Наш главный офис"
        }, {
            iconLayout: 'default#image',
            iconImageHref: './images/content/marker-place.png',
            iconImageSize: [45, 55]
        });

        map.geoObjects
            .add(placemark1);
    }
});
