$(function() {

       $topIndex = 0;

       $( ".ui-draggable" ).draggable().css({"position":"absolute","top":"0px" });;

        $(".ui-draggable").click(function(){
            $topIndex=$topIndex+1;
            $(this).css("z-index",$topIndex);
        });

   });

$('.draggable').draggable();

$('.resizable').resizable({
    aspectRatio: true,
    handles: 'ne, se, sw, nw'
});

$('.resizable').parent().rotatable();
