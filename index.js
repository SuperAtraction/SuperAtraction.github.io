$("#LND").load("news/lastest/index.html");

$( "#Welcome-Dialog" ).dialog({
autoOpen: true,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      },
          modal: true,
            buttons: {
      }
});


    $( "#Lastest-News" ).on( "click", function() {
      alert("Un test");
    });
