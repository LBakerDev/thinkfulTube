var ourRequest = new XMLHttpRequest();
ourRequest.open('get', 'https://www.googleapis.com/youtube/v3/AIzaSyDcmCDy3TWhrt4PzjbrjH4ZdRXl-lpRJEM/search/', true);
ourRequest.onload = function() {
    console.log(ourRequest.responseText)
};
ourRequest.send();