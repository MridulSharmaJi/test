//question 1
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log(`even number are ${arr[i]} at ${i} index`);
    
    
  }
}
//question 2
let arr2=[0,0,1,1,0,0,0,1,0,0,1,1,1,0];
findMaxCons(arr2);
function findMaxCons(arr2){
    let largcount=0;
    let current=0;
    for(let i=0;i<arr2.length;i++){
        if(arr2[i]===0){
            current=0;
        }else{
            current++;
        }
        if(current>largcount)
            largcount=current
    }
    console.log(`max consitive 1's in array is ${largcount}`);
    
}


//questiom 3

let arr1 = [0,1,2,3,4,5,6,7,7,8,9,10];

findRepeat(arr1);
function findRepeat(arr1){
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]==arr1[i+1]){
            console.log(`same number is ${arr1[i]}`);
            
        }
    }
}

//Question 8
var obj = [{
    id : 4,
     name : "abc"
},
{
    id:10,
    name:"ab2"
},
 {
     id:5,
     name:"abc3"
 },
 {
     id:6,
     name:"abc5"
 }]

 const sortById = obj.sort(function(a,b) {
     return a.id-b.id;
 })
 console.log(sortById);
 