//write a loop that iterates between 50 numbers

for (i=1; i<51; i++ ){
    //condition to check which numbers are both divisible by 3 and 5
    if(i % 3===0 && i % 5 ===0)
    // print this message to the console 
    console.log('Fizzbuzz');
    // condition check which  numbers are divisible only  by 3
    else if(i % 3===0)
    console.log('Fizz');
     //condition to check which  numbers are divisible only by 5
    else (i % 5===0)
     //print this message to th console
    console.log('Buzz');
    
    
}
