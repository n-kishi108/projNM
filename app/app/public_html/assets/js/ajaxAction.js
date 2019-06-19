$(window).on('load', function() {
    $.get('assets/python/main.py', function(data) {
        console.log(data);
    });
    // console.log('')
    // $.ajax({
    //     url: 'assets/python/main.py',
    //     datatype: 'json',
    // }).done(function(data) {
    //     console.log(data);
    // }).fail(function() {
    //     console.log("にゃーん(´・ω・｀)");
    // })
});