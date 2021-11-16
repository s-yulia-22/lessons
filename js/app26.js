

////// to string////////

//1) старій способ
console.log(typeof(String(null)));

//2) конкатенация (что-то складіваем со строкой)
console.log(typeof(5 + ''));


////// to number////////

//1)старій способ
console.log(typeof(Number('4px')));

//2) Унарный плюс
console.log(typeof(+'4px'));

//3) метод для чисел
console.log(typeof(parseInt('45px', 10)));

////// to boolean////////

//false = 0, null, '', undefined, Nan;

//1) нативній
let switcher = null;
if (switcher) {
    console.log('Working...');
}

switcher = 1;
if (switcher) {
    console.log('Working...');
}
 //2) 
 console.log(typeof(Boolean('4px')));

  //3) 
  console.log(typeof(!!'4px'));