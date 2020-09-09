var slider = document.querySelector("#slider");
var scrs = document.querySelector("#scrs");
var vdc = document.querySelector("#vdc");
var slider = document.querySelector("#slider");
var singles = document.querySelectorAll(".singles-type");
var planTabs = document.querySelectorAll(".plan-tab");
var planaio = document.querySelector("#planaio");
var pt3 = document.querySelector("#pt3");
var aiodis = document.querySelector("#aiodis");
var botTypes = document.querySelectorAll(".bot-type");
var radioCheckout = document.querySelector("#checkout-radio");
var iaCheckout = document.querySelector("#checkout-ia");
var teamsCheckout = document.querySelector("#checkout-teams");
var singlesPack = document.querySelector("#singles-pack");
var singlesPrice = document.querySelector("#pack-price");
var radio = document.querySelector("#radio");
var ia = document.querySelector("#ia");
var teams = document.querySelector("#teams");
var turd = document.querySelector("#turd");
var tp = document.querySelector('#tp');
var annual = document.querySelector("#annualn");
var salvation = document.querySelector('#salvation');
var begin = document.querySelector('#begin');
var div1 = document.querySelector('#div1');
var div3 = document.querySelector('#div3');
var div4 = document.querySelector('#div4');
var bot1 = document.querySelector('#bot1');
var bot2 = document.querySelector('#bot2');
var bot3 = document.querySelector('#bot3');
var fli1 = document.querySelector('#fli1');
var fli2 = document.querySelector('#fli2');
var fli3 = document.querySelector('#fli3');
var botsoin = document.querySelector('#botsoin');
var botsote= document.querySelector('#botsote');
var botinte = document.querySelector('#botinte');
var botPriw = document.querySelector('#botPriw');
var botc1 = document.querySelector('#botc1');
var botc2 = document.querySelector('#botc2');
var botcounter = document.querySelector('#botTounter');
var botText = document.querySelector('#botText');
var botPrice = document.querySelector('#botPrice');
var botCurrency = document.querySelector('#botCurrency');
var scr = slider.value;
var formulas = 0;
var formula = 0;
var formulaWithout = 0;
var save = 0;
var annualv = 0;
var annualw = 0;
var vd = 1;
var aiod = 1;
var ppp = 0;
var soin = 35;
var sote = 30;
var inte = 35;
function calculate(){
		scr = slider.value;
    formula = ppp*scr*aiod*vd;
    formulaWithout = ppp*scr;
    annualv = formula*12;
    tp.textContent = ppp*scr;
    annual.textContent = annualv;
    annualw = formulaWithout*12;
    formulas = annualw-annualv;
    salvation.textContent = formulas;}
function changeScrsValue(e){
    if (slider.value >9){
    scrs.textContent = `${slider.value}+`;
    requote.style.display=('block');
    div2.style.display=('flex');}
    else if (slider.value > 4){
    vdc.style.display="flex";
    scrs.innerText = `${slider.value}`;
    requote.style.display=('none');
    div2.style.display=('none');
    vd = 0.95;
    tp.textContent = ppp*scr;
    } else{
    vdc.style.display="none";
    scrs.innerText = `${slider.value}`;
    requote.style.display=('none');
    div2.style.display=('none');
    vd =1; 
    tp.textContent = ppp*scr;}
    return scr;}
function pickSingles(e){
        [].map.call(singles, function(elem) { elem.classList.remove("selected") ;});
        this.classList.add("selected");
        if (radio.classList.contains("selected")){
        radioCheckout.style.display="flex";
        iaCheckout.style.display="none";
        teamsCheckout.style.display="none";
        turd.classList.add("active");
        ppp = 20;
        begin.style.display = "none";
        div1.style.display = "none";
        calculate();
    } else if (ia.classList.contains("selected")){
    iaCheckout.style.display="flex"; 
    radioCheckout.style.display="none";
        teamsCheckout.style.display="none";
        turd.classList.add("active");
        ppp = 25;
        begin.style.display = "none";
        div1.style.display = "none";
        calculate();
    } else if (teams.classList.contains("selected")){
    teamsCheckout.style.display="flex"; 
    iaCheckout.style.display="none";
    ppp = 20;
   tp.textContent = ppp;
        radioCheckout.style.display="none";
        begin.style.display = "none";
        div1.style.display = "none";
        calculate();} else{
   teamsCheckout.style.display="none";
   radioCheckout.style.display="none";
   iaCheckout.style.display="none";
   turd.classList.add("active");
   ppp=0;
   begin.style.display = "flex";
   div1.style.display = "none";
   calculate();
   }};
function pickBot(e) {
if (bot1.classList.contains('selected') && bot2.classList.contains('selected') && bot3.classList.contains('selected')){
    botpriw.style.display = "none";
    begin.style.display = "none";
    div3.style.display = "none";
    botsoin.style.display = "none";
    botsote.style.display = "none";
    botinte.style.display = "none";
    botc1.style.display = "none";
    botc1.classList.remove("active");
    botc2.style.display = "none";
    botCounter.style.display = "none";
    botText.textContent = "Please select 2 out 3 options ot pick All In One package";
    ppp = 0;
    calculate();
    } else if (bot1.classList.contains('selected') && bot2.classList.contains('selected')){
    botpriw.style.display = "block";
    begin.style.display = "none";
    div3.style.display = "flex";
    botsoin.style.display = "flex";
    botsote.style.display = "none";
    botinte.style.display = "none";
    botc1.style.display = "block";
    botc1.classList.add("active");
    botc2.style.display = "block";
    botc2.classList.add("active");
    botCounter.style.display = "block";
    botCounter.textContent = 2;
    botText.textContent = "/2";
   	botPrice.textContent = (`${soin}`)
    ppp = soin;
    calculate();
    } else if (bot1.classList.contains('selected') && bot3.classList.contains('selected')){
    botpriw.style.display = "block";
    begin.style.display = "none";
    div3.style.display = "flex";
    botsoin.style.display = "none";
    botsote.style.display = "flex";
    botinte.style.display = "none";
    botc1.style.display = "block";
    botc1.classList.add("active");
    botc2.style.display = "block";
    botc2.classList.add("active");
    botCounter.style.display = "block";
    botCounter.textContent = 2;
    botText.textContent = "/2";
   	botPrice.textContent = (`${sote}`)
    ppp = sote;
    calculate();
    } else if (bot2.classList.contains('selected') && bot3.classList.contains('selected')){
    botpriw.style.display = "block";
    begin.style.display = "none";
    div3.style.display = "flex";
    botsoin.style.display = "none";
    botsote.style.display = "none";
    botinte.style.display = "flex";
    botc1.style.display = "block";
    botc1.classList.add("active");
    botc2.style.display = "block";
    botc2.classList.add("active");
    botCounter.style.display = "block";
    botCounter.textContent = 2;
    botText.textContent = "/2";
   	botPrice.textContent = (`${inte}`)
    ppp = inte;
    calculate();
    }else if(bot1.classList.contains('selected') || bot2.classList.contains('selected') || bot3.classList.contains('selected')){
    botpriw.style.display = "block";
    begin.style.display = "block";
    div3.style.display = "flex";
    botsoin.style.display = "none";
    botsote.style.display = "none";
    botinte.style.display = "none";
    botc1.style.display = "block";
    botc1.classList.add("active");
    botc2.style.display = "block";
    botc2.classList.remove("active");
    botCounter.style.display = "block";
    botCounter.textContent = 1;
    botText.textContent = "/2";
   	botPrice.textContent = 0;
    ppp = 0;
    calculate();
    }else {
    botpriw.style.display = "block";
    begin.style.display = "block";
    div3.style.display = "flex";
    botsoin.style.display = "none";
    botsote.style.display = "none";
    botinte.style.display = "none";
    botc1.style.display = "block";
    botc1.classList.remove("active");
    botc2.style.display = "block";
    botc2.classList.remove("active");
    botCounter.style.display = "block";
    botCounter.textContent = 0;
    botText.textContent = "/2";
   	botPrice.textContent = 0;
    ppp = 0;
    calculate();
    console.log('cao')};}
[].map.call(singles, function(elem) {
    elem.addEventListener("click", pickSingles, false);
})	
document.addEventListener('input', changeScrsValue);
document.addEventListener('input', calculate);
for (const planTab of planTabs) {
  planTab.addEventListener('click', function(event) {
  aiodis.style.display = "none";
  bot1.classList.remove('selected');
  bot2.classList.remove('selected');
  bot3.classList.remove('selected');
  bot1.querySelector(".type-checkbox").classList..remove('selected');
  bot2.querySelector(".type-checkbox").classList..remove('selected');
  bot3.querySelector(".type-checkbox").classList..remove('selected');

    ppp=0;
    singles.forEach(function(element) {
        element.classList.remove("selected");
        calculate();
    })
  });
calculate()};
bot1.addEventListener("click", ()=>{
  bot1.classList.toggle("selected");
  bot1.querySelector(".type-checkbox").classList.toggle("selected");
  fli1.classList.toggle("active");
  pickBot();
});
bot2.addEventListener("click", ()=>{
  bot2.classList.toggle("selected");
  planaio.style.display = "none";
  bot2.querySelector(".type-checkbox").classList.toggle("selected");
  fli2.classList.toggle("active");
  pickBot();
});
bot3.addEventListener("click", ()=>{
  bot3.classList.toggle("selected");
  planaio.style.display = "none";
  bot3.querySelector(".type-checkbox").classList.toggle("selected");
  fli3.classList.toggle("active");
  pickBot();
});
pt3.addEventListener("click", ()=>{
		botpriw.style.display = "block";
    aiodis.style.display = "flex";
    begin.style.display = "none";
    div3.style.display = "none";
    planaio.style.display = "flex";
    botsoin.style.display = "none";
    botsote.style.display = "none";
    botinte.style.display = "none";
    ppp = 38;
    calculate();
});
calculate();
