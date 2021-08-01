/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = () => {
	for(i=1;i<=5;i++){
          var str="";
          for(j=1;j>=5-i;j++){
               str+=" ";

          }
          for(k=1;k<=i*2-1;k++){
            str+='*'
          }
          console.log(str);
     }
     console.log('<br>');
};
buildPyramid();

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

module.exports = buildPyramid;
