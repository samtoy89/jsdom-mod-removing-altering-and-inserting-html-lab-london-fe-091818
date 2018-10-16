/* Enter the code to remove the main node element under this comment */

/* Create your new element here and assign it to newHeader */
const newHeader = null;
document.body.appendChild(element)
var ul = document.createElement('ul')
 
for (let i = 0; i < 3; i++) {
  let li = document.createElement('li')
  li.innerHTML = (i + 1).toString()
  ul.appendChild(li)
}
 
element.appendChild(ul)