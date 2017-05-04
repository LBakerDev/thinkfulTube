$(document).ready(function() {

    function getDataFromApi(searchTerm) {
        $.getJSON("https://www.googleapis.com/youtube/v3/search",
        {
            'part': 'snippet',
            'key': 'AIzaSyDcmCDy3TWhrt4PzjbrjH4ZdRXl-lpRJEM',
            'q': searchTerm
        },
        function (data) {
            if (data.pageInfo.totalResults == 0){
                $('#youtubeResults').html('NO RESULTS FOUND');
            }
            displayYoutubeSearch(data.items)
        }
        );
    }

    function displayYoutubeSearch(videos) {
        var resultElement = ''; 
        $.each(videos, function (index, video) {
            //resultElement += "<a href='https://www.youtube.com/watch?v=" + video.id.videoId + "' target='newtab'>";
            resultElement = resultElement + "<li><p>" + video.snippet.title +
            "</p><img src='" + video.snippet.thumbnails.high.url + "' /></li>";
        });
        $("#youtubeResults ul").html(resultElement);
    }

    $('.js-search-form').submit(function(event) {
        event.preventDefault();
        getDataFromApi($('.js-query').val()); 
    });

});

