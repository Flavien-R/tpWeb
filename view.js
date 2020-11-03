
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.rect(this.gaucheX, this.gaucheY, this.largeur, this.hauteur);
    ctx.stroke();
};
  
Line.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.beginPath();
    ctx.moveTo(this.gaucheX, this.gaucheY);
    ctx.lineTo(this.droiteX, this.droiteY);
    ctx.stroke();
};
  
Drawing.prototype.paint = function(ctx) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.formes.forEach(function (eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};

Forme.prototype.paint = function(ctx) {
    ctx.strokeStyle = this.couleur;
    ctx.lineWidth = this.epaisseur;
}


  