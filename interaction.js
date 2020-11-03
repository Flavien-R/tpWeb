
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	var initX = 0;
	var initY = 0;
	var finalX = 0;
	var finalY = 0;
	var pressed = false;
	
	this.interactor = interactor;
	
	this.pression = function(evt) {
	    this.pressed = true;
	    this.initX = getMousePosition(canvas,evt).x;
	    this.initY = getMousePosition(canvas,evt).y;
	    this.interactor.onInteractionStart(this);
	  }.bind(this);
	canvas.addEventListener('mousedown', this.pression, false);
	
	this.deplacement = function(evt) {
		if(this.pressed == true) {
			var res = getMousePosition(canvas, evt);
			this.finalX = getMousePosition(canvas,evt).x;
			this.finalY = getMousePosition(canvas,evt).y;
			this.interactor.onInteractionUpdate(this);
		}
	  }.bind(this);
	canvas.addEventListener('mousemove', this.deplacement, false);
	
	this.relachement = function(evt) {
	    this.pressed = false;
	    this.finalX = getMousePosition(canvas,evt).x;
	    this.finalY = getMousePosition(canvas,evt).y;
	    this.interactor.onInteractionEnd(this);
	  }.bind(this);
	canvas.addEventListener('mouseup', this.relachement, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};





