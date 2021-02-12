var len;
var results = '';
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var fullDate = new Date();
var timeNow;
var fullTime;

function apiSearch() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
      url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
      beforeSend: function (xhrObj) {
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "47d11f659c75404bba6f65cc26456b70");
      },
      type: "GET",
    })
    .done(function (data) {
      len = data.webPages.value.length;
      for (i = 0; i < len; i++) {
        results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
      }

      $('#searchResults').html(results);
      $('#searchResults').dialog();
    })
    .fail(function () {
      alert("error");
    });
}
function getSearch(){
    apiSearch();
}
function backgroundFlip() {
    var size = numbers.length;
    var temp = Math.floor(Math.random() * size);

    document.getElementById("main").style.backgroundImage = "url(background" + temp + ".jpg)";
}
function getTime() {
    hourNow = fullDate.getHours();
    minuteNow = fullDate.getMinutes();
    fullTime = hourNow + ":" + minuteNow;
    console.log(fullTime);
    document.getElementsByTagName('p').innerHTML = fullTime;
    $('#timeHere').html(fullTime);
    $("#time").dialog();
    
    /*$(function () {*/
        /*$("#time").dialog({
            buttons: {
            "Okay": function () {
            $(this).dialog("close");
            },
            width: 'auto',
            height: 'auto',

            open: function () {
                
                $("#timePlace").text(fullTime);
            }
            }
        });*/
    /*});*/
}
