//ES REQUEREIX L'ETIQUETA <div class="menuDesp"> EN EL BODY DE L'HTML

/*/Codi HTML:*/{
var menu = document.getElementsByClassName('menuDesp')[0];
//menuIc
var icona = document.createElement('img');
icona.className = 'menuIc';
menu.appendChild(icona);
icona.src = "img/icones/menu.png";
//menuLat
var lateral = document.createElement('div');
lateral.className = 'menuLat';
lateral.style.display = "none";
menu.appendChild(lateral);
	//Titol
	var titol = document.createElement('div');
	titol.className = 'menuTit';
	lateral.appendChild(titol);
	titol.innerHTML = "<a href='inici.html'><h1>M.A.</h1><h3>FOTOGRAFIA</h3></a>";
	//Contenedor apartats
	var apartats = document.createElement('div');
	apartats.className = 'menuAps';
	lateral.appendChild(apartats);
		//Apartat INICI
		var apartat = document.createElement('div');
		apartat.className = 'menuAp';
		apartats.appendChild(apartat);
		apartat.innerHTML = "<a href='inici.html'><img src='img/icones/home.png'></a>";
		//Espai
		var espai = document.createElement('div');
		espai.className = 'menuEsp';
		apartats.appendChild(espai);
		//Espai
		var espai = document.createElement('div');
		espai.className = 'menuEsp';
		apartats.appendChild(espai);
		//Apartat PORTFOLI
		var apartat = document.createElement('div');
		apartat.className = 'menuAp';
		apartats.appendChild(apartat);
		apartat.innerHTML = "<a href='portfoli.html'>PORTFOLI</a>";
		//Espai
		var espai = document.createElement('div');
		espai.className = 'menuEsp';
		apartats.appendChild(espai);
		//Apartat ÀLBUMS
		var apartat = document.createElement('div');
		apartat.className = 'menuAp';
		apartats.appendChild(apartat);
		apartat.innerHTML = "<a href='albums.html'>ÀLBUMS</a>";
		//Espai
		var espai = document.createElement('div');
		espai.className = 'menuEsp';
		apartats.appendChild(espai);
		//Apartat INSTSAGRAM + PERFIL
		var apartat2 = document.createElement('div');
		apartat2.className = 'menuAp2';
		apartats.appendChild(apartat2);
		apartat2.innerHTML = "<a href='https://www.instagram.com/marc.alma/?hl=es' target='_blank'>" +
						"<img src='img/icones/instagram.png'> </a>" +
						"<a href='perfil.html'><img src='img/icones/profile.png'></a>";

//Fons
var mBack = document.createElement('div');
mBack.className = 'menuBack';
mBack.style.display = "none";
menu.appendChild(mBack);

//Subapartats a CRONIQUES
var croniq = document.getElementsByClassName('menuAp')[2];
var subapVec = ["Ruta al Mont Perdut",
				"Cala Jòncols, Primavera",
				//"Tromso, Noruega",
				"Correfoc, la Mercè '18",
				"Escalada a la placa Gandhi",
				];
var contenedorSubaps = document.createElement('div');
croniq.appendChild(contenedorSubaps);
contenedorSubaps.className = 'menuSubaps'
for(j=0; j<subapVec.length; j++){
	var subap = document.createElement('a');
	contenedorSubaps.appendChild(subap);
	subap.innerHTML = "<p>" + subapVec[j] + "</p>";
}
document.getElementsByClassName("menuSubaps")[0].children[0].href = "albumMontperdut.html"
document.getElementsByClassName("menuSubaps")[0].children[1].href = "albumCalajoncols.html"
//document.getElementsByClassName("menuSubaps")[0].children[2].href = "albumTromso.html"
document.getElementsByClassName("menuSubaps")[0].children[2].href = "albumCorrefoc.html"
document.getElementsByClassName("menuSubaps")[0].children[3].href = "albumPlaca.html"
//document.getElementsByClassName("menuSubaps")[0].children[ X ].href = "nomAlbum.html"
}

//Funció amagar i mostrar menuLat
icona.setAttribute( "onClick", "mostra()");
function mostra(){
	lateral.id = "entra";
	lateral.style.left = "0px";
	lateral.style.display = "block";
	mBack.style.display = "block";
}
mBack.setAttribute( "onClick", "amaga()");
function amaga(){
	lateral.id = "marxa";
	lateral.style.left = "-400px";
	mBack.style.display = "none";
}













