// Given a binary array of size n where n > 3. A true (or 1) value in the array means active and false (or 0) means inactive. 
// Given a number k, the task is to find count of active and inactive cells after k days. After every day, status of i’th cell 
// becomes active if left and right cells are not same and inactive if left and right cell are same (both 0 or both 1).
// Since there are no cells before leftmost and after rightmost cells, the value cells before leftmost and after rightmost cells
// is always considered as 0 (or inactive).

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
