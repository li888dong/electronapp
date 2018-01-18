 function add(arr){
    var arr1 =[];
    var temp =0;
    var max =0;
    var m =0;
    var total=0;
    for(var i=0;i<arr.length;i++){
         try{temp = parseInt(arr[i].toString().split('.')[1].length)}catch(e){temp=0};
         arr1.push(temp);
    }
    for(var j=0;j<arr1.length;j++){
          if(max < arr1[j]){
               max = arr1[j];
          }
    }
   m = Math.pow(10,max);
   return m;
}
export{
    add
}