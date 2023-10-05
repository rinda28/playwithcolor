const tUbahWarna =document.getElementById('tUbahWarna');
tUbahWarna.onclick= function(){
  //document.body.style.backgroundColor = 'green';
  //document.body.setAttribute('class', 'hijau-muda');
  document.body.classList.toggle('hijau-muda');
}

const tAcakWarna = document.createElement('button');
const textTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(textTombol);
tAcakWarna.setAttribute('type', 'button');
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor='rgb('+ r +','+ g +','+ b +')';
})

const sliderMerah = document.querySelector('input[name=sliderMerah]');
const sliderYellowGreen = document.querySelector('input[name=sliderYellowGreen]');
const sliderOrange = document.querySelector('input[name=sliderOrange]');

sliderMerah.addEventListener('input',function(){
    const r = sliderMerah.value;
    const g = sliderYellowGreen.value;
    const b = sliderOrange.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
})

sliderYellowGreen.addEventListener('input',function(){
    const r = sliderMerah.value;
    const g = sliderYellowGreen.value;
    const b = sliderOrange.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
})

sliderOrange.addEventListener('input',function(){
    const r = sliderMerah.value;
    const g = sliderYellowGreen.value;
    const b = sliderOrange.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
})

document.body.addEventListener('mousemove', function(event){
    //console.log(event.clientX);
    //console.log(window.innerWidth);

    const xPos = Math.round(event.clientX / window.innerWidth) * 255;
    const yPos = Math.round(event.clientX / window.innerWidth) * 255;

    document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +',100)';
});