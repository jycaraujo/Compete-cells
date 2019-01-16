function compete(cells, days){
   while(days--){
      let temp = [];
      temp[0] = cells[1]^0;
      temp[cells.length-1] = cells[cells.length-2] ^ 0;
      for(let i = 1; i < cells.length-1; i++){
         temp[i] = cells[i-1] ^ cells[i+1];
      }
      cells = temp
      write(temp);
   }
   
   
}
compete([1,1,1,1], 2);
