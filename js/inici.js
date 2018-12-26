

var portfExp = document.getElementsByClassName('categoria')[0];
var albumsExp = document.getElementsByClassName('categoria')[1];
var insExp = document.getElementsByClassName('categoria')[2];
var perfilExp = document.getElementsByClassName('categoria')[3];

var categExp = [portfExp, albumsExp, insExp, perfilExp];

var portf = document.getElementsByClassName('menu')[0].children[0];
var albums = document.getElementsByClassName('menu')[0].children[1];
var ins = document.getElementsByClassName('menu')[0].children[3].children[0];
var perfil = document.getElementsByClassName('menu')[0].children[3].children[1];

var categ = [portf, albums, ins, perfil];

	$(categ[0]).hover(function(){
		$(categExp[0]).css("display", "initial");
		}, function(){
		$(categExp[0]).css("display", "none");
	});

	$(categ[1]).hover(function(){
		$(categExp[1]).css("display", "initial");
		}, function(){
		$(categExp[1]).css("display", "none");
	});

	$(categ[2]).hover(function(){
		$(categExp[2]).css("display", "initial");
		}, function(){
		$(categExp[2]).css("display", "none");
	});

	$(categ[3]).hover(function(){
		$(categExp[3]).css("display", "initial");
		}, function(){
		$(categExp[3]).css("display", "none");
	});
