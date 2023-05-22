
var bank = 1000;
var player = 100;
document.getElementById('bank').innerHTML = bank + " million pounds";
document.getElementById('player').innerHTML = player + " million pounds";
function clickthecard() {
  var type = Math.floor(Math.random() * 4) + 1;
  if (type == 4){
    card1()
  } else if (type == 3) {
    card2()
  } else if (type == 2) {
    card3()
  } else {
    card4()
  }
}
function checkscore() {
  can=document.getElementById("cards");
  can2=document.getElementById("stats");
  if (player < 0) {
    can.style.background = "red";
    can.innerHTML = "You got bankrupt!"
    can2.style.background = "red";
    can2.innerHTML = ""
  } if (bank < 0) {
    can.style.background = "green";
    can.innerHTML = "You bankrupted the bank!"
    can2.style.background = "green";
    can2.innerHTML = "";
  }
}
function card1() {
  var diamond = Math.floor(Math.random() * 10 + 1);
  bank = bank - diamond;
  player = player + diamond;
  document.getElementById('bank').innerHTML =
    bank + " million pounds";
  document.getElementById('player').innerHTML =
    player + " million pounds";
  can=document.getElementById('stats');
  can.style.background='green';
  can.style.color='black';
  can.style.fontSize='60px';
  can.style.textShadow='0.5px 1px 1.5px black';
  can.style.opacity='100%';
  can.style.textAlign='center';
  var diamond2 = diamond.toString()
  var text = "You got " + diamond2 + " million pounds from the bank!";
  can.innerHTML=text;
  checkscore()
}
function card2() {
  var diamond = Math.floor(Math.random() * 5 + 1);
  bank = bank + diamond;
  player = player - diamond;
  document.getElementById('bank').innerHTML =
    bank + " million pounds";
  document.getElementById('player').innerHTML =
    player + " million pounds";
  can=document.getElementById('stats');
  can.style.background='red';
  can.style.color='black';
  can.style.fontSize='60px';
  can.style.textShadow='0.5px 1px 1.5px black';
  can.style.opacity='100%';
  can.style.textAlign='center';
  var diamond2 = diamond.toString()
  var text = "You gave the bank " + diamond2 + " million pounds!";
  can.innerHTML=text;
  checkscore()
}
function card3() {
  var diamond = Math.floor(Math.random() * 10 + 5);
  bank = bank - diamond;
  player = player + diamond;
  document.getElementById('bank').innerHTML =
    bank + " million pounds";
  document.getElementById('player').innerHTML =
    player + " million pounds";
  can=document.getElementById('stats');
  can.style.background='green';
  can.style.color='black';
  can.style.fontSize='60px';
  can.style.textShadow='0.5px 1px 1.5px black';
  can.style.opacity='100%';
  can.style.textAlign='center';
  var diamond2 = diamond.toString()
  var text = "You got " + diamond2 + " million pounds from the bank!";
  can.innerHTML=text;
  checkscore()
}
function card4() {
  var diamond = Math.floor(Math.random() * 10 + 5);
  bank = bank + diamond;
  player = player - diamond;
  document.getElementById('bank').innerHTML =
    bank + " million pounds";
  document.getElementById('player').innerHTML =
    player + " million pounds";
  can=document.getElementById('stats');
  can.style.background='red';
  can.style.color='black';
  can.style.fontSize='60px';
  can.style.textShadow='0.5px 1px 1.5px black';
  can.style.opacity='100%';
  can.style.textAlign='center';
  var diamond2 = diamond.toString()
  var text = "You gave the bank " + diamond2 + " million pounds!";
  can.innerHTML=text;
  checkscore()
}
