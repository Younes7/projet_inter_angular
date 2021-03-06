angular.module("inter",[]).factory("joueursFactory",function () {

var joueurs = [

{id : 1,
  Nom: 'Gagliardini',
  Prenom: 'Roberto',
  Age : 23,
  Poste: 'Milieu',
  Role : 'Défensif',
  Apparitions: 13,
  Buts: 2,
  Passes: 1,
  Nation : 'Italie',
  Jaune:2,
  Rouge:0,
  Hommedumatch:1},

{id : 2,
  Nom: 'Icardi',
  Prenom: 'Mauro',
  Age : 24,
  Poste: 'Attaquant',
  role : 'Buteur',
  Apparitions: 31,
  Buts: 24,
  Passes: 8,
  Nation : 'Argentine',
  Jaune:1,
  Rouge:0,
  Hommedumatch:1 },

{id : 3,
  Nom: 'Banega',
  Prenom: 'Ever',
  Age : 28,
  Poste: 'Milieu',
  Role : 'Meneur de Jeu',
  Apparitions: 20,
  Buts: 6,
  Passes: 6,
  Nation : 'Argentine',
  Jaune:2,
  Rouge:1,
  Hommedumatch:2},

{id : 4,
  Nom: 'Perisic',
  Prenom: 'Ivan',
  Age : 28,
  Poste: 'Milieu',
  Role : 'Ailier',
  Apparitions: 27,
  Buts: 10,
  Passes: 5,
  Nation : 'Croatie',
  Jaune:2,
  Rouge:1,
  Hommedumatch:2},

{id : 5,
  Nom: 'DAmbrosio',
  Prenom: 'Danilo',
  Age : 28,
  Poste: 'Defenseur',
  Role : 'Lateral',
  Apparitions: 27,
  Buts: 3,
  Passes: 3,
  Nation : 'Italie',
  Jaune:3,
  Rouge:0,
  Hommedumatch:3},

{id : 6,
  Nom: 'Miranda',
  Prenom: 'Danilo',
  Age : 32,
  Poste: 'Defenseur',
  Role : 'Centrale',
  Apparitions: 32,
  Buts: 0,
  Passes:0,
  Nation : 'Italie',
  Jaune:6,
  Rouge:0,
  Hommedumatch:0},

{id : 7,
  Nom: 'Brozovic',
  Prenom: 'Marcelo',
  Age : 24,
  Poste: 'Milieu',
  Role : 'Centrale',
  Apparitions: 16,
  Buts: 3,
  Passes: 2,
  Nation : 'Croatie',
  jaune:6,
  rouge:0,
  Hommedumatch:1},

{id : 8,
  Nom: 'Candreva',
  Prenom: 'Antonio',
  Age : 30,
  Poste: 'Milieu',
  Role : 'Ailier',
  Apparitions: 31,
  Buts: 6,
  Passes: 10,
  Nation : 'Italie',
  Jaune:2,
  Rouge:0,
  Hommedumatch:0},

{id : 9,
  Nom: 'Mario',
  Prenom: 'Joao',
  Age : 24,
  Poste: 'Milieu',
  Role : 'Centrale',
  Apparitions: 20,
  Buts: 3,
  Passes: 5,
  Nation : 'Portugal',
  Jaune:5,
  Rouge:0,
  Hommedumatch:3},

{id : 10,
  Nom: 'Kondogbia',
  Prenom: 'Geoffrey',
  Age : 24,
  Poste: 'Milieu',
  Role : 'Défensif',
  Apparitions: 18,
  Buts: 1,
  Passes: 2,
  Nation : 'France',
  Jaune:5,
  Rouge:0,
  Hommedumatch:1},

{id : 11,
  Nom: 'Santon',
  Prenom: 'Davide',
  Age : 26,
  Poste:'Defenseur',
  Role : 'Latéral',
  Apparitions: 10,
  Buts: 0,
  Passes: 0,
  Nation : 'Italie',
  Jaune:1,
  Rouge:0,
  Hommedumatch:0},

{id : 12,
  Nom: 'Murillo',
  Prenom: 'Jeison',
  Age : 24,
  Poste:'Defenseur',
  Role : 'Centrale',
  Apparitions: 20,
  Buts: 0,
  Passes: 0,
  Nation : 'Colombie',
  Jaune:4,
  Rouge:0,
  Hommedumatch:0},

{id : 13,
  Nom: 'Ranocchia',
  Prenom: 'Andrea',
  Age : 24,
  Poste: 'Defenseur',
  Role : 'Centrale',
  Apparitions: 5,
  Buts: 0,
  Passes: 0,
  Nation : 'Italie',
  Jaune:2,
  Rouge:0,
  Hommedumatch:0},

{id : 14,
  Nom: 'Miangue',
  Prenom: 'Senna',
  Age : 20,
  Poste: 'Defenseur',
  Role : 'Centrale',
  Apparitions: 1,
  Buts: 0,
  Passes: 0,
  Nation : 'Belgique',
  Jaune:0,
  Rouge:0,
  Hommedumatch:0},

{id : 15,
  Nom: 'Handanovic',
  Prenom: 'Samir',
  Age : 24,
  Poste: 'Gardien',
  Role : 'Mur',
  Apparitions: 33,
  Buts: 0,
  Passes:0,
  Nation : 'Slovénie',
  Jaune:4,
  Rouge:0,
  Hommedumatch:0},

{id : 16,
  Nom: 'Nagatomo',
  Prenom: 'Yuto',
  Age : 30,
  Poste: 'Defenseur',
  Role : 'Latéral',
  Apparitions: 7,
  Buts: 0,
  Passes: 0,
  Nation : 'Japon',
  Jaune:1,
  Rouge:0,
  Hommedumatch:0},

{id : 17,
    Nom: 'Ansaldi',
    Prenom: 'Cristian',
    Age : 30,
    Poste: 'Defenseur',
    Role : 'latéral',
    Apparitions: 17,
    Buts: 0,
    Passes: 1,
    Nation: 'Argentine',
    Jaune:7,
    Rouge:1,
    Hommedumatch:0},

{id : 18,
    Nom: 'Medel',
    Prenom: 'Gary',
    Age : 29,
    Poste: 'Defenseur',
    Role : 'Centrale',
    Apparitions: 22,
    Buts: 0,
    Passes: 0,
    Nation: 'Chili',
    Jaune:4,
    Rouge:1,
    Hommedumatch:0},

{id : 19,
    Nom: 'Eder',
    Prenom: 'Cristian',
    Age : 30,
    Poste: 'Attaquant',
    Role : 'Buteur',
    Apparitions: 9,
    Buts: 4,
    Passes: 3,
    Nation: 'Italie',
    Jaune:1,
    Rouge:0,
    Hommedumatch:1},

{id : 20,
  Nom: 'Palacio',
  Prenom: 'Rodrigo',
  Age : 35,
  Poste: 'Attaquant',
  Role : 'Buteur',
  Apparitions: 3,
  Buts: 0,
  Passes: 3,
  Nation: 'Argentine',
  Jaune:1,
  Rouge:0,
  Hommedumatch:0},

{id : 21,
  Nom: 'Barbosa',
  Prenom: 'Gabriel',
  Age : 20,
  Poste: 'Attaquant',
  Role : 'Buteur',
  Apparitions: 0,
  Buts: 1,
  Passes:0,
  Nation: 'Brésil',
  Jaune:2,
  Rouge:0,
  Hommedumatch:1},

{id : 22,
  Nom: 'Gnoukouri',
  Prenom: 'Assane',
  Age : 20,
  Poste: 'Milieu',
  Role : 'Défensif',
  Apparitions: 0,
  Buts: 0,
  Passes:0,
  Nation: 'Cote dIvoire',
  Jaune:0,
  Rouge:0,
  Hommedumatch:0},

{id : 23,
  Nom: 'Pinanamonti',
  Prenom: 'Andrea',
  Age : 27,
  Poste: 'Attaquant',
  Role : 'Buteur',
  Apparitions: 0,
  Buts: 0,
  Passes: 0,
  Nation: 'Italie',
  Jaune:0,
  Rouge:0,
  Hommedumatch:0},

{id : 24,
  Nom: 'Melo', Prenom: 'Felipe',
  Age : 33,
  Poste: 'Milieu',
  Role :'Defensif',
  Apparitions: 1,
  Buts: 0,
  Passes:0,
  Nation: 'Brésil',
  Jaune:1,
  Rouge:1,
  Hommedumatch:0},

{id : 25,
  Nom: 'Jovetic',
  Prenom: 'Stefan',
  Age : 27,
  Poste: 'Attaquant',
  Role :'Buteur',
  Apparitions: 0,
  Buts: 1,
  Passes:0,
  Nation: 'Montenegro',
  Jaune:0,
  Rouge:0,
  Hommedumatch:0},

{id : 26,
  Nom: 'Biabiany',
  Prenom: 'Jonathan',
  Age : 28,
  Poste: 'Milieu',
  Role :'Defensif',
  Apparitions: 0,
  Buts: 0,
  Passes: 0,
  Nation: 'France',
  Jaune:1,
  Rouge:0,
  Hommedumatch:0},

{id : 27,
  Nom: 'Andreolli',
  Prenom: 'Marco',
  Age : 30,
  Poste: 'Defenseur',
  Role :'Centrale',
  Apparitions: 1,
  Buts: 0,
  Passes: 0,
  Nation: 'Italie',
  Jaune:0,
  Rouge:0,
  Hommedumatch:0},

];


var getJoueurs = function(){
  return joueurs;
};
return {
  getJoueurs: getJoueurs
  };

});
