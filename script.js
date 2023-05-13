/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log

  arr.map((student)=>{
    if(student.marks<=50){
      console.log(student);
    }
  })

}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log

  arr.forEach((student)=>{
    if(student.marks<=50){
      console.log(student);
    }
  })

}

function addData() {
  //Write your code here, just console.log

  const newstudent={id:4,name:"susan",age:"20",marks:45}
  arr.push(newstudent);
  console.log(newstudent);
}

function removeFailedStudent() {
  //Write your code here, just console.log

for(let i=arr.length-1; i>=0; i--){
  if(arr[i].marks<50){
      arr.splice(i,1);
  }
}
 console.log(arr);

}

function concatenateArray() {
  //Write your code here, just console.log
 
  let secondArr=[
    {id:101, name:"Akash", age:"21", marks:60},
    {id:115, name:"James", age:"20", marks:56},
    {id:123, name:"Rocky", age:"19", marks:76},
  ];

  arr=arr.concat(secondArr);
  console.log(arr);

}
