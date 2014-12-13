/**
 * This file begins the main application.
 */

/**
 * The main application class.
 * 
 * @param {Object} options The app configuration.
 */
function Application (options){
	options = options || {};
}

/**
 * Sets up controls for the mouse and keyboard.
 * 
 * @param  {Object} options The configuration options.
 */
Application.prototype.setupControls = function(options){
	options = options || {};
	this.menuOverlay = new MenuOverlay();
	this.cursor = new Cursor(options);
};

/**
 * Starts the application, setting up controls, etc.
 */
Application.prototype.startApplication = function(){
	this.setupControls();
};

// Starts the actual application.
var app = new Application();
app.startApplication();
