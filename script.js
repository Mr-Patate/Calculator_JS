document.getElementById("button1").onclick = button1Clicked;
document.getElementById("button2").onclick = button2Clicked;
document.getElementById("button3").onclick = button3Clicked;
document.getElementById("button4").onclick = button4Clicked;
document.getElementById("button5").onclick = button5Clicked;
document.getElementById("button6").onclick = button6Clicked;
document.getElementById("button7").onclick = button7Clicked;
document.getElementById("button8").onclick = button8Clicked;
document.getElementById("button9").onclick = button9Clicked;
document.getElementById("buttonC").onclick = buttonCClicked;
document.getElementById("button0").onclick = button0Clicked;
document.getElementById("buttonE").onclick = buttonEClicked;
document.getElementById("button+").onclick = buttonPlusClicked;
document.getElementById("button-").onclick = buttonMoinsClicked;
document.getElementById("button*").onclick = buttonFoisClicked;
document.getElementById("button/").onclick = buttonDivClicked;

resultat = document.getElementById("resultat");
lastResultat = document.getElementById("last");
ecrit = document.getElementById("texthere");

var chiffre;
var ope = "";
var array1 = [];
var array2 = [];
var valide = false;
var final;
var valeur1 = 0;
var valeur2 = 0;

function button1Clicked(){
	chiffre = 1;
	aideChiffre()
	protocole();
}
function button2Clicked(){
	chiffre = 2;
	aideChiffre()
	protocole();
}
function button3Clicked(){
	chiffre = 3;
	aideChiffre()
	protocole();
}
function button4Clicked(){
	chiffre = 4;
	aideChiffre()
	protocole();
}
function button5Clicked(){
	chiffre = 5;
	aideChiffre()
	protocole();
}
function button6Clicked(){
	chiffre = 6;
	aideChiffre()
	protocole();
}
function button7Clicked(){
	chiffre = 7;
	aideChiffre()
	protocole();
}
function button8Clicked(){
	chiffre = 8;
	aideChiffre()
	protocole();
}
function button9Clicked(){
	chiffre = 9;
	aideChiffre()
	protocole();
}
function buttonCClicked(){
	location.reload();
}
function button0Clicked(){
	chiffre = 0;
	aideChiffre()
	protocole();
}
function buttonEClicked(){
	valide = true;
	protocole();
}
function buttonPlusClicked(){
	ope = "+";
	aideOpe()
	protocole();
}
function buttonMoinsClicked(){
	ope = "-";
	aideOpe()
	protocole();
}
function buttonFoisClicked(){
	ope = "*";
	aideOpe()
	protocole();
}
function buttonDivClicked(){
	ope = "/";
	aideOpe()
	protocole();
}

function aideChiffre(){
	ecrit.insertAdjacentHTML("beforebegin",chiffre);
}
function aideOpe(){
	ecrit.insertAdjacentHTML("beforebegin",ope);
}

function protocole(){
	if (!valide){
		arrayFunc();
	}else{
		array2.splice(0,1);
		conversion();
		calcul();
		display();
	}
}

function conversion(){
	for (var i=0; i<array1.length; i++){
		valeur1 = valeur1 + array1[i];
	}
	for (var i=0; i<array2.length; i++){
		valeur2 = valeur2 + array2[i];
	}
}

function calcul(){
	if (ope == "+"){
		calculPlus();
	}else if (ope == "-"){
		calculMoins();
	}else if (ope == "*"){
		calculFois();
	}else if (ope == "/"){
		calculDiv();
	}
}
function display(){
	resultat.innerHTML = final;
	lastResultat.innerHTML = valeur1+ope+valeur2;
}

function calculPlus(){
	final = valeur1 + valeur2;
}
function calculMoins(){
	final = valeur1 - valeur2;
}
function calculFois(){
	final = valeur1 * valeur2;
}
function calculDiv(){
	final = valeur1 / valeur2;
}

function arrayFunc(){
	if (ope == ""){
		array1 = array1.map(x => x * 10);
		array1.push(chiffre);
	}else{
		array2 = array2.map(x => x * 10);
		array2.push(chiffre);
	}
}
