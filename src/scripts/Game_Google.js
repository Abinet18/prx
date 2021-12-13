// https://en.wikipedia.org/wiki/Bejeweled#/media/File:Bejeweled_deluxe_sc1.jpg

// Generate a valid Bejeweled board. Size NxN with C colors.
// Conditions for the initial board are:
// 1) Contains no set of 3 adjacent items of the same type (horizontal or vertical)
// 2) Contains at least one valid move (swapping 2 adjacent items creates 3 of the same type)

// 3x3
// RGB

// RGB.   C1 C1 C2 C2 C3
       
// const fillGrid = (N,C) => {
  
//   if(N<3 || C<3) {
//     return [];
//   }
  
//   const g=[];
//   //initialize 
  
//   const getColor= (i,j)=> {
//     let color=1;
//     let colorHor=0;
//     let colorVer=0;
//     if(i-2>0) {
//       colorHor=grid[i-2][j]);
//     }
//      if(i-1>0) {
//        if(colorHor!==grid[i-1][j]) {  
//          colorHor=0;
//        }
//     }
//      if(j-2>0) {
//         colorVer=grid[i][j-2]);
//     }
//     if(j-1>0) {
//     if(colorVer!==grid[i][j-1]) {  
//          colorVer=0;
//        }
//     }
//     let found=false;
//     while(!found) {
//       let i=Math.random()*C +1;
//       if(colorHor!==i && colorVer!==i) {
//         return i;
//       }
   
//     }
//      return 0;
    
    
//   }
//   for(let i=0;i<N;i++) {// O(n2)
//     g.push([]);
//     for(let j=0;j<N;j++) {
//       let color=getColor(i,j);
//       g[i].push(color);
//     }
//   }
  
//   return grid;
  
// }

// N:  0.  1 2 .   3 1000
// C: 0 1 2      3. 90