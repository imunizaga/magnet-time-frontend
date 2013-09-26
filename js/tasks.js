$(".task").click(function () {
    var $this = $(this);
    $('.task').removeClass('active');
    $this.addClass('active');
    $("form", $this).animate({height:'toggle'},350);
});

$(".task form").hide().removeClass('hidden');

$(".task:first a").focus();
