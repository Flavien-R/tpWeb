
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing(){
    //Liste de formes
    this.formes = [];
}

function Forme(epaisseur, couleur){
    //couleur
    this.couleur = couleur;
    //epaisseur
    this.epaisseur = epaisseur;
}

function Rectangle(gaucheX, gaucheY, largeur, hauteur, epaisseur, couleur){
    //doit hériter de Forme
    Forme.call(epaisseur, couleur);
    //coordonnées point gauche
    this.gaucheX = gaucheX;
    this.gaucheY = gaucheY;
    //largeur
    this.largeur = largeur;
    //hauteur
    this.hauteur = hauteur;
}

function Line(gaucheX, gaucheY, droiteX, droiteY, epaisseur, couleur){
    //doit hériter de Forme
    Forme.call(epaisseur, couleur);
    //coordonnées de ses 2 points
    this.gaucheX = gaucheX;
    this.gaucheY = gaucheY;
    this.droiteX = droiteX;
    this.droiteY = droiteY;
}
