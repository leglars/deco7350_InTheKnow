/**
 * Created by Leglars on 2015/10/14.
 */

$(".addValueButton").click(function(event) {

    var curr = $( event.target );
    if ( curr.is( "iron-icon" ) ) {
        curr = curr.parent()
    }
    curr.prop("disabled", true);
    var next = curr.children(".voteNum");
    var oldVoteNum = next.text();
    var newVoteNum = Number(oldVoteNum) + 1;

    var text ="<span class='voteNum'>" +  newVoteNum.toString() + "</span>";


    next.replaceWith(text)
    });