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
	var headerEl = this.el.querySelector('.header');
	var titleEl = this.el.querySelector('.title');
	var subtitleLeftEl = this.el.querySelector('.subtitle-left');
	var subtitleRightEl = this.el.querySelector('.subtitle-right');

	this.repositionBound = this.reposition.bind(this);
}

/**
 * Repositions the menu overlay element with respect to the current mouse
 * position.
 * 
 * @param  {Object} mousePos 	The current mouse position.
 */
MenuOverlay.prototype.reposition = function(mousePos){
	var newX = mousePos.x;
	var newY = mousePos.y - app.cursor.radius;
	var width = this.el.getBoundingClientRect().width;
	var height = this.el.getBoundingClientRect().height;
	var bottomY = newY + height;

	// Account for page overflow.
	newX += (newX > window.innerWidth / 2) ? -(width+80) : 80;
	if (newY < 70) newY = 70;
	if (bottomY > window.innerHeight) newY = window.innerHeight - height;

	// Set the new position.
	var transformString = 'translate('+newX+'px,'+newY+'px)';
	this.el.style.transform = transformString;
};
