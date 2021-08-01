/* Write a program to build a `Pyramid of stars` of given height */
let pyrami_stars = (rows) => {
  
     for(let i = 1; i <= rows; i++){
       let str = '';
       
       //Add the white space to the left
       for(let k = 1; k <= (rows - i); k++){
         str += ' ';
       }
       
       //Add the '*' for each row
       for(let j = 0; j != (2 * i - 1); j++){
         str += '*';
       }
       
       //Add the white space to the right
       
        //Print the pyramid pattern for each row
       console.log(str);
     }
  }
  pyrami_stars(5);

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

// module.exports = buildPyramid;
