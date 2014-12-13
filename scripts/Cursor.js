/**
 * This file includes logic related to the mouse cursor.
 */

/**
 * A custom cursor class.
 * 
 * @param {Object} options 	The configuration options.
 */
function Cursor (options){
	options = options || {};
	this.radius = options.radius || 70;
	this.innerRadius = options.radius || 70;
	this.mouseOffset = 16;
	this.hovering = false;

	// Create elements for the cursor.
	var el = this.el = document.createElement('div');
	var innerEl = this.innerEl = document.createElement('div');
	var orbitEl = this.orbitEl = document.createElement('div');
	el.classList.add('cursor');
	innerEl.classList.add('cursor-inner');
	orbitEl.classList.add('cursor-orbit');

	// Set the dimensions.
	el.style.width = this.radius+'px';
	el.style.height = this.radius+'px';

	// Register events.
	this.onMouseMove = this.onMouseMove.bind(this);
	document.body.addEventListener('mousemove', this.onMouseMove);

	// Add elements to the page.
	innerEl.appendChild(orbitEl);
	el.appendChild(innerEl);
	document.body.appendChild(el);
}

Cursor.prototype.onMouseMove = function(e){
	// Move the mouse cursor to the right location.
	var newX = e.pageX - this.radius/2 - this.mouseOffset;
	var newY = e.pageY - this.radius/2 - this.mouseOffset;
	var transformString = 'translate('+newX+'px,'+newY+'px)';
	this.el.style.transform = transformString;

	// TODO: Check for elements underneath.
	//
	// If the menu overlay is visible, move it to its correct location.
	app.menuOverlay.reposition({x: e.pageX, y: e.pageY});
};

Cursor.prototype.onHover = function(e){
	this.el.classList.add('hover');
};

Cursor.prototype.onHoverOut = function(e){
	this.el.classList.remove('hover');
};

/**
 * Sets the cursor's hovering mode.
 * 
 * @param {Boolean} isHovering 		Whether or not the cursor is hovering.
 */
Cursor.prototype.setHovering = function(isHovering){
	if (isHovering){
		this.innerEl.classList.add('hover');
		this.orbitEl.classList.add('small');
	} else {
		this.innerEl.classList.remove('hover');
		this.orbitEl.classList.remove('small');
	}

	this.hovering = isHovering;
};


