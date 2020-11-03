
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#00CCC0';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	//this.currLineWidth = drawing.epaisseur;
	//this.currColour = drawing.couleur;

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function(dnd) {
		if(this.currEditingMode == editingMode.line) {
			//this.currentShape = new Line(10, 20, 50, 100, 5, '#00CCC0');

			this.currentShape = new Line(dnd.initX, dnd.initY, dnd.initX, dnd.initY, this.currLineWidth, this.currColour);
		} else {
			this.currentShape = new Rectangle(dnd.initX, dnd.initY, 0, 0, this.currLineWidth, this.currColour);
		}
		console.log(dnd.initX);
		this.currentShape.paint(ctx);
	}.bind(this);

	this.onInteractionUpdate = function(dnd) {
		if(this.currEditingMode == editingMode.line) {
			this.currentShape.droitX = dnd.finalX;
			this.currentShape.droitY = dnd.finalY;
		} else {
			this.currentShape.largeur = dnd.initY - dnd.finalY;
			this.currentShape.hauteur = dnd.initX - dnd.finalY;
		}
		console.log(dnd.finalX);
		this.currentShape.paint(ctx);
	}.bind(this);

	this.onInteractionEnd = function(dnd) {
		if(this.currEditingMode == editingMode.line) {
			this.currentShape.droitX = dnd.finalX;
			this.currentShape.droitY = dnd.finalY;
		} else {
			this.currentShape.largeur = dnd.initY - dnd.finalY;
			this.currentShape.hauteur = dnd.initX - dnd.finalY;
		}
		console.log(dnd.finalX);
		drawing.formes.push(this.currentShape);
		this.currentShape.paint(ctx);
	}.bind(this);
};


