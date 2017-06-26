$('.counter').each(function(){
  var $this= $(this);
  var countTo = $this.attr('data-count');

  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },
  {
    duration: 3000,
    easing: 'linear',
    step: function(){
      $this.text(Math.floor(this.countNum));
    },
    complete: function(){
      $this.text(this.countNum);
    }
  });
});

$('.icons').addClass('animated fadeInDown');
$('.text').addClass('animated bounceInUp');
