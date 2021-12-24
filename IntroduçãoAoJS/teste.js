var numero0 = document.getElementById('numero1')
var Number = 0;
var name1 = document.getElementById("name1");
var teste = document.getElementById('teste');


function increment() {
    Number = Number + 1;
    numero0.innerHTML = Number;
}

function decrement() {
    Number = Number - 1;
    numero0.innerHTML = Number;
}

function insert(){
    value = name1.value;

    teste.innerHTML = (Number+'-' + value);
}
