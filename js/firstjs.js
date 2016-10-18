$(document).ready(function () {

    var carusel = $('#carusel ul');
    var leftArrow = $('#carusel .rectangle .glyphicon-menu-left');
    var rightArrow = $('#carusel .rectangle .glyphicon-menu-right');


    rightArrow.click(moveright);

    function moveright () {
        
        var activeBall = $('.active');
        var nextBall = activeBall.next();

        if (!nextBall[0]) {
            
            var firstBall = $('.pagination .ball:first');

            firstBall.removeClass('active');
            firstBall.click();
        } else {
            nextBall.click();
        }
    }

    leftArrow.click(moveleft);

    function moveleft () {
    var activeBall = $('.active');

        var prevBall = activeBall.prev();
        if (!prevBall[0]) {
            
            var lastBall = $('.pagination .ball:last');

            lastBall.click();
            
        } else {
            prevBall.click();
        }
    }

    var $pagination = $('.pagination');
    var $paginationItems = $pagination.find('div');


    $paginationItems.click(function(e) {
        e.preventDefault();
        var $this = $(this);

        var index = $this.index();
        var newPost = (index* -800);

        $('.ball').each(function(index, element) {
            $(element).removeClass('active');
        });

        $this.addClass('active');
        carusel.animate({'margin-left' : (newPost + 'px')}, 'slow');
        
    });

    var Interval = setInterval(moveright, 5500);
});