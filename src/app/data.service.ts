import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class DataService {
  liste = [
    {
      name: 'Auto',
      partie: [
        {
          name: 'piece auto',
          schema: [
            {
              sous_partie: 'moteur',
              url:"https://cdn-s-www.leprogres.fr/images/F0065CF7-7717-448E-8B7E-97C626F2D444/NW_raw/l-hydrogene-pourait-permettre-de-conserver-nos-moteurs-thermiques-une-technologie-fiable-et-mature-1644931833.jpg",
              liste_sous_partie: [
                'Courroies et Distribution',
                'Refroidissement moteur',
                'Injection carburation',
                "Bougies et Pièces d'allumage",
                'Turbo',
                'Moteur et Culasse',
                'Capteurs et câbles moteur',
                'Pompes',
                'Bougies et Pièces de préchauffage',
                'Supports moteur',
                'Lubrification',
                'Soupapes du moteur',
                "Guides d'entretien auto",
                'Alimentation carburant',
              ],
            },
            {
              sous_partie: 'filtre et huile',
              url:"http://www.lerepairedesmotards.com/img/technique/bien-choisir-filtre-huile.jpg",
              liste_sous_partie: [
                'Filtres',
                'Accessoires vidange',
                'Outils Vidange',
                'Autres Pièces de Filtration',
              ],
            },
            {
              sous_partie: 'suspension',
              url:"https://si.blaisepascal.fr/wp-content/uploads/2020/06/Suspension_F40.png",
              liste_sous_partie: [
                'Amortisseurs',
                'Suspension d’Essieux',
                'Transmission',
                'Rotules',
                'Moyeux et Roulements',
                'Rotules',
                'Direction',
                'Butées',
                "Kits de réparation et d'assemblage",
                'Ressorts et Soufflets',
                'Autres pièces Suspension',
                'Outils Direction-Suspension-Train',
                'Autres pièces Transmission',
                'Sphères',
                'Suspension Pneumatique',
                'Roue',
              ],
            },
            {
              sous_partie: 'Freinage',
              url:"https://www.avatacar.com/blog/wp-content/uploads/2021/05/FonctionnementFreins.jpg",
              liste_sous_partie: [
                'Plaquettes de frein',
                'Disques de frein',
                'Hydraulique',
                'Freins à tambours',
                'Capteurs et câbles de freinage',
                'Assistance au freinage',
                'Outils Freinage',
              ],
            },
            {
              sous_partie: 'Démarrage électronique',
              url:"https://media.autodoc.de/360_photos/1157291/h-preview.jpg",
              liste_sous_partie: [
                'Batteries',
                'Alternateurs',
                'Démarreurs',
                'Outils Batteries',
                'Alterno-Démarreurs',
              ],
            },
            {
              sous_partie: 'Optique',
              url:"data:image/jpeg;base64,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",
              liste_sous_partie: [
                'Optiques et Phares',
                ' Eclairage avant',
                'Eclairage arrière',
                ' Eclairage intérieur et signalisation',
                'Ampoules LED Retrofit',
                'Coffrets',
              ],
            },
            {
              sous_partie: 'Boites de vitesses et embrayage',
              url:"https://eden-boites.com/blog/wp-content/uploads/2020/05/boite-de-vitesse-echange-standard-2.png",
              liste_sous_partie: [
                'Embrayage et Volant-moteur',
                'Accessoires de boîte de vitesse',
                "Autres pièces d'Embrayage",
              ],
            },
            {
              sous_partie: 'Capteur et sondes',
              url:"https://www.cdiscount.com/pdt2/8/2/5/1/700x700/neu6938718621825/rw/u-voiture-capteur-sonde-de-temperature-eau-et-huil.jpg",
              liste_sous_partie: [
                'Capteurs et Sondes Pièces moteur',
                'Capteurs et Sondes Echappement',
                ' Capteurs Freinage',
                'Capteurs et Sondes Température',
                ' Capteurs Aide à la conduite',
                'Capteurs Pneus et Equipements Roue',
                'Capteurs boîte de vitesse',
                'Capteurs Pièces habitacle',
                'Capteurs Démarrage électrique',
                ' Capteurs Direction',
                'Capteurs Optiques / Phares / Ampoules',
                'Capteurs Filtres et Huile',
                'Capteurs Essuie-glaces et Pièces',
              ],
            },
            {
              sous_partie: 'Echappement',
              url:"https://pamaku.pl/photo/10181.jpg",
              liste_sous_partie: [
                " Capteurs d'échappement",
                'Silencieux et Tubes',
                ' Catalyseurs et Filtres à particules',
                ' Accessoires de montage',
                "Autres pièces d'échappement",
                'Outils Echappement',
              ],
            },
            {
              sous_partie: 'Pièces habitacles',
              url:"https://m.media-amazon.com/images/I/614MNEKD9EL._AC_SX450_.jpg",
              liste_sous_partie: [
                'Lève-vitres',
                'Serrure / Fermeture',
                'Vérins',
                'Commandes et Pédalier',
                'Electricité',
                " Autres pièces d'habitacle",
                "Joints d'habitacle",
                '  Klaxon, avertisseurs sonores',
              ],
            },
            {
              sous_partie: 'Carrosserie /vitre / peinture',
              url:"https://www.vroomly.com/media/images/quest-ce_que_carrosserie.width-500.jpg",
              liste_sous_partie: [
                ' Rétroviseurs',
                ' Peinture',
                ' Pare-choc',
                'Partie avant',
                'Vitres',
                'Ailes',
                'Portières',
                'Outils carrosserie',
                ' Partie arrière',
                'Réparation carrosserie',
                'Capot',
              ],
            },
            {
              sous_partie: 'Joint et étanchéité',
              url:"https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/200x200/10324.png",
              liste_sous_partie: [
                ' Joints et Étanchéité Pièces moteur',
                'Joints et Étanchéité Echappement',
                'Joints et Étanchéité Direction / Suspension / Train',
                'Joints et Étanchéité Embrayage et Boîte de vitesse',
                'Joints et Étanchéité Carrosserie et peinture',
                'Joints et Étanchéité Filtres et Huile',
                'Joints et Étanchéité Climatisation',
                'Joints et Étanchéité Pièces Habitacle',
                ' Joints et Étanchéité Entretien et Nettoyage',
                'Joints et Étanchéité Freinage',
                'Joints et Étanchéité Essuie-glace et Pièces',
                'Joints et Étanchéité Optiques / Phares / Ampoules',
                'Joints et Étanchéité Accessoires et équipements',
              ],
            },
          ],
        },
        {
          name: 'Pneu',
          schema: [
            {
              sous_partie: 'Chaînes-neiges et équipements roue',
              liste_sous_partie: [
                'Antivol de roue',
                'Boulon de roue',
                'Cale de roue',
                'Capteur de roue TPMS, syst de contrôle de pression des pneus',
                'Chaînes neige',
                'Écrou de roue',
                'Écrou, roue conique',
                'Enjoliveur',
                'Piston de butée, jante',
              ],
            },
            {
              sous_partie: 'Outils pneu',
              liste_sous_partie: [],
            },
          ],
        },
        {
          name: 'Huile moteur',
          schema: [
            {
              sous_partie: 'Huile de boite',
              liste_sous_partie: [],
            },
            {
              sous_partie: 'Transmission',
              liste_sous_partie: [],
            },
            {
              sous_partie: 'Liquide',
              liste_sous_partie: [],
            },
          ],
        },
        {
          name: 'Accessoire',
          schema: [
            {
              sous_partie: 'Essuie glasses',
              liste_sous_partie: ['Essuie-glaces', 'Essuyage des phares'],
            },
            {
              sous_partie: 'Entretien et nettoyage',
              liste_sous_partie: [
                'Additifs et Traitements spécifiques',
                'Liquides de fonctionnement',
                'Nettoyage et Protection Extérieure',
                'Réparation et Maintenance',
                "Guides d'entretien auto",
                "Nettoyage et Protection de l'Habitacle",
                'Accessoires Nettoyage',
                'Accessoires Essuyage et Lustrage',
              ],
            },
            {
              sous_partie: 'Equipement',
              liste_sous_partie: [
                'Habillement et Confort Intérieur',
                "Equipement de l'Habitacle",
                'Equipement Extérieur et Protection',
                'Image, Son et Multimédia',
                'Aide à la conduite et au stationnement',
                'Sécurité et Signalisation',
                '2 roues et loisirs',
                'Bébé et puériculture',
                'Voyager avec son animal',
                'Jeux éducatifs',
                'Equipement Hiver',
                'Equipements pour véhicules électriques',
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'moto',
      partie: [
        {
          name: 'piece moto',
          schema: [
            {
              sous_partie: '',
              liste_sous_partie: [],
            },
          ],
        },
        {
          name: 'pneu',
          schema: [
            {
              sous_partie: '',
              liste_sous_partie: [],
            },
          ],
        },
        {
          name: 'huile accessoire',
          schema: [
            {
              sous_partie: '',
              liste_sous_partie: [],
            },
          ],
        },
        {
          name: 'Accessoire entretien',
          schema: [
            {
              sous_partie: '',
              liste_sous_partie: [],
            },
          ],
        },
      ],
    },
    {
      name: 'outillage',
      partie: [
        {
          name: 'Outils Vidange',
          schema: [
            {
              sous_partie: '',
              liste_sous_partie: [],
            },
          ],
        },
        {
          name: 'Quincaillerie',
          schema: [
            {
              sous_partie: '',
              liste_sous_partie: [],
            },
          ],
        },
        {
          name: 'Outils Direction-Suspension-Train',
          schema: [
            {
              sous_partie: '',
              liste_sous_partie: [],
            },
          ],
        },
        {
          name: 'Outils spécifiques moteur et transmission',
          schema: [
            {
              sous_partie: '',
              liste_sous_partie: [],
            },
          ],
        },
        {
          name: 'Outils spécifiques moteur et transmission',
          schema: [
            {
              sous_partie: '',
              liste_sous_partie: [],
            },
          ],
        },
        {
          name: "Guides d'entretien auto",
          schema: [
            {
              sous_partie: '',
              liste_sous_partie: [],
            },
          ],
        },

        {
          name: 'Outils de serrage et pinces',
          schema: [
            {
              sous_partie: '',
              liste_sous_partie: [],
            },
          ],
        },
        {
          name: 'Outils Batteries',
          schema: [
            {
              sous_partie: '',
              liste_sous_partie: [],
            },
          ],
        },
        {
          name: 'Outils Freinage',
          schema: [
            {
              sous_partie: '',
              liste_sous_partie: [],
            },
          ],
        },
        {
          name: 'Outils de levage',
          schema: [
            {
              sous_partie: '',
              liste_sous_partie: [],
            },
          ],
        },
        {
          name: ' Outils pneu',
          schema: [
            {
              sous_partie: '',
              liste_sous_partie: [],
            },
          ],
        },
        {
          name: 'Outils de diagnostic',
          schema: [
            {
              sous_partie: '',
              liste_sous_partie: [],
            },
          ],
        },
        {
          name: ' Outils Bougies',
          schema: [
            {
              sous_partie: '',
              liste_sous_partie: [],
            },
          ],
        },
        {
          name: 'Outils de serrage et pinces',
          schema: [
            {
              sous_partie: '',
              liste_sous_partie: [],
            },
          ],
        },
        {
          name: 'Cliquets et douilles',
          schema: [
            {
              sous_partie: '',
              liste_sous_partie: [],
            },
          ],
        },
        {
          name: 'Outils de serrage et pinces',
          schema: [
            {
              sous_partie: '',
              liste_sous_partie: [],
            },
          ],
        },
        {
          name: 'Outils Echappement',
          schema: [
            {
              sous_partie: '',
              liste_sous_partie: [],
            },
          ],
        },
        {
          name: "Outils de rangement et équipement d'atelier",
          schema: [
            {
              sous_partie: '',
              liste_sous_partie: [],
            },
          ],
        },
        {
          name: 'Outils généralistes',
          schema: [
            {
              sous_partie: '',
              liste_sous_partie: [],
            },
          ],
        },
        {
          name: 'Outils électroportatifs',
          schema: [
            {
              sous_partie: '',
              liste_sous_partie: [],
            },
          ],
        },
        {
          name: 'Coffrets outillage',
          schema: [
            {
              sous_partie: '',
              liste_sous_partie: [],
            },
          ],
        },
        {
          name: 'Outils de vissage',
          schema: [
            {
              sous_partie: '',
              liste_sous_partie: [],
            },
          ],
        },
        {
          name: 'Outils de mesure et contrôle',
          schema: [
            {
              sous_partie: '',
              liste_sous_partie: [],
            },
          ],
        },
        {
          name: 'Equipement individuel',
          schema: [
            {
              sous_partie: '',
              liste_sous_partie: [],
            },
          ],
        },
        {
          name: 'Outils à frapper',
          schema: [
            {
              sous_partie: '',
              liste_sous_partie: [],
            },
          ],
        },
        {
          name: 'Outils de coupe',
          schema: [
            {
              sous_partie: '',
              liste_sous_partie: [],
            },
          ],
        },
      ],
    },
  ]


 

  constructor() {}
  getListe() {
    return this.liste
  }
  getSchema() {
    return this.liste[0].partie[0].schema 
  }
  getlisteSousPartie() {
    return this.liste[0].partie[0].schema[0].liste_sous_partie
  }


}
