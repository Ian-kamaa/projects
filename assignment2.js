// create array called marks

let  marks = [38,58,42,81,21,37,40,61]
// initialise the lowest score  to the first element of the array
let lowestScore = marks[0]
// loop through the array of marks
for (i = 0; i <marks.lenght ; i++){
//if current score is lower than lowest score
// update lowest score 
if (marks[i]<lowestScore){
   lowestScore = marks[i];
}
// console logn thee lowest score
console.log("this is the lowest score:" . lowestScore);

}