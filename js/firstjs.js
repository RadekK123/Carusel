$(document).ready(function () {

    var carusel = $('#carusel ul');
    var caruselList = carusel.find('li');


    function moveFirstSlide() {
        var firstLi = carusel.find('li:first');
        var lastLi = carusel.find('li:last');
        lastLi.after(firstLi);
        carusel.css({ marginLeft: '0px' });
    }

    function moveLastSlide() {
        var firstLi = carusel.find('li:first');
        var lastLi = carusel.find('li:last');
        firstLi.before(lastLi);
        carusel.css({ marginLeft: '-800px'});
    }

    var leftArrow = $('#carusel .rectangle .glyphicon-menu-left');
    var rightArrow = $('#carusel .rectangle .glyphicon-menu-right');


    rightArrow.click(moveright);

    function moveright () {
        
        var activeBall = $('.active');
        var nextBall = activeBall.next();

        var Interval;
        if (!nextBall[0]) {
            
            var firstBall = $('.pagination .ball:first');
            var lastBall = $('.pagination .ball:last');

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
            
            var firstBall = $('.pagination .ball:first');
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