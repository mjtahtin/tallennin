function degrees_to_grid(n, e) {
var deg2rad = Math.PI/180;
// MUUTTAA ASTEKOORDINAATIN YHTEN�ISKOORDINAATIKSI
// Perustuu Maanmittauslaitoksen muunnoskaavaan
// Tarkkuus +-26 metri� ("Koskenkorvan korjaus")
  // Koordinaattimuunnos Joche von Schantz, PHP Mikko Heikkinen
  // Palauttaa taulukon, jonka ensimm�isess� solussa p-koordinaatti, toisessa i-koordinaatti

$lamda = e;
$phi = n;
 
console.log("M0");
console.log(n);
$keskimeridiaanii = 3500000;
$keskimeridiaanilamda = 27;
$keskimeridiaanilamdarad = $keskimeridiaanilamda*deg2rad;
$lamdarad = $lamda*deg2rad;
$phirad = $phi*deg2rad;

// =1+0,00676717019722*(COS(C18)*COS(C18))
$v2 = 1 + 0.00676717019722 * (Math.cos($phirad) * Math.cos($phirad));

// =(C17)-RADIANS(C12)
$l = $lamdarad-$keskimeridiaanilamdarad;

// =TAN(C18)/(COS(SQRT(C19)*(C21)))
$tanxhi = Math.tan($phirad)/(Math.cos(Math.sqrt($v2)*$l));

// 6367654,5*ATAN(C20)-16107,0347*SIN(2*ATAN(C20))+16,9762*SIN(4*ATAN(C20))-0,0223*SIN(6*ATAN(C20))
$p = 6367654.5*Math.atan($tanxhi)-16107.0347*Math.sin(2*Math.atan($tanxhi))+16.9762*Math.sin(4*Math.atan($tanxhi))-0.0223*Math.sin(6*Math.atan($tanxhi));

// =1+0,00676817019722*(Math.COS(Math.ATAN(C20))^2)
$v22 = 1+0.00676817019722*(Math.cos(Math.atan($tanxhi))*Math.cos(Math.atan($tanxhi)));

// =COS(ATAN(C20))*TAN(C21)/SQRT(C23)
$sinhyc = Math.cos(Math.atan($tanxhi))*Math.tan($l)/Math.sqrt($v22);

// =ASINH(C24)*6399936,608
// asinh-funktiota ei ole implementoitu windows-alustalla toimivaan PHP:hen, joten k�ytet��n muita funtioita:
$y = (Math.log($sinhyc + Math.sqrt($sinhyc * $sinhyc + 1)))*6399936.608;

// =C5+C25
$i = $keskimeridiaanii + $y;

uusiY = $p -47; //substr($p, 0, 7) - 47; 
uusiY=Math.floor(uusiY/100);
uusiX = $i +175; //substr($i, 0, 7) + 175; 
uusiX=Math.floor(uusiX/100);

console.log($p);
//return $result;

} // function ends