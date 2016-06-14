$(document).ready(function () {
    // step 1 - get the input from the user regarding the unanswered questions search
    $('.unanswered-getter').submit(function (event) {
        //if the page refreshes when you submit the form use "preventDefault()" to force Javascript to handle the form submission
        event.preventDefault();
        //zero out results if previous search has run
        $('.results').html('');
        //get the value of the tags the user submitted
        var tags = $(this).find("input[name='tags']").val();
        //run the API search with the user input above
        getUnanswered(tags);
    });
    //step 1 - get the input from the user regarding the top users search
    $('.inspiration-getter').submit(function (event) {
        //if the page refreshes when you submit the form use "preventDefault()" to force Javascript to handle the form submission
        event.preventDefault();
        //zero out results if previous search has run
        $('.results').html('');
        var tag = $(this).find("input[name='answerers']").val();
        //run the API search with the user input above
        getInspiration(tags);
    });
});

//Step 2 (getUnanswered - unanswered questions search) - using the input from the user (query) make the API call to get the JSON response
// takes a string of semi-colon separated tags to be searched for on StackOverflow
var getUnanswered = function (tags) {

    //the parameters we need to pass in our request to StackOverflow's API
    var request = {
        tagged: tags,
        site: 'stackoverflow',
        order: 'desc',
        sort: 'creation'
    };
    //make the API call
    $.ajax({
        url: "http://api.stackexchange.com/2.2/questions/unanswered",
        data: request,
        dataType: "jsonp", //use jsonp to avoid cross origin issues
        type: "GET"
    })

}
