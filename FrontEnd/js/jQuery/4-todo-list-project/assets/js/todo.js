// Check off specific to-dos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Note: the reason this is on the "ul" instead of "li" is that this code can only be
// applied to elements that exist at page load. The new "li" elements won't exist at
// the start, but the "ul" does - ".on('click')" will then apply it to all future 
// elements, instead of ".click" which just applies it to existing ones. Very powerful!

// Click on X to delete Todo
$("ul").on("click", ".deleter", (function(e){ //e = event = e
    $(this).parent().fadeOut(250,function(){
        $(this).remove();
    });
    e.stopPropagation(); //super useful jQuery method, stops it bubbling up to the li, ul, div etc.
}));

$("input[type=text]").keypress(function(e){
    if(e.which === 13){ //checking for the enter key
        //grab new todo text from input and save to variable
        var todoText = $(this).val(); 

        // create new li and add to ul through "append" - which takes a string of HTML and
        // appends it
        $("ul").append("<li><span class='deleter'><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
        
        // remove text from input
        $(this).val("");
    };
});

$("#toggler").click(function(){
    $("input[type=text]").fadeToggle();
    $(this).toggleClass("fa-plus");
    $(this).toggleClass("fa-minus");
});