//1. Menyusun Barisan Bintang
var row1 = 5;
  
  while(row1 > 0){
    console.log ("*");
    row1 = row1 - 1;
   }


//2. Menyusun Barisan Bintang Dengan Nested Looping
var row2 = 5, a, b;
   
    for(a=1; a<=row2 ; a++) {
     for(b=1; b<=row2; b++) {
       console.log("*");
     } console.log();
   }


//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var row3 = 5, c, d;
   
   for(c=1; c<=row3 ; c++) {
     for(d=1; d<=c; d++) {
       console.log("*");
     } console.log();
   }
  