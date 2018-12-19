/*A COPIAR:
//FINESTRA EN HOVER ALBUM XXXXX
{
	var NOMimg = [
		"img/albums/albumXXXXX/03.jpg",
		"img/albums/albumXXXXX/08.jpg",
		"img/albums/albumXXXXX/16.jpg",
		"img/albums/albumXXXXX/24.jpg",
		"img/albums/albumXXXXX/25.jpg",
		"img/albums/albumXXXXX/31.jpg",
		]
	var NOM = document.getElementsByClassName("menu")[0].children[X];//child[X]=XXXXX
	NOM.addEventListener("mouseover", finestraNOM);

	function finestraNOM(){
		var j = Math.floor(Math.random() * (NOMimg.length - 1));
		document.getElementsByClassName("finestra")[0].children[0].src = NOMimg[j];
		document.getElementsByClassName("finestra")[0].children[0].style  = "display: initial;";
		bandera=1;
		this.addEventListener("mouseout", res)
	}
}
*/

//FINESTRA EN HOVER ALBUM MT PERDUT
{
	var mtperdutimg = [
		"img/albums/albumMontperdut/08.jpg",
		"img/albums/albumMontperdut/12.jpg",
		"img/albums/albumMontperdut/14.jpg",
		"img/albums/albumMontperdut/19.jpg",
		"img/albums/albumMontperdut/35.jpg",
		"img/albums/albumMontperdut/49.jpg",
		]
	var mtperdut = document.getElementsByClassName("menu")[0].children[0];//child[0]=mt perdut
	mtperdut.addEventListener("mouseover", finestramtperdut);

	function finestramtperdut(){
		var j = Math.floor(Math.random() * (mtperdutimg.length - 1));
		document.getElementsByClassName("finestra")[0].children[0].src = mtperdutimg[j];
		document.getElementsByClassName("finestra")[0].children[0].style  = "display: initial;";
		bandera=1;
		this.addEventListener("mouseout", res)
	}
}

//FINESTRA EN HOVER ALBUM CALA JONCOLS
{
	var calajimg = [
		"img/albums/albumCalajoncols/03.jpg",
		"img/albums/albumCalajoncols/08.jpg",
		"img/albums/albumCalajoncols/16.jpg",
		"img/albums/albumCalajoncols/24.jpg",
		"img/albums/albumCalajoncols/25.jpg",
		"img/albums/albumCalajoncols/31.jpg",
		]
	var calaj = document.getElementsByClassName("menu")[0].children[1];//child[1]=cala joncols
	calaj.addEventListener("mouseover", finestracalaj);

	function finestracalaj(){
		var j = Math.floor(Math.random() * (calajimg.length - 1));
		document.getElementsByClassName("finestra")[0].children[0].src = calajimg[j];
		document.getElementsByClassName("finestra")[0].children[0].style  = "display: initial;";
		bandera=1;
		this.addEventListener("mouseout", res)
	}
}

//FINESTRA EN HOVER ALBUM TROMSO
{
	var tromsoimg = [
		"img/albums/albumTromso/06.jpg",
		"img/albums/albumTromso/15.jpg",
		"img/albums/albumTromso/22.jpg",
		"img/albums/albumTromso/38.jpg",
		"img/albums/albumTromso/54.jpg",
		"img/albums/albumTromso/59.jpg",
		]
	var tromso = document.getElementsByClassName("menu")[0].children[2];//child[X]=Tromso
	tromso.addEventListener("mouseover", finestratromso);

	function finestratromso(){
		var j = Math.floor(Math.random() * (tromsoimg.length - 1));
		document.getElementsByClassName("finestra")[0].children[0].src = tromsoimg[j];
		document.getElementsByClassName("finestra")[0].children[0].style  = "display: initial;";
		bandera=1;
		this.addEventListener("mouseout", res)
	}
}

//FINESTRA EN HOVER ALBUM CORREFOC
{
	var correfocimg = [
		"img/albums/albumCorrefoc/02.jpg",
		"img/albums/albumCorrefoc/05.jpg",
		"img/albums/albumCorrefoc/07.jpg",
		"img/albums/albumCorrefoc/11.jpg",
		"img/albums/albumCorrefoc/17.jpg",
		"img/albums/albumCorrefoc/23.jpg",
		]
	var correfoc = document.getElementsByClassName("menu")[0].children[3];//child[3]=correfoc
	correfoc.addEventListener("mouseover", finestracorrefoc);

	function finestracorrefoc(){
		var j = Math.floor(Math.random() * (correfocimg.length - 1));
		document.getElementsByClassName("finestra")[0].children[0].src = correfocimg[j];
		document.getElementsByClassName("finestra")[0].children[0].style  = "display: initial;";
		bandera=1;
		this.addEventListener("mouseout", res)
	}
}

//FINESTRA EN HOVER ALBUM PLACA
{
	var placaimg = [
		"img/albums/albumPlaca/03.jpg",
		"img/albums/albumPlaca/07.jpg",
		"img/albums/albumPlaca/08.jpg",
		"img/albums/albumPlaca/16.jpg",
		"img/albums/albumPlaca/34.jpg",
		"img/albums/albumPlaca/36.jpg",
		]
	var placa = document.getElementsByClassName("menu")[0].children[4];//child[X]=Placa
	placa.addEventListener("mouseover", finestraplaca);

	function finestraplaca(){
		var j = Math.floor(Math.random() * (placaimg.length - 1));
		document.getElementsByClassName("finestra")[0].children[0].src = placaimg[j];
		document.getElementsByClassName("finestra")[0].children[0].style  = "display: initial;";
		bandera=1;
		this.addEventListener("mouseout", res)
	}
}

//FUNCIO RES (treu la finestra)
{
	function res(){
		document.getElementsByClassName("finestra")[0].children[0].style = "display: none;";
		bandera=0;
	}
}

