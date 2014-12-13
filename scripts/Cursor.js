/**
 * This file includes logic related to the mouse cursor.
 */

function Cursor (options){
	options = options || {};
	this.radius = options.radius || 90;
	var el = this.el = document.createElement('div');
	el.id = 'cursor';
	el.style.width = this.radius+'px';
	el.style.height = this.radius+'px';

	// Register events
	var onMouseMoveBinded = onMouseMove.bind(this);
	document.body.addEventListener('mousemove', onMouseMoveBinded);
	document.body.appendChild(el);

	// Event handlers.
	function onMouseMove (e){
		var newX = e.pageX - this.radius/2;
		var newY = e.pageY - this.radius/2;
		var transformString = 'translate('+newX+'px,'+newY+'px)';
		this.el.style.transform = transformString;

		// this.el.style.top = newY;
		// this.el.style.left = newX;
	}
}


