export default function SlideModule() {
    function slide() {
        let width = $(window).width();
        //console.log(width);
        if (width <= 1200 && document.querySelector('#slide-home')) {
            const swiper = document.querySelector('#slide-home');
            const sliderContainer = swiper.querySelector('.swiper-container');
            const SliderPagination = swiper.querySelector('.swiper-pagination-orange');
            const sliderPrevBtn = swiper.querySelector('.swiper-prev');
            const sliderNextBtn = swiper.querySelector('.swiper-next');
            try {
                const swiper = new Swiper(sliderContainer, {
                    speed: 1000,
                    loop: true,
                    // autoHeight: true,
                    //spaceBetween: 20,
                    autoplay: {
                        delay: 4000,
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },

                    // navigation: {
                    //     nextEl: '.swiper-button-next',
                    //     prevEl: '.swiper-button-prev',
                    // },

                    breakpoints: {
                        // 320: {
                        //     spaceBetween: 50
                        // },
                        // 480: {
                        //     spaceBetween: 30
                        // },
                        // 576: {
                        //     spaceBetween: 0,

                        // }
                    }
                    // observeParents:true,
                    // observeSlideChildren: true,
                    // observer: true,
                })
            } catch (err) {
                console.log(err)
            }

        }
    }

    $(window).on("resize", function() {
        slide;
    });


    if (document.querySelector('#banner-home')) {
        const swiper = document.querySelector('#banner-home');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                // spaceBetween: 30,
                slidesPerView: 1,

                // breakpoints: {
                //     320: {
                //         slidesPerView: 2,
                //         spaceBetween: 10,
                //     },

                //     768: {
                //         spaceBetween: 30,
                //         slidesPerView: 3,
                //     }
                // },
            })
        } catch (err) {
            console.log(err)
        }
    }

    if (document.querySelector('#study-si-slide')) {
        const swiper = document.querySelector('#study-si-slide');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 30,
                slidesPerView: 6,
                autoplay: {
                    disableOnInteraction: false,
                    delay: 4000,
                },


                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                breakpoints: {
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                        centeredSlides: false,
                    },

                    768: {
                        spaceBetween: 20,
                        slidesPerView: 4,
                        centeredSlides: true,
                    },


                    1200: {
                        spaceBetween: 20,
                        slidesPerView: 6,
                        centeredSlides: true,
                    },
                },
            });
            $('.autoplay').on('click', function() {
                if ($(this).hasClass('play')) {
                    $(this).removeClass('play');
                    $(this).addClass('pause');
                    swiper.autoplay.start();
                    return;
                }
                if ($(this).hasClass('pause')) {
                    $(this).removeClass('pause');
                    $(this).addClass('play');
                    swiper.autoplay.stop();
                }
            });
        } catch (err) {
            console.log(err)
        }
    }

    if (document.querySelector('#slide-news')) {
        const swiper = document.querySelector('#slide-news');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 30,
                slidesPerView: 4,
                // autoplay:{
                //     delay: 4000,
                // },

                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },

                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                breakpoints: {
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10,

                    },

                    800: {
                        spaceBetween: 20,
                        slidesPerView: 3,

                    },


                    1900: {
                        spaceBetween: 30,
                        slidesPerView: 4,

                    },
                },
            })
        } catch (err) {
            console.log(err)
        }
    }

    if (document.querySelector('#slide-newspaper')) {
        const swiper = document.querySelector('#slide-newspaper');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 30,
                slidesPerView: 1,
                // autoplay:{

                // },


                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                // breakpoints: {
                //     320: {
                //         slidesPerView: 2,
                //         spaceBetween: 10,

                //     },

                //     800: {
                //         spaceBetween: 20,
                //         slidesPerView: 3,

                //     },


                //     1900: {
                //         spaceBetween: 30,
                //         slidesPerView: 4,

                //     },
                // },
            })
        } catch (err) {
            console.log(err)
        }
    }

    if (document.querySelector('#slide-typical')) {
        const swiper = document.querySelector('#slide-typical');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 30,
                slidesPerView: 3,
                // autoplay:{

                // },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },

                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                breakpoints: {
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10,

                    },
                    500: {
                        spaceBetween: 20,
                        slidesPerView: 2,
                    },


                    1024: {
                        spaceBetween: 20,
                        slidesPerView: 3,
                    },

                    1200: {
                        spaceBetween: 30,
                        slidesPerView: 3,
                    },



                },
            })
        } catch (err) {
            console.log(err)
        }
    }

    if (document.querySelector('#slide-typical2')) {
        const swiper = document.querySelector('#slide-typical2');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 30,
                slidesPerView: 4,
                // autoplay:{

                // },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },

                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                breakpoints: {
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10,

                    },
                    500: {
                        spaceBetween: 20,
                        slidesPerView: 2,
                    },


                    1024: {
                        spaceBetween: 20,
                        slidesPerView: 4,
                    },

                    1200: {
                        spaceBetween: 30,
                        slidesPerView: 4,
                    },



                },
            })
        } catch (err) {
            console.log(err)
        }
    }

    if (document.querySelector('#slide-student')) {
        const swiper = document.querySelector('#slide-student');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 50,
                slidesPerView: 1,
                autoplay: {

                },

                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                // breakpoints: {
                //     320: {
                //         slidesPerView: 2,
                //         spaceBetween: 10,

                //     },
                //     500:{
                //         spaceBetween: 20,
                //         slidesPerView: 2,
                //     },


                //     1024: {
                //         spaceBetween: 20,
                //         slidesPerView: 3,
                //     },

                //     1200:{
                //         spaceBetween: 30,
                //         slidesPerView: 3,
                //     },



                // },
            })
        } catch (err) {
            console.log(err)
        }
    }

    if (document.querySelector('#slide-sign-course')) {
        const swiper = document.querySelector('#slide-sign-course');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 50,
                slidesPerView: 3,
                autoplay: {

                },

                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                breakpoints: {
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                        //centeredSlides: true,

                    },
                    500: {
                        spaceBetween: 20,
                        slidesPerView: 2,

                    },


                    1024: {
                        spaceBetween: 20,
                        slidesPerView: 3,
                    },


                },
            })
        } catch (err) {
            console.log(err)
        }
    }
    if (document.querySelector('#slide-document')) {
        const swiper = document.querySelector('#slide-document');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 50,
                slidesPerView: 3,
                // autoplay: {

                // },

                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },


                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },


                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        //centeredSlides: true,

                    },
                    500: {
                        spaceBetween: 20,
                        slidesPerView: 2,

                    },


                    1024: {
                        spaceBetween: 40,
                        slidesPerView: 3,
                    },


                },
            })
        } catch (err) {
            console.log(err)
        }
    }
}