/** Set a random style left for an element
 *
 */
function setRandomLeft(e){
	e.style.position = "absolute";
	e.style.left = Math.random() * (window.innerWidth - e.offsetWidth);
}
/** Set a random style top for an element
 *
 */
function setRandomTop(e){
	e.style.position = "absolute";
	e.style.top = Math.random() * (window.innerHeight - e.offsetHeight);
}