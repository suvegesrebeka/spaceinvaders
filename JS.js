let eletszam = 3;
let maindiv = document.querySelector('.maindiv');
let enemydiv = document.querySelector("#enemyk1");
let megall = 0;
let gameovertitle = document.querySelector('.gameover');
let resetgomb = document.querySelector('.reset');
var elet1 = document.querySelector('#life1');
var elet2 = document.querySelector('#life2');
var elet3 = document.querySelector('#life3');
var lifebox = document.querySelector('#lifebox');
var lovproba = document.querySelector('#lovproba');
var lovedekek = document.getElementsByClassName('lovedek');
var harmadikPalyaFelirat = document.querySelector('#harmadikpalya');
var win = document.querySelector('#win');
var buttonok = document.querySelector('#buttonok');
let elldb = 0;
let spawnkesz = 0;
elsopalyasum = 0;
var teljesitett=0;//teljesitett palyak szama
var masodikPalyaFelirat = document.querySelector("#masodikpalya");
var teljesitettSpan= document.querySelector('.teljesitett');//teljesitett palyak spanja 
var teljesitettSpan1= document.querySelector('.teljesitett1');//teljesitett palyak spanja 
var pontok =document.querySelector('.pontok');
var pontok1 =document.querySelector('.pontok1');







function elsop() {


	if (elldb == 1) {
		
		return;
	}
	
	if (spawnkesz == 0) {
		
		for (let i = 0; i < 12; i++) {
			enemyk1.innerHTML += enemyegy;
			
		}
		spawnkesz = 1;

	}

	setTimeout(function () {

		if (document.getElementsByClassName('spawn').length == 0) {
			elldb = 1;

			return;
		}

		else {

			document.getElementsByClassName('spawn')[0].className = 'urlenyke1kep';
			document.getElementsByClassName('spawn')[0].className = 'urlenyke1kep_2';

			elsop();

		}
		//setTimeout(()=>window.location.reload(),41000);
	}, 800);


}

function masodikpalya(){

	var spawnkesz1=0;
	var elldb1=0;
	masodikPalyaFelirat.style.display="none";

	
	function masodikproba() {
		
		
		if (elldb1 == 1) {
			
			return;
		}
		
		if (spawnkesz1 == 0) {
			
			for (let i = 0; i < 20; i++) {
				
				enemyk1.innerHTML += enemyegy;
				
			}
			spawnkesz1 = 1;
	
		}
	
		setTimeout(function () {
	
			if (document.getElementsByClassName('spawn').length == 0) {
				elldb1 = 1;
	
				return;
			}
	
			else {
				
				document.getElementsByClassName('spawn')[0].className = 'urlenyke2kep';
				document.getElementsByClassName('spawn')[0].className = 'urlenyke2kep_2';

				masodikproba();
	
			}
			//setTimeout(()=>window.location.reload(),41000);
		}, 700);
	
	
	}
	masodikproba();

	
	}

function harmadikpalya(){

	spawnkesz1=0;
	elldb1=0;
	harmadikPalyaFelirat.style.display="none";

	
	function harmadikproba() {
		
		
		if (elldb1 == 1) {
			
			return;
		}
		
		if (spawnkesz1 == 0) {
			
			for (let i = 0; i < 16; i++) {
				
				enemyk1.innerHTML += enemyegy;
				
			}
			spawnkesz1 = 1;
	
		}
	
		setTimeout(function () {
	
			if (document.getElementsByClassName('spawn').length == 0) {
				elldb1 = 1;
	
				return;
			}
	
			else {
				
				document.getElementsByClassName('spawn')[0].className = 'urlenyke3kep';
				document.getElementsByClassName('spawn')[0].className = 'urlenyke3kep_2';
				
				harmadikproba();
	
			}
			//setTimeout(()=>window.location.reload(),41000);
		}, 600);
	
	
	}
	harmadikproba();

}

let timer = 0;

document.onkeydown = function (e) {
	if (villog == 1) { return; }

	//loves
	if (e.key == " ") {

		//ha lovok timer=1, addig nem fut le a prog. tobbi resze es 300milisec.el kesobb lesz a timer=0 szoval folytatodhat a loves
		if (timer == 1) {

			return;
		}

		//lovedek letrehozasa, body.hoz hozzaadasa es a hajotol induljon
		lovproba.innerHTML += "<span class='lovedek' style='left:" + (hajo1.style.left.replace("px", "") * 1 - 2.5) + "px; top:" + (hajo1.style.top.replace("px", "") * 1 - 50) + "px'></span>";

		timer = 1;

		//idozito lovedeknek
		setTimeout(function (e) {
			timer = 0;
		}, 700);
		return false;
	}
}

function kozottx(el, x1, x2) {
	if (
		el.style.left.replace("px", "") * 1 >= x1 &&
		el.style.left.replace("px", "") * 1 <= x2
	) {

		return true;
	}
	else {
		return false;
	}
}

function kozotty(el, y1, y2) {
	if (
		el.style.top.replace("px", "") * 1 >= y1 &&
		el.style.top.replace("px", "") * 1 <= y2
	) {
		return true;
	}
	else {
		return false;
	}
}

let hajo = 0;


function start() {
	document.getElementById('start').style.display = "none";
	document.getElementById('tartarus').style.display = "inline-flex";
	valasztas1.style.display = "inline-block";
	document.getElementById('piranha').style.display = "inline-flex";
	valasztas2.style.display = "inline-block";
	var leiras = document.querySelector('#leiras');
	leiras.style.display="none";

}
function megjelenit1() {
	document.querySelector("#lifebox").style.display = "flex";
	document.getElementById('tartarus').style.display = "none";
	document.getElementById('piranha').style.display = "none";
	hajo1.style.display = "inline-block";
	valasztas1.style.display = "none";
	valasztas2.style.display = "none";
	piranhaa.style.display = "none";
	hajo = 0;
}
function megjelenit2() {
	document.querySelector("#lifebox").style.display = "flex";
	document.getElementById('tartarus').style.display = "none";
	document.getElementById('piranha').style.display = "none";
	hajo1.style.display = "none";
	hajo1.id = "eltunt";
	valasztas1.style.display = "none";
	valasztas2.style.display = "none";
	piranhaa.style.display = "inline-block";
	piranhaa.id = "hajo1";
	hajo = 1;
}

let egerx = 0, egery = 0;


function startgame(e) {

	document.addEventListener('mousemove', function (e) {
		if (e.clientX < window.outerWidth * 0.255 || e.clientX > window.outerWidth * 0.730) {
			hajo1.style.top = e.clientY + "px";
		}

		else if (e.clientY < 50 || e.clientY > window.outerHeight - 100) {
			hajo1.style.left = e.clientX + "px";
		}

		else {
			hajo1.style.left = e.clientX + "px";
			hajo1.style.top = e.clientY + "px";
		}

		egerx = e.clientX;
		egery = e.clientY;
	});
	
	setTimeout(function () { // pálya meghívva
		elsop();
	},800);
}


setInterval(function () {

	let elsoell = Array();
	asd3 = 0;

	while (asd3 < elsoenemyclass.length) {

		elsoell = document.getElementsByClassName(elsoenemyclass[asd3]);

		// lovedek eltunes ha hozzaer az adott class-u urlenykehez

		for (let i = 0; i < lovedekek.length; i++) {
			let vane = 0;
			for (let j = 0; j < elsoell.length; j++) {

				ellx = elsoell[j].offsetLeft;
				elly = elsoell[j].offsetTop;
				if (
					kozottx(lovedekek[i], ellx, ellx + window.outerWidth * 0.04)&&
					kozotty(lovedekek[i], elly, (elly + window.outerWidth * 0.06) *0.923137310606 )//
				) {

					lovedekek[i].remove();

					elsoell[j].style.cursor = "none";
					elsoell[j].src = "expl.gif";

					elsoell[j].style.top = curpos(elsoell[j]).top + "px";
					elsoell[j].style.left = curpos(elsoell[j]).left + "px";

					elsoell[j].className = "7";
					vane = 1;
					break;
				}
			}
			if (vane == 1) {
				continue;
			}
			//lovedek torles, ha y < 0 (kimegy fent a kepbol)
			if (lovedekek[i].style.top.replace('px', "") * 1 < 0) {
				lovedekek[i].remove();
				continue;
			}
			//lovedek mozgas
			lovedekek[i].style.top = lovedekek[i].style.top.replace('px', "") * 1 - 12 + "px";
		}
		asd3++;
	}
}, 50);


function curpos(e) {
	var x = 0;
	var y = 0;
	while (e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop)) {
		x += e.offsetLeft - e.scrollLeft;
		y += e.offsetTop - e.scrollTop;
		e = e.offsetParent;
	}
	return { left: x, top: y };
}

let villog = 0;
let eletszamlalo = 0;
let asd2 = 0;

setInterval(function () {

	if (villog == 1) { return; }

	let player = document.getElementsByClassName('hajo');
	let elsoell = Array();
	asd2 = 0;

	while (asd2 < elsoenemyclass.length) {

		elsoell = document.getElementsByClassName(elsoenemyclass[asd2]);

		for (let j = 0; j < elsoell.length; j++) {
			ellx = elsoell[j].offsetLeft;
			elly = elsoell[j].offsetTop;
			if (
				kozottx(hajo1, ellx - window.outerWidth * 0.03, ellx + window.outerWidth * 0.07) &&
				kozotty(hajo1, elly, (elly + window.outerWidth * 0.11) * 0.9)
			   ) 
			{
				eletszam--;
				villog = 1;

				elsoell[j].style.cursor = "none";
				elsoell[j].src = "expl.gif";
				hajo1.src = "expl.gif"

				elsoell[j].style.top = curpos(elsoell[j]).top + "px";
				elsoell[j].style.left = curpos(elsoell[j]).left + "px";

				elsoell[j].className = "7";

				gameover();

				// erintkezes utan class valtas az animacio miatt
				if (hajo == 0) {
					setTimeout(function () {
						hajo1.src = "hajo1.png";
						hajo1.className = "hajo_villog";
					}, 500);
				}
				else {
					setTimeout(function () {
						hajo1.src = "piranha.png";
						hajo1.className = "hajo_villog";
					}, 500);
				}

				//villogas utan vissza allitani az eredeti class.t 
				setTimeout(function () {
					villog = 0;
					hajo1.className = "hajo";
				}, 2500);
				return;
			}
		}
		asd2++;
	}
}, 300);



var summ = 0;//számolja mennnyit ölt meg a játékos

setInterval(function () {

	let a = document.getElementsByTagName('img');
	for (var i = 0; i < a.length; i++) {
		if (a[i].className[0] >= '0' && a[i].className[0] <= '9') {
			if (a[i].className * 1 > 0) {
				a[i].className = (a[i].className * 1 - 1) + "";
			}
			else {
				a[i].remove();
				summ++;
				pontok.innerHTML = summ;

				
				//második pálya felirat előjövetele
					if(summ===12){
					enemyegy = "<img src='enemy2.png' class='spawn' style='position: absolute; width: 4%; padding-top:30px'>";
					masodikPalyaFelirat.style.display="block";
					masodikPalyaFelirat.classList.add("felirat");
					teljesitett++;
					setTimeout(()=>{if(teljesitett==1){
						masodikpalya()}},4000);
					}
					else if(summ===32){
						enemyegy = "<img src='enemy3.png' class='spawn' style='position: absolute; width: 4%; padding-top:30px'>";
						harmadikPalyaFelirat.style.display="block";
						harmadikPalyaFelirat.classList.add("felirat");
						teljesitett++;
						setTimeout(()=>{
							harmadikpalya();
						},4000);
					}
					else if(summ==48){
						teljesitett++;
						win.style.display="inline-flex";
						buttonok.style.display="inline-flex";
						win.classList.add("felirat3");
						buttonok.classList.add("felirat2");
						hajo1.style.display="none";
						this.teljesitettSpan1.innerHTML=teljesitett;
						this.pontok1.innerHTML=summ;
					}
				}
			}
		}
}, 100);

var text =document.querySelector('.gameoversection');

function gameover() {// vege a gamenak
	if (eletszam == 2) {	//elet img-k eltuntetese erintkezeskor
		setInterval(() => {
			elet1.className = "eletvillog";//villogas
		}, 400);
		setTimeout(() => {
			elet1.style.display = 'none';
		}, 2500);
	}
	else if (eletszam == 1) {//eltunes kesleltetes
		setInterval(() => {
			elet2.className = "eletvillog";
		}, 400);
		setTimeout(() => {
			elet2.style.display = 'none';
		}, 2500);
	}
	else if (eletszam == 0) {//minden eltuntetes
		timer = 1;
		lovproba.style.display='none';
		elet3.style.display = 'none';
		enemyk1.style.display='none';
		gameovertitle.style.display = "block";
		maindiv.classList.add('gameoverVillog2');
		gameovertitle.classList.add('gameoverVillog');//effekt a szovegre
		hajo1.style.display = "none";
		enemydiv.classList.add('spawn');
		resetgomb.style.display = 'inline-block';
		resetgomb.classList.add('gameoverVillog');
		text.style.display ="inline-block";
		//teljesitettSpan.innerHTML=teljesitett;
		teljesitettSpan.innerHTML=teljesitett;
		pontok.innerHTML = summ;
	}
}

resetgomb.addEventListener('click', ()=>{window.location.reload()});