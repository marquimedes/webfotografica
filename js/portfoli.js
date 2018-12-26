//Per editar contingut, només cal afegir o treure links dels vectors del vector "imgs"


/*GALERIA*/{
	var tops = [
		"img/portfoli/t-aa.jpg",
		"img/portfoli/t-bb.jpg",
		"img/portfoli/t-bd.jpg",
		"img/portfoli/t-bf.jpg",
		"img/portfoli/t-cc.jpg",
		"img/portfoli/t-dd.jpg",
		"img/portfoli/t-ee.jpg",
		"img/portfoli/t-ff.jpg",
		"img/portfoli/t-gg.jpg",
		"img/portfoli/t-hh.jpg",
		"img/portfoli/t-ii.jpg",
		"img/portfoli/t-jj.jpg",
		"img/portfoli/t-ll.jpg",
		"img/portfoli/t-mm.jpg",
		"img/portfoli/t-nn.jpg",
		"img/portfoli/t-oo.jpg",
		"img/portfoli/t-pp.jpg",
		"img/portfoli/t-qq.jpg"
		]
	var pers = [
		"img/portfoli/persones/g-aa.jpg",
		"img/portfoli/persones/g-bb.jpg",
		"img/portfoli/persones/g-dd.jpg",
		"img/portfoli/persones/g-ee.jpg",
		"img/portfoli/persones/g-ff.jpg",
		"img/portfoli/persones/g-hh.jpg",
		"img/portfoli/persones/g-ii.jpg",
		"img/portfoli/persones/g-ij.jpg",
		"img/portfoli/persones/g-ik.jpg",
		"img/portfoli/persones/g-jj.jpg",
		"img/portfoli/persones/g-kk.jpg",
		"img/portfoli/persones/g-km.jpg",
		"img/portfoli/persones/g-ll.jpg",
		"img/portfoli/persones/g-lp.jpg",
		"img/portfoli/persones/g-mm.jpg",
		"img/portfoli/persones/g-nn.jpg"
		]
	var paisat = [
		"img/portfoli/paisatge/p-aa.jpg",
		"img/portfoli/paisatge/p-bb.jpg",
		"img/portfoli/paisatge/p-cc.jpg",
		"img/portfoli/paisatge/p-dd.jpg",
		"img/portfoli/paisatge/p-ff.jpg",
		"img/portfoli/paisatge/p-gg.jpg",
		"img/portfoli/paisatge/p-hh.jpg",
		"img/portfoli/paisatge/p-ii.jpg",
		"img/portfoli/paisatge/p-jj.jpg",
		"img/portfoli/paisatge/p-kk.jpg",
		"img/portfoli/paisatge/p-ll.jpg",
		"img/portfoli/paisatge/p-mm.jpg",
		"img/portfoli/paisatge/p-nn.jpg",
		"img/portfoli/paisatge/p-oo.jpg",
		"img/portfoli/paisatge/p-pp.jpg",
		"img/portfoli/paisatge/p-qq.jpg"
		]
	var anim = [
		"img/portfoli/animals/a-aa.jpg",
		"img/portfoli/animals/a-bb.jpg",
		"img/portfoli/animals/a-cc.jpg",
		"img/portfoli/animals/a-dd.jpg",
		"img/portfoli/animals/a-ee.jpg",
		"img/portfoli/animals/a-ff.jpg",
		"img/portfoli/animals/a-gg.jpg",
		"img/portfoli/animals/a-hh.jpg",
		"img/portfoli/animals/a-ii.jpg",
		"img/portfoli/animals/a-jj.jpg",
		"img/portfoli/animals/a-kk.jpg",
		"img/portfoli/animals/a-ll.jpg",
		"img/portfoli/animals/a-mm.jpg",
		"img/portfoli/animals/a-nn.jpg"
		]

	var imgs = [tops, pers, paisat, anim];

	
	var cont = document.getElementsByClassName('contingut')[0];
	
	for(k=0; k<imgs.length ; k++){
		for(var j=0; j<imgs[k].length ; j++){
			var quad = document.createElement('div');
			quad.className = 'quadricula';
			var img = document.createElement('img');
			quad.appendChild(img);
			cont.appendChild(quad);
			img.src = imgs[k][j];
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
	
}


/*VISTA GRAN*/

	/*Escrivim el necesari en l'arxiu HTML*/{
	// Utilitza el vector "imgs[0]" de l'apartat "GALERIA"
	var contador = 0;
	for(k=0; k<imgs.length ; k++){
		for(var j=0; j<imgs[k].length ; j++){
			var img = document.getElementsByClassName('quadricula')[contador].children[0];
			img.setAttribute( "onClick", "obraVista(); selecDiap("+j+");");
			contador += 1;
		}
	}
	
	var vistag = document.getElementsByClassName('vistagran')[0];
	contador = 0;
	for(k=0; k<imgs.length ; k++){
		for(var j=0; j<imgs[k].length ; j++){
			var diap = document.createElement('div');
			diap.className = 'diapositiva';
			var diapnum = document.createElement('div');
			diapnum.className = 'diapnumero';
			var img = document.createElement('img');
			diap.appendChild(diapnum);
			diap.appendChild(img);
			vistag.appendChild(diap);
			
			img.src = imgs[k][j];
			img.style='width:100%';
			document.getElementsByClassName('diapnumero')[contador].innerHTML = (j+1)+"/"+imgs[k].length;
			contador += 1;
		}
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
	for(k=0; k<imgs.length ; k++){
		for(var j=0; j<imgs[k].length ; j++){
			var miniat = document.createElement('div');
			miniat.className = 'miniatura';
			var img = document.createElement('img');
			miniat.appendChild(img);
			carr.appendChild(miniat);
			img.className = 'demo';
			img.src = imgs[k][j];
			img.setAttribute( "onClick", "selecDiap("+j+");");
		}
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
		document.getElementsByClassName("diapositiva")[recorda].style.display = "none";
		document.getElementsByClassName("miniatura")[recorda].children[0].className = "demo";
	}

	var diapIndex = 0;
	var recorda = 0;
	
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
		recorda = diapIndex;
		
		//AUTO-SCROLL
		var scrollH = document.getElementsByClassName('carret')[0].scrollHeight;
		var scrollP = diapIndex/(dem.length-1);// = On definirem scroll Position, entre 0 i 1
		var scrollI = window.innerHeight;
		scrollI = scrollI/2;// = scroll Increment
		document.getElementsByClassName('carret')[0].scrollTo(0, (scrollP*scrollH)-scrollI+130 );
	}
	/*FLETXES PER PASSAR FOTOS*/
	document.getElementById('vistadiapositiva').setAttribute("onkeydown", "");
	document.onkeydown = function(e){
		switch (e.keyCode){
			case 37://left
				mesDiaps(-1);
				break;
			case 39://right
			case 32://space
				mesDiaps(1);
				break;
			case 27:
				tancaVista();
		}
	}
}


/*FUNCIONAMENT CATEGORIES*/ {
	var categ = document.getElementsByClassName('categories')[0].getElementsByTagName('div');
	for(j=0; j<categ.length; j++){
		categ[j].setAttribute("onclick", "remarcaCateg("+j+")");
		categ[j].className = "noRemarcada";
	}
	remarcaCateg(0);
	function remarcaCateg(n){
		for(j=0; j<categ.length; j++){
			categ[j].classList.remove("remarcada");
			categ[j].className = "noRemarcada";
		}
		categ[n].className = "remarcada";
		categ[n].classList.remove("noRemarcada");
		gestioGeneral(n);
	}
	function gestioGeneral(index){
		var contador = 0;
		for(k=0; k<imgs.length; k++){
			for(var j=0; j<imgs[k].length ; j++){
				document.getElementsByClassName('contingut')[0].children[contador].className = "noQuadricula";
				document.getElementsByClassName('vistagran')[0].children[contador].className = "noDiapositiva";
				document.getElementsByClassName('carret')[0].children[contador].className = "noMiniatura";
				contador += 1;
			}
		}
		contador = 0;
		for(k=0; k<index; k++){
			for(j=0; j<imgs[k].length; j++){
				contador += 1;
			}
		}
		for(var j=contador; j<imgs[index].length + contador ; j++){
			document.getElementsByClassName('contingut')[0].children[j].className = "quadricula";
			document.getElementsByClassName('vistagran')[0].children[j].className = "diapositiva";
			document.getElementsByClassName('carret')[0].children[j].className = "miniatura";
		}
		document.getElementsByClassName('contingut')[0].scrollTo(0, 0);
	}
}