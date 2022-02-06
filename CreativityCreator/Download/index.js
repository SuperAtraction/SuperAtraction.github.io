$( "#Custom" ).dialog({
autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      },
          modal: true
});

function Custo(){
	$("#Custom").dialog("open");
}