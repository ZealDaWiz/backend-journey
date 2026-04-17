function countdown(num) {

   while ( num >= 0 ) {

      if ( num % 7 === 0 ) {
        break;
      }
      if ( num % 4 === 0 ) {
         num --;
        continue;
      }
        console.log(num);
        num --;
   }
}

  countdown(30);
