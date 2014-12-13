/**
 * This file includes logic related to the mouse cursor.
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

	// Register events
	var onMouseMoveBinded = onMouseMove.bind(this);
	document.body.addEventListener('mousemove', onMouseMoveBinded);
	innerEl.appendChild(orbitEl);
	el.appendChild(innerEl);
	document.body.appendChild(el);

	// Event handlers.
	function onMouseMove (e){
		var newX = e.pageX - this.radius/2 - this.mouseOffset;
		var newY = e.pageY - this.radius/2 - this.mouseOffset;
		var transformString = 'translate('+newX+'px,'+newY+'px)';
		this.el.style.transform = transformString;
	}

	function onHover (e){
		this.el.classList.add('hover');
	}

	function onHoverOut (e){
		this.el.classList.remove('hover');
	}
}

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


