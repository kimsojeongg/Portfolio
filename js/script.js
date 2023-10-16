$(function(){

    $('.type').typed({
        strings: ["<span style='font-size:1.5em'>Welcome My Portfolio</span>" + "<br>" + "사용자와의 상호작용을 통해 " + "<br>" + "웹을 살아있게 만드는 사람이 되고 싶은"+ "<br>" + "김소정 입니다."],
        typeSpeed: 100,
        backDelay: 150,
        loop: true
    
    })

});


$(function () {

    window.onload = function () {
        AOS.init();
    };

    /* 햄버거 버튼 */
    const hamburger = document.querySelector('.menu');

    hamburger.addEventListener('click', (event) => {
        event.currentTarget.classList.toggle('active');
    });

    $('.menu_tab').hide();
    $('.menu').click(function () {
        $('.menu_tab').animate({ width: "toggle" }, 400);
    });


    let list = document.querySelectorAll(".list li a");
    list.forEach(link => {
        let letters = link.textContent.split("");
        link.textContent = "";
        letters.forEach((letter, i) => {
            i += 1;
            let span = document.createElement("span");
            let delay = i / 15;
            let letterOut = document.createElement("span");
            letterOut.textContent = letter;
            letterOut.style.transitionDelay = `${delay}s`;
            letterOut.classList.add("out");
            span.append(letterOut);
            link.append(span);
            let letterIn = document.createElement("span");
            letterIn.textContent = letter;
            letterIn.style.transitionDelay = "${delay}s";
            letterIn.classList.add("in");
            span.append(letterIn);
            link.append(span);
        })
    });

    var menu = $('#home_header>ul>li');
    var contents = $('#wrap>div');
    var btn = $('#floatdiv ul li');

    //메뉴 클릭시 페이지로 이동
    menu.click(function (event) {
        event.preventDefault();
        var tg = $(this);
        var i = tg.index();
        var section = contents.eq(i);
        var tt = section.offset().top;//section을 top으로 이동한 값을 tt
        $('html,body').stop().animate({ scrollTop: tt });

    });

    //스크롤 이동시 메뉴와 버튼 활성화
    $(window).scroll(function () {
        var sct = $(window).scrollTop();
        contents.each(function () {
            var tg = $(this);
            var i = tg.index();

            //스크롤탑의 위치가 top보다 크거나 같다면 tg를 특정좌표로 이동
            if (tg.offset().top <= sct) {
                switch (i) {
                    case 0:
                        skillsProgressbar();
                        break;
                }
            }
            if (tg.offset().top <= sct) {
                menu.removeClass('on');
                menu.eq(i).addClass('on');
                btn.removeClass('active');
                btn.eq(i).addClass('active');
            }
        })
    })


    $('div.move').each(function () {
        $(this).on('mousewheel DOMMouseScroll', function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;

            if (event.wheelDelta) {
                delta = event.wheelDelta / 120; /* 익스,크롬,오페라 */
            } else if (event.detail) delta = -event.detail / 3; /* /3대신에 -40을 사용하기도함. 사파리 및 크롬에서 wheelDelta 는 마우스 휠의 경우 120대신 3을 사용 */

            var moveTop = null;

            //마우스 휠을 위에서 아래로
            if (delta < 0) {
                if ($(this).next() != undefined) {
                    moveTop = $(this).next().offset().top;
                }
            } else { //마우스 휠을 아래에서 위로
                if ($(this).prev() != undefined) {
                    moveTop = $(this).prev().offset().top;
                }
            }
            //화면이동 0.5초
            $('html,body').stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 500
            })


        })
    })

    /* skills */
    function skillsProgressbar() {
        var htmlNum = 95;
        var cssNum = 95;
        var javascriptNum = 85;
        var jqueryNum = 85;
        var photoshopNum = 80;
        var illustratorNum = 75;
        var figmaNum = 85;
        var bootstrapNum = 85;
        var reactNum = 80;
        var githubNum = 75;
        var max = 100;
        var duration = 1500;

        //그래프 처음 위치 초기화
        $('.bar').css('right', '100%');

        //html
        $('#html_bar').stop().animate({
            'right': 100 - (htmlNum / max * 100) + '%',
        }, {
            'duration': duration,
            'easing': 'easeInOutQuart',
            'progress': function (animation, progress, msRemaining) {
                $('#html_cnt').text(Math.round(htmlNum * progress)); //round는 반올림 함수
            }
        });

        //css
        $('#css_bar').stop().animate({
            'right': 100 - (cssNum / max * 100) + '%',
        }, {
            'duration': duration,
            'easing': 'easeInOutQuart',
            'progress': function (animation, progress, msRemaining) {
                $('#css_cnt').text(Math.round(cssNum * progress)); //round는 반올림 함수
            }
        });

        //javascript
        $('#javascript_bar').stop().animate({
            'right': 100 - (javascriptNum / max * 100) + '%',
        }, {
            'duration': duration,
            'easing': 'easeInOutQuart',
            'progress': function (animation, progress, msRemaining) {
                $('#javascript_cnt').text(Math.round(javascriptNum * progress)); //round는 반올림 함수
            }
        });

        //jquery
        $('#jquery_bar').stop().animate({
            'right': 100 - (jqueryNum / max * 100) + '%',
        }, {
            'duration': duration,
            'easing': 'easeInOutQuart',
            'progress': function (animation, progress, msRemaining) {
                $('#jquery_cnt').text(Math.round(jqueryNum * progress)); //round는 반올림 함수
            }
        });

        //photoshop
        $('#photoshop_bar').stop().animate({
            'right': 100 - (photoshopNum / max * 100) + '%',
        }, {
            'duration': duration,
            'easing': 'easeInOutQuart',
            'progress': function (animation, progress, msRemaining) {
                $('#photoshop_cnt').text(Math.round(photoshopNum * progress)); //round는 반올림 함수
            }
        });


        //illustrator
        $('#illustrator_bar').stop().animate({
            'right': 100 - (illustratorNum / max * 100) + '%',
        }, {
            'duration': duration,
            'easing': 'easeInOutQuart',
            'progress': function (animation, progress, msRemaining) {
                $('#illustrator_cnt').text(Math.round(illustratorNum * progress)); //round는 반올림 함수
            }
        });

        //figma
        $('#figma_bar').stop().animate({
            'right': 100 - (illustratorNum / max * 100) + '%',
        }, {
            'duration': duration,
            'easing': 'easeInOutQuart',
            'progress': function (animation, progress, msRemaining) {
                $('#figma_cnt').text(Math.round(figmaNum * progress)); //round는 반올림 함수
            }
        });

        //bootstrap
        $('#bootstrap_bar').stop().animate({
            'right': 100 - (illustratorNum / max * 100) + '%',
        }, {
            'duration': duration,
            'easing': 'easeInOutQuart',
            'progress': function (animation, progress, msRemaining) {
                $('#bootstrap_cnt').text(Math.round(bootstrapNum * progress)); //round는 반올림 함수
            }
        });

        //react
        $('#react_bar').stop().animate({
            'right': 100 - (illustratorNum / max * 100) + '%',
        }, {
            'duration': duration,
            'easing': 'easeInOutQuart',
            'progress': function (animation, progress, msRemaining) {
                $('#react_cnt').text(Math.round(reactNum * progress)); //round는 반올림 함수
            }
        });

        //github
        $('#github_bar').stop().animate({
            'right': 100 - (illustratorNum / max * 100) + '%',
        }, {
            'duration': duration,
            'easing': 'easeInOutQuart',
            'progress': function (animation, progress, msRemaining) {
                $('#github_cnt').text(Math.round(githubNum * progress)); //round는 반올림 함수
            }
        });

    }

});


/* 프로젝트 자동 스크롤---------- */
$(function () {
    //모니터 화면에 hover했을 때 자동 스크롤
    $('.project_box>div.contents_wrap>div>div').hover(function () {
        var ah = $(this).find('a').innerHeight();  //a 요소에 높이 + 패딩 값, outer는 테두리까지 포함, outerWidth(true)는 테두리랑 마진까지 포함
        var img = $(this).find('img');
        var imgh = $(this).find('img').innerHeight();

        img.stop().animate({ top: ah - imgh }, 8000);
    }, function () {
        var img = $(this).find('img');
        img.stop().animate({ top: 0 }, 5000);
    });

    /* 반응형 테블릿 스크롤 */
    $('.tablet>div').hover(function () {
        var ah = $(this).find('a').innerHeight();  //a 요소에 높이 + 패딩 값, outer는 테두리까지 포함, outerWidth(true)는 테두리랑 마진까지 포함
        var img = $(this).find('img');
        var imgh = $(this).find('img').innerHeight();

        img.stop().animate({ top: ah - imgh }, 3000);
    }, function () {
        var img = $(this).find('img');
        img.stop().animate({ top: 0 }, 5000);
    });

    /* 반응형 스마트폰 스크롤 */
    $('.phone>div').hover(function () {
        var ah = $(this).find('a').innerHeight();  //a 요소에 높이 + 패딩 값, outer는 테두리까지 포함, outerWidth(true)는 테두리랑 마진까지 포함
        var img = $(this).find('img');
        var imgh = $(this).find('img').innerHeight();

        img.stop().animate({ top: ah - imgh }, 8000);
    }, function () {
        var img = $(this).find('img');
        img.stop().animate({ top: 0 }, 5000);
    });

});


$(function () {

    /* 프로젝트 */
    let sliderSelector = '.swiper-container',
        options = {
            loop: true,
            speed: 800,
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: true,
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 50,
                modifier: 1,
                slideShadows: true
            },
            /* autoplay: {
              delay: 3000,
            }, */
            grabCursor: true,
            parallax: true,
            on: {
                imagesReady: function () {
                    this.el.classList.remove('loading');
                }
            }
        };
    let mySwiper = new Swiper(sliderSelector, options);
    mySwiper.init();


    /* contact부분 */
    let toggle = document.querySelector(".toggle");
    let card = document.querySelector(".card");
    toggle.onclick = function () {
        card.classList.toggle("active");
    }

});