var arr = [5, 7, 9, 8, 10, 3, 2];
var sortedArray = [];
var len = arr.length;
for(var  i = 0; i < len; i++ ){
    for(var  j = i+1; j < len; j++ ){
        let a = 0;
        if(arr[i] > arr[j]){
            a = arr[i];
            arr[i] = arr[j];
            arr[j] = a;
        }
    }
    sortedArray.push(arr[i])
}
document.write("Sorted Array :" + sortedArray);

// var arr = [5, 7, 9, 8, 10, 3, 2];
// var sortedArray = [];
// var num = arr.length;
// for(var i = 0; i < num; i++){
//     for(var j = i+1; j < num ; j++){
//         var a = 0;
//         if(arr[i] > arr[j]){
//             a = arr[i];
//             arr[i] = arr[j];
//             arr[j] = a;
//         }
//         sortedArray.push(arr[i]);
//     }
//     document.write("Sorted Array :" + sortedArray)
// }
