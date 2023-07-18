/* 프로젝트 자동 스크롤---------- */
$(function () {
    //모니터 화면에 hover했을 때 자동 스크롤
    $('#site_box div').hover(function () {
        var ah = $(this).find('a').innerHeight();  //a 요소에 높이 + 패딩 값, outer는 테두리까지 포함, outerWidth(true)는 테두리랑 마진까지 포함
        var img = $(this).find('img');
        var imgh = $(this).find('img').innerHeight();

        img.stop().animate({ top: ah - imgh }, 6000);
    }, function () {
        var img = $(this).find('img');
        img.stop().animate({ top: 0 }, 5000);
    });

});