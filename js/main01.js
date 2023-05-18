$(function () {
    $('.main_slide').slick({
        arrows: false,
        // vertical: true, 위로 넘어가게 만들기
        //fade: true, 화면 사라지면서 넘어가는 거
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.main_visual .dots li').on('mouseenter', function () {
        //내가 클릭한 요소 번호를 알려줘!!
        let idx = $(this).index();
        console.log(idx);
        $('.main_slide').slick('slickGoTo', idx, true);
    });

    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    })
    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext');
    });
});

