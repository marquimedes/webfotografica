//ES REQUEREIX L'ETIQUETA <div class="fons"> EN EL BODY DE L'HTML

// fonsXXXpc.js = display del fons amb el XXX% de grayscale

//Per canviar les fotos del fons, només cal editar el vector "fimgs" de FONS ALEATORI

/*FONS ALEATORI*/{
	var fimgs = [
		"img/fons/7.jpg",
		"img/fons/8.jpg",
		"img/fons/4.jpg"
		]
	
	var fons = document.getElementsByClassName('fons')[0];
	
	for(j=0; j<fimgs.length ; j++){
		var img = document.createElement('img');
		img.className = 'imgNova';
		fons.appendChild(img);
		img.src = fimgs[j];
		img.style.filter = "grayscale(50%)";
		img.style.display = "none";
	}
	var iBase = document.createElement('img');
	iBase.className = 'imgBase';
	fons.appendChild(iBase);
	iBase.style.filter = "grayscale(50%)";
		/*Hem escrit:{
			<div class="fons">
				<img class="imgNova" src="..." style="filter: grayscale(50%); display: none;">
				...
				<img class="imgNova" src="..." style="filter: grayscale(50%); display: none;">
				<img class="imgBase" src="?" style="filter: grayscale(50%);">
			</div>
		}*/
	var i = Math.floor(Math.random() * (fimgs.length - 1)); //Num. enter entre -1 i fimgs.length (no inclosos)
	fons.children[i].style.display = "block";
	iBase.src = fimgs[i];
	setInterval(function(){
		iBase.src = fimgs[i];
		i++;
		i = i%fimgs.length;
		for(j=0; j<fimgs.length ; j++){
			fons.children[j].style.display = "none";}
		fons.children[i].style.display = "block";
	}, 20000);
}