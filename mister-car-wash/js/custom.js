/*
Template: Carcareful - Car Wash WordPress Theme
Author: peacefulqode.com
Version: 1.0
Design and Developed by: Peacefulqode

*/

/*================================================
[  Table of contents  ]
==================================================

==> Page Loader
==> Accordion
==> Sidebar Toggle
==> Sticky Header
==> Slick Slider
==> Owl Carousel
==> Back To Top
==> Isotope
==> Counter
==> WOW
==> Moving Gallery
==> Beer Sider
==> Magnific Popup

==================================================
[ End table content ]
================================================*/

(function (jQuery) {
    "use strict";
    jQuery(window).on('load', function (e) {
        /*==================================================
        [ Page Loader ]
        ==================================================*/
        jQuery("#pq-loading").fadeOut();
        jQuery("#pq-loading").delay(0).fadeOut("slow");

        var Scrollbar = window.Scrollbar;

        /*==================================================
        [ Accordion ]
        ==================================================*/

        jQuery('.pq-accordion-block .pq-accordion-box .pq-accordion-details').hide();
        jQuery('.pq-accordion-block .pq-accordion-box:first').addClass('pq-active').children().slideDown('slow');
        jQuery('.pq-accordion-block .pq-accordion-box').on("click", function () {
            if (jQuery(this).children('div.pq-accordion-details').is(':hidden')) {
                jQuery('.pq-accordion-block .pq-accordion-box').removeClass('pq-active').children('div.pq-accordion-details').slideUp('slow');
                jQuery(this).toggleClass('pq-active').children('div.pq-accordion-details').slideDown('slow');
            }
        });

        /*==================================================
        [ Sidebar Toggle ]
        ==================================================*/
        jQuery("#pq-toggle-btn").on('click', function () {
            jQuery('#pq-sidebar-menu-contain').toggleClass("active");
        });
        jQuery('.pq-toggle-btn').on('click', function () {
            jQuery('body').addClass('pq-siderbar-open');
        });
        jQuery('.pq-close').on('click', function () {
            jQuery('body').removeClass('pq-siderbar-open');
        });

        /*==================================================
        [ Sticky Header ]
        ==================================================*/

        var view_width = jQuery(window).width();
        if (!jQuery('header').hasClass('pq-header-default') && view_width >= 1023) {
            var height = jQuery('header').height();
            jQuery('.pq-breadcrumb').css('padding-top', height * 2.3);
        }
        if (jQuery('header').hasClass('pq-header-default')) {
            jQuery(window).scroll(function () {
                var scrollTop = jQuery(window).scrollTop();
                if (scrollTop > 300) {
                    jQuery('.pq-bottom-header').addClass('pq-header-sticky animated fadeInDown animate__faster');
                } else {
                    jQuery('.pq-bottom-header').removeClass('pq-header-sticky animated fadeInDown animate__faster');
                }
            });
        }
        if (jQuery('header').hasClass('pq-has-sticky')) {
            jQuery(window).scroll(function () {
                var scrollTop = jQuery(window).scrollTop();
                if (scrollTop > 300) {
                    jQuery('.pq-bottom-header').addClass('pq-header-sticky animated fadeInDown animate__faster');
                } else {
                    jQuery('.pq-bottom-header').removeClass('pq-header-sticky animated fadeInDown animate__faster');
                }
            });
        }

        /*==================================================
        [ Slick Slider ]
        ==================================================*/


        if (jQuery('.slick-slider-main').length) {

            var $slider = jQuery('.slick-slider-main')
            .slick({
                slidesToShow: 1,
                infinite: true,
                arrows: false,
                autoplay: false,
                dots: false,
                lazyLoad: 'ondemand',
                autoplaySpeed: 3000,
                loop: true,
                asNavFor: '.slick-slider-thumb'
            });

            var $slider2 = jQuery('.slick-slider-thumb')

            .slick({
                slidesToShow: 3,
                infinite: false,
                lazyLoad: 'ondemand',
                asNavFor: '.slick-slider-main',
                autoplay: false,
                dots: false,
                Default: '50px',
                arrows: false,
                centerMode: false,
                loop: false,
                focusOnSelect: true,
                transformsEnabled: false
            });
        };

        /*======================================
        [  Owl Carousel  ]
        ======================================*/
        jQuery('.owl-carousel').each(function () {
            var app_slider = jQuery(this);
            var rtl = false;
            var prev = 'ion-ios-arrow-back';
            var next = 'ion-ios-arrow-forward';
            var prev_text = 'Prev';
            var next_text = 'Next';
            if (jQuery('body').hasClass('pq-is-rtl')) {
                rtl = true;
                prev = 'ion-ios-arrow-forward';
                next = 'ion-ios-arrow-back';
            }
            if (app_slider.data('prev_text') && app_slider.data('prev_text') != '') {
                prev_text = app_slider.data('prev_text');
            }
            if (app_slider.data('next_text') && app_slider.data('next_text') != '') {
                next_text = app_slider.data('next_text');
            }
            app_slider.owlCarousel({
                rtl: rtl,
                items: app_slider.data("desk_num"),
                loop: app_slider.data("loop"),
                margin: app_slider.data("margin"),
                nav: app_slider.data("nav"),
                dots: app_slider.data("dots"),
                loop: app_slider.data("loop"),
                autoplay: app_slider.data("autoplay"),
                autoplayHoverPause: true,
                autoplayTimeout: app_slider.data("autoplay-timeout"),
                navText: ["<i class='" + prev + "'></i>", "<i class='" + next + "'></i>"],
                responsiveClass: true,
                responsive: {
                    // breakpoint from 0 up
                    0: {
                        items: app_slider.data("mob_sm"),
                        nav: true,
                        dots: false
                    },
                    // breakpoint from 480 up
                    480: {
                        items: app_slider.data("mob_num"),
                        nav: true,
                        dots: false
                    },
                    // breakpoint from 786 up
                    786: {
                        items: app_slider.data("tab_num")
                    },
                    // breakpoint from 1023 up
                    1023: {
                        items: app_slider.data("lap_num")
                    },
                    1199: {
                        items: app_slider.data("desk_num")
                    }
                }
            });
        });

        /*==================================================
        [ Back To Top ]
        ==================================================*/
        jQuery('#back-to-top').fadeOut();
        jQuery(window).on("scroll", function () {
            if (jQuery(this).scrollTop() > 250) {
                jQuery('#back-to-top').fadeIn(1400);
            } else {
                jQuery('#back-to-top').fadeOut(400);
            }
        });
        jQuery('#top').on('click', function () {
            jQuery('top').tooltip('hide');
            jQuery('body,html').animate({
                scrollTop: 0
            }, 100);
            return false;
        });

        /*==================================================
        [ Isotope ]
        ==================================================*/

        jQuery('.pq-masonry').isotope({
            itemSelector: '.pq-masonry-item',
            masonry: {
                columnWidth: '.grid-sizer',
                // gutter: 0
            }
        });
        jQuery('.pq-grid').isotope({
            itemSelector: '.pq-grid-item',
        });
        jQuery('.pq-filter-button-group').on('click', '.pq-filter-btn', function () {
            var filterValue = jQuery(this).attr('data-filter');
            // console.log(filterValue);
            jQuery('.pq-masonry').isotope({
                filter: filterValue
            });
            jQuery('.pq-grid').isotope({
                filter: filterValue
            });
            jQuery('.pq-filter-button-group .pq-filter-btn').removeClass('active');
            jQuery(this).addClass('active');
            updateFilterCounts();
        });
        var initial_items = 5;
        var next_items = 3;
        if (jQuery('.pq-masonry').length > 0) {
            var initial_items = jQuery('.pq-masonry').data('initial_items');
            var next_items = jQuery('.pq-masonry').data('next_items');
        }
        if (jQuery('.pq-grid').length > 0) {
            var initial_items = jQuery('.pq-grid').data('initial_items');
            var next_items = jQuery('.pq-grid').data('next_items');
        }
        function showNextItems(pagination) {
            var itemsMax = jQuery('.visible_item').length;
            var itemsCount = 0;
            jQuery('.visible_item').each(function () {
                if (itemsCount < pagination) {
                    jQuery(this).removeClass('visible_item');
                    itemsCount++;
                }
            });
            if (itemsCount >= itemsMax) {
                jQuery('#showMore').hide();
            }
            if (jQuery('.pq-masonry').length > 0) {
                jQuery('.pq-masonry').isotope('layout');
            }
            if (jQuery('.pq-grid').length > 0) {
                jQuery('.pq-grid').isotope('layout');
            }
        }
        // function that hides items when page is loaded
        function hideItems(pagination) {
            var itemsMax = jQuery('.pq-filter-items').length;
            // console.log(itemsMax);
            var itemsCount = 0;
            jQuery('.pq-filter-items').each(function () {
                if (itemsCount >= pagination) {
                    jQuery(this).addClass('visible_item');
                }
                itemsCount++;
            });
            if (itemsCount < itemsMax || initial_items >= itemsMax) {
                jQuery('#showMore').hide();
            }
            if (jQuery('.pq-masonry').length > 0) {
                jQuery('.pq-masonry').isotope('layout');
            }
            if (jQuery('.pq-grid').length > 0) {
                jQuery('.pq-grid').isotope('layout');
            }
        }
        jQuery('#showMore').on('click', function (e) {
            e.preventDefault();
            showNextItems(next_items);
        });
        hideItems(initial_items);
        function updateFilterCounts() {
            // get filtered item elements
            if (jQuery('.pq-masonry').length > 0) {
                var itemElems = jQuery('.pq-masonry').isotope('getFilteredItemElements');
            }
            if (jQuery('.pq-grid').length > 0) {
                var itemElems = jQuery('.pq-grid').isotope('getFilteredItemElements');
            }
            var count_items = jQuery(itemElems).length;
            // console.log(count_items);
            if (count_items > initial_items) {
                jQuery('#showMore').show();
            } else {
                jQuery('#showMore').hide();
            }
            if (jQuery('.pq-filter-items').hasClass('visible_item')) {
                jQuery('.pq-filter-items').removeClass('visible_item');
            }
            var index = 0;
            jQuery(itemElems).each(function () {
                if (index >= initial_items) {
                    jQuery(this).addClass('visible_item');
                }
                index++;
            });
            if (jQuery('.pq-masonry').length > 0) {
                jQuery('.pq-masonry').isotope('layout');
            }
            if (jQuery('.pq-grid').length > 0) {
                jQuery('.pq-grid').isotope('layout');
            }
        }
    
        /*==================================================
        [ counter]
        ==================================================*/

        jQuery(window).on('scroll', function () {
            jQuery('.pq-counter').each(function () {
                var $this = jQuery(this);
                var elementTop = $this.offset().top;
                var windowBottom = jQuery(window).scrollTop() + jQuery(window).height();
                // Check if the counter element is in the viewport
                if (windowBottom > elementTop) {
                    if (!$this.hasClass('counted')) { // Check if the animation has already run
                        $this.addClass('counted'); // Mark this counter as processed

                        // Animate the counter
                        $this.find('.pq-count').each(function () {
                            var $count = jQuery(this),
                                countTo = $count.attr('data-count');
                            var Toduration = parseInt($count.attr('data-pq-duration')); // Parse duration

                            jQuery({ countNum: 0 }).animate({
                                countNum: countTo
                            }, {
                                duration: Toduration,
                                easing: 'swing',
                                step: function () {
                                    $count.text(Math.floor(this.countNum)); // Update the number during animation
                                },
                                complete: function () {
                                    $count.text(this.countNum); // Set the final value
                                }
                            });
                        });
                    }
                }
            });
        });

        /*==================================================
        [ WOW ]
        ==================================================*/

        new WOW().init();

        /*==================================================
        [Moving Gallery]
        ==================================================*/
        gsap.defaults({ overwrite: "auto" });
        // gsap.registerPlugin(ScrollTrigger, Flip);
        gsap.config({ nullTargetWarn: false });
        gsap.utils.toArray('.pq-moving-scroll').forEach((section, index) => {
            const galleryList = section.querySelector('.pq-moving-scroll-list');
            // Calculate the x and xEnd values and divide them by 2
            const [x, xEnd] = (index % 2) ?
                [(section.offsetWidth - galleryList.scrollWidth) / 3, 5 / 2] :
                [5 / 2, (section.offsetWidth - galleryList.scrollWidth) / 3];
            gsap.fromTo(galleryList, { x }, {
                x: xEnd,
                scrollTrigger: {
                    trigger: section,
                    scrub: 0.5, // Adjust this value to control the speed
                }
            });
        });

        /*==================================================
        [ Beer Slider ]
        ==================================================*/

        jQuery.fn.BeerSlider = function (options) {
            options = options || {};
            return this.each(function () {
                new BeerSlider(this, options);
            });
        };
        jQuery('.beer-slider').BeerSlider({ start: 50 });
        jQuery('p:empty').remove();
    });

    /*==================================================
    [ Magnific Popup ]
    ==================================================*/
    jQuery(document).ready(function () {
        jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

     /*==================================================
    [ slick accouridan manage ]
    ==================================================*/
        setTimeout(function() {
            var parents = jQuery('.pq-img-main');
            parents.each(function() {
                var parent = jQuery(this);
                var thumbsColumn = parent.find('.pq-thumbs-column-inner');
                var adjustSizeElements = parent.find('.pq-adjust-size');
                if (thumbsColumn.length > 0 && adjustSizeElements.length > 0) {
                    var thumbsColumnHeight = thumbsColumn.outerHeight();
                    adjustSizeElements.css('height', thumbsColumnHeight + 'px');
                }
            });
        }, 500);
    });

})(jQuery);