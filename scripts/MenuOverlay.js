/**
 * This file contains logic related to the menu overlay that appears when the
 * cursor hovers over a box.
 */

/**
 * A custom menu overlay class.
 * 
 * @param {String} selector 	The HTML selector for the overlay element.
 */
function MenuOverlay (selector){
	selector = selector || '#menuOverlay';
	var el = this.el = document.querySelector(selector);

}

/**
 * Repositions the menu overlay element with respect to the current mouse
 * position.
 * 
 * @param  {Object} mousePos 	The current mouse position.
 */
MenuOverlay.prototype.reposition = function(mousePos){
	var newX = e.pageX - this.radius/2 - this.mouseOffset;
	var newY = e.pageY - this.radius/2 - this.mouseOffset;
	var transformString = 'translate('+newX+'px,'+newY+'px)';
	this.el.style.transform = transformString;
};
