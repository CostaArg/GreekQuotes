$(document).ready(function () {
  LoadDataAsync();

  function LoadDataAsync() {
    $.ajax({
      type: "GET",
      url: "https://api.npoint.io/833dd8d93ee50a53821d",
      data: "application/json",
      dataType: "json",
      error: function (xhr) {
        console.log("Error with ajax call");
      },
      success: function (response) {
        ParseData(response);
      },
    });
  }

  function ParseData(response) {
    NewQuote();

    let targetButton = document.getElementById("new-quote");

    $(targetButton).click(function () {
        NewQuote();
    })

    function NewQuote() {
        let targetText = document.getElementById("text");
        let targetAuthor = document.getElementById("author");
        let quoteObject = response[Math.floor(Math.random() * response.length)];
    
        targetText.innerText = quoteObject.quote;
        targetAuthor.innerText = "- " + quoteObject.author;
      }
  }

});
