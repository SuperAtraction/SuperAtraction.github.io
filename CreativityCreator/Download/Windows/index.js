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
          modal: true
});

function Windows(){
  $("#Tanks").load("https://superatraction.github.io/MyHistoire.txt");
  location.href="http://superatraction.github.io/CreativityCreator/Download/Windows/lastest.exe"
}

function UpdaterAndLauncher(){
  location.href="Updater&Launcher/"
}