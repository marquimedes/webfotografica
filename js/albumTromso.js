//Per canviar les fotos que mostra la galeria, només cal editar el vector "imgs" de GALERIA

//Poden funcionar les fletxes per passar fotots??? i Esc per sortir de diapositiva??

/*GALERIA*/{
	var imgs = [
		"img/albums/albumTromso/01.jpg",
		"img/albums/albumTromso/02.jpg",
		"img/albums/albumTromso/03.jpg",
		"img/albums/albumTromso/04.jpg",
		"img/albums/albumTromso/05.jpg",
		"img/albums/albumTromso/06.jpg",
		"img/albums/albumTromso/07.jpg",
		"img/albums/albumTromso/08.jpg",
		"img/albums/albumTromso/09.jpg"
		]
	for(j=10; j<62; j++){
		imgs.push("img/albums/albumTromso/" + j + ".jpg");}
	
	var cont = document.getElementsByClassName('contingut')[0];
	
	for(var j=0; j<imgs.length ; j++){
		var quad = document.createElement('div');
		quad.className = 'quadricula';
		var img = document.createElement('img');
		quad.appendChild(img);
		cont.appendChild(quad);
		img.src = imgs[j];
	}
			/*Hem escrit:{
			<div class ="contingut">
				<div class="quadricula">
					<img src="..." onclick="obraVista(); selecDiap(0);">
				</div>
				...
				<div class="quadricula">
					<img src="..." onclick="obraVista(); selecDiap(50);">
				</div>
			</div>
			}*/
}


/*VISTA GRAN*/

	/*Escrivim el necesari en l'arxiu HTML*/{
	// Utilitza el vector "imgs" de l'apartat "GALERIA"
	
	for(var j=0; j<imgs.length ; j++){
		var img = document.getElementsByClassName('quadricula')[j].children[0];
		img.setAttribute( "onClick", "obraVista(); selecDiap("+j+");");
	}
	
	var vistag = document.getElementsByClassName('vistagran')[0];
	for(var j=0; j<imgs.length ; j++){
		var diap = document.createElement('div');
		diap.className = 'diapositiva';
		var diapnum = document.createElement('div');
		diapnum.className = 'diapnumero';
		var img = document.createElement('img');
		diap.appendChild(diapnum);
		diap.appendChild(img);
		vistag.appendChild(diap);
		
		img.src = imgs[j];
		img.style='width:100%';
		document.getElementsByClassName('diapnumero')[j].innerHTML = (j+1)+"/"+imgs.length;
	}
	
	var vista = document.getElementsByClassName('vista')[0];
	var ant = document.createElement('a');
	var seg = document.createElement('a');
	ant.className = 'anterior';
	seg.className = 'seguent';
	vista.appendChild(ant);
	vista.appendChild(seg);
	document.getElementsByClassName('anterior')[0].innerHTML = "";
	document.getElementsByClassName('seguent')[0].innerHTML = "";
	ant.setAttribute( "onClick", 'mesDiaps(-1)');
	seg.setAttribute( "onClick", 'mesDiaps(1)');
	
	var carr = document.getElementsByClassName('carret')[0];
	for(var j=0; j<imgs.length ; j++){
		var miniat = document.createElement('div');
		miniat.className = 'miniatura';
		var img = document.createElement('img');
		miniat.appendChild(img);
		carr.appendChild(miniat);
		img.className = 'demo';
		img.src = imgs[j];
		img.setAttribute( "onClick", "selecDiap("+j+");");
	}
			/*Hem escrit:{
			<div id="vistadiapositiva" class="vista" style="displai:none">
				
				<img src="C:/PC/MARC/WEB/img/inici/close.png" class="close" onclick="tancaVista()">
				
				<div class="vistagran">
					<div class="diapositiva" style="display:none">
						<div class="diapnumero">1/51</div>
						<img src="..." style="width:100%">
					</div>
					...
					<div class="diapositiva" style="display:none">
						<div class="diapnumero">51/51</div>
						<img src="..." style="width:100%">
					</div>
				</div>
				
				<a class="anterior" onclick="mesDiaps(-1)"></a>
				<a class="seguent" onclick="mesDiaps(1)"></a>
				
				<div class="carret">
					<div class="miniatura">
						<img class="demo" src="..." onclick="selecDiap(0)>
					</div>
					...
					<div class="miniatura">
						<img class="demo" src="..." onclick="selecDiap(50)>
					</div>
				</div>
			</div>
			}*/
}
	
	/*Interacció*/{
		
	function obraVista(){
		document.getElementById('vistadiapositiva').style.display = "block";
	}
	function tancaVista(){
		document.getElementById('vistadiapositiva').style.display = "none";
	}

	var diapIndex = 0;
	
	function mesDiaps(n){
		mostraDiaps(diapIndex += n);
	}
	function selecDiap(n){
		mostraDiaps(diapIndex = n);
	}

	function mostraDiaps(n){
		var k;
		var diaps = document.getElementsByClassName("diapositiva");
		var dem = document.getElementsByClassName("miniatura");
		if(n>=diaps.length) {diapIndex = 0}
		if(n<0) {diapIndex = diaps.length - 1}
		for(k=0; k<diaps.length ; k++){
			diaps[k].style.display = "none";
		}
		for(k=0; k<dem.length ; k++){
			dem[k].children[0].className = "demo";
		}
		diaps[diapIndex].style.display = "block";
		dem[diapIndex].children[0].className = "active";
		
		//AUTO-SCROLL
		var scrollH = document.getElementsByClassName('carret')[0].scrollHeight;
		var scrollP = diapIndex/(dem.length-1);// = On definirem scroll Position, entre 0 i 1
		var scrollI = window.innerHeight;
		scrollI = scrollI/2;// = scroll Increment
		document.getElementsByClassName('carret')[0].scrollTo(0, (scrollP*scrollH)-scrollI+130 );
	}
}