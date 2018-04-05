//1. Melakukan Looping Menggunakan While
var counter = 0;
var word1 = ' - I Love Coding';
  while(counter < 20){
    counter = counter + 2
    console.log(counter + word1)
  }
  
var counter = 22;
var word2 = ' - I will become fullstack developer';
  while(counter > 2){
    counter = counter - 2;
    console.log(counter + word2);
  }


//2. Melakukan Looping Menggunakan For
var kata1;
    for (kata1 = 1; kata1 <= 20; kata1++)
    console.log(kata1 + ". I Love Coding");

var kata2;
    for (kata2 = 20; kata2 >= 1; kata2--)
    console.log(kata2 + ". I will become fullstack developer");

//3. Angka Ganjil dan Genap
var counterGG;
    for(counterGG = 1; counterGG <= 100; counterGG++){
      if((counterGG % 2) === 0) {
        console.log(counterGG + ' GENAP');
      }
      else {
        console.log(counterGG + ' GANJIL');
      }
    }

var counterGG2 = 0;
    while (counterGG2 < 100){
      counterGG2 = counterGG2 + 2;
    if (counterGG2 % 3 === 0)
      console.log(counterGG2 + " KELIPATAN 3");
    else if (counterGG2 % 6 === 0)
      console.log(counterGG2 + " KELIPATAN 6");
    else if (counterGG2 % 10 === 0)
      console.log(counterGG2 + " KELIPATAN 10");  
    else 
    console.log(counterGG2)
   }
   
  var counterGG5 = 0;
  while (counterGG5 < 100){
      counterGG5 = counterGG5 + 5;
    if (counterGG5 % 3 === 0)
      console.log(counterGG5 + " KELIPATAN 3");
    else if (counterGG5 % 6 === 0)
      console.log(counterGG5 + " KELIPATAN 6");
    else if (counterGG5 % 10 === 0)
      console.log(counterGG5 + " KELIPATAN 10");  
    else 
    console.log(counterGG5)
   }
   
   var counterGG10 = 0;
  while (counterGG10 < 100){
      counterGG10 = counterGG10 + 9;
    if (counterGG10 % 3 === 0)
      console.log(counterGG10 + " KELIPATAN 3");
    else if (counterGG10 % 6 === 0)
      console.log(counterGG10 + " KELIPATAN 6");
    else if (counterGG10 % 10 === 0)
      console.log(counterGG10 + " KELIPATAN 10");  
    else 
    console.log(counterGG10)
   }