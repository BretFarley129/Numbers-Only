function numbersOnly(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i ++){
        if(typeof(arr[i]) == "number"){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function noNumbers(arr){
    var newArr =[];
    for(var i = arr.length - 1; i >= 0; i--){
        if(typeof(arr[i]) == "number"){
            arr.splice(i, 1);
        }
    }
    return arr;
}

var list = [1, "apple", -3, "orange", 0.5];

console.log("noNumber() array:", numbersOnly(list));

console.log("noNumbers() array:", noNumbers(list));
