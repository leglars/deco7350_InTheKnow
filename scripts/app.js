/**
 * Created by Leglars on 2015/10/14.
 */

$(".addValueButton").click(function(event) {

    var curr = $( event.target );
    if ( curr.is( "iron-icon" ) || curr.is( "span" ) ) {
        curr = curr.parent();  //change target to paper-button
    }
    curr.prop("disabled", true);
    var sibling;
    if ( curr.attr("id") == "like") {
        sibling = curr.next(); // dislike button
    }else {
        sibling = curr.prev(); // like button
    }
    sibling.prop("disabled", true).prop("active", false).attr("elevation", 0);
    var vote = curr.children(".voteNum");
    var oldVoteNum = vote.text();
    var newVoteNum = Number(oldVoteNum) + 1;

    var text ="<span class='voteNum'>" +  newVoteNum.toString() + "</span>";


    vote.replaceWith(text)
    });