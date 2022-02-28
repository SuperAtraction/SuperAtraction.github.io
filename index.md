<script src="https://superatraction.github.io/index.js"></script>
<link href="Css/Base.css" rel="stylesheet">
# Bienvenue sur SuperAtraction.github.io !

<div class="ui-state-error ui-corner-all" style="padding: 0 .7em;">
		<p><span class="ui-icon ui-icon-alert" style="float: left; margin-right: .3em;"></span>
			Le site est en bêta,<br>
			Certains éléments ne fonctionnent pas / mal.
	</p>
</div>
<button id="Menu" onClick="Menu()">
	Menu
</button>
<div id="temp" title="Menu"></div>

<link href="https://superatraction.github.io/JQuery/jquery-ui.css" rel="stylesheet">
<div class="ui-state-error ui-corner-all" style="padding: 0 .7em;">
		<p><span class="ui-icon ui-icon-alert" style="float: left; margin-right: .3em;"></span>
			En raison de recents problèmes, Updater&Launcher( Dont CreativityCreator ) Ont été décalé vers le 22/02/22
	</p>
</div>
# News
<div id="LND">Erreur. Activez JavaScript ou Vérifier votre connexion Internet.</div>
Ce site utilise les githubs pages pour fonctionner.
Il ne fonctionne malencontreusement pas avec le [php](https://www.php.net/manual/fr/).
#### [Ma page github](https://github.com/SuperAtraction/)
# Mes applications
Vu que je suis un dévloppeur en informatique, j'ai fait des applications :
## CreativityCreator
CreativityCreator, mon tout premier logiciel.
[Sa page](CreativityCreator/)
<br>
Il a une grande puissance.
<br>
[Télécharger CreativityCreator](CreativityCreator/Download)
![](https://user-images.githubusercontent.com/91375731/151582846-95096867-c3aa-4b4a-9c39-42542a4ccae1.png)
## Updater&Launcher
Updater&Launcher,<br>
Mon deuxième logiciel,<br>
Téléchargeable [ici](Updater&Launcher/download)

# Mon Histoire
_**J'ai d'abord découvert [Minecraft](http://minecraft.net), sur Xbox360, mais pas son côté Pvp, craft... Mais le côté Créatif: surtout la redstone. Au fil du temps, j'ai découvert Scratch, puis Minecraft : Bedrock Edition, la copie Minecraft de Microsoft. Puis, début 2021, j'ai eu Minecraft : java Edition, où j'ai découvert un "Secret" dans le launcher : Les versions en Json. J'ai ensuite découvert [Eclipse](http://eclipse.org), le célèbre logiciel de programmation Java. Grâce à lui, j'ai crée un Créateur de Versions de Minecraft, compatible avec les mods. Java, je l'ai commencé à l'appendre fin Mars 2021. J'ai ensuite découvert [MCreator](http://mcreator.net), le logiciel(de plus en plus connu) de création de mods minecraft. Plus tard, début juillet 2021, j'ai appris le HTML et le JavaScript, qui me servent pour les github pages et FirePage. Ensuite, le 15/09/21, j'ai appris le [Php](http://php.net). Le 21/11/22, j'ai appris l'arduino, et nous voilà à aujourd'hui**_

<script src="https://superatraction.github.io/JQuery/external/jquery/jquery.js"></script>
<script src="https://superatraction.github.io/JQuery/jquery-ui.js"></script>
<script type="text/javascript">
	$("#temp").load("dialog.txt");
$( "#temp" ).dialog({
autoOpen: false,
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

$("#LND").load("LNews.txt");
	
function Menu() {
      $( "#temp" ).dialog("open");
}
	
	
</script>
