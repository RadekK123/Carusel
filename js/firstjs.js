
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

    // Arrow scrolls

    var leftArrow = $('#carusel .rectangle .glyphicon-menu-left');
    var rightArrow = $('#carusel .rectangle .glyphicon-menu-right');


    rightArrow.click(moveright);

    function moveright () {
        var conf = {
            marginLeft : '-800px'
        };
        carusel.animate(conf, 1000, moveFirstSlide);
    }

    leftArrow.click(moveleft);

    function moveleft (){
        var conf = {
            marginLeft : '0px'
        };
        moveLastSlide();
        carusel.animate(conf, 1000);
    }

    var $pagination = $('.pagination');
    var $paginationItems = $pagination.find('div');

    $paginationItems.click(function(e) {
        e.preventDefault();
        var $this = $(this);

        var index = $this.index();
        console.log(index);
        var newPost = (index* -800);
        var self = $this;

        console.log('Odpala');
        self.addClass('active');
        var activeLi = $('.active');
        var nextLi = self.next();
        var prevLi = self.prev();

        
            nextLi.click(function(e) {
            e.preventDefault();
            console.log('Benk');
            activeLi.removeClass('active');
            nextLi.addClass('active');
            });   

            prevLi.click(function(e) {
            e.preventDefault();
            console.log('Bach');
            activeLi.removeClass('active');
            prevLi.addClass('active');      
            });  
     

        carusel.animate({'margin-left' : (newPost + 'px')}, 'slow');
    });

   //var Interval = setInterval(moveright, 5500);

});


/*
            
 e.preventDefault();
        var $this = $(this);
        $pagination.find('div').removeClass('active');
        $this.addClass('active');
    
        var index = $this.index();
        var newPost = (index* -800);

        carusel.animate({'margin-left' : (newPost + 'px')}, 'slow');




*/

