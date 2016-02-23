
function bubble(bub){
    TweenMax.to(bub, _.random(4.2, 6.8), {
        y: _.random(20, 22),
        repeat:-1,
        yoyo:true,
        ease: Power0.easeNone,
    });
}

$(".circle").each(function(index, element){
    bubble('#' + element.id);
});

$(document).mousemove(function(event){
    var mloc = {
        x: event.pageX,
        y: event.pageY
    };

    var x = $(document).width();
    var y = $(document).height();

    if(
        (mloc.x >= 0 && mloc.x <= x/2) &&
        (mloc.y >= 0 && mloc.y <= y/2)
    ){
        // upper left
        $('#bottom-cat').attr('src', 'http://previews.123rf.com/images/fieldsphotos/fieldsphotos1202/fieldsphotos120200014/12531586-Alert-cat-looking-to-the-left-Stock-Photo.jpg')
    }else if(
        (mloc.x >= x/2 && mloc.x <= y) &&
        (mloc.y >= 0 && mloc.y <= y/2)
    ){
        // upper right
        $('#bottom-cat').attr('src', 'http://thumbs.dreamstime.com/z/tabby-cat-looking-up-to-right-isolated-white-background-42924766.jpg');
    } //etc
});

