function clickAction(){
  var l = document.querySelector('#length').value;
  var min = document.querySelector('#min').value;
  var max = document.querySelector('#max').value;

  var array = [];
  for (var i = 0; i < l; i++) {
        array.push (randomInteger(min,max));
  }
  console.log('Наш массив: ' + array);
  arraySum(array);
  dobytokVid(array);
  findMaxElAndIdex(array);
  minElAmongNeparIndex(array);
  bubbleSort(array)

  return array;
}


function randomInteger(min,max) {
    var rand = min - 0.5 + Math.random() * (max-min+1)
    rand = Math.round(rand);
    return rand;
}


function arraySum(array){
var sum = 0;
for(var i = 0; i < array.length; i++){
    if (i % 2 === 0) {
    sum += array[i];
    }
    }
console.log('Сумма элементов с парным индексом: '+sum);
}


function dobytokVid(array){
var dob = 1;
for(var i = 0; i < array.length; i++){
    if (array[i] < 0) {
    dob = dob * array[i];
    }
    }
console.log('Произведение отрицательных элементов: '+dob);
}


function findMaxElAndIdex(array){
  max = 0;
  maxElIndex = 0;
  for (i = 0; i < array.length; i++) {
      if (array[i] > max) 
        {
            max = array[i];
            maxElIndex = i;
        }      
  }
  console.log('Максимальный элемент массива: ' + max + ' Его индекс ' + maxElIndex);
}


function minElAmongNeparIndex(array){
      min = 9999999999999;
      minElIndex = 0;
for(var i = 0; i < array.length; i++){
    if (i % 2 !== 0) {
    if (array[i] < min) 
        {
            min = array[i];
            minElIndex = i;
        }      
    }
    }
console.log('Минимальный элемент среди элементов с непарным индексом: '+ min + ' Его индекс ' + minElIndex);
}
function bubbleSort(array) {
    for (var i = 0, endI = array.length - 1; i < endI; i++) {
        var wasSwap = false;
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                wasSwap = true;
            }
        }
        if (!wasSwap) break;
    }
    console.log('Отсортированный массив: ' + array);
};