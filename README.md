Questions:
1.Say you’ve received data from an API, and you want to supply a sorting option to it within your typescript or JavaScript.  Give an example of how you might go about doing this.


ANSWER: To sort array of objects .
Legend: prop is specific properties to be sorted in array of objects

function compare(a, b) {
      const itemA = a.prop.toUpperCase();
      const itemB = b.prop.toUpperCase();
       let compareFlag = 0;
       if(itemA > itemB) {
	compareFlag= 1;
       } else {
	compareFlag= -1;
       }
       return compareFlag;
}

obj.sort(compare)






2.Say you’ve completed your work and are building your project using ng build --prod, and an error pops up that was not happening when using just ng build.  What is your debug path?

ANSWER: Check for console logs and double check error if related to dependencies names. Or I think maybe it is a cache so check for node modules, try to delete node_modules and try to npm install again. 





3.What is your strategy for handling large amounts of data returned by an API?  How does it impact the user experience?

ANSWER: My way to handle the large amounts of data from frontend are

1. Reducing size pagination
2. Display only what data are needed 
3. Use cache#   a n g u l a r - c h a r t j s  
 