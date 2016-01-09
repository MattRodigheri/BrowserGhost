(function haunt(){
  setTimeout(function(){
    $ghost = $('<div/>').css({
        'width':'236px',
        'height':'279px',
        'background-image':"url('https://openmerchantaccount.com/img2/ghost.gif')",
        'background-size':'236px 279px'
    });

    var posx = (Math.random() * ($(document).width())).toFixed();
    var posy = (Math.random() * ($(document).height())).toFixed();

    $ghost.css({
        'position':'absolute',
        'left':posx+'px',
        'top':posy+'px',
        'opacity':'0.7',
        'display':'none'
    }).appendTo( 'body' ).fadeIn(100).delay(Math.ceil(Math.random()*4000)).fadeOut(200, function(){
       $(this).remove();
       haunt();
    });
  }, Math.ceil(Math.random()*900000));
})();
