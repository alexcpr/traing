const stationCodes = {
  Osséja: "87784868",
  Estavar: "87784827",
  Fontpédrouse: "87784769",
  "Thuès Carença": "87784751",
  Collioure: "87784256",
  Perpignan: "87784009",
  Allenc: "87783654",
  Mende: "87783605",
  "Banassac - La Canourgue": "87783324",
  "Saint-Chély-d'Apcher": "87783241",
  "Clermont La Pardieu": "87782607",
  Bédarieux: "87781609",
  Lunas: "87781575",
  "Ceilhes - Roqueredonde": "87781542",
  "Marseillan Plage": "87781294",
  Vias: "87781260",
  Nissan: "87781179",
  Salindres: "87775551",
  "Molières-sur-Cèze": "87775528",
  Robiac: "87775502",
  "Fons - Saint-Mamert": "87775379",
  "La Levade": "87775247",
  "Sainte-Cécile-d'Andorge": "87775239",
  Frontignan: "87773556",
  "Saint-Aunès": "87773465",
  "Valergues - Lansargues": "87773432",
  "Lunel-Viel": "87773424",
  Lunel: "87773408",
  "Montpellier Saint-Roch": "87773002",
  Monteux: "87765818",
  Gadagne: "87765446",
  Courthézon: "87765180",
  "Mont-Dauphin - Guillestre": "87763508",
  "Romans - Bourg-de-Péage": "87761650",
  "L'Isle-d'Abeau": "87761239",
  "Tain-l'Hermitage - Tournon": "87761163",
  "Le Bosquet": "87757757",
  "La Frayère": "87757740",
  "Cannes La Bocca": "87757617",
  Fréjus: "87757500",
  "L'Escarène": "87756809",
  "Cagnes-sur-Mer": "87756320",
  "Villeneuve-Loubet": "87756304",
  "La Redonne Ensuès": "87753574",
  "La Couronne Carro": "87753541",
  "Port-de-Bouc": "87753459",
  "Saint-Chamas": "87753202",
  Miramas: "87753004",
  "Saint-Marcel": "87751701",
  "L'Estaque": "87751602",
  "L'Ariane La Trinité": "87751529",
  "La Brillanne - Oraison": "87751271",
  Sisteron: "87751206",
  Vif: "87747576",
  "Saint-Égrève Saint-Robert": "87747352",
  Voreppe: "87747337",
  "Le Buet": "87746883",
  Argentière: "87746859",
  Cluses: "87746370",
  Albens: "87746115",
  Annecy: "87746008",
  Bellegarde: "87745000",
  "Ambérieu-en-Bugey": "87743716",
  "Ambronay - Priay": "87743146",
  "Grésy-sur-Isère": "87741611",
  "Saint-Pierre-d'Albigny": "87741223",
  "Chambéry - Challes-les-Eaux": "87741009",
  Darsac: "87734673",
  Noirétable: "87734509",
  Thiers: "87734475",
  "Pont-du-Château": "87734087",
  Chapeauroux: "87734343",
  Brioude: "87734269",
  "Saint-Fons": "87728501",
  Feurs: "87726877",
  "Bas - Monistrol-sur-Loire": "87726778",
  "Boën-sur-Lignon": "87726471",
  Bonson: "87726414",
  "Rive-de-Gier": "87726331",
  "Saint-Chamond": "87726307",
  Bouthéon: "87726216",
  Mézériat: "87725838",
  "Pont-de-Veyle": "87725804",
  "Crêches-sur-Saône": "87725713",
  "Mâcon Loché TGV": "87725705",
  "Villars-les-Dombes": "87723759",
  Beynost: "87723544",
  "Crépieux la Pape": "87723502",
  "Lyon Part Dieu": "87723197",
  Ternay: "87722553",
  Givors: "87722405",
  "Pierre-Bénite": "87722231",
  Oullins: "87722207",
  "Lyon Perrache": "87722025",
  "Sain-Bel": "87721605",
  Lentilly: "87721555",
  "La Tour-de-Salvagny": "87721548",
  "Dardilly Les Mouilles": "87721480",
  "Dardilly Le Jubin": "87721449",
  "L'Arbresle": "87721431",
  "Saint-Georges-de-Reneins": "87721340",
  "Villefranche-sur-Saône": "87721332",
  Quincieux: "87721290",
  "Collonges - Fontaines": "87721225",
  "Lyon Gorge de Loup": "87721175",
  Amplepuis: "87721035",
  Montbarrey: "87718866",
  "Valdahon Camp Militaire": "87718601",
  Étalans: "87718536",
  Mamirolle: "87718510",
  "Baume-les-Dames": "87718460",
  Laissey: "87718437",
  "Roche-lez-Beaupré": "87718403",
  Ranchot: "87718338",
  "Torpes - Boussières": "87718114",
  Morbier: "87715433",
  Champagnole: "87715326",
  Louhans: "87713735",
  "Saint-Jean-de-Losne": "87713651",
  "Santenay les Bains": "87713594",
  "Fontaines - Mercurey": "87713586",
  Chagny: "87713578",
  Beaune: "87713545",
  Auxonne: "87713347",
  "Velars-sur-Ouche": "87712331",
  Corbigny: "87696617",
  Decize: "87696484",
  Montbeugny: "87696401",
  "Bessay-sur-Allier": "87696336",
  "Villeneuve-sur-Allier": "87696310",
  "Pougues-les-Eaux": "87696211",
  "La Charité-sur-Loire": "87696195",
  "Cosne-sur-Loire": "87696146",
  Briare: "87696088",
  Génelard: "87694653",
  Galuzot: "87694638",
  "Marmagne sous Creusot": "87694182",
  Broye: "87694166",
  Mesvres: "87694158",
  "Les Perrières": "87691600",
  Vauzelles: "87691469",
  "Paris Gare de Lyon Hall 1 & 2": "87686006",
  "Arcy-sur-Cure": "87683680",
  Vincelles: "87683631",
  "Augy Vaux": "87683607",
  "Auxerre Saint-Gervais": "87683573",
  "Monéteau - Gurgy": "87683557",
  "Saint-Julien-du-Sault": "87683227",
  Sens: "87683003",
  "Saint-Fargeau": "87682542",
  "Boissise-le-Roi": "87682518",
  Vosves: "87682500",
  Héricy: "87682435",
  Yerres: "87682112",
  Melun: "87682005",
  "Villeneuve-Saint-Georges": "87681825",
  "Le Coudray-Montceaux": "87681635",
  "Le Plessis Chenet": "87681627",
  Maisse: "87681486",
  "Moulin Galant": "87681403",
  "Grand Bourg": "87681353",
  "Ris-Orangis": "87681338",
  "Corbeil-Essonnes": "87681007",
  "Saint-Jean-de-Luz - Ciboure": "87677120",
  "Saint-Jean-Pied-de-Port": "87673723",
  "Ustaritz Jatxou": "87673624",
  Guéthary: "87673459",
  Dax: "87673202",
  Morcenx: "87673103",
  Bayonne: "87673004",
  "Ogeu-les-Bains": "87672709",
  "Buzy en Béarn": "87672634",
  Pau: "87672006",
  "Durtol - Nohanent": "87641449",
  Laqueuille: "87641274",
  "Bourg-Lastic - Messeix": "87641266",
  Bellenaves: "87641068",
  Montlaur: "87618207",
  "Pins-Justaret": "87618116",
  Pommevic: "87618058",
  "Luc-la-Primaube": "87615773",
  Mazamet: "87615542",
  "Vielmur-sur-Agout": "87615492",
  "Roquesérière - Buzet": "87615351",
  "Saint-Sulpice (Tarn)": "87615344",
  "Lisle-sur-Tarn": "87615310",
  "Alet-les-Bains": "87615187",
  Verzeille: "87615138",
  Bram: "87615054",
  "Salles-Courbatiès": "87613877",
  Aubin: "87613224",
  Lardenne: "87611939",
  "Brax - Léguevin": "87611822",
  "Gimont Cahuzac": "87611772",
  Porta: "87611491",
  Colomiers: "87611467",
  Saverdun: "87611368",
  "Saint-Gaudens": "87611137",
  "Martres-Tolosane": "87611087",
  "Le Fauga": "87611046",
  "Toulouse Matabiau": "87611004",
  Lavaufranche: "87597740",
  "Busseau sur Creuse": "87597708",
  Marsac: "87597625",
  "Sainte-Lizaigne": "87597054",
  "Saint-Cyprien": "87595777",
  "Le Bugue": "87595744",
  "Les Eyzies-de-Tayac-Sireuil": "87595736",
  Mussidan: "87595298",
  "Vignols - Saint-Solve": "87594655",
  "Le Burg": "87594614",
  "Saint-Denis-lès-Martel": "87594572",
  "Les Quatre-Routes-du-Lot": "87594564",
  Turenne: "87594556",
  "La Rivière de Mansac": "87594416",
  Souillac: "87594333",
  "Gignac - Cressensac": "87594325",
  Corrèze: "87594119",
  "Brive-la-Gaillarde": "87594002",
  "Bussière-Galant": "87592741",
  "Verneuil-sur-Vienne": "87592675",
  "Saint-Sébastien": "87592493",
  Bellac: "87592485",
  "Saint-Sulpice-Laurière": "87592345",
  "La Jonchère-Saint-Maurice": "87592337",
  "Solignac - Le Vigen": "87592246",
  Barsanges: "87592188",
  "Eymoutiers Vassivière": "87592121",
  "Saint-Léonard-de-Noblat": "87592071",
  "Limoges Bénédictins": "87592006",
  "La Chapelle - Aulnay": "87590364",
  Babinière: "87590349",
  Marmande: "87586545",
  "Port-Sainte-Marie": "87586107",
  "Saint-Seurin-sur-l'Isle": "87584615",
  "Saint-Médard-de-Guizières": "87584607",
  Coutras: "87584516",
  Vélines: "87584177",
  Luxé: "87583823",
  Chalais: "87583690",
  "Roumazières-Loubert": "87583468",
  "Gironde-sur-Dropt": "87582858",
  Langon: "87582775",
  Arbanats: "87582726",
  Portets: "87582718",
  "La Teste-de-Buch": "87582643",
  "Gujan-Mestras": "87582619",
  Ychoux: "87582536",
  "Biganos Facture": "87582478",
  Blanquefort: "87581728",
  "Caudéran Mérignac": "87581538",
  Margaux: "87581215",
  "Ludon-Médoc": "87581181",
  "Villefranche-sur-Cher": "87576884",
  Gièvres: "87576876",
  Valençay: "87576215",
  "Selles-Saint-Denis": "87576140",
  Foëcy: "87576108",
  "St-Antoine": "87575688",
  Montmorillon: "87575480",
  "Anché - Voulon": "87575332",
  "La Tricherie": "87575183",
  Naintré: "87575175",
  Châtellerault: "87575142",
  Maillé: "87575068",
  "Chissay-en-Touraine": "87574848",
  "Notre-Dame-d'Oé": "87574699",
  Pezou: "87574541",
  "Cloyes-sur-le-Loir": "87574509",
  Chenonceaux: "87574491",
  "Saint-Martin-le-Beau": "87574459",
  "Veuves - Monteaux": "87574327",
  Baule: "87574152",
  "Saint-Ay": "87574129",
  "Cinq-Mars-la-Pile": "87571836",
  "Port Boulet": "87571794",
  "Saint-Paterne-Racan": "87571554",
  "Neuillé-Pont-Pierre": "87571547",
  Veigné: "87571414",
  "Aulnat Aéroport": "87562421",
  "Halte de Fontanil – Lycée de Drap": "87565143",
  "Nevers Le Banlay": "87559070",
  "Paris Austerlitz": "87547000",
  "Pont de Rungis Aéroport d'Orly": "87546192",
  Bonneval: "87545731",
  "Saint-Martin d'Étampes": "87545350",
  "Ivry-sur-Seine": "87545301",
  "Épinay-sur-Orge T12": "87745091",
  "Lamotte-Beuvron": "87543140",
  Angerville: "87543090",
  "Les Ardoines": "87492108",
  "Saint-Jean-d'Angély": "87491357",
  "Saint-Hilaire - Brizambourg": "87491324",
  Loulay: "87491290",
  "La Grave d'Ambarès": "87491274",
  "Cubzac-les-Ponts": "87491266",
  "Fontaines-d'Ozillac": "87491159",
  Taillebourg: "87491043",
  "La Bohalle": "87487843",
  "Montreuil-Bellay": "87487637",
  Pouzauges: "87487314",
  "Saint-Hilaire-de-Riez": "87486563",
  "La Mothe-Achard": "87486423",
  Luçon: "87486258",
  "Beauvoir-sur-Niort": "87485342",
  Marigny: "87485334",
  Niort: "87485300",
  "Châtelaillon-Plage": "87485110",
  "Varades - Saint-Florent le Vieil": "87484386",
  Morannes: "87484170",
  Tiercé: "87484147",
  "Le Croisic": "87481788",
  "Saint-Nazaire": "87481705",
  Abbaretz: "87481614",
  "Sucé-sur-Erdre": "87590828",
  Clisson: "87481440",
  "Le Pallet": "87481424",
  "La Bernerie-en-Retz": "87481267",
  "Les Moutiers-en-Retz": "87481259",
  Ancenis: "87481192",
  "Rezé Pont Rousseau": "87481036",
  Voutré: "87478560",
  Louverné: "87478511",
  "La Gouesnière - Cancale - Saint-Méloir-des-Ondes": "87478099",
  Bonnemain: "87478065",
  "Saint-Pierre-Quiberon": "87476440",
  "Plouharnel - Carnac": "87476416",
  Quimperlé: "87476317",
  Plouigneau: "87474411",
  "Pleyber-Christ": "87474320",
  Châteaulin: "87474064",
  "Pont-de-Buis": "87474056",
  Pontrieux: "87473843",
  "Carnoët - Locarn": "87473561",
  "Le Pénity": "87473553",
  "Belle-Isle - Bégard": "87473165",
  "Plénée-Jugon": "87473082",
  "Thann Centre": "87472605",
  "Les Lacs": "87471516",
  Vitré: "87471508",
  Pontchaillou: "87471391",
  "Le Theil-de-Bretagne": "87471342",
  "Messac - Guipry": "87471185",
  "Montfort-sur-Meu": "87471078",
  Betton: "87471045",
  Bruz: "87471037",
  "Vern-sur-Seiche": "87471029",
  Rennes: "87471003",
  Carentan: "87447243",
  Lison: "87447219",
  "Rai - Aube": "87444620",
  "Nonant-le-Pin": "87444570",
  Argentan: "87444539",
  Houlgate: "87444406",
  "Moult - Argences": "87444190",
  "ST Joseph le Castellas": "87440602",
  "Franchet d'Esperey": "87417444",
  "Vernon - Giverny": "87415604",
  "Glos - Montfort": "87415349",
  Dieppe: "87415018",
  Rolleville: "87413740",
  Fécamp: "87413542",
  "Bréauté - Beuzeville": "87413344",
  "Le Havre Graville": "87413203",
  "Le Havre": "87413013",
  Maromme: "87411249",
  Oissel: "87411207",
  "Rouen Rive Droite": "87411017",
  "Colmar Mésanges": "87402297",
  "Clermont La Rotonde": "87396895",
  "Laigné - Saint-Gervais": "87396556",
  "Sceaux - Boëssé": "87396317",
  Crissé: "87396226",
  Teillé: "87396051",
  "La Guierche": "87396036",
  "Neuville-sur-Sarthe": "87396028",
  "Illiers-Combray": "87394437",
  "Magny - Blandainville": "87394429",
  "La Loupe": "87394254",
  Pontgouin: "87394247",
  "Amilly Ouerray": "87394205",
  "Saint-Piat": "87394148",
  Lucé: "87394015",
  "Massy TGV": "87393702",
  "Chilly-Mazarin": "87393637",
  Bourth: "87393603",
  "Massy - Palaiseau": "87393579",
  Igny: "87393561",
  "Fontenay-le-Fleury": "87393405",
  "Issy Val de Seine": "87393306",
  "Le Perray-en-Yvelines": "87393298",
  "Les Essarts-le-Roi": "87393280",
  Javel: "87393066",
  Morre: "87391300",
  "Romilly-la-Puthenaye": "87387175",
  "La Bonneville-sur-Iton": "87387142",
  Bueil: "87387092",
  Poissy: "87386573",
  "Achères Grand Cormier": "87386052",
  "Paris Saint-Lazare": "87384008",
  "Viroflay Rive Droite": "87382887",
  Montreuil: "87382879",
  "Versailles Rive Droite": "87382861",
  "Saint-Nom-la-Bretèche Forêt de Marly": "87382481",
  Puteaux: "87382382",
  "Bécon les Bruyères": "87382002",
  Maule: "87381723",
  Limay: "87381582",
  Gargenville: "87381566",
  "Santeuil - Le Perchay": "87381186",
  Osny: "87381145",
  Colombes: "87381087",
  "Saint-Sébastien Pas Enchantés": "87354589",
  Wambaix: "87345595",
  Cattenières: "87345587",
  Cambrai: "87345520",
  "Sin-le-Noble": "87345405",
  "Montigny-en-Ostrevent": "87345306",
  Libercourt: "87345256",
  Dourges: "87345165",
  "Billy-Montigny": "87345140",
  Liévin: "87345041",
  "Loos-en-Gohelle": "87345033",
  Lens: "87345025",
  Wallers: "87343301",
  Beuvrages: "87343160",
  "Saint-Amand-les-Eaux": "87343103",
  Farbus: "87342527",
  "La Bassée - Violaines": "87342436",
  Cuinchy: "87342410",
  Steenbecque: "87342295",
  "Nœux-les-Mines": "87342139",
  "Biache-Saint-Vaast": "87342097",
  Rœux: "87342089",
  "Bibliothèque François Mitterrand": "87328328",
  Futuroscope: "87324095",
  Penhoët: "87321745",
  "Avignon TGV terminal TER": "87981902",
  Beaurainville: "87317198",
  Wacquemoulin: "87316208",
  Daours: "87315044",
  "Longroy - Gamaches": "87313817",
  Grandvilliers: "87313734",
  Méru: "87313668",
  "Cires-lès-Mello": "87313551",
  Ham: "87313494",
  Nesle: "87313486",
  Rosières: "87313460",
  Remy: "87313403",
  Gannes: "87313262",
  "Ingersheim Cité Scolaire": "87303875",
  "Les Bons Pères": "87297515",
  Voyenne: "87297150",
  "Dercy - Froidmont": "87297143",
  Chauny: "87296616",
  "Anizy - Pinon": "87296566",
  Tergnier: "87296442",
  "Montescourt-Lizerolles": "87296418",
  Busigny: "87296244",
  Avesnelles: "87295725",
  Ors: "87295667",
  Anor: "87295055",
  Cobrieux: "87287243",
  "Mont de Terre": "87287128",
  Lezennes: "87287102",
  Annappes: "87286856",
  Fretin: "87286641",
  "Wattignies - Templemars": "87286526",
  "Don - Sainghin": "87286435",
  Santes: "87286401",
  Comines: "87286260",
  Wambrechies: "87286229",
  Strazeele: "87286203",
  "La Madeleine": "87286187",
  "Haussmann Saint-Lazare": "87281899",
  Magenta: "87281873",
  Ebblinghem: "87281469",
  "Pont d'Ardres": "87281410",
  Courghain: "87281337",
  Gravelines: "87281246",
  "Ermont Halte": "87276584",
  Viarmes: "87276568",
  Valmondois: "87276535",
  "Montsoult - Maffliers": "87276493",
  "Bouffémont - Moisselles": "87276485",
  "Boran-sur-Oise": "87276444",
  "Précy-sur-Oise": "87276410",
  "Sarcelles - Saint-Brice": "87276386",
  "Rieux - Angicourt": "87276352",
  Laigneville: "87276204",
  Sannois: "87276188",
  Chaponval: "87276162",
  "Franconville - Le Plessis-Bouchard": "87276071",
  Esches: "87272096",
  "Thieux - Nantouillet": "87272054",
  Jaux: "87272013",
  Margival: "87271882",
  Crouy: "87271874",
  "Dammartin - Juilly - Saint-Mard": "87271536",
  "Sevran Beaudottes": "87271445",
  "Le Bourget T11": "87697359",
  "Paris Gare du Nord RER": "87271023",
  "Lille Europe": "87223263",
  Schopperten: "87215483",
  Rothau: "87214726",
  Obernai: "87214288",
  "Dambach-la-Ville": "87214213",
  Benfeld: "87214122",
  Kurtzenhouse: "87213660",
  Hunspach: "87213454",
  "Soultz-sous-Forêts": "87213421",
  Hoelschloch: "87213413",
  "Niederbronn-les-Bains": "87213256",
  Iteuil: "87577403",
  Haguenau: "87213058",
  Mothern: "87212456",
  Steinbourg: "87212209",
  Brumath: "87212134",
  Longwy: "87194001",
  Herbitzheim: "87193672",
  Sarreinsming: "87193631",
  Sarreguemines: "87193615",
  "Valleroy - Moineville": "87192732",
  Hatrize: "87192724",
  "Conflans - Jarny": "87192666",
  Bénestroff: "87192302",
  "Sanry-sur-Nied": "87192229",
  Woippy: "87192088",
  "Metz Nord": "87192070",
  Metz: "87192039",
  "Sierck-les-Bains": "87191635",
  "Maizières-lès-Metz": "87191106",
  Thionville: "87191007",
  Champagney: "87185348",
  Ronchamp: "87185314",
  Héricourt: "87184507",
  "Petit-Croix": "87184267",
  Raedersheim: "87182717",
  Lutterbach: "87182667",
  "Lutterbach Tram-train": "87534347",
  "Breitenbach-Haut-Rhin": "87182659",
  Oderen: "87182634",
  Fellering: "87182626",
  Thann: "87182568",
  Turckheim: "87182352",
  Logelbach: "87182345",
  Rouffach: "87182337",
  Zillisheim: "87182196",
  Bartenheim: "87182113",
  Habsheim: "87182089",
  "Colmar Saint-Joseph": "87181222",
  "Pagny-sur-Meuse": "87175828",
  Bayard: "87175133",
  "Nançois - Tronville": "87175067",
  "Saint-Dizier": "87175000",
  Anchamps: "87172858",
  Carignan: "87172353",
  Sedan: "87172254",
  Fumay: "87172098",
  Revin: "87172080",
  Deville: "87172064",
  Monthermé: "87172056",
  "Joigny-sur-Meuse": "87172031",
  "Champagne-Ardenne TGV": "87171926",
  Amifontaine: "87171744",
  Fismes: "87171330",
  Montbré: "87171256",
  "La Plaine Stade de France - Saint-Denis - Aubervilliers": "87164798",
  "Ker Lann": "87159947",
  "Meuse TGV": "87147322",
  "Saint-Michel-sur-Meurthe": "87144683",
  Remiremont: "87144451",
  Arches: "87144410",
  Contrexéville: "87144287",
  Vincey: "87144063",
  "Docelles - Cheniménil": "87144030",
  Épinal: "87144006",
  Froncles: "87142240",
  "Lorraine TGV": "87142109",
  Dieulouard: "87141812",
  Tantonville: "87141598",
  "Bainville-sur-Madon": "87141531",
  "Thiaville-sur-Meurthe": "87141432",
  "Ménil Flin": "87141390",
  "Saint-Clément - Laronxe": "87141374",
  "Blainville - Damelevières": "87141135",
  "Dombasle-sur-Meurthe": "87141119",
  "Varangéville - Saint-Nicolas": "87141101",
  "Laneuveville-devant-Nancy": "87141093",
  "Brion - Montréal-la-Cluse": "87131961",
  "Romilly-sur-Seine": "87118158",
  "Crécy-la-Chapelle": "87116772",
  "Couilly - Saint-Germain - Quincy": "87116731",
  "La Ferté-sous-Jouarre": "87116517",
  "Montry - Condé": "87116400",
  Meaux: "87116103",
  Nangis: "87116095",
  "Émerainville - Pontault-Combault": "87116046",
  "Les Pavillons-sous-Bois": "87113852",
  "Val de Fontenay": "87113712",
  "Le Chénay Gagny": "87113522",
  "Le Raincy - Villemomble - Montfermeil": "87113472",
  "Lille CHR": "87109306",
  "Nice Pont Michel": "87590299",
  "Châteaubriant Tram Train": "87590372",
  "Lurbe-Saint-Christau": "87672741",
  "Alles-sur-Dordogne": "87584482",
  "Fontaine-Lavaganne": "87316463",
  "Grez-Gaudechart": "87316471",
  "La Beuvrière": "87342501",
  "La Bouble": "87641100",
  "Les Champs-Forts": "87116897",
  Monteils: "87613455",
  Nuces: "87613273",
  Paradis: "87745133",
  Pierroton: "87582429",
  Serrigny: "87712018",
  Sigournais: "87487355",
  "St-Éloy": "87641092",
  "St-Martin-Sail-les-Bains": "87732651",
  "St-Mesmin-le-Vieux": "87487298",
  "St-Michel-sur-Charente": "87583153",
  "Taulé-Henvic": "87474510",
  "Irigny Yvours": "87722249",
  "Le Mans hôpital-université": "87743872",
  Bailly: "87000045",
  Méroux: "87184408",
  "Lycée Henri Sellier": "87988717",
  "Bourg-Madame": "87784876",
  Saillagouse: "87784835",
  "Thuès les Bains": "87784744",
  Joncet: "87784710",
  "Prades - Molitg-les-Bains": "87784637",
  "Saint-Féliu-d'Avall": "87784520",
  "Banyuls-sur-Mer": "87784298",
  "Argelès-sur-Mer": "87784231",
  Belvezet: "87783670",
  "Tournemire - Roquefort": "87783456",
  "Saint-Rome-de-Cernon": "87783431",
  Magalas: "87781666",
  "Les Cabrils": "87781559",
  Montpaon: "87781534",
  "Leucate La Franqui": "87781088",
  Béziers: "87781005",
  "Saint-Laurent-d'Aigouze": "87775841",
  "Le Cailar": "87775825",
  Vauvert: "87775817",
  Bessèges: "87775494",
  "Saint-Geniès-de-Malgoirès": "87775361",
  "La Grand-Combe": "87775254",
  Villefort: "87775197",
  "Aigues Vives": "87775122",
  Milhaud: "87775098",
  "Vic - Mireval": "87773531",
  "L'Isle-sur-la-Sorgue - Fontaine-de-Vaucluse": "87765479",
  "Saint-Saturnin-lès-Avignon": "87765438",
  Bédarrides: "87765198",
  "Le Teil": "87764472",
  Montélimar: "87764001",
  "Laragne-Montéglin": "87763755",
  Embrun: "87763466",
  "Veynes Dévoluy": "87763300",
  "Saint-Hilaire - Saint-Nazaire": "87761684",
  "Livron-sur-Drôme": "87761247",
  "Saint-Vallier sur Rhône": "87761130",
  Cannes: "87757625",
  Tende: "87756882",
  "La Brigue": "87756874",
  "Breil-sur-Roya": "87756833",
  Peille: "87756791",
  "Cap-d'Ail": "87756395",
  "Cros de Cagnes": "87756338",
  Nice: "87756056",
  "Nice Saint Roch": "87756007",
  "Le Luc - Le Cannet": "87755405",
  Carnoules: "87755371",
  "La Garde": "87755306",
  Sénas: "87753715",
  Arles: "87753657",
  "Croix Sainte": "87753491",
  "Pas des Lanciers": "87753285",
  "Saint-Antoine": "87751826",
  "Septèmes-les-Vallons": "87751800",
  Aubagne: "87751750",
  "Monestier-de-Clermont": "87747592",
  "Montroc le Planet": "87746867",
  "Les Moussoux": "87746818",
  "Les Pélerins": "87746776",
  Taconnaz: "87746750",
  Marignier: "87746347",
  "Saint-Pierre-en-Faucigny": "87746313",
  "La Roche-sur-Foron": "87746305",
  Perrignier: "87745620",
  "Bons-en-Chablais": "87745596",
  Machilly: "87745588",
  "Saint-Julien-en-Genevois": "87745430",
  "Saint-Claude": "87743633",
  Ceyzériat: "87743302",
  "Moûtiers - Salins - Brides-les-Bains": "87741728",
  Frontenex: "87741629",
  "Les Abrets - Fitilieu": "87741496",
  "Le Pont-de-Beauvoisin": "87741470",
  "La Bridoire": "87741447",
  "Épierre - Saint-Léger": "87741280",
  "Aix-les-Bains le Revard": "87741132",
  "Le Puy-en-Velay": "87734699",
  Lezoux: "87734442",
  Vertaizon: "87734426",
  Issoire: "87734202",
  "Parent - Coudes - Champeix": "87734194",
  "Sarliève - Cournon": "87734152",
  Pontmort: "87734103",
  "Royat - Chamalières": "87734038",
  "Lachaud Curmilhac": "87731828",
  Balbigny: "87726869",
  Beauzac: "87726794",
  "Fraisses - Unieux": "87726737",
  Firminy: "87726729",
  Montbrison: "87726448",
  "Andrézieux-Bouthéon": "87726406",
  "La Fouillouse": "87726232",
  "Saint-Étienne Le Clapier": "87726174",
  "Saint-Étienne Châteaucreux": "87726000",
  "St Jean sur Veyle": "87725812",
  "Romanèche-Thorins": "87725739",
  Tournus: "87725622",
  "La Boisse": "87723551",
  "La Tour-du-Pin": "87723478",
  "Saint-Quentin-Fallavier": "87723387",
  "Chandieu Toussieu": "87723361",
  Chaponost: "87722710",
  Francheville: "87722702",
  "Saint-Clair - Les Roches": "87722652",
  "Givors Canal": "87722439",
  Chamelet: "87721829",
  "Bois-d'Oingt - Légny": "87721787",
  Chessy: "87721761",
  "Les Flachères": "87721704",
  Tarare: "87721472",
  "Saint-Romain-de-Popey": "87721456",
  Anse: "87721324",
  "Saint-Victor - Thizy": "87721043",
  Morteau: "87718619",
  Gilley: "87718577",
  Novillars: "87718411",
  "Saint-Vit": "87718320",
  Franois: "87718304",
  "Saint-Lothain": "87718197",
  Liesle: "87718130",
  "Montferrand - Thoraise": "87718106",
  "Miserey-Salines": "87718049",
  "Besançon Mouillère": "87718015",
  "Sainte-Colombe": "87715151",
  Gemeaux: "87713842",
  Seurre: "87713677",
  Corgoloin: "87713537",
  "Nuits-Saint-Georges": "87713529",
  Dole: "87713412",
  "Collonges-lès-Premières": "87713321",
  Genlis: "87713313",
  Tonnerre: "87713198",
  "Les Laumes Alésia": "87713115",
  Thenissey: "87713099",
  Dijon: "87713040",
  "Dijon Porte Neuve": "87713008",
  Ouges: "87712604",
  Rully: "87712026",
  "Châtel-Censoir": "87696856",
  "Flez-Cuzy - Tannay": "87696633",
  "Varennes-sur-Allier": "87696351",
  "Chantenay-Saint-Imbert": "87696302",
  "Saint-Pierre-le-Moûtier": "87696294",
  "Tracy - Sancerre": "87696161",
  "Montceau-les-Mines": "87694620",
  Liernais: "87694497",
  Saulieu: "87694471",
  "Cheilly-lès-Maranges": "87694398",
  "Le Creusot - Montceau-les-Mines - Montchanin TGV": "87694109",
  Garchizy: "87691436",
  Malesherbes: "87684415",
  Boigneville: "87684407",
  Gien: "87684290",
  "Souppes - Château-Landon": "87684217",
  "Bagneaux-sur-Loing": "87684191",
  "Nemours - Saint-Pierre": "87684126",
  "Bourron-Marlotte - Grez": "87684118",
  "Mailly-la-Ville": "87683847",
  "Laroche - Migennes": "87683268",
  Joigny: "87683243",
  "Étigny - Véron": "87683201",
  "Fontaine-le-Port": "87682427",
  "Saint-Mammès": "87682294",
  "Bois-le-Roi": "87682203",
  "Savigny-le-Temple - Nandy": "87682187",
  Cesson: "87682161",
  "Lieusaint - Moissy": "87682153",
  "Boussy-Saint-Antoine": "87682138",
  "Ballancourt-sur-Essonne": "87681437",
  "Évry-Courcouronnes": "87681387",
  "Orangis Bois de l'Épine": "87681346",
  "Viry-Châtillon": "87681312",
  "Maisons-Alfort - Alfortville": "87681155",
  Itxassou: "87673665",
  "Cambo-les-Bains": "87673657",
  Gan: "87672618",
  Artix: "87672212",
  "Montaut Bétharram": "87672113",
  "Ygos-Saint-Saturnin": "87671487",
  Lannemezan: "87671123",
  "Le Lioran": "87645473",
  Lignerolles: "87641795",
  Volvic: "87641423",
  Commentry: "87641415",
  "Les Trillers": "87641373",
  Magnette: "87641365",
  "St Ours les Roches": "87641324",
  Lapeyrouse: "87641043",
  Castres: "87615468",
  Quillan: "87615260",
  Gaillac: "87615252",
  "Viviez - Decazeville": "87613661",
  "Bagnac-sur-Célé": "87613604",
  Lexos: "87613489",
  Caussade: "87613356",
  Cransac: "87613232",
  Gramat: "87613059",
  Montaudran: "87612010",
  "Fenouillet - Saint-Alban": "87611962",
  "Lalande Église": "87611947",
  Malause: "87611871",
  "Saint-Jory": "87611657",
  "L'Hospitalet-près-l'Andorre": "87611517",
  "Porté-Puymorens": "87611509",
  Lacourtensourt: "87611434",
  "Portet Saint-Simon": "87611400",
  Auterive: "87611384",
  Pamiers: "87611343",
  "Saint-Agne": "87611301",
  "Labarthe-Inard": "87611129",
  "Lestelle-de-Saint-Martory": "87611111",
  "Saint-Martory": "87611103",
  Boussens: "87611095",
  Carbonne: "87611061",
  "Longages - Noé": "87611053",
  "Parsac - Gouzon": "87597724",
  Lothiers: "87597104",
  "Villefranche-du-Périgord": "87595892",
  "Les Versannes": "87595702",
  "Saint-Pierre-de-Chignac": "87595520",
  "Saint-Léon-sur-l'Isle": "87595264",
  Périgueux: "87595009",
  Puybrun: "87594754",
  Bétaille: "87594747",
  Pompadour: "87594663",
  Larche: "87594424",
  "Aix la Marsalouse": "87594291",
  Meymac: "87594275",
  Allassac: "87594234",
  Chabanais: "87592873",
  "Aixe-sur-Vienne": "87592667",
  "Le Dorat": "87592543",
  "Saint-Germain-les-Belles": "87592287",
  "Pierre-Buffière": "87592253",
  Bugeat: "87592162",
  "Les Bardys": "87592048",
  Tonneins: "87586651",
  "Monsempron-Libos": "87586453",
  "Trentels Ladignac": "87586446",
  "Penne-d'Agenais": "87586438",
  "Laroque-Timbaut": "87586412",
  "St-Hilaire": "87586131",
  Vayres: "87584714",
  "Saint-Denis-de-Pile": "87584508",
  "Mauzac-et-Grand-Castang": "87584466",
  Gardonne: "87584235",
  "Chasseneuil-sur-Bonnieure": "87583443",
  "La Rochefoucauld": "87583427",
  "Lamothe-Landerron": "87582882",
  Podensac: "87582734",
  "La Hume": "87582635",
  "Villenave-d'Ornon": "87581835",
  Bruges: "87581736",
  Parempuyre: "87581710",
  Cenon: "87581595",
  "Lesparre-Médoc": "87581314",
  "Arenc Euroméditerranée": "87580340",
  Lunery: "87576280",
  "Saint-Florent-sur-Cher": "87576272",
  Bourges: "87576207",
  "Faubourg d'Orléans": "87576173",
  Loreux: "87576157",
  Marmagne: "87576132",
  "Mehun-sur-Yèvre": "87576116",
  "Vierzon Forges": "87576090",
  Vierzon: "87576009",
  "Lussac-les-Châteaux": "87575845",
  "Saint-Saviol": "87575365",
  Ligugé: "87575274",
  "Jaunay-Clan": "87575217",
  Nerpuy: "87575167",
  "Dangé-Saint-Romain": "87575126",
  "Les Ormes": "87575118",
  Montrichard: "87574855",
  "Fréteval - Morée": "87574533",
  "Bléré - La Croix": "87574475",
  Amboise: "87574343",
  "Joué-lès-Tours": "87571885",
  "Azay-le-Rideau": "87571638",
  "La Membrolle-sur-Choisille": "87571513",
  "Musée d'Orsay": "87547307",
  Sermaise: "87545517",
  "Saint-Chéron": "87545509",
  "Vitry-sur-Seine": "87545293",
  "Ablon-sur-Seine": "87545269",
  "Juvisy-sur-Orge": "87545244",
  Lardy: "87545160",
  Étampes: "87545137",
  Boulainvilliers: "87543181",
  Artenay: "87543058",
  Orléans: "87543009",
  "Gallieni Cancéropôle": "87497461",
  "Saint-André-de-Cubzac": "87491241",
  "Aubie - Saint-Antoine": "87491233",
  Cavignac: "87491217",
  "Bussac-Forêt": "87491191",
  Jonzac: "87491142",
  "Clion sur Seugne": "87491134",
  Thouars: "87487009",
  "Saint-Gilles-Croix-de-Vie": "87486571",
  Bournezeau: "87486324",
  "La Crèche": "87485474",
  "Ingrandes-Le Fresne-sur-Loire": "87484360",
  "Champtocé-sur-Loire": "87484352",
  Cholet: "87484303",
  "Chemillé-en-Anjou": "87484246",
  "Le Vieux Briollay": "87484139",
  "Angers Saint-Laud": "87484006",
  Pontchâteau: "87481846",
  "Saint-Étienne-de-Montluc": "87481812",
  "Batz-sur-Mer": "87481770",
  "La Baule Les Pins": "87481697",
  Châteaubriant: "87481648",
  "Nort-sur-Erdre": "87481598",
  Montaigu: "87481465",
  "La Haie-Fouassière": "87481416",
  "Bourgneuf-en-Retz": "87481242",
  "Mauves-sur-Loire": "87481150",
  Chantenay: "87481051",
  "Saint-Pierre-la-Cour": "87478768",
  Laval: "87478404",
  "Pontorson - Mont-Saint-Michel": "87478263",
  "Corseul - Languenan": "87478180",
  "Miniac-Morvan": "87478131",
  "La Fresnais": "87478081",
  Dingé: "87478040",
  "Montreuil-sur-Ille": "87478032",
  "Saint-Médard-sur-Ille": "87478024",
  "Saint-Gildas-des-Bois": "87476762",
  Sévérac: "87476754",
  Questembert: "87476671",
  Gestel: "87476309",
  Auray: "87476200",
  "Saint-Pol-de-Léon": "87474569",
  Guimiliau: "87474296",
  Bannalec: "87474189",
  Quimper: "87474098",
  Dirinon: "87474015",
  Paimpol: "87473868",
  "Trégonneau - Squiffiec": "87473819",
  Gourland: "87473801",
  "Les Mais": "87473587",
  Yffiniac: "87473116",
  Lamballe: "87473108",
  Plestan: "87473090",
  "Noyal - Acigné": "87471540",
  Redon: "87471300",
  "Guichen - Bourg-des-Comptes": "87471151",
  Laillé: "87471144",
  "Villedieu-les-Poêles": "87447698",
  "Carantilly - Marigny": "87447144",
  Cherbourg: "87444877",
  Sées: "87444695",
  Écouché: "87444547",
  Serquigny: "87444315",
  "Frénouville - Cagny": "87444182",
  "Aytré Plage": "87437806",
  "La Rochelle Porte Dauphine": "87437798",
  Lancey: "87417501",
  "Bonnières-sur-Seine": "87415893",
  "Saint-Pierre-du-Vauvray": "87415646",
  "Bourgtheroulde - Thuit-Hébert": "87415323",
  Épouville: "87413732",
  "Harfleur Halte": "87413708",
  "Foucart - Alvimare": "87413377",
  "Saint-Laurent - Gainneville": "87413310",
  Harfleur: "87413302",
  "Saint-Martin-du-Vivier": "87411413",
  "Malaunay - Le Houlme": "87411256",
  "Mouans-Sartoux": "87401323",
  Vaas: "87396598",
  Mayet: "87396580",
  Écommoy: "87396564",
  Arnage: "87396549",
  "Sablé-sur-Sarthe": "87396408",
  "La Suze": "87396366",
  "Saint-Mars-la-Brière": "87396283",
  "Rouessé-Vassé": "87396259",
  "Le Mans": "87396002",
  "Saint-Aubin - Saint-Luperce": "87394213",
  Maintenon: "87394130",
  "Saint-Quentin en Yvelines - Montigny-le-Bretonneux": "87393843",
  "Verneuil-sur-Avre": "87393595",
  "Petit Jouy - Les Loges": "87393504",
  Beynes: "87393363",
  Coignières: "87393272",
  "La Verrière": "87393256",
  "Issy-les-Moulineaux": "87393074",
  "Vanves - Malakoff": "87391532",
  "Conches-en-Ouche": "87387159",
  "Vernouillet - Verneuil": "87386656",
  "L'Étang-la-Ville": "87382473",
  Vaucresson: "87382267",
  "Cergy Préfecture": "87381905",
  "Cormeilles-en-Parisis": "87381863",
  Argenteuil: "87381848",
  "Meulan - Hardricourt": "87381830",
  "Triel-sur-Seine": "87381806",
  "Achères Ville": "87381657",
  "Gilles-Guainville": "87381632",
  Ménerville: "87381616",
  "Conflans Fin d'Oise": "87381459",
  "Saint-Ouen-l'Aumône Quartier de l'Église": "87381426",
  Sérifontaine: "87381269",
  Gisors: "87381244",
  "Chaumont-en-Vexin": "87381228",
  "Le Stade": "87381095",
  "Le Toec": "87353573",
  Bouchain: "87345389",
  Ostricourt: "87345249",
  Lourches: "87343475",
  Valenciennes: "87343004",
  Vimy: "87342576",
  "Calonne-Ricouart": "87342543",
  "Vis à Marles": "87342535",
  Salomé: "87342451",
  Thiennes: "87342287",
  "Ham-en-Artois": "87342261",
  "Boisleux-au-Mont": "87342071",
  "Dives-sur-Mer Port Guillaume": "87337378",
  "Neuville Université": "87334482",
  "Traou Nez": "87322347",
  Eu: "87317537",
  "Quesnoy-le-Montant": "87317487",
  Caffiers: "87317321",
  "Les Fontinettes": "87317305",
  "Blangy-sur-Ternoise": "87317248",
  "Auchy-lès-Hesdin": "87317230",
  Hesdin: "87317222",
  "Wimille - Wimereux": "87317123",
  "Pont de Briques": "87317115",
  "Neufchâtel-Hardelot": "87317099",
  "Eu-la-Mouillette": "87316760",
  "Heilles - Mouchy": "87316398",
  "Thézy-Glimont": "87316125",
  "Buire-sur-l'Ancre": "87316067",
  Heilly: "87316059",
  "Haute Picardie TGV": "87313882",
  Fouilloy: "87313841",
  Cramoisy: "87313544",
  Beauvais: "87313510",
  Marcelcave: "87313445",
  "Namps - Quevauvillers": "87313379",
  Montdidier: "87313346",
  "Saint-Remy-en-l'Eau": "87313288",
  "Saint-Just-en-Chaussée": "87313270",
  "Breteuil-Embranchement": "87313247",
  "La Faloise": "87313239",
  "Longpré-les-Corps-Saints": "87313122",
  "Hangest-sur-Somme": "87313114",
  "Saint-Roch": "87313080",
  "Besançon Franche-Comté TGV": "87300863",
  Hachette: "87297523",
  "La Neuville-sous-Laon": "87297101",
  "Viry-Noureuil": "87297051",
  Versigny: "87296608",
  Mennessis: "87296434",
  "Fresnoy-le-Grand": "87296293",
  "Bohain-en-Vermandois": "87296269",
  "Origny-en-Thiérache": "87296145",
  Laon: "87296012",
  "Sous le Bois": "87295543",
  "Sainte-Léocadie": "87784850",
  Recquignies: "87295022",
  "Font-Romeu-Odeillo-Via": "87784819",
  Jeumont: "87295014",
  Planès: "87784785",
  Maubeuge: "87295006",
  Nyer: "87784736",
  Nortkerque: "87287292",
  "Olette - Canaveilles": "87784728",
  "Lille Porte de Douai": "87287250",
  "Villefranche - Vernet-les-Bains": "87784686",
  Anstaing: "87287219",
  Millas: "87784546",
  Ascq: "87286864",
  Laissac: "87783761",
  Roubaix: "87286732",
  "Bagnols - Chadenet": "87783647",
  "La Fontaine": "87286427",
  Chanac: "87783530",
  Bailleul: "87286179",
  "Campagnac - Saint-Geniez": "87783340",
  "Grande-Synthe": "87281311",
  Marvejols: "87783282",
  Arnèke: "87281121",
  "Aigues-Mortes": "87775858",
  Esquelbecq: "87281113",
  Aimargues: "87775833",
  Thourotte: "87276741",
  Beauvoisin: "87775809",
  Chambly: "87276725",
  Générac: "87775791",
  Taverny: "87276634",
  "Saint-Julien les Fumades": "87775544",
  Montataire: "87276618",
  "Boucoiran-et-Nozières": "87775346",
  "Gros Noyer Saint-Prix": "87276592",
  Alès: "87775288",
  "Persan - Beaumont": "87276469",
  Génolhac: "87775213",
  "Écouen - Ézanville": "87276394",
  Chasseradès: "87775148",
  Groslay: "87276360",
  "Vergèze - Codognan": "87775114",
  "Pont-Sainte-Maxence": "87276329",
  "Saint-Césaire": "87775072",
  "Garges - Sarcelles": "87276196",
  "Jonquières et Saint-Vincent": "87775049",
  "Saint-Ouen-l'Aumône": "87276105",
  Nîmes: "87775007",
  Pierrelaye: "87276097",
  "Les Mazes le Crès": "87773473",
  "Champ de Courses d'Enghien": "87276030",
  Baillargues: "87773457",
  "Enghien-les-Bains": "87276022",
  Cavaillon: "87765503",
  Corcy: "87272286",
  "Le Thor": "87765453",
  Soissons: "87271817",
  Tarascon: "87765354",
  Vierzy: "87271783",
  "Sorgues - Châteauneuf-du-Pape": "87765206",
  "Nanteuil-le-Haudouin": "87271577",
  Orange: "87765107",
  Villepinte: "87271452",
  Donzère: "87764290",
  "Sevran - Livry": "87271429",
  "L'Argentière Les Écrins": "87763557",
  "Aulnay-sous-Bois": "87271411",
  "Aspres-sur-Buëch": "87763250",
  Gennevilliers: "87271205",
  "Valence TGV Rhône-Alpes Sud": "87763029",
  "Paris Gare du Nord Surface Banlieue": "87271031",
  Crest: "87761783",
  "Tieffenbach - Struth": "87215699",
  Vinay: "87761726",
  Keskastel: "87215491",
  "Saint-Marcellin": "87761718",
  "Sarre-Union": "87215459",
  Biot: "87757690",
  "Bourg-Bruche": "87214775",
  "Golfe Juan Vallauris": "87757641",
  Saulxures: "87214759",
  "Théoule-sur-Mer": "87757583",
  "Saint-Blaise-la-Roche Poutay": "87214742",
  "Fréjus - Saint-Raphael Autotrain": "87757518",
  Wisches: "87214676",
  "Menton Garavan": "87756494",
  Lutzelhouse: "87214650",
  "Roquebrune-Cap-Martin": "87756460",
  Urmatt: "87214635",
  Èze: "87756387",
  Gresswiller: "87214593",
  "Saint-Laurent-du-Var": "87756346",
  Molsheim: "87214577",
  Hyères: "87755629",
  Duttlenheim: "87214544",
  Gonfaron: "87755397",
  "Entzheim Aéroport": "87214528",
  Pignans: "87755389",
  Lingolsheim: "87214502",
  "Puget-Ville": "87755363",
  Dorlisheim: "87214338",
  "Cuers - Pierrefeu": "87755355",
  Barr: "87214247",
  "La Seyne - Six-Fours": "87755264",
  Epfig: "87214221",
  "Carry-le-Rouet": "87753566",
  Erstein: "87214148",
  "Fos-sur-Mer": "87753442",
  Ebersheim: "87214106",
  Rognac: "87753251",
  Wissembourg: "87213470",
  Cassis: "87751776",
  Walbourg: "87213405",
  "La Penne-sur-Huveaune": "87751743",
  Gundershoffen: "87213223",
  "Saint-Louis les Aygalades": "87751644",
  Lauterbourg: "87212464",
  "Séon Saint-Henri": "87751636",
  Herrlisheim: "87212340",
  Simiane: "87751438",
  Gambsheim: "87212332",
  "Aix-en-Provence": "87751404",
  "Fegersheim - Lipsheim": "87212266",
  Meyrargues: "87751370",
  Saverne: "87212225",
  "Marseille Blancarde": "87751081",
  Dettwiller: "87212183",
  "Marseille Saint-Charles": "87751008",
  Wilwisheim: "87212175",
  "Moirans La Galifette": "87747691",
  Stephansfeld: "87212126",
  "Le Pont-de-Claix": "87747519",
  Longuyon: "87194274",
  "Grenoble Universités - Gières": "87747402",
  Montmédy: "87194209",
  "Réaumont - Saint-Cassien": "87747279",
  Kalhausen: "87193664",
  Beaucroissant: "87747238",
  Hundling: "87193540",
  "Les Bossons": "87746768",
  Herny: "87193383",
  "Viaduc Sainte-Marie": "87746735",
  Baroncourt: "87192658",
  Bonneville: "87746339",
  "Novéant-sur-Moselle": "87192427",
  "Saint-Martin-Bellevue": "87746222",
  Jœuf: "87191700",
  Pringy: "87746206",
  Homécourt: "87191692",
  "Grésy-sur-Aix": "87746107",
  Koenigsmacker: "87191619",
  "Évian-les-Bains": "87745679",
  "Basse-Ham": "87191601",
  "Thonon-les-Bains": "87745646",
  Hagondange: "87191114",
  Annemasse: "87745497",
  Aillevillers: "87185629",
  Valleiry: "87745414",
  Lure: "87185249",
  Bellignat: "87743526",
  "Colombier-Fontaine": "87184556",
  "Cize - Bolozon": "87743344",
  Voujeaucourt: "87184531",
  "Simandre-sur-Suran": "87743336",
  "Trois Chênes": "87184242",
  "Bourg-en-Bresse": "87743005",
  "Bas Évette": "87184200",
  "Aime - La Plagne": "87741769",
  "Thann Saint-Jacques": "87182881",
  Albertville: "87741645",
  Merxheim: "87182725",
  "Virieu-le-Grand - Belley": "87741504",
  Bollwiller: "87182709",
  "Aiguebelette-le-Lac": "87741421",
  Staffelfelden: "87182691",
  "Saint-Avre - La Chambre": "87741306",
  Moosch: "87182592",
  Aiguebelle: "87741256",
  "Bitschwiller-lès-Thann": "87182576",
  Chamousset: "87741231",
  "Vieux-Thann": "87182550",
  Montmélian: "87741181",
  "Luttenbach-près-Munster": "87182543",
  "Viviers-du-Lac": "87741140",
  Walbach: "87182360",
  Chindrieux: "87741116",
  "Herrlisheim-près-Colmar": "87182329",
  "Vions - Chanaz": "87741108",
  Altkirch: "87182238",
  Culoz: "87741074",
  Rixheim: "87182071",
  Retournac: "87734749",
  Graffenwald: "87181131",
  "Chamalières-sur-Loire": "87734731",
  Hasenrain: "87181024",
  Vorey: "87734723",
  "Clermont-en-Argonne": "87175737",
  "Saint-Vincent le Château": "87734715",
  Lérouville: "87175240",
  "Lavoûte-sur-Loire": "87734707",
  "Mourmelon-le-Petit": "87174409",
  Langogne: "87734350",
  "Vitry-le-François": "87174276",
  "Brassac-les-Mines - Sainte-Florine": "87734244",
  "Châlons-en-Champagne": "87174003",
  "Vic-le-Comte": "87734186",
  Mohon: "87172155",
  "Les Martres-de-Veyre": "87734178",
  Haybes: "87172106",
  Aigueperse: "87734129",
  Laifour: "87172072",
  "Clermont-Ferrand": "87734004",
  "Charleville-Mézières": "87172007",
  Vichy: "87732008",
  Guignicourt: "87171736",
  "Saint-Étienne Carnot": "87726901",
  "Avenay-Val-d'Or": "87171579",
  "Montrond-les-Bains": "87726885",
  "Stade de France Saint-Denis": "87164780",
  "Saint-Jodard": "87726851",
  Pouxeux: "87144428",
  "Le Coteau": "87726828",
  "Rozières-sur-Mouzon": "87144311",
  "Pont de Lignon": "87726786",
  "Hymont - Mattaincourt": "87144220",
  "Le Chambon-Feugerolles": "87726711",
  Mirecourt: "87144212",
  Polliat: "87725846",
  "Laveline-devant-Bruyères": "87144162",
  Pontanevaux: "87725721",
  Igney: "87144089",
  "Fleurville - Pont-de-Vaux": "87725663",
  Charmes: "87144055",
  "Saint-Maurice-de-Beynost": "87723536",
  Bologne: "87142224",
  Cessieu: "87723452",
  Marbache: "87141796",
  Feyzin: "87722538",
  Diarville: "87141648",
  Ternand: "87721811",
  Xeuilley: "87141549",
  "Dommartin - Lissieu": "87721738",
  "Neuves-Maisons": "87141507",
  "Fleurieux-sur-l'Arbresle": "87721563",
  Houdemont: "87141473",
  "Le Méridien La Ferrière": "87721522",
  Azerailles: "87141408",
  "Albigny - Neuville": "87721266",
  Einvaux: "87141200",
  "Lyon Vaise": "87721001",
  "Rosières-aux-Salines": "87141127",
  Avoudrey: "87718551",
  Frouard: "87141077",
  "L'Hôpital-du-Grosbois": "87718528",
  "Jarville-la-Malgrange": "87141010",
  Saône: "87718502",
  "Vendeuvre-sur-Barse": "87118257",
  Deluz: "87718429",
  Troyes: "87118000",
  "Dannemarie - Velesmes": "87718312",
  "La Ferté-Milon": "87116673",
  "Saint-Amour": "87718296",
  "Crouy-sur-Ourcq": "87116640",
  "Byans-sur-Doubs": "87718122",
  "Chézy-sur-Marne": "87116574",
  Morez: "87715441",
  Trilport: "87116491",
  "Chaux-des-Crotenay": "87715383",
  "Roissy-en-Brie": "87116038",
  "Andelot-en-Montagne": "87715102",
  "Gretz-Armainvilliers": "87116012",
  Pontarlier: "87715003",
  "Allée de la Tour Rendez-Vous": "87113878",
  "Ruffey-lès-Echirey": "87713826",
  "Paris Est": "87113001",
  "Pagny-le-Château": "87713669",
  "Marne-la-Vallée Chessy": "87111849",
  "Brazey-en-Plaine": "87713644",
  "Saint-Péray": "87761494",
  Meursault: "87713560",
  "Base Aérienne": "87699223",
  "Gevrey-Chambertin": "87713503",
  Danjoutin: "87700146",
  Chaugey: "87712679",
  Sevenans: "87000028",
  "Thiel-sur-Acolin": "87696419",
  "Paris Bercy Bourgogne - Pays d'Auvergne": "87686667",
  Fourchambault: "87696229",
  Achy: "87316455",
  Nevers: "87696005",
  "Blangy-Glisy": "87316034",
  "Gilly-sur-Loire": "87694869",
  Blaye: "87491589",
  "Paray-le-Monial": "87694687",
  Cérences: "87447623",
  "Sincey-lès-Rouvray": "87694430",
  "Chef-du-Pont-Ste-Mère": "87447250",
  "Montigny-sur-Loing": "87684100",
  "Évaux-les-Bains": "87641829",
  Montargis: "87684001",
  Flaujac: "87613067",
  "Sermizelles - Vézelay": "87683722",
  "Floirac (Lot)": "87613026",
  "Lucy-sur-Cure - Bessy": "87683672",
  "Les Longevilles-Rochejean": "87715227",
  Accolay: "87683656",
  Noirterre: "87487231",
  "Pont-sur-Yonne": "87683136",
  Palinges: "87694661",
  "Champigny sur Yonne": "87683128",
  Pexiora: "87615047",
  "La Grande-Paroisse": "87682476",
  Polminhac: "87645432",
  "Vernou-la-Celle-sur-Seine": "87682468",
  "Pont-l'Évêque-sur-Oise": "87272203",
  "Vulaines-sur-Seine - Samoreau": "87682443",
  "Prigonrieux-La Force": "87584250",
  Montereau: "87682302",
  Reterre: "87641837",
  "Moret - Veneux-les-Sablons": "87682278",
  "Sarreguemines-Est": "87191460",
  "La Ferté-Alais": "87681452",
  Sémalens: "87615518",
  Mennecy: "87681411",
  "St-Julien-Changy": "87694711",
  "Vigneux-sur-Seine": "87681304",
  "St-Julien-L'Ars": "87575712",
  "Le Vert de Maisons": "87681247",
  Viazac: "87613497",
  Hendaye: "87677005",
  Villechaud: "87691311",
  "Ossès - Saint-Martin-d'Arrossa": "87673707",
  "Villeneuve-d'Aveyron": "87613885",
  Biarritz: "87673400",
  "Villetaneuse Université T11": "87697318",
  Ondres: "87673319",
  "Montpellier Sud de France": "87688887",
  "Saint-Vincent-de-Tyrosse": "87673277",
  "Bailly T13": "87710780",
  Saubusse: "87673251",
  "Allée Royale T13": "87710913",
  Boucau: "87673095",
  "Lisière Pereire T13": "87733683",
  "Oloron-Sainte-Marie": "87672725",
  "Bagnols-sur-Cèze": "87764571",
  Urt: "87672386",
  Assat: "87672162",
  "Saint-Pé-de-Bigorre": "87671362",
  Capvern: "87671156",
  Murat: "87645481",
  "Vic-sur-Cère": "87645440",
  Boisset: "87645184",
  Maurs: "87645168",
  "La Bourboule": "87641464",
  "Le Vauriat": "87641399",
  "Eygurande - Merlines": "87641241",
  "Les Ancizes-St-Georges": "87641167",
  "Avignonet-Lauragais": "87616011",
  Tanus: "87615674",
  "Damiatte - Saint-Paul": "87615484",
  "Marssac-sur-Tarn": "87615419",
  Gragnague: "87615377",
  Espéraza: "87615211",
  Pomas: "87615146",
  "Lézignan-Corbières": "87615112",
  Castelnaudary: "87615039",
  Dégagnac: "87613174",
  Capdenac: "87613109",
  Figeac: "87613091",
  Cahors: "87613000",
  Baziège: "87611723",
  Escalquens: "87611707",
  Montbartier: "87611699",
  Dieupentale: "87611681",
  "Saint-Jean-de-Verges": "87611624",
  "Mérens-les-Vals": "87611525",
  "Latour-de-Carol - Enveitg": "87611483",
  "La Ville-Dieu-du-Temple": "87611459",
  "Le Vernet d'Ariège": "87611350",
  "Créteil Pompadour": "87608802",
  "Lavaveix-les-Mines": "87597781",
  "Argenton-sur-Creuse": "87597120",
  "Neuvy-Pailloux": "87597070",
  Châteauroux: "87597005",
  "Sarlat-la-Canéda": "87595827",
  Limeyrat: "87595553",
  Niversac: "87595512",
  "La Cave": "87595215",
  "Château-l'Évêque": "87595165",
  "Bretenoux - Biars": "87594762",
  Vayrac: "87594739",
  Objat: "87594630",
  Vigeois: "87594218",
  Uzerche: "87594200",
  "Montaignac-Saint-Hippolyte": "87594135",
  Exideuil: "87592881",
  "Coussac-Bonneval": "87592840",
  "La Meyze": "87592808",
  "Saint-Junien": "87592709",
  Fromental: "87592360",
  "Magnac - Vicq": "87592279",
  "Erdre-Active": "87590356",
  "Sauveterre-la-Lémance": "87586495",
  "Sainte-Bazeille": "87586479",
  "Saint-Aigulin - La Roche-Chalais": "87584540",
  "Les Églisottes-et-Chalaures": "87584532",
  Couze: "87584425",
  Bergerac: "87584268",
  "Saint-Antoine-de-Breuilh": "87584201",
  Libourne: "87584052",
  Montmoreau: "87583674",
  "Ruelle-sur-Touvre": "87583203",
  "Saint-Macaire": "87582825",
  Cadaujac: "87582684",
  Labouheyre: "87582551",
  Marcheprime: "87582445",
  "Croix d'Hins": "87582437",
  "Gazinet Cestas": "87582403",
  Bègles: "87581801",
  "Pointe de Grave": "87581397",
  "Bordeaux Saint-Jean": "87581009",
  "Selles-sur-Cher": "87576868",
  Avord: "87576439",
  "Saint-Amand-Montrond - Orval": "87576322",
  "Pruniers-en-Sologne": "87576199",
  Villeherviers: "87576165",
  "La Ferté-Imbault": "87576082",
  "Romorantin Blanc Argent": "87576025",
  "Ingrandes sur Vienne": "87575134",
  Villeperdue: "87575043",
  Monts: "87575035",
  "Château-Renault": "87574665",
  Vendôme: "87574558",
  Noizay: "87574368",
  "Onzain - Chaumont-sur-Loire": "87574319",
  "La Chaussée-Saint-Victor": "87574251",
  Mer: "87574194",
  "Chaingy Fourneaux Plage": "87574111",
  "Blois - Chambord": "87574004",
  "La Chapelle-sur-Loire": "87571802",
  "Ballan-Miré": "87571604",
  "Chambourg-sur-Indre": "87571463",
  "Esvres sur Indre": "87571422",
  "Saint-Michel Notre-Dame": "87547315",
  "Paris Austerlitz RER": "87547026",
  "Rungis La Fraternelle": "87546291",
  "Orly Ville": "87546200",
  Voves: "87545707",
  Auneau: "87545657",
  Égly: "87545475",
  Arpajon: "87545467",
  "Sainte-Geneviève-des-Bois": "87545210",
  "Saint-Michel-sur-Orge": "87545202",
  Guillerval: "87545129",
  "Saint-Cyr-en-Val La Source": "87543116",
  Saujon: "87491811",
  Royan: "87491803",
  "Châteauneuf-sur-Charente": "87491506",
  Cognac: "87491449",
  "Villeneuve-la-Comtesse": "87491258",
  Montendre: "87491183",
  Saintes: "87491001",
  "Saint-Mathurin-sur-Loire": "87487892",
  "La Ménitré": "87487884",
  "Les Rosiers-sur-Loire": "87487876",
  Bressuire: "87487249",
  "Olonne-sur-Mer": "87486431",
  Fougeré: "87486316",
  "La Roche-sur-Yon": "87486019",
  Rouillé: "87485532",
  Pamproux: "87485524",
  "Saint-Maixent-L'École": "87485490",
  Fors: "87485326",
  Rochefort: "87485144",
  "Saint-Laurent-de-la-Prée - Fouras": "87485136",
  "Angoulins sur Mer": "87485102",
  "La Possonnière": "87484337",
  "Savennières - Béhuard": "87484329",
  Savenay: "87481838",
  Cordemais: "87481820",
  "La Baule-Escoublac": "87481754",
  Vertou: "87481408",
  "Sainte-Pazanne": "87481226",
  "Port-Saint-Père - Saint-Mars": "87481218",
  "Boussay - La Bruffière": "87481176",
  "La Basse Indre - Saint-Herblain": "87481069",
  "Port-Brillet": "87478750",
  "Pleudihen-sur-Rance": "87478149",
  "Dol-de-Bretagne": "87478073",
  Combourg: "87478057",
  Drefféac: "87476770",
  "Sainte-Anne": "87476648",
  Quiberon: "87476457",
  Kerhostin: "87476432",
  "Les Sables Blancs": "87476267",
  Hennebont: "87476259",
  "Lorient Bretagne Sud": "87476002",
  Roscoff: "87474635",
  Morlaix: "87474338",
  "Saint-Thégonnec": "87474312",
  "La Forest-Landerneau": "87474221",
  Rosporden: "87474155",
  Frynaudour: "87473876",
  "Pontrieux Halte": "87473835",
  "Pont-Melvez": "87473520",
  Caulnes: "87473066",
  "Servon-sur-Vilaine": "87471532",
  Pléchâtel: "87471177",
  "Saint-Senoux - Pléchâtel": "87471169",
  "Saint-Jacques-de-la-Lande": "87471052",
  Vire: "87448159",
  Flers: "87448001",
  Valognes: "87447284",
  Coutances: "87447110",
  "Saint-Lô": "87447003",
  Alençon: "87444711",
  "Dives-sur-Mer - Cabourg": "87444414",
  "Villers-sur-Mer": "87444398",
  "Pont-l'Évêque": "87444349",
  "Le Molay-Littry": "87444083",
  "Pont-de-l'Arche": "87415661",
  Brionne: "87415364",
  "Saint-Victor-l'Abbaye": "87415166",
  Auffay: "87415158",
  "Longueville-sur-Scie": "87415141",
  Montivilliers: "87413724",
  "Jacques Monod la Demi-Lieue": "87413716",
  "Bolbec - Nointot": "87413351",
  Montville: "87411801",
  Sommery: "87411462",
  Motteville: "87411280",
  Pavilly: "87411272",
  "Tourville-la-Rivière": "87411181",
  "Aubigné-Racan": "87396572",
  "Noyen-sur-Sarthe": "87396374",
  Champagné: "87396275",
  "Sillé-le-Guillaume": "87396234",
  Conlie: "87396218",
  "Vivoin - Beaumont": "87396077",
  Montbizot: "87396044",
  "La Taye": "87394403",
  "Montfort-l'Amaury - Méré": "87393892",
  "Noisy-le-Roi": "87393876",
  "Gravigny Balizy": "87393645",
  "Plaisir - Les Clayes": "87393629",
  Nonancourt: "87393553",
  "Jouy-en-Josas": "87393512",
  "Marchezais - Broué": "87393470",
  Houdan: "87393462",
  "Plaisir - Grignon": "87393421",
  Gazeran: "87393348",
  Rambouillet: "87393314",
  "Saint-Cyr-l'École T13": "87733089",
  "Chaville Rive Gauche": "87393207",
  "Chaville - Vélizy": "87393173",
  Bellevue: "87393116",
  "Meudon Val Fleury": "87393082",
  "Pont de l'Alma": "87393041",
  Invalides: "87393033",
  Clamart: "87391565",
  "Aubergenville Élisabethville": "87386730",
  "Les Mureaux": "87386680",
  "Les Clairières de Verneuil": "87386664",
  "Munster Badischhof": "87386540",
  "Massy - Verrières": "87383281",
  "Cergy Saint-Christophe": "87382499",
  "Suresnes Mont Valérien": "87382374",
  "Le Val d'Or": "87382366",
  "Sèvres - Ville-d'Avray": "87382341",
  "Chaville Rive Droite": "87382333",
  "Garches - Marnes-la-Coquette": "87382259",
  "La Défense": "87382218",
  "La Défense Grande Arche RER E": "87731430",
  "Mareil-sur-Mauldre": "87381715",
  "Mantes-la-Ville": "87381590",
  Maurecourt: "87381483",
  "Chanteloup-les-Vignes": "87381475",
  "Gournay - Ferrières": "87381293",
  "Asnières-sur-Seine": "87381137",
  "Bois-Colombes": "87381079",
  "Avenue Henri Martin": "87381046",
  "Neuilly - Porte Maillot": "87381020",
  Caudry: "87345561",
  "Aubigny-au-Bac": "87345447",
  Arleux: "87345421",
  Iwuy: "87345397",
  Somain: "87345314",
  "Bauvin - Provin": "87345280",
  Meurchin: "87345272",
  "Pont-à-Vendin": "87345264",
  Leforest: "87345223",
  "Pont de la Deûle": "87345207",
  "Hénin-Beaumont": "87345157",
  "Coron de Méricourt": "87345132",
  Brebières: "87345108",
  Denain: "87343459",
  "Prouvy - Thiant": "87343418",
  Raismes: "87343319",
  "Le Poirier Université": "87343210",
  "Pernes - Camblain": "87342550",
  Marquillies: "87342469",
  Tincques: "87342303",
  "Aubigny-en-Artois": "87342246",
  Lillers: "87342238",
  "Vitry-en-Artois": "87342113",
  "Courcelles-le-Comte": "87342063",
  Miraumont: "87342030",
  Béthune: "87342006",
  "Krimmeri Meinau": "87338525",
  "Hirson Écoles": "87324335",
  "Aix-en-Provence TGV": "87319012",
  "Chépy - Valines": "87317495",
  Rue: "87317404",
  "Hesdigneul-lès-Boulogne": "87317107",
  Feuquerolles: "87316752",
  "Acheux - Franleu": "87316745",
  "Montreuil-sur-Thérain": "87316406",
  Aumale: "87313767",
  Abancourt: "87313759",
  "Marseille-en-Beauvaisis": "87313726",
  "Milly-sur-Thérain": "87313700",
  "Laboissière - Le Déluge": "87313676",
  "Rochy-Condé": "87313601",
  "Estrées-Saint-Denis": "87313387",
  Avrechy: "87313296",
  "Pont-Remy": "87313130",
  Corbie: "87313056",
  Longueau: "87313049",
  "Barenton-Bugny": "87297291",
  "La Bouteille": "87297085",
  "La Fère": "87296632",
  "Clacy - Mons": "87296178",
  Berlaimont: "87295808",
  "Sains-du-Nord": "87295709",
  "Aulnoye-Aymeries": "87295600",
  Hirson: "87295063",
  Ruminghem: "87287300",
  "Sainte-Marguerite": "87287193",
  Deûlémont: "87287185",
  Marquette: "87287169",
  Baisieux: "87286872",
  "Pont de Bois": "87286831",
  Templeuve: "87286625",
  Nomain: "87286609",
  Hazebrouck: "87286302",
  "Quesnoy-sur-Deûle": "87286245",
  "Loos lez Lille": "87286112",
  Haubourdin: "87286096",
  "Lille Flandres": "87286005",
  Renescure: "87281451",
  "Saint-Omer": "87281444",
  Bourbourg: "87281279",
  Bergues: "87281105",
  Dunkerque: "87281006",
  "Bornel - Belle-Église": "87276717",
  Compiègne: "87276691",
  Luzarches: "87276576",
  "Belloy - Saint-Martin": "87276550",
  "Champagne-sur-Oise": "87276519",
  "Presles Courcelles": "87276501",
  "Bruyères-sur-Oise": "87276451",
  Domont: "87276436",
  "Deuil - Montmagny": "87276345",
  Chevrières: "87276311",
  "Orry-la-Ville - Coye": "87276279",
  "Survilliers - Fosses": "87276261",
  Louvres: "87276253",
  "Les Noues": "87276238",
  "Villiers-le-Bel - Gonesse - Arnouville": "87276220",
  "Liancourt - Rantigny": "87276212",
  "Saint-Gratien": "87276170",
  Épluches: "87276147",
  Pontoise: "87276139",
  "Cernay (Val-d'Oise)": "87276063",
  "Ermont - Eaubonne Ligne J": "87534131",
  Creil: "87276006",
  "Longueil-Annel": "87272195",
  "Villaines-sous-Bois": "87272021",
  Vaumoise: "87271601",
  "Crépy-en-Valois": "87271593",
  "Ormoy-Villers": "87271585",
  "Villeparisis - Mitry-le-Neuf": "87271510",
  "Aéroport Charles de Gaulle 2 TGV": "87271494",
  "Aéroport Charles de Gaulle 2 TGV (RER)": "87001479",
  "Le Blanc-Mesnil": "87271478",
  Drancy: "87271403",
  "La Courneuve - Aubervilliers": "87271304",
  "Pierrefitte - Stains": "87271163",
  "Épinay-sur-Seine": "87271148",
  Diemeringen: "87215665",
  Berthelming: "87215335",
  Saales: "87214783",
  Mullerhof: "87214643",
  "Heiligenberg - Mollkirch": "87214627",
  Mutzig: "87214585",
  Bischoffsheim: "87214296",
  Gertwiller: "87214254",
  Eichhoffen: "87214239",
  Matzenheim: "87214130",
  Kogenheim: "87214114",
  Ingwiller: "87213785",
  "Obermodern-Zutzendorf": "87213165",
  Kilstett: "87212324",
  Bischheim: "87212308",
  Limersheim: "87212274",
  Geispolsheim: "87212258",
  "Strasbourg Roethig": "87212191",
  Schwindratzheim: "87212159",
  Strasbourg: "87212027",
  "Casino Lacroix Laval": "87208553",
  Wittring: "87193656",
  Faulquemont: "87193359",
  "Teting-sur-Nied": "87193342",
  Forbach: "87193003",
  "Pagny-sur-Moselle": "87192468",
  Onville: "87192435",
  "Ars-sur-Moselle": "87192401",
  Malling: "87191627",
  Uckange: "87191130",
  "Luxeuil-les-Bains": "87185595",
  Vesoul: "87185009",
  Belfort: "87184002",
  Bantzenheim: "87182840",
  Ranspach: "87182402",
  "Gunsbach - Griesbach": "87182386",
  Illfurth: "87182204",
  "Mulhouse Dornach Tram Train": "87534321",
  "Saint-Gilles Lycée Haut-Rhin": "87181552",
  Flaxlanden: "87181040",
  Joinville: "87175091",
  "Revigny-sur-Ornain": "87175018",
  "Saint-Hilaire-au-Temple": "87174441",
  Fépin: "87172874",
  Donchery: "87172239",
  "Nouvion-sur-Meuse": "87172213",
  Aubrives: "87172122",
  Nouzonville: "87172023",
  "Coucy-lès-Eppes": "87171769",
  Loivre: "87171728",
  "Aguilcourt - Variscourt": "87171702",
  Bazancourt: "87171462",
  "Breuil - Romain": "87171322",
  Reims: "87171009",
  Vittel: "87144279",
  Biffontaine: "87144188",
  Bruyères: "87144154",
  "Bains-les-Bains": "87144147",
  Xertigny: "87144121",
  Merrey: "87142406",
  Chaumont: "87142000",
  Pompey: "87141788",
  Ceintrey: "87141572",
  Messein: "87141499",
  Bertrichamps: "87141424",
  "Mont-sur-Meurthe": "87141143",
  Foug: "87141036",
  "Villiers Montbarbin": "87116749",
  "Isles - Armentières - Congis": "87116616",
  Mouroux: "87116285",
  "Tournan-en-Brie": "87116210",
  Provins: "87116160",
  Mormant: "87116087",
  "Ozoir-la-Ferrière": "87116020",
  "Champbenoist - Poigny": "87115873",
  Gargan: "87113860",
  "Les Yvris Noisy-le-Grand": "87113803",
  "Nogent - Le Perreux": "87113746",
  "Rosny-sous-Bois": "87113704",
  Gagny: "87113514",
  Bondy: "87113407",
  "Porte de Clichy": "87111278",
  "La Barasse": "87635581",
  Morvillars: "87184424",
  "Chavagnes-les-Redoux": "87487348",
  "La Vavrette-Tossiat": "87743104",
  Lamativie: "87645143",
  "Le Canet": "87751685",
  "Le Pas": "87473348",
  "Le Saut-du-Loup": "87734236",
  Létrade: "87641878",
  Moliens: "87316497",
  Naussac: "87613869",
  "St-Julien (Côtes-d'Armor)": "87473314",
  "St-Martin-de-Bouillac": "87613646",
  "Teillet-Argenty": "87641803",
  Trélazé: "87701532",
  "Dugny - La Courneuve T11": "87697342",
  "La Couronne - Charente": "87583617",
  Boulazac: "87725473",
  "Toulon Sainte-Musse": "87742262",
  "Remise à Jorelle": "87988709",
  "Bena Fanes": "87784892",
  "Ur - Les Escaldes": "87784884",
  Err: "87784843",
  Serdinya: "87784702",
  "Ria-Sirach": "87784660",
  Marquixanes: "87784629",
  Vinça: "87784611",
  "Ille-sur-Têt": "87784561",
  Rivesaltes: "87784173",
  "Le Bruel": "87783548",
  "Les Salelles": "87783514",
  "Saint-Georges-de-Luzençon": "87783423",
  "Sévérac-d'Aveyron": "87783365",
  Chirac: "87783290",
  "Aumont-Aubrac": "87783266",
  "Nozières - Brignon": "87775353",
  "La Bastide - Saint-Laurent-les-Bains": "87775171",
  Uchaud: "87775106",
  "Manduel - Redessan": "87775064",
  Beaucaire: "87775023",
  Carpentras: "87765735",
  Montfavet: "87765412",
  "Avignon Centre": "87765008",
  "Bollène La Croisière": "87764357",
  Briançon: "87763607",
  Chorges: "87763425",
  Gap: "87763003",
  "Luc-en-Diois": "87761874",
  Saillans: "87761817",
  Poliénas: "87761742",
  "Valence Ville": "87761007",
  "Saint-Joseph le Castellas": "87759316",
  Ranguin: "87757732",
  Antibes: "87757674",
  "Juan les Pins": "87757666",
  "Mandelieu-la-Napoule": "87757591",
  "Le Trayas": "87757575",
  "Anthéor Cap Roux": "87757567",
  "Le Dramont": "87757542",
  "Saint-Raphaël": "87757526",
  Viévola: "87756890",
  "Saint-Dalmas de Tende": "87756866",
  "Touët-de-l'Escarène": "87756817",
  "La Trinité Victor": "87756767",
  "Villefranche-sur-Mer": "87756361",
  "Nice Riquier": "87756353",
  "La Crau": "87755611",
  "Les Arcs - Draguignan": "87755447",
  "Solliès-Pont": "87755330",
  "La Pauline Hyères": "87755314",
  Bandol: "87755223",
  Toulon: "87755009",
  "Salon-de-Provence": "87753764",
  Orgon: "87753707",
  "Saint-Martin-de-Crau": "87753681",
  "Sausset-les-Pins": "87753558",
  Rassuen: "87753426",
  Istres: "87753418",
  Berre: "87753228",
  "Sainte-Marthe en Provence": "87751842",
  "La Ciotat - Ceyreste": "87751784",
  "Château-Arnoux-Saint-Auban": "87751230",
  "Lus-la-Croix-Haute": "87747667",
  "Clelles - Mens": "87747626",
  "Saint-Georges-de-Commiers": "87747568",
  "Pontcharra sur Bréda": "87747493",
  Brignoud: "87747451",
  Moirans: "87747329",
  "Le Grand-Lemps": "87747220",
  Châbons: "87747212",
  "Virieu sur Bourbre": "87747204",
  "La Joux": "87746842",
  "Les Praz de Chamonix": "87746826",
  Vaudagne: "87443648",
  Servoz: "87746719",
  Chedde: "87746701",
  "Sallanches - Combloux - Megève": "87746438",
  Magland: "87746412",
  Rumilly: "87746149",
  "Saint-Rambert-en-Bugey": "87743740",
  "Saint-Michel - Valloire": "87742361",
  "Saint-Jean-de-Maurienne Arvan": "87742320",
  Modane: "87742007",
  "Bourg-Saint-Maurice": "87741793",
  "Petit Coeur la Léchère les Bains": "87741702",
  "Massiac - Blesle": "87734871",
  Luc: "87734368",
  Paulhaguet: "87734293",
  "Le Breuil-sur-Couze": "87734228",
  Aubiat: "87734111",
  Gerzat: "87734046",
  Gannat: "87732404",
  Roanne: "87726802",
  "La Ricamarie": "87726703",
  "Veauche - Saint-Galmier": "87726208",
  "Saint-Étienne Bellevue": "87726190",
  Vonnas: "87725820",
  Mâcon: "87725689",
  "Chalon-sur-Saône": "87725002",
  "Servas - Lent": "87723791",
  "Sathonay - Rillieux": "87723700",
  Miribel: "87723528",
  "Saint-André-le-Gaz": "87723494",
  "Bourgoin-Jallieu": "87723429",
  "Saint-Priest": "87723353",
  "Le Péage-de-Roussillon": "87722678",
  Vienne: "87722587",
  Estressin: "87722579",
  Vernaison: "87722264",
  "Lamure-sur-Azergues": "87721860",
  Tassin: "87721514",
  "Ecully - Tassin": "87721506",
  "Chazay - Marcilly": "87721415",
  "Belleville sur Sâone": "87721357",
  "Couzon-au-Mont-d'Or": "87721241",
  "Lyon Saint-Paul": "87721159",
  Régny: "87721050",
  "Arc-et-Senans": "87718841",
  Mouchard: "87718833",
  Orchamps: "87718361",
  "Lons-le-Saunier": "87718239",
  "Domblans - Voiteur": "87718213",
  Poligny: "87718189",
  "Besançon Viotte": "87718007",
  "Saint-Laurent-en-Grandvaux": "87715417",
  "La Rivière-Drugeon": "87715144",
  Frasne: "87715136",
  "Saint-Julien - Clénay": "87713834",
  Saulon: "87713628",
  "Vougeot - Gilly-lès-Cîteaux": "87713511",
  "Villers-les-Pots": "87713339",
  Montbard: "87713131",
  "Verrey-sous-Salmaise": "87713081",
  "Blaisy-Bas": "87713073",
  "Longecourt-en-Plaine": "87712620",
  Lantenay: "87712323",
  "Coulanges-sur-Yonne": "87696831",
  Clamecy: "87696807",
  "Cercy-la-Tour": "87696492",
  Béard: "87696468",
  Diou: "87696435",
  "Dompierre Sept Fons": "87696427",
  "Moulins sur Allier": "87696328",
  Tronsanges: "87696203",
  "Pouilly-sur-Loire": "87696179",
  "Saint-Agnan": "87694851",
  Chauffailles: "87694778",
  "La Clayette - Baudemont": "87694737",
  "Brion - Laizy": "87694596",
  "Cordesse - Igornay": "87694547",
  "Saint-Symphorien-de-Marmagne": "87694174",
  "La Marche": "87691394",
  "Paris Gare de Lyon RER": "87686030",
  "Nogent-sur-Vernisson": "87684274",
  "Ferrières - Fontenay": "87684241",
  "Cravant - Bazarnes": "87683649",
  "Champs - Saint-Bris": "87683615",
  "Chemilly - Appoigny": "87683532",
  "Ponthierry - Pringy": "87682526",
  Chartrettes: "87682419",
  Thomery: "87682252",
  "Combs-la-Ville - Quincy": "87682146",
  "Boutigny-sur-Essonne": "87681478",
  "Le Bras de Fer": "87681395",
  "Évry Val de Seine": "87681361",
  "Les Deux Jumeaux": "87677104",
  "Halsou - Larressore": "87673640",
  Jatxou: "87673632",
  Villefranque: "87673616",
  "Bénesse-Maremne": "87673285",
  "Croix du Prince": "87672600",
  Peyrehorade: "87672337",
  Puyoô: "87672279",
  "Coarraze - Nay": "87672139",
  "Saint-Martin-d'Oney": "87671495",
  Ossun: "87671313",
  Tournay: "87671172",
  "Le Rouget": "87645192",
  Aurillac: "87645002",
  "Vallon-en-Sully": "87641357",
  Pontgibaud: "87641316",
  "La Miouze - Rochefort": "87641290",
  Huriel: "87641217",
  "Louroux-de-Bouble": "87641050",
  Montluçon: "87641001",
  Villenouvelle: "87618215",
  Naucelle: "87615732",
  "Rabastens - Coufouleux": "87615328",
  Carcassonne: "87615286",
  "Albi Madeleine": "87615195",
  "Villefranche-de-Lauragais": "87615013",
  Albi: "87615005",
  "Villefranche-de-Rouergue": "87613893",
  Laguépie: "87613471",
  Albias: "87613398",
  "Lalbenque - Fontanes": "87613323",
  Gourdon: "87613141",
  Assier: "87613075",
  "Rocamadour - Padirac": "87613042",
  "Labège Village": "87612028",
  "Labège Innopole": "87612002",
  "Route de Launaguet": "87611954",
  Castelsarrasin: "87611897",
  Lamagistère: "87611855",
  Mérenvielle: "87611814",
  Aubiet: "87611764",
  Grisolles: "87611673",
  "Tarascon-sur-Ariège": "87611590",
  "Ax-les-Thermes": "87611533",
  "Venerque - Vernet": "87611392",
  Varilhes: "87611327",
  "Montauban Ville Bourbon": "87611244",
  Felletin: "87597849",
  Aubusson: "87597823",
  Vieilleville: "87597633",
  Guéret: "87597609",
  "Éguzon-Chantôme": "87597153",
  Chabenet: "87597112",
  Luant: "87597096",
  Issoudun: "87597062",
  Reuilly: "87597039",
  "Siorac-en-Périgord": "87595769",
  "Mauzens-et-Miremont": "87595728",
  "Milhac-d'Auberoche": "87595538",
  "Montpon-Ménestérol": "87595322",
  "Saint-Astier": "87595249",
  Agonac: "87595157",
  Masseret: "87594820",
  "Laval-de-Cère": "87594796",
  "Saint-Aulaire": "87594622",
  Varetz: "87594606",
  Cornil: "87594481",
  "Terrasson-Lavilledieu": "87594408",
  "Condat - Le Lardin": "87594382",
  Égletons: "87594168",
  Jassonneix: "87594085",
  "Saillat - Chassenon": "87592717",
  "L'Aiguille": "87592634",
  "La Coquille": "87592501",
  Vaulry: "87592451",
  Nantiat: "87592444",
  "Peyrilhac - Saint-Jouvent": "87592428",
  Nieul: "87592410",
  "Bersac-sur-Rivalier": "87592352",
  Ambazac: "87592311",
  "La Porcherie": "87592295",
  "Châteauneuf - Bujaleuf": "87592105",
  Brignac: "87592063",
  "Saint-Priest-Taurion": "87592055",
  "Haluchère Batignolles": "87590331",
  "Pont-du-Casse": "87586404",
  "La Gorp": "87584755",
  "Saint-Loubès": "87584730",
  "Saint-Sulpice - Izon": "87584722",
  Lalinde: "87584441",
  "Lamothe-Montravel": "87584151",
  Caudrot: "87582841",
  "Saint-Pierre-d'Aurillac": "87582833",
  Preignac: "87582767",
  Barsac: "87582759",
  "Le Teich": "87582601",
  Pessac: "87581751",
  "La Guerche-sur-l'Aubois": "87576470",
  "Bengy-sur-Craon": "87576447",
  "Saint-Germain-du-Puy": "87576405",
  "Châteauneuf-sur-Cher": "87576298",
  "Les Quatre Roues": "87576181",
  "Mignaloux - Nouaillé": "87575704",
  Épanvilliers: "87575357",
  Vivonne: "87575290",
  "Grand-Pont-Preuilly": "87575233",
  Dissay: "87575191",
  "Sainte-Maure - Noyant": "87575050",
  "Saint-Aignan - Noyers": "87574897",
  "Véretz - Montlouis": "87574434",
  Menars: "87574244",
  Suèvres: "87574236",
  "Meung-sur-Loire": "87574137",
  "Saint-Genouph": "87571851",
  Langeais: "87571828",
  Rivarennes: "87571653",
  "Saint-Antoine-du-Rocher": "87571539",
  Loches: "87571471",
  "Reignac-sur-Indre": "87571455",
  "Courcay - Tauxigny": "87571448",
  "Montlouis-sur-Loire": "87571273",
  Tours: "87571000",
  "Les Saules": "87546226",
  Châteaudun: "87545756",
  "Villeneuve-le-Roi": "87545277",
  "Athis-Mons": "87545251",
  "Épinay-sur-Orge": "87545228",
  "Brétigny-sur-Orge": "87545194",
  Bouray: "87545178",
  Chamarande: "87545152",
  "La Chapelle-Saint-Mesmin": "87543371",
  Theillay: "87543199",
  "Nouan-le-Fuzelier": "87543157",
  Cercottes: "87543033",
  "Mulhouse Musées": "87534339",
  Gauriaguet: "87491225",
  "Saint-Mariens - Saint-Yzan": "87491209",
  Pons: "87491100",
  Beillant: "87491076",
  Saumur: "87487603",
  "Torfou-Sèvremoine": "87486894",
  "Les Sables-d'Olonne": "87486449",
  Chantonnay: "87486332",
  "La Chaize-le-Vicomte": "87486308",
  "Belleville-sur-Vie": "87486142",
  Lusignan: "87485540",
  "La Mothe-Saint-Héray": "87485508",
  "Prissé-la-Charrière": "87485359",
  Epannes: "87485276",
  "Mauzé-sur-le-Mignon": "87485250",
  Surgères: "87485227",
  "La Rochelle": "87485003",
  "Étriché - Châteauneuf": "87484154",
  "Angers Maître École": "87484048",
  Couëron: "87481804",
  Donges: "87481721",
  "Montoir-de-Bretagne": "87481713",
  Machecoul: "87481366",
  Nantes: "87481002",
  "Le Genest-Saint-Isle": "87478743",
  Neau: "87478545",
  Dinan: "87478164",
  "La Hisse": "87478156",
  "Saint-Malo": "87478107",
  "Saint-Germain-sur-Ille": "87478016",
  Malansac: "87476689",
  Vannes: "87476606",
  "Belz - Ploemel": "87476408",
  "L'Isthme": "87476275",
  Landévant: "87476234",
  Landivisiau: "87474270",
  Lancerf: "87473850",
  "Coat Guégan": "87473579",
  Plougonver: "87473538",
  Moustéru: "87473512",
  "Carhaix-Plouguer": "87473504",
  Plancoët: "87473272",
  Landébia: "87473264",
  Lannion: "87473223",
  Guingamp: "87473207",
  Plounérin: "87473199",
  "Plouvara - Plerneuf": "87473132",
  "La Méaugon": "87473124",
  "Saint-Brieuc": "87473009",
  "Mulhouse Zu Rhein": "87472639",
  Châteaubourg: "87471524",
  "Martigné-Ferchaud": "87471367",
  Massérac: "87471227",
  "Fougeray - Langon": "87471201",
  Breteil: "87471102",
  "Montauban-de-Bretagne": "87471086",
  "L'Hermitage - Mordelles": "87471060",
  "Chamonix Aiguille du Midi": "87462085",
  "L'Aigle": "87444638",
  "Sainte-Gauburge": "87444604",
  "Le Merlerault": "87444588",
  Surdon: "87444562",
  "Le Grand Jardin": "87444323",
  Bernay: "87444299",
  "Mézidon-Canon": "87444208",
  Audrieu: "87444059",
  "Bretteville - Norrey": "87444042",
  Caen: "87444000",
  "Rosny-sur-Seine": "87415885",
  "Port-Villez": "87415679",
  "Saint-Aubin-sur-Scie": "87415125",
  Yvetot: "87413385",
  "Étainhus - Saint-Romain": "87413328",
  Clères: "87411819",
  "Montérolier - Buchy": "87411454",
  "Longuerue - Vieux-Manoir": "87411447",
  "Saint-Étienne-du-Rouvray": "87411215",
  "Château-du-Loir": "87396606",
  "La Ferté-Bernard": "87396325",
  "Connerré - Beillé": "87396309",
  "Montfort-le-Gesnois": "87396291",
  "La Hutte Coulombiers": "87396093",
  "Courtalain - Saint-Pellerin": "87394494",
  "Bailleau-le-Pin": "87394411",
  "Nogent-le-Rotrou": "87394296",
  "Condé-sur-Huisne": "87394288",
  Bretoncelles: "87394270",
  "Courville-sur-Eure": "87394221",
  Jouy: "87394155",
  "Villiers - Neauphle - Pontchartrain": "87393884",
  "Petit Vaux": "87393652",
  Bièvres: "87393546",
  Vauboyen: "87393538",
  "Tacoignières - Richebourg": "87393454",
  "Orgerus - Béhoust": "87393447",
  "Viroflay Rive Gauche": "87393215",
  Porchefontaine: "87393165",
  "Versailles Château Rive Gauche": "87393157",
  "Sèvres Rive Gauche": "87393124",
  "Champ de Mars Tour Eiffel": "87393058",
  "Versailles Chantiers": "87393009",
  "Évreux Normandie": "87387001",
  "Épône - Mézières": "87386763",
  "Villennes-sur-Seine": "87386649",
  "Maisons-Laffitte": "87386425",
  Sartrouville: "87386417",
  "Mareil-Marly": "87382812",
  Louveciennes: "87382457",
  "Conflans-Sainte-Honorine": "87381897",
  Herblay: "87381889",
  "Thun le Paradis": "87381822",
  "Val d'Argenteuil": "87381798",
  "Nézel - Aulnay": "87381731",
  Bréval: "87381624",
  Juziers: "87381558",
  "Mantes-la-Jolie": "87381509",
  "Éragny - Neuville": "87381418",
  "Trie-Château": "87381236",
  "Liancourt-Saint-Pierre": "87381210",
  Lavilletertre: "87381202",
  Chars: "87381194",
  "Boissy-l'Aillerie": "87381152",
  "Clichy - Levallois": "87381129",
  "Neuilly Porte Maillot RER E": "87731448",
  Bertry: "87345553",
  Maurois: "87345546",
  Escaudœuvres: "87345496",
  Sallaumines: "87345215",
  "Pont de Sallaumines": "87345124",
  Corbehem: "87345116",
  Douai: "87345009",
  "Trith-Saint-Léger": "87343400",
  "Saint-Pol-sur-Ternoise": "87342337",
  "Frévin-Capelle": "87342212",
  Fouquereuil: "87342204",
  "Bully - Grenay": "87342105",
  "Monte-Carlo Country Club": "87338590",
  "Montluçon Rimard": "87323675",
  "Beau Marais": "87317610",
  "Boulogne-sur-Mer": "87317586",
  "Le Tréport - Mers-les-Bains": "87317529",
  Woincourt: "87317511",
  Abbeville: "87317362",
  "Marquise - Rinxent": "87317339",
  Anvin: "87317255",
  "Maresquel-Ecquemicourt": "87317206",
  Brimeux: "87317180",
  "Montreuil sur Mer": "87317164",
  "Le Haut Banc": "87316687",
  "Villers sur Thère": "87316422",
  "Dreuil-lès-Amiens": "87316075",
  "Hermes - Berthecourt": "87313585",
  "Balagny Saint-Épin": "87313569",
  "Villers-Bretonneux": "87313437",
  Tricot: "87313353",
  "Hargicourt - Pierrepont": "87313338",
  "Clermont de l'Oise": "87313304",
  "Méricourt - Ribemont": "87313064",
  "Belfort - Montbéliard TGV": "87300822",
  Vauxaillon: "87297283",
  "Verneuil-sur-Serre": "87297119",
  Appilly: "87296459",
  "Crépy - Couvron": "87296152",
  "Marle sur Serre": "87296095",
  "Saint-Quentin": "87296004",
  Louvroil: "87295535",
  "Le Cateau-Cambrésis": "87295220",
  Orchies: "87286583",
  Landas: "87286575",
  Ronchin: "87286534",
  Wavrin: "87286419",
  Steenwerck: "87286161",
  Hellemmes: "87286062",
  "Lyon Jean Macé": "87282624",
  Audruicq: "87281428",
  "Coudekerque-Branche": "87281402",
  Noyon: "87276782",
  Frépillon: "87276659",
  Vaucelles: "87276626",
  "L'Isle-Adam - Parmain": "87276527",
  "Villers-Saint-Paul": "87276378",
  "Longueil-Sainte-Marie": "87276303",
  "La Borne Blanche": "87276287",
  "Pont Petit": "87276154",
  "Ermont - Eaubonne": "87276055",
  "Les Grésillons": "87272146",
  "Le Plessis-Belleville": "87271551",
  "Mitry - Claye": "87271528",
  "Le Bourget": "87271395",
  "Saint-Ouen": "87271247",
  "Pierrefitte - Stains T11": "87697326",
  "Saint-Denis": "87271015",
  "Paris Gare du Nord transmanche": "87271007",
  Ravezies: "87235317",
  Oermingen: "87215632",
  Lutzelbourg: "87215160",
  "Igney - Avricourt": "87215103",
  Réding: "87215079",
  Fouday: "87214734",
  "Schirmeck - La Broque": "87214692",
  "Russ Hersbach": "87214684",
  Duppigheim: "87214536",
  Goxwiller: "87214270",
  "Wingen-sur-Moder": "87213744",
  Hoerdt: "87213686",
  Weyersheim: "87213678",
  Bischwiller: "87213611",
  Hoffen: "87213447",
  Reichshoffen: "87213249",
  "Schweighouse-sur-Moder": "87213108",
  Seltz: "87212431",
  Roppenheim: "87212415",
  Rountzenheim: "87212373",
  Sessenheim: "87212365",
  Drusenheim: "87212357",
  "La Wantzenau": "87212316",
  Graffenstaden: "87212241",
  Hochfelden: "87212167",
  Mommenheim: "87212142",
  Vendenheim: "87212118",
  Mundolsheim: "87212100",
  "Audun-le-Roman": "87194357",
  Zetting: "87193649",
  "Hombourg-Haut": "87193276",
  Béning: "87193250",
  Bouzonville: "87193177",
  Rémilly: "87192237",
  "Courcelles-sur-Nied": "87192211",
  Peltre: "87192203",
  "Rombas - Clouange": "87191734",
  "Moyeuvre-Grande": "87191718",
  Apach: "87191643",
  Montbéliard: "87184523",
  Metzeral: "87182816",
  Kruth: "87182642",
  "Cernay (Haut-Rhin)": "87182410",
  Munster: "87182394",
  Dannemarie: "87182253",
  Sierentz: "87182105",
  Mulhouse: "87182063",
  "Mulhouse Dornach": "87182055",
  Étain: "87175794",
  Verdun: "87175778",
  Commercy: "87175257",
  Chevillon: "87175117",
  "Bar-le-Duc": "87175042",
  Bouy: "87174433",
  Liart: "87172544",
  "Amagne - Lucquy": "87172262",
  Lumes: "87172189",
  "Poix-Terron": "87172171",
  Givet: "87172130",
  "Bogny-sur-Meuse": "87172049",
  "Saint-Erme-Outre-et-Ramecourt": "87171751",
  "Sept-Saulx": "87171645",
  Sillery: "87171637",
  Prunay: "87171629",
  "Rilly-la-Montagne": "87171595",
  Ay: "87171561",
  Épernay: "87171553",
  Dormans: "87171512",
  Muizon: "87171298",
  "Reims Maison Blanche": "87171272",
  "Étival-Clairefontaine": "87144642",
  "Raon-l'Étape": "87144626",
  "Colroy - Lubine": "87144386",
  "Lesseux - Frapelle": "87144329",
  Lépanges: "87144048",
  "Vraincourt - Viéville": "87143024",
  Gudmont: "87142265",
  Vignory: "87142232",
  "Culmont - Chalindrey": "87142125",
  Langres: "87142091",
  Belleville: "87141804",
  "Pulligny - Autrey": "87141564",
  Pierreville: "87141556",
  "Pont-Saint-Vincent": "87141523",
  Ludres: "87141481",
  Bayon: "87141218",
  Toul: "87141044",
  "Bar-sur-Aube": "87118299",
  "Nogent-sur-Seine": "87118190",
  "Château-Thierry": "87116582",
  "Changis - Saint-Jean": "87116509",
  "Lagny - Thorigny": "87116319",
  Coulommiers: "87116301",
  "Faremoutiers - Pommeuse": "87116277",
  "Guérard - La Celle-sur-Morin": "87116269",
  Mortcerf: "87116244",
  "Marles-en-Brie": "87116228",
  "Sainte-Colombe Septveilles": "87116178",
  Longueville: "87116137",
  "Les Boullereaux Champigny": "87113779",
  "Rosny Bois Perrier": "87113696",
  "Noisy-le-Sec": "87113217",
  Pantin: "87113209",
  "La Douzillère": "87009696",
  Bedous: "87672774",
  "Viescamp-sous-Jallès": "87645119",
  "Rosa Parks": "87654798",
  "Aigrefeuille Le Thou": "87485193",
  Marans: "87485060",
  Bidos: "87691949",
  "Labergement-Sainte-Marie": "87715219",
  Joncherey: "87700153",
  Achicourt: "87342154",
  "Bellou-en-Houlme": "87448092",
  "Budelière-Chambon": "87641811",
  "Curchy-Dreslincourt": "87316315",
  "Dracy-St-Loup": "87694554",
  Jussy: "87297069",
  Labarre: "87718353",
  "Le Locle-Col-des-Roches": "87598219",
  "Maison-Dieu (Yonne)": "87694406",
  Paraire: "87613430",
  "Portes-de-Vesoul": "87710723",
  Réalville: "87613380",
  Sauveboeuf: "87584458",
  "Les Portes de Saint-Cyr T13": "87710921",
  "L'Étang-la-Ville - Les Sablons": "87726109",
  Cerbère: "87785006",
  "Bolquère - Eyne": "87784801",
  "Mont-Louis - La Cabanasse": "87784793",
  Sauto: "87784777",
  "Le Soler": "87784512",
  "Port-Vendres": "87784264",
  Elne: "87784207",
  "Salses-le-Château": "87784157",
  Barjac: "87783563",
  "Le Monastier-Pin-Moriès": "87783308",
  "Saint-Flour - Chaudes-Aigues": "87783175",
  Millau: "87783001",
  "Le Bousquet-d'Orb": "87781583",
  Agde: "87781278",
  Coursan: "87781161",
  Narbonne: "87781104",
  "Port-la-Nouvelle": "87781062",
  "Le Grau-du-Roi": "87775866",
  "Saint-Ambroix": "87775536",
  Gammal: "87775510",
  Chamborigaud: "87775221",
  "Gallargues-le-Montueux": "87775130",
  "Villeneuve-lès-Maguelone": "87773515",
  "Saint-Brès - Mudaison": "87773440",
  Sète: "87773200",
  "Entraigues-sur-la-Sorgue": "87765826",
  "Morières-lès-Avignon": "87765420",
  Pierrelatte: "87764308",
  Serres: "87763722",
  "Lyon Saint-Exupéry TGV": "87762906",
  Die: "87761841",
  "Tullins Fures": "87761759",
  "Loriol-sur-Drôme": "87761262",
  "Saint-Rambert-d'Albon": "87761106",
  "Picon Busserine": "87759290",
  Grasse: "87757724",
  Agay: "87757559",
  "Boulouris sur Mer": "87757534",
  "Fontan - Saorge": "87756858",
  Sospel: "87756825",
  "Peillon Sainte-Thècle": "87756783",
  "Drap - Cantaron": "87756775",
  Menton: "87756486",
  Carnoles: "87756478",
  "Beaulieu-sur-Mer": "87756379",
  "Hippodrome-de-la-côte-d'azur": "87756312",
  "Nice Saint-Augustin": "87756254",
  Vidauban: "87755421",
  "Ollioules - Sanary-sur-Mer": "87755231",
  "Saint-Cyr Les Lecques - La Cadière": "87755215",
  Lamanon: "87753731",
  Niolon: "87753582",
  Martigues: "87753509",
  "La Pomme": "87751719",
  Gardanne: "87751420",
  Pertuis: "87751362",
  "Manosque - Gréoux-les-Bains": "87751321",
  "Jarrie - Vizille": "87747535",
  Goncelin: "87747477",
  Voiron: "87747287",
  Rives: "87747246",
  Grenoble: "87747006",
  Vallorcine: "87746875",
  "Les Tines": "87746834",
  "Chamonix-Mont-Blanc": "87746784",
  "Les Houches": "87746743",
  "Reignier-Ésery": "87746511",
  "Saint-Gervais-les-Bains Le Fayet": "87746479",
  "Groisy - Thorens-Glières": "87746248",
  "Seyssel - Corbonod": "87745828",
  "Pougny - Chancy": "87745380",
  "Tenay - Hauteville": "87743757",
  Molinges: "87743591",
  Oyonnax: "87743534",
  "Nurieux-Volognat": "87743351",
  Villereversure: "87743328",
  "Pont-d'Ain": "87743120",
  "Saint-Martin-du-Mont": "87743112",
  Ambilly: "87742031",
  Landry: "87741777",
  "Notre-Dame de Briançon": "87741694",
  "Saint-Béron - La Bridoire": "87741454",
  "Lépin-le-Lac - La Bauche": "87741439",
  "Pont de Dore": "87734459",
  "Monistrol-d'Allier": "87734335",
  Langeac: "87734319",
  "Saint-Georges-d'Aurac": "87734301",
  Arvant: "87734251",
  "Le Cendre - Orcet": "87734160",
  "Riom - Châtel-Guyon": "87734053",
  "Saint-Germain-des-Fossés": "87732206",
  Alleyras: "87731885",
  "Aurec-sur-Loire": "87726760",
  "Saint-Romain-le-Puy": "87726430",
  "Sury-le-Comtal": "87726422",
  "Saint-Étienne La Terrasse": "87726158",
  Échirolles: "87725895",
  Senozan: "87725671",
  "Sennecey-le-Grand": "87725614",
  "Saint-Paul-de-Varax": "87723783",
  "Marlieux - Châtillon": "87723767",
  "Saint-Marcel en Dombes": "87723742",
  "Saint-André-de-Corcy": "87723734",
  Mionnay: "87723726",
  "Les Échets": "87723718",
  "Meximieux - Pérouges": "87723585",
  "La Valbonne": "87723577",
  Montluel: "87723569",
  "La Verpillière": "87723395",
  Vénissieux: "87723320",
  Alaï: "87722744",
  Brignais: "87722728",
  "Chasse-sur-Rhône": "87722561",
  "Sérézin-du-Rhône": "87722546",
  "Grigny le Sablon": "87722298",
  Poule: "87721894",
  "Châtillon d'Azergues": "87721753",
  "Civrieux-d'Azergues": "87721746",
  "Charbonnières-les-Bains": "87721530",
  "Pontcharra - Saint-Forgeux": "87721464",
  Lozanne: "87721423",
  "Saint-Germain-au-Mont-d'Or": "87721282",
  Valdahon: "87718544",
  Cousance: "87718270",
  Arbois: "87718155",
  "La Chaumusse - Fort-du-Plasne": "87715391",
  "Is-sur-Tille": "87713859",
  Mervans: "87713701",
  Aiserey: "87713636",
  "Nuits sous Ravières": "87713156",
  Mâlain: "87713065",
  "Bretigny - Norges": "87712265",
  "Neuilly-lès-Dijon": "87712182",
  "École-Valentin": "87710731",
  Luzy: "87696534",
  Imphy: "87696450",
  "Saincaize-Meauce": "87696260",
  "Mesves - Bulcy": "87696187",
  Digoin: "87694695",
  "Ciry-le-Noble": "87694646",
  Blanzy: "87694612",
  Autun: "87694570",
  Manlay: "87694521",
  "La Roche-en-Brenil": "87694448",
  "Saint-Léger-sur-Dheune": "87694364",
  Montchanin: "87694307",
  "Étang-sur-Arroux": "87694141",
  "Le Creusot": "87694000",
  Dordives: "87684233",
  Avallon: "87683789",
  Vermenton: "87683664",
  "Saint-Florentin - Vergigny": "87683318",
  "Villeneuve-sur-Yonne": "87683219",
  "Villeneuve-la-Guyard": "87683102",
  "Champagne-sur-Seine": "87682450",
  "Livry-sur-Seine": "87682401",
  "Fontainebleau - Avon": "87682211",
  "Le Mée-sur-Seine": "87682179",
  Brunoy: "87682120",
  "Montgeron - Crosne": "87682104",
  "Villeneuve Triage": "87681809",
  Villabé: "87681619",
  "Essonnes Robinson": "87681601",
  "Buno - Gironville": "87681510",
  "Évry-Courcouronnes T12": "87746032",
  "Grigny Centre": "87681379",
  "Bidarray Pont Noblia": "87673699",
  Louhossoa: "87673673",
  Labenne: "87673293",
  "Saint-Geours-de-Maremne": "87673269",
  Orthez: "87672253",
  Arengosse: "87671479",
  Lourdes: "87671339",
  "Mont-de-Marsan": "87671016",
  Tarbes: "87671008",
  Neussargues: "87645507",
  Pers: "87645176",
  "Lacapelle-Viescamp": "87645150",
  Laroquebrou: "87645135",
  "Viescamp sous Jallès": "87645119",
  Ytrac: "87645101",
  "Mont-Dore": "87641472",
  Chamblet: "87641407",
  "La Ville Gozet": "87641191",
  "St-Gervais-Chateauneuf": "87641134",
  "Saint-Bonnet-de-Rochefort": "87641076",
  Golfech: "87618082",
  "Baraqueville Carcenac Peyralès": "87615757",
  Carmaux: "87615625",
  Labruguière: "87615526",
  Lavaur: "87615476",
  "Montastruc-la-Conseillère": "87615369",
  Tessonnières: "87615245",
  "Campagne-sur-Aude": "87615229",
  Limoux: "87615161",
  "Couffoulens - Leuc": "87615120",
  "Cordes - Vindrac": "87613802",
  Najac: "87613463",
  Rodez: "87613422",
  "Saint-Christophe-Vallon": "87613257",
  "Colomiers Lycée International": "87611921",
  Moissac: "87611889",
  "Valence d'Agen": "87611863",
  Montrabé: "87611848",
  Pibrac: "87611830",
  "L'Isle-Jourdain": "87611806",
  Auch: "87611749",
  "Castelnau-d'Estrétefonds": "87611665",
  Foix: "87611616",
  "Les Cabannes": "87611574",
  "Luzenac - Garanou": "87611558",
  Cintegabelle: "87611376",
  "Montréjeau - Gourdan-Polignan": "87611152",
  Cazères: "87611079",
  Muret: "87611038",
  "Limoux Flassian": "87598755",
  "Montaigut-le-Blanc": "87597674",
  Belvès: "87595876",
  "Le Buisson-de-Cadouin": "87595751",
  "La Bachellerie": "87595595",
  Thenon: "87595579",
  "Périgueux Saint-Georges": "87595504",
  Douzillac: "87595280",
  Neuvic: "87595272",
  "Razac-sur-l'Isle": "87595223",
  "Marsac-sur-l'Isle": "87595207",
  Négrondes: "87595132",
  Thiviers: "87595124",
  Lubersac: "87594671",
  Tulle: "87594499",
  "Aubazines - Saint-Hilaire": "87594465",
  Ussel: "87594093",
  "Saint-Yrieix-la-Perche": "87592824",
  Lafarge: "87592733",
  Nexon: "87592725",
  "Saint-Brice-sur-Vienne": "87592691",
  "Saint-Victurnien": "87592683",
  "La Souterraine": "87592378",
  "Pérols-sur-Vézère": "87592170",
  Lacelle: "87592147",
  "Saint-Denis-des-Murs": "87592097",
  "Limoges Montjovis": "87592022",
  Aiguillon: "87586693",
  Agen: "87586008",
  Trémolat: "87584474",
  "Lamonzie-Saint-Martin": "87584243",
  "Sainte-Foy-la-Grande": "87584193",
  "Castillon-la-Bataille": "87584136",
  "Saint-Émilion": "87584102",
  Ruffec: "87583849",
  Angoulême: "87583005",
  "La Réole": "87582866",
  Cérons: "87582742",
  Beautiran: "87582700",
  "Saint-Médard-d'Eyrans": "87582692",
  Arcachon: "87582668",
  Bassens: "87581850",
  "Pessac Alouette": "87581793",
  "Le Verdon-sur-Mer": "87581389",
  "Soulac-sur-Mer": "87581371",
  Pauillac: "87581256",
  "Moulis - Listrac": "87581231",
  Macau: "87581199",
  "Mennetou-sur-Cher": "87576728",
  Nérondes: "87576454",
  Urçay: "87576348",
  Bigny: "87576306",
  "Varennes-sur-Fouzon": "87576231",
  Chabris: "87576223",
  "Lathus-Saint-Rémy": "87575498",
  "Chasseneuil-du-Poitou": "87575225",
  "Port-de-Piles": "87575076",
  Poitiers: "87575001",
  Monnaie: "87574681",
  "Saint-Amand-Longpré": "87574640",
  "Azay-sur-Cher": "87574442",
  Limeray: "87574335",
  "Chouzy-sur-Cisse": "87574301",
  Beaugency: "87574160",
  Savonnières: "87571844",
  "Saint-Patrice": "87571810",
  Chinon: "87571687",
  Druye: "87571612",
  Cormery: "87571430",
  Montbazon: "87571406",
  "Saint-Pierre-des-Corps": "87571240",
  "Vendôme - Villiers-sur-Loir TGV": "87571216",
  "Lentilly Charpenay": "87566919",
  "Chemin d'Antony": "87546317",
  Dourdan: "87545525",
  "Breuillet Village": "87545491",
  "Breuillet - Bruyères-le-Châtel": "87545483",
  "La Norville - Saint-Germain-lès-Arpajon": "87545459",
  "Choisy-le-Roi": "87545285",
  "Savigny-sur-Orge": "87545236",
  "Marolles-en-Hurepoix": "87545186",
  Étréchy: "87545145",
  Monnerville: "87545111",
  "Avenue du Président Kennedy Maison de Radio France": "87543207",
  Salbris: "87543165",
  "La Ferté-Saint-Aubin": "87543124",
  Boisseaux: "87543082",
  Toury: "87543074",
  "Château-Gaillard": "87543066",
  Chevilly: "87543041",
  "Les Aubrais": "87543017",
  "Dourdan La Forêt": "87540179",
  Jarnac: "87491472",
  "Sainte-Eulalie - Carbon-Blanc": "87491282",
  "Saint-Savinien": "87491035",
  Bords: "87491019",
  Cerizay: "87487280",
  "Les Clouzeaux": "87486407",
  "L'Herbergement - Les Brouzils": "87486126",
  "Prin-Deyrançon": "87485268",
  "Tonnay-Charente": "87485151",
  "Chalonnes-sur-Loire": "87484204",
  Écouflant: "87484113",
  "Le Pouliguen": "87481762",
  Pornichet: "87481747",
  "La Croix de Méan": "87481689",
  Issé: "87481622",
  "La Chapelle-sur-Erdre": "87481564",
  Cugand: "87481457",
  Gorges: "87481432",
  Challans: "87481390",
  Pornic: "87481283",
  "Saint-Hilaire-de-Chaléons": "87481234",
  Bouaye: "87481200",
  Oudon: "87481184",
  "Le Cellier": "87481168",
  "Thouaré-sur-Loire": "87481143",
  Évron: "87478552",
  Montsûrs: "87478537",
  Plerguer: "87478123",
  Penthièvre: "87476424",
  Brandérion: "87476242",
  "Landaul - Mendon": "87476226",
  "La Roche-Maurice": "87474262",
  Landerneau: "87474239",
  Kerhuon: "87474213",
  Brest: "87474007",
  "Brélidy - Plouëc": "87473827",
  Callac: "87473546",
  "Plouaret Trégor": "87473181",
  "Châtelaudren - Plouagat": "87473140",
  Broons: "87473074",
  Quédillac: "87473058",
  Chevaigné: "87471458",
  Retiers: "87471359",
  Janzé: "87471334",
  "Corps-Nuds": "87471326",
  "Saint-Armel": "87471318",
  Beslé: "87471219",
  "La Brohinière": "87471094",
  Avranches: "87448514",
  Briouze: "87448084",
  "Saint-Sever": "87447714",
  Granville: "87447680",
  Folligny: "87447649",
  "Pont-Hébert": "87447185",
  "Saint-Cyprien Arènes": "87446179",
  "Blonville-sur-Mer - Benerville": "87444380",
  "Trouville - Deauville": "87444372",
  Lisieux: "87444265",
  Couliboeuf: "87444232",
  "Saint-Pierre-sur-Dives": "87444216",
  Bayeux: "87444067",
  "Vitrolles Aéroport Marseille Provence": "87439554",
  "Rougemont Chanteloup": "87431791",
  "Val-de-Reuil": "87415877",
  "Gaillon - Aubevoye": "87415620",
  "Virville - Manneville": "87413336",
  Serqueux: "87411470",
  "Morgny-la-Pommeraye": "87411439",
  Barentin: "87411264",
  "Sotteville-lès-Rouen": "87411223",
  "Elbeuf - Saint-Aubin": "87411173",
  "Magneux - Courlandon": "87400986",
  "Voivres-lès-le-Mans": "87396358",
  "Le Theil - La Rouge": "87396333",
  "Domfront-en-Champagne": "87396200",
  Arrou: "87394486",
  Brou: "87394452",
  "La Villette Saint-Prest": "87394171",
  Épernon: "87394114",
  Chartres: "87394007",
  "Noisy-le-Roi T13": "87733659",
  Trappes: "87393835",
  Longjumeau: "87393611",
  "Tillières-sur-Avre": "87393587",
  "Saint-Germain - Saint-Rémy": "87393520",
  Dreux: "87393488",
  "Garancières - La Queue": "87393439",
  "Villepreux - Les Clayes": "87393413",
  "Pont du Garigliano - Hôpital Européen Georges Pompidou": "87393322",
  "Saint-Cyr-l'École": "87393223",
  Meudon: "87393108",
  "Paris Montparnasse Hall 1 & 2": "87391003",
  "Paris Montparnasse Vaugirard": "87391102",
  "Beaumont-le-Roger": "87387183",
  "Houilles - Carrières-sur-Seine": "87386409",
  "Nanterre Université": "87386318",
  "Les Vallées": "87386300",
  "La Garenne-Colombes": "87386003",
  "Mareil-Marly T13": "87733667",
  "Cergy le Haut": "87382655",
  "Saint-Nom-la-Bretèche Forêt de Marly T13": "87733071",
  "Marly-le-Roi": "87382465",
  Bougival: "87382440",
  "La Celle-Saint-Cloud": "87382432",
  "Saint-Cloud": "87382358",
  Courbevoie: "87382200",
  "La Frette - Montigny": "87381871",
  "Vaux-sur-Seine": "87381814",
  "Issou - Porcheville": "87381574",
  Andrésy: "87381491",
  Us: "87381178",
  "Montgeroult - Courcelles": "87381160",
  "Pont Cardinet": "87381111",
  "Avenue Foch": "87381038",
  "Péreire - Levallois": "87381012",
  "Saint-Germain-en-Laye Bel-Air - Fourqueux": "87366922",
  "Saint-Germain-en-Laye Bel-Air - Fourqueux T13": "87733675",
  "Saint-Sébastien Frêne Rond": "87354597",
  "Saint-Martin du Touch": "87353599",
  "Les Ramassiers": "87353581",
  "Champagnole Paul-Émile Victor": "87352047",
  Brunémont: "87345439",
  Cantin: "87345413",
  "Loison-sous-Lens": "87345231",
  "Bailleul-Sir-Berthoult": "87342592",
  Avion: "87342584",
  "Beuvry lès Béthune": "87342402",
  Isbergues: "87342279",
  "Savy-Berlette": "87342253",
  Chocques: "87342220",
  Maroeuil: "87342188",
  Mazingarbe: "87342121",
  "Achiet-le-Grand": "87342048",
  Arras: "87342014",
  "Hoenheim Tram": "87338517",
  "Saint-Ouen-l'Aumône Liesse": "87337980",
  "La Poterie": "87334508",
  "Cesson-Sévigné": "87334490",
  Thésée: "87328195",
  "Les Cauquillous": "87328021",
  "Avignon TGV": "87318964",
  "Feuquières - Fressenneville": "87317503",
  "Noyelles-sur-Mer": "87317396",
  Calais: "87317263",
  "Dannes - Camiers": "87317081",
  "Étaples - Le Touquet": "87317065",
  "Rang-du-Fliers - Verton - Berck": "87317057",
  "Boulogne Tintelleries": "87317016",
  "Pihen-lès-Guînes": "87316679",
  "Aubin-Saint-Vaast": "87316604",
  "Dommartin - Remiencourt": "87316109",
  Amiens: "87313874",
  Formerie: "87313833",
  "Blangy-sur-Bresle": "87313809",
  "Feuquières - Broquiers": "87313742",
  "Saint-Omer-en-Chaussée": "87313718",
  Herchies: "87313692",
  "Saint-Sulpice - Auteuil": "87313684",
  "Villers-Saint-Sépulcre": "87313593",
  "Mouy - Bury": "87313577",
  Chaulnes: "87313478",
  "Poix-de-Picardie": "87313395",
  Moreuil: "87313320",
  "Ailly-sur-Noye": "87313221",
  Boves: "87313213",
  Picquigny: "87313106",
  "Ailly-sur-Somme": "87313098",
  Albert: "87313072",
  "Saint-Hilaire-sur-Helpe": "87297531",
  "Flavy-le-Martel": "87296871",
  Vervins: "87296129",
  "Le Quesnoy": "87295857",
  Leval: "87295790",
  "Dompierre-sur-Helpe": "87295774",
  "Avesnes-sur-Helpe": "87295733",
  Landrecies: "87295642",
  Hautmont: "87295568",
  Fourmies: "87295048",
  Ennevelin: "87287276",
  Nieppe: "87287151",
  Lesquin: "87286849",
  "Croix - Wasquehal": "87286716",
  Rosult: "87286567",
  Tourcoing: "87286542",
  Seclin: "87286518",
  Phalempin: "87286500",
  Pérenchies: "87286278",
  "Saint-André-lez-Lille": "87286195",
  Armentières: "87286146",
  "Watten - Éperlecques": "87281436",
  Cassel: "87281139",
  "Calais - Fréthun": "87281071",
  "Croix L'Allumette": "87281055",
  "Mérignac Arlac": "87278259",
  Ourscamps: "87276774",
  Ribécourt: "87276766",
  "Nointel - Mours": "87276758",
  "Le Meux - La Croix-Saint-Ouen": "87276733",
  Mériel: "87276675",
  "Méry-sur-Oise": "87276667",
  Bessancourt: "87276642",
  "Saint-Leu-la-Forêt": "87276600",
  "Auvers-sur-Oise": "87276543",
  "Saint-Leu-d'Esserent": "87276402",
  Goussainville: "87276246",
  "Chantilly - Gouvieux": "87276113",
  "Montigny - Beauchamp": "87276089",
  Compans: "87272047",
  Seugy: "87272039",
  Longpont: "87271775",
  "Villers-Cotterêts": "87271734",
  "Parc des Expositions": "87271486",
  "Aéroport Charles de Gaulle 1": "87271460",
  "Vert Galant": "87271437",
  "La Barre Ormesson": "87271171",
  "Épinay-sur-Seine T11": "87697292",
  "Épinay - Villetaneuse": "87271122",
  "Épinay - Villetaneuse T11": "87697300",
  "Paris Gare du Nord": "87271007",
  Sarrebourg: "87215012",
  Dachstein: "87214551",
  Rosheim: "87214320",
  Scherwiller: "87214205",
  Sélestat: "87214056",
  Marienthal: "87213603",
  Riedseltz: "87213462",
  Mertzwiller: "87213207",
  Munchhausen: "87212449",
  Roeschwoog: "87212407",
  Sarralbe: "87193714",
  Rémelfing: "87193623",
  Farschviller: "87193524",
  Farébersviller: "87193516",
  "Saint-Avold": "87193318",
  Vandières: "87192476",
  "Ancy-sur-Moselle": "87192419",
  Morhange: "87192286",
  "Gandrange - Amnéville": "87191742",
  Auboué: "87191684",
  Ébersviller: "87191379",
  Hayange: "87191239",
  "Hettange-Grande": "87191163",
  "Walygator Parc": "87191098",
  Clerval: "87184622",
  "L'Isle-sur-le-Doubs": "87184572",
  "Montreux-Vieux": "87184275",
  "Muhlbach-sur-Munster": "87182733",
  Wesserling: "87182618",
  "Saint-Amarin": "87182600",
  "Willer-sur-Thur": "87182584",
  "Wihr-au-Val - Soultzbach": "87182378",
  "Saint-Louis": "87182139",
  Colmar: "87182014",
  "Vieux-Thann Zone Industrielle": "87181289",
  Ballersdorf: "87181073",
  Walheim: "87181065",
  Tagolsheim: "87181057",
  "Saint-Louis La Chaussée": "87181016",
  "Les Islettes": "87175711",
  Eurville: "87175141",
  Rethel: "87172270",
  "Vrigne-Meuse": "87172221",
  "Vireux-Molhain": "87172114",
  "Courcy - Brimont": "87171710",
  "Val-de-Vesle": "87171611",
  Germaine: "87171587",
  "Jonchery-sur-Vesle": "87171314",
  "Trois-Puits": "87171264",
  "Saint-Nabord": "87146217",
  Éloyes: "87144436",
  "Provenchères-sur-Fave": "87144345",
  "Corcieux Vanémont": "87144196",
  "Raves - Ban-de-Laveline": "87144105",
  Thaon: "87144097",
  "Châtel - Nomexy": "87144071",
  "Saint-Dié-des-Vosges": "87144014",
  Donjeux: "87142273",
  "Pont-à-Mousson": "87141820",
  Vézelise: "87141606",
  Baccarat: "87141416",
  Chenevières: "87141382",
  Neufchâteau: "87141291",
  Lunéville: "87141150",
  Champigneulles: "87141085",
  Liverdun: "87141069",
  "Fontenoy-sur-Moselle": "87141051",
  Nancy: "87141002",
  "Mareuil-sur-Ourcq": "87116665",
  "Lizy-sur-Ourcq": "87116632",
  "Nogent-l'Artaud - Charly": "87116566",
  "Nanteuil - Saâcy": "87116558",
  Esbly: "87116327",
  "Vaires - Torcy": "87116293",
  "Chelles - Gournay": "87116111",
  "Verneuil-l'Étang": "87116079",
  "Freinville Sevran": "87113894",
  "L'Abbaye": "87113886",
  "Les Coquetiers": "87113845",
  "Villiers-sur-Marne - Le Plessis-Trévise": "87113795",
  "La Jarrie": "87485185",
  Delle: "87184440",
  Grandvillars: "87184432",
  Cézy: "87683235",
  "Creysse-Mouleydier": "87584391",
  Gouttières: "87641126",
  "Grand'Combe-Châteleu": "87718593",
  "La Ferrière": "87249789",
  "La Meilleraie (Vendée)": "87487330",
  "Lapalisse-St-Prix": "87732610",
  Montcaret: "87584169",
  Sougy: "87696476",
  "St-Barthélémy": "87751693",
  "St-Capraise-de-Lalinde": "87584417",
  "Ste-Colombe-les-Vienne-St-Romain-en-Gal": "87722322",
  "St-Éloi": "87691618",
  "Villedieu-Chanliau": "87694224",
  "Wiencourt-l'Équipée": "87316281",
  Sarrance: "87672766",
  "Stains la Cerisaie": "87697334",
  "Nîmes Pont du Gard": "87703975",
  "Pont-Saint-Esprit": "87764555",
};

const apiKey = "46bb7fe8-44d8-482d-9cb5-eadba28a5209";
let apiUrl = "";

const scheduleContainer = document.querySelector(".schedule-container");
const moreDeparturesButton = document.getElementById("more-departures");
const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
const chooseStationBtn = document.getElementById("chooseStationBtn");
const closeModalBtn = document.getElementById("closeModal");
const htmlElement = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const searchJourneyBtn = document.getElementById("searchJourneyBtn");
const favoriteJourneyBtn = document.getElementById("favoriteJourneyBtn");
const backToTopBtn = document.getElementById("back-to-top-btn");
const invertStationsBtn = document.querySelector(".invertStations");
let toastTimeout;

function initialize() {
  renderFavoriteStationButtons();
  const savedTheme = localStorage.getItem("theme") || "light";
  htmlElement.setAttribute("data-theme", savedTheme);

  const journeyDepartureStationSelect = document.getElementById(
    "journeyDepartureStation"
  );
  const journeyArrivalStationSelect = document.getElementById(
    "journeyArrivalStation"
  );

  for (const stationName in stationCodes) {
    if (stationCodes.hasOwnProperty(stationName)) {
      const option = document.createElement("option");
      option.value = stationCodes[stationName];
      option.text = stationName;
      journeyDepartureStationSelect.appendChild(option);
      journeyArrivalStationSelect.appendChild(option.cloneNode(true));
    }
  }
  initializeSelect2(
    "#journeyDepartureStation",
    "Choississez une gare de départ"
  );
  initializeSelect2("#journeyArrivalStation", "Choississez une gare d'arrivée");

  $(document).on("select2:open", () => {
    document.querySelector(".select2-search__field").focus();
  });

  const currentDate = new Date();
  const timezoneOffset = currentDate.getTimezoneOffset();
  currentDate.setMinutes(currentDate.getMinutes() - timezoneOffset);
  const formattedDate = currentDate.toISOString().slice(0, 16);
  document.getElementById("journeyDate").value = formattedDate;
  document.getElementById("journeyDate").min = formattedDate;
}

function handleFavoriteJourney() {
  const selectedJourneyDepartureStation = $("#journeyDepartureStation").find(
    "option:selected"
  );
  const journeyArrivalStationSelect = $("#journeyArrivalStation").find(
    "option:selected"
  );

  const departureStationVal = selectedJourneyDepartureStation.val();
  const departureStationText = selectedJourneyDepartureStation.text();
  const arrivalStationVal = journeyArrivalStationSelect.val();
  const arrivalStationText = journeyArrivalStationSelect.text();

  if (!departureStationVal || !arrivalStationVal) {
    showToast(
      "<strong>Erreur:</strong> Veuillez sélectionner une gare de départ et une gare d'arrivée",
      "danger"
    );
    return;
  }

  if (
    !stationCodes.hasOwnProperty(departureStationText) ||
    !stationCodes.hasOwnProperty(arrivalStationText)
  ) {
    showToast(
      "<strong>Erreur:</strong> Veuillez sélectionner une gare valide",
      "danger"
    );
    return;
  }

  if (departureStationText === arrivalStationText) {
    showToast(
      "<strong>Erreur:</strong> Veuillez sélectionner deux gares différentes",
      "danger"
    );
    return;
  }

  toggleFavorite(departureStationText, arrivalStationText);
  updateStationButtons();
}

function handleSearchJourney() {
  const selectedJourneyDepartureStation = $("#journeyDepartureStation").find(
    "option:selected"
  );
  const journeyArrivalStationSelect = $("#journeyArrivalStation").find(
    "option:selected"
  );

  const departureStationVal = selectedJourneyDepartureStation.val();
  const departureStationText = selectedJourneyDepartureStation.text();
  const arrivalStationVal = journeyArrivalStationSelect.val();
  const arrivalStationText = journeyArrivalStationSelect.text();

  if (!departureStationText || !arrivalStationText) {
    showToast(
      "<strong>Erreur:</strong> Veuillez sélectionner une gare de départ et une gare d'arrivée",
      "danger"
    );
    return;
  }

  if (
    !stationCodes.hasOwnProperty(departureStationText) ||
    !stationCodes.hasOwnProperty(arrivalStationText)
  ) {
    showToast(
      "<strong>Erreur:</strong> Veuillez sélectionner une gare valide",
      "danger"
    );
    return;
  }

  if (departureStationText === arrivalStationText) {
    showToast(
      "<strong>Erreur:</strong> Veuillez sélectionner deux gares différentes",
      "danger"
    );
    return;
  }

  const journeyDate = document.getElementById("journeyDate").value;

  const currentDateTime = new Date();
  currentDateTime.setHours(0, 0, 0, 0);
  const journeyDateTime = new Date(journeyDate);
  journeyDateTime.setHours(0, 0, 0, 0);

  if (journeyDateTime < currentDateTime) {
    showToast(
      "<strong>Erreur:</strong> Veuillez sélectionner une date ultérieure",
      "danger"
    );
    return;
  }

  const formattedJourneyDate = journeyDate.replace(/[-:]/g, "");

  apiUrl = `https://api.sncf.com/v1/coverage/sncf/journeys?from=stop_area%3ASNCF%3A${departureStationVal}&to=stop_area%3ASNCF%3A${arrivalStationVal}&count=10`;
  fetchJourneys(
    `${apiUrl}&datetime=${formattedJourneyDate}`,
    departureStationText,
    arrivalStationText,
    true
  );
}

function handleMoreDepartures() {
  let lastTrainDepartureTime = document.querySelector(
    '.more-departures input[type="hidden"]'
  ).value;

  lastTrainDepartureTime = lastTrainDepartureTime.slice(0, -1) + "1";

  let apiUrlWithDatetime;

  if (apiUrl.includes("journeys")) {
    const departureStationName = document.querySelector(
      ".schedule-container .schedule-item:last-child .departure-station"
    ).textContent;

    const allDepartureStations = document.querySelectorAll(
      ".schedule-container .schedule-item:last-child .departure-station"
    );
    const arrivalStationName = allDepartureStations[1].textContent;
    apiUrlWithDatetime = `${apiUrl}&datetime=${lastTrainDepartureTime}`;
    fetchJourneys(apiUrlWithDatetime, departureStationName, arrivalStationName);
  } else {
    const stationName = document.querySelector(
      ".schedule-container .schedule-item:last-child .departure-station"
    ).textContent;
    apiUrlWithDatetime = `${apiUrl}?from_datetime=${lastTrainDepartureTime}`;
    fetchTrainDepartures(apiUrlWithDatetime, stationName);
  }
}

function initializeSelect2(elementId, placeholderText) {
  $(elementId).select2({
    allowClear: true,
    placeholder: placeholderText,
    sorter: (data) => data.sort((a, b) => a.text.localeCompare(b.text)),
  });
  $(elementId).val(null).trigger("change");
}

function toggleTheme() {
  const currentTheme = htmlElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  themeToggle.textContent = newTheme === "light" ? "🌙" : "☀️";
  htmlElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
}

function showToast(message, className) {
  const toastElement = document.getElementById("toast");
  toastElement.innerHTML = message;
  toastElement.className = className + " show";

  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }

  toastTimeout = setTimeout(() => {
    toastElement.className = "";
  }, 3000);
}

function formatCountdown(countdown) {
  const days = Math.floor(countdown / 86400000);
  const hours = Math.floor((countdown % 86400000) / 3600000);
  const minutes = Math.floor((countdown % 3600000) / 60000);
  const seconds = Math.floor((countdown % 60000) / 1000);

  let result = "";

  if (days > 0) {
    result += `${days} jour${days > 1 ? "s" : ""} et `;
  }

  if (hours > 0) {
    result += `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds} heures`;
  } else if (minutes > 0) {
    result += `${minutes}:${seconds < 10 ? "0" : ""}${seconds} minutes`;
  } else {
    result += `${seconds} secondes`;
  }

  return result;
}

function formatDuration(seconds) {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  let result = "";

  if (days > 0) {
    result += `${days} jour${days > 1 ? "s" : ""} et `;
  }

  if (hours > 0) {
    result += `${hours}h:${minutes < 10 ? "0" : ""}${minutes}min`;
  } else if (minutes > 0) {
    result += `${minutes}min`;
  } else {
    result += `${remainingSeconds}secondes`;
  }

  return result;
}

function calculateDelayInMinutes(realTime, baseTime) {
  const realTimeParts = realTime.split(":");
  const baseTimeParts = baseTime.split(":");

  const realHours = parseInt(realTimeParts[0], 10);
  const realMinutes = parseInt(realTimeParts[1], 10);

  const baseHours = parseInt(baseTimeParts[0], 10);
  const baseMinutes = parseInt(baseTimeParts[1], 10);

  const delayMinutes =
    (realHours - baseHours) * 60 + (realMinutes - baseMinutes);
  return delayMinutes;
}

function parseAndFormatDateTime(dateTimeString) {
  const year = parseInt(dateTimeString.slice(0, 4), 10);
  const month = parseInt(dateTimeString.slice(4, 6), 10) - 1;
  const day = parseInt(dateTimeString.slice(6, 8), 10);
  const hour = parseInt(dateTimeString.slice(9, 11), 10);
  const minute = parseInt(dateTimeString.slice(11, 13), 10);

  const date = new Date(year, month, day, hour, minute);
  return `${padZero(date.getHours())}:${padZero(date.getMinutes())}`;
}

function convertToSeconds(timeHHMMSS) {
  const hours = parseInt(timeHHMMSS.slice(0, 2));
  const minutes = parseInt(timeHHMMSS.slice(2, 4));
  const seconds = parseInt(timeHHMMSS.slice(4, 6));

  return hours * 3600 + minutes * 60 + seconds;
}

function parseAndFormatDateTimeJourney(
  dateTimeString,
  disruptions,
  departureTime = false,
  delayToAdd = 0
) {
  let correctedDateTime = dateTimeString;
  let hour, minute;
  let delay = 0;
  let delayCause = null;

  if (departureTime) {
    for (const disruption of disruptions) {
      const impactedObjects = disruption.impacted_objects;
      if (impactedObjects && impactedObjects.length > 0) {
        for (const impactedObject of impactedObjects) {
          const impactedStops = impactedObject.impacted_stops;
          if (impactedStops && impactedStops.length > 0) {
            for (const stop of impactedStops) {
              if (stop.base_departure_time === dateTimeString.slice(9)) {
                correctedDateTime = stop.amended_departure_time;

                const originalTimeInSeconds = convertToSeconds(
                  dateTimeString.slice(9)
                );
                const amendedTimeInSeconds =
                  convertToSeconds(correctedDateTime);

                const delayInSeconds =
                  amendedTimeInSeconds - originalTimeInSeconds;
                delay = delayInSeconds / 60;

                delayCause = stop.cause;

                break;
              }
            }
          }
        }
      }
    }
  }

  if (correctedDateTime.length === 15) {
    hour = parseInt(correctedDateTime.slice(9, 11), 10);
    minute = parseInt(correctedDateTime.slice(11, 13), 10);
  } else if (correctedDateTime.length === 6) {
    hour = parseInt(correctedDateTime.slice(0, 2), 10);
    minute = parseInt(correctedDateTime.slice(2, 4), 10);
  }

  hour += Math.floor(delayToAdd / 60);
  minute += delayToAdd % 60;

  if (minute >= 60) {
    minute -= 60;
    hour += 1;
  }

  const formattedTime = `${padZero(hour)}:${padZero(minute)}`;

  let hourWithoutDelay = hour;
  let minuteWithoutDelay = minute;

  hourWithoutDelay -= Math.floor(delay / 60);
  minuteWithoutDelay -= delay % 60;

  hourWithoutDelay -= Math.floor(delayToAdd / 60);
  minuteWithoutDelay -= delayToAdd % 60;

  if (minuteWithoutDelay < 0) {
    minuteWithoutDelay += 60;
    hourWithoutDelay -= 1;
  }

  const formattedTimeWithoutDelay = `${padZero(hourWithoutDelay)}:${padZero(
    minuteWithoutDelay
  )}`;

  return { formattedTime, formattedTimeWithoutDelay, delay, delayCause };
}

function padZero(number) {
  return number < 10 ? `0${number}` : `${number}`;
}

function secondsToMinutes(seconds) {
  const minutes = Math.floor(seconds / 60);
  return minutes;
}

function fetchTrainDepartures(apiUrl, stationName, first = false) {
  const insertPos = first ? "afterbegin" : "beforeend";
  scheduleContainer.insertAdjacentHTML(
    insertPos,
    `<div class="schedule-item placeholder-item">
      <div class="schedule-header placeholder-header">
          <div class="departure-info">
              <div class="departure-time loading-placeholder"><span>12:00</span></div>
              <div class="departure-direction">
                  <span class="departure-station loading-placeholder">Strasbourg</span>
                  <div class="departure-arrow loading-placeholder"></div>
                  <span class="departure-station loading-placeholder">Paris Est</span>
              </div>
              <div class="train-info loading-placeholder"></div>
          </div>
          <span class="train-code loading-placeholder">TGV INOUI 2239</span>
      </div>
      <div class="time-block placeholder-time-block">
          <div class="loading-placeholder">Part dans : 10:00 minutes</div>
          <div class="sncf-logo loading-placeholder"></div>
      </div>
  </div>
  <div class="schedule-item placeholder-item">
      <div class="schedule-header placeholder-header">
          <div class="departure-info">
              <div class="departure-time loading-placeholder"><span>12:00</span></div>
              <div class="departure-direction">
                  <span class="departure-station loading-placeholder">Strasbourg</span>
                  <div class="departure-arrow loading-placeholder"></div>
                  <span class="departure-station loading-placeholder">Paris Est</span>
              </div>
              <div class="train-info loading-placeholder"></div>
          </div>
          <span class="train-code loading-placeholder">TGV INOUI 2239</span>
      </div>
      <div class="time-block placeholder-time-block">
          <div class="loading-placeholder">Part dans : 10:00 minutes</div>
          <div class="sncf-logo loading-placeholder"></div>
      </div>
  </div>
  <div class="schedule-item placeholder-item">
      <div class="schedule-header placeholder-header">
          <div class="departure-info">
              <div class="departure-time loading-placeholder"><span>12:00</span></div>
              <div class="departure-direction">
                  <span class="departure-station loading-placeholder">Strasbourg</span>
                  <div class="departure-arrow loading-placeholder"></div>
                  <span class="departure-station loading-placeholder">Paris Est</span>
              </div>
              <div class="train-info loading-placeholder"></div>
          </div>
          <span class="train-code loading-placeholder">TGV INOUI 2239</span>
      </div>
      <div class="time-block placeholder-time-block">
          <div class="loading-placeholder">Part dans : 10:00 minutes</div>
          <div class="sncf-logo loading-placeholder"></div>
      </div>
  </div>
  <div class="schedule-item placeholder-item">
      <div class="schedule-header placeholder-header">
          <div class="departure-info">
              <div class="departure-time loading-placeholder"><span>12:00</span></div>
              <div class="departure-direction">
                  <span class="departure-station loading-placeholder">Strasbourg</span>
                  <div class="departure-arrow loading-placeholder"></div>
                  <span class="departure-station loading-placeholder">Paris Est</span>
              </div>
              <div class="train-info loading-placeholder"></div>
          </div>
          <span class="train-code loading-placeholder">TGV INOUI 2239</span>
      </div>
      <div class="time-block placeholder-time-block">
          <div class="loading-placeholder">Part dans : 10:00 minutes</div>
          <div class="sncf-logo loading-placeholder"></div>
      </div>
  </div>
  <div class="schedule-item placeholder-item">
      <div class="schedule-header placeholder-header">
          <div class="departure-info">
              <div class="departure-time loading-placeholder"><span>12:00</span></div>
              <div class="departure-direction">
                  <span class="departure-station loading-placeholder">Strasbourg</span>
                  <div class="departure-arrow loading-placeholder"></div>
                  <span class="departure-station loading-placeholder">Paris Est</span>
              </div>
              <div class="train-info loading-placeholder"></div>
          </div>
          <span class="train-code loading-placeholder">TGV INOUI 2239</span>
      </div>
      <div class="time-block placeholder-time-block">
          <div class="loading-placeholder">Part dans : 10:00 minutes</div>
          <div class="sncf-logo loading-placeholder"></div>
      </div>
  </div>
  <div class="schedule-item placeholder-item">
      <div class="schedule-header placeholder-header">
          <div class="departure-info">
              <div class="departure-time loading-placeholder"><span>12:00</span></div>
              <div class="departure-direction">
                  <span class="departure-station loading-placeholder">Strasbourg</span>
                  <div class="departure-arrow loading-placeholder"></div>
                  <span class="departure-station loading-placeholder">Paris Est</span>
              </div>
              <div class="train-info loading-placeholder"></div>
          </div>
          <span class="train-code loading-placeholder">TGV INOUI 2239</span>
      </div>
      <div class="time-block placeholder-time-block">
          <div class="loading-placeholder">Part dans : 10:00 minutes</div>
          <div class="sncf-logo loading-placeholder"></div>
      </div>
  </div>
  <div class="schedule-item placeholder-item">
      <div class="schedule-header placeholder-header">
          <div class="departure-info">
              <div class="departure-time loading-placeholder"><span>12:00</span></div>
              <div class="departure-direction">
                  <span class="departure-station loading-placeholder">Strasbourg</span>
                  <div class="departure-arrow loading-placeholder"></div>
                  <span class="departure-station loading-placeholder">Paris Est</span>
              </div>
              <div class="train-info loading-placeholder"></div>
          </div>
          <span class="train-code loading-placeholder">TGV INOUI 2239</span>
      </div>
      <div class="time-block placeholder-time-block">
          <div class="loading-placeholder">Part dans : 10:00 minutes</div>
          <div class="sncf-logo loading-placeholder"></div>
      </div>
  </div>
  <div class="schedule-item placeholder-item">
      <div class="schedule-header placeholder-header">
          <div class="departure-info">
              <div class="departure-time loading-placeholder"><span>12:00</span></div>
              <div class="departure-direction">
                  <span class="departure-station loading-placeholder">Strasbourg</span>
                  <div class="departure-arrow loading-placeholder"></div>
                  <span class="departure-station loading-placeholder">Paris Est</span>
              </div>
              <div class="train-info loading-placeholder"></div>
          </div>
          <span class="train-code loading-placeholder">TGV INOUI 2239</span>
      </div>
      <div class="time-block placeholder-time-block">
          <div class="loading-placeholder">Part dans : 10:00 minutes</div>
          <div class="sncf-logo loading-placeholder"></div>
      </div>
  </div>
  <div class="schedule-item placeholder-item">
      <div class="schedule-header placeholder-header">
          <div class="departure-info">
              <div class="departure-time loading-placeholder"><span>12:00</span></div>
              <div class="departure-direction">
                  <span class="departure-station loading-placeholder">Strasbourg</span>
                  <div class="departure-arrow loading-placeholder"></div>
                  <span class="departure-station loading-placeholder">Paris Est</span>
              </div>
              <div class="train-info loading-placeholder"></div>
          </div>
          <span class="train-code loading-placeholder">TGV INOUI 2239</span>
      </div>
      <div class="time-block placeholder-time-block">
          <div class="loading-placeholder">Part dans : 10:00 minutes</div>
          <div class="sncf-logo loading-placeholder"></div>
      </div>
  </div>
  <div class="schedule-item placeholder-item">
      <div class="schedule-header placeholder-header">
          <div class="departure-info">
              <div class="departure-time loading-placeholder"><span>12:00</span></div>
              <div class="departure-direction">
                  <span class="departure-station loading-placeholder">Strasbourg</span>
                  <div class="departure-arrow loading-placeholder"></div>
                  <span class="departure-station loading-placeholder">Paris Est</span>
              </div>
              <div class="train-info loading-placeholder"></div>
          </div>
          <span class="train-code loading-placeholder">TGV INOUI 2239</span>
      </div>
      <div class="time-block placeholder-time-block">
          <div class="loading-placeholder">Part dans : 10:00 minutes</div>
          <div class="sncf-logo loading-placeholder"></div>
      </div>
  </div>`
  );
  fetch(apiUrl, { method: "GET", headers: { Authorization: apiKey } })
    .then(handleResponse)
    .then((data) => {
      if (first) {
        scheduleContainer.innerHTML = "";
      } else {
        scheduleContainer
          .querySelectorAll(".placeholder-item")
          .forEach(function (item) {
            item.remove();
          });
      }
      displayDepartures(data.departures, stationName);
      moreDeparturesButton.style.display =
        data.departures.length > 0 ? "block" : "none";
    })
    .catch(handleError);
}

function fetchJourneys(apiUrl, fromName, toName, first = false) {
  const insertPos = first ? "afterbegin" : "beforeend";
  scheduleContainer.insertAdjacentHTML(
    insertPos,
    `<div class="schedule-item placeholder-item">
      <div class="schedule-header placeholder-journey-header">
          <div class="departure-info">
              <div class="departure-time loading-placeholder"><span>12:00</span></div>
              <div class="departure-direction">
                  <span class="departure-station loading-placeholder">Strasbourg</span>
                  <div class="departure-arrow loading-placeholder"></div>
                  <span class="departure-station loading-placeholder">Paris Est</span>
              </div>
              <div class="departure-time loading-placeholder"><span>14:00</span></div>
              <div class="train-info loading-placeholder"></div>
          </div>
          <span class="train-code loading-placeholder">TGV INOUI 2239</span>
      </div>
      <div class="time-block placeholder-journey-time-block">
          <div class="loading-placeholder">Part dans : 10:00 minutes</div>
          <div class="sncf-logo loading-placeholder"></div>
      </div>
  </div>
  <div class="schedule-item placeholder-item">
      <div class="schedule-header placeholder-journey-header">
          <div class="departure-info">
              <div class="departure-time loading-placeholder"><span>12:00</span></div>
              <div class="departure-direction">
                  <span class="departure-station loading-placeholder">Strasbourg</span>
                  <div class="departure-arrow loading-placeholder"></div>
                  <span class="departure-station loading-placeholder">Paris Est</span>
              </div>
              <div class="departure-time loading-placeholder"><span>14:00</span></div>
              <div class="train-info loading-placeholder"></div>
          </div>
          <span class="train-code loading-placeholder">TGV INOUI 2239</span>
      </div>
      <div class="time-block placeholder-journey-time-block">
          <div class="loading-placeholder">Part dans : 10:00 minutes</div>
          <div class="sncf-logo loading-placeholder"></div>
      </div>
  </div>
  <div class="schedule-item placeholder-item">
      <div class="schedule-header placeholder-journey-header">
          <div class="departure-info">
              <div class="departure-time loading-placeholder"><span>12:00</span></div>
              <div class="departure-direction">
                  <span class="departure-station loading-placeholder">Strasbourg</span>
                  <div class="departure-arrow loading-placeholder"></div>
                  <span class="departure-station loading-placeholder">Paris Est</span>
              </div>
              <div class="departure-time loading-placeholder"><span>14:00</span></div>
              <div class="train-info loading-placeholder"></div>
          </div>
          <span class="train-code loading-placeholder">TGV INOUI 2239</span>
      </div>
      <div class="time-block placeholder-journey-time-block">
          <div class="loading-placeholder">Part dans : 10:00 minutes</div>
          <div class="sncf-logo loading-placeholder"></div>
      </div>
  </div>
  <div class="schedule-item placeholder-item">
      <div class="schedule-header placeholder-journey-header">
          <div class="departure-info">
              <div class="departure-time loading-placeholder"><span>12:00</span></div>
              <div class="departure-direction">
                  <span class="departure-station loading-placeholder">Strasbourg</span>
                  <div class="departure-arrow loading-placeholder"></div>
                  <span class="departure-station loading-placeholder">Paris Est</span>
              </div>
              <div class="departure-time loading-placeholder"><span>14:00</span></div>
              <div class="train-info loading-placeholder"></div>
          </div>
          <span class="train-code loading-placeholder">TGV INOUI 2239</span>
      </div>
      <div class="time-block placeholder-journey-time-block">
          <div class="loading-placeholder">Part dans : 10:00 minutes</div>
          <div class="sncf-logo loading-placeholder"></div>
      </div>
  </div>
  <div class="schedule-item placeholder-item">
      <div class="schedule-header placeholder-journey-header">
          <div class="departure-info">
              <div class="departure-time loading-placeholder"><span>12:00</span></div>
              <div class="departure-direction">
                  <span class="departure-station loading-placeholder">Strasbourg</span>
                  <div class="departure-arrow loading-placeholder"></div>
                  <span class="departure-station loading-placeholder">Paris Est</span>
              </div>
              <div class="departure-time loading-placeholder"><span>14:00</span></div>
              <div class="train-info loading-placeholder"></div>
          </div>
          <span class="train-code loading-placeholder">TGV INOUI 2239</span>
      </div>
      <div class="time-block placeholder-journey-time-block">
          <div class="loading-placeholder">Part dans : 10:00 minutes</div>
          <div class="sncf-logo loading-placeholder"></div>
      </div>
  </div>
  <div class="schedule-item placeholder-item">
      <div class="schedule-header placeholder-journey-header">
          <div class="departure-info">
              <div class="departure-time loading-placeholder"><span>12:00</span></div>
              <div class="departure-direction">
                  <span class="departure-station loading-placeholder">Strasbourg</span>
                  <div class="departure-arrow loading-placeholder"></div>
                  <span class="departure-station loading-placeholder">Paris Est</span>
              </div>
              <div class="departure-time loading-placeholder"><span>14:00</span></div>
              <div class="train-info loading-placeholder"></div>
          </div>
          <span class="train-code loading-placeholder">TGV INOUI 2239</span>
      </div>
      <div class="time-block placeholder-journey-time-block">
          <div class="loading-placeholder">Part dans : 10:00 minutes</div>
          <div class="sncf-logo loading-placeholder"></div>
      </div>
  </div>
  <div class="schedule-item placeholder-item">
      <div class="schedule-header placeholder-journey-header">
          <div class="departure-info">
              <div class="departure-time loading-placeholder"><span>12:00</span></div>
              <div class="departure-direction">
                  <span class="departure-station loading-placeholder">Strasbourg</span>
                  <div class="departure-arrow loading-placeholder"></div>
                  <span class="departure-station loading-placeholder">Paris Est</span>
              </div>
              <div class="departure-time loading-placeholder"><span>14:00</span></div>
              <div class="train-info loading-placeholder"></div>
          </div>
          <span class="train-code loading-placeholder">TGV INOUI 2239</span>
      </div>
      <div class="time-block placeholder-journey-time-block">
          <div class="loading-placeholder">Part dans : 10:00 minutes</div>
          <div class="sncf-logo loading-placeholder"></div>
      </div>
  </div>
  <div class="schedule-item placeholder-item">
      <div class="schedule-header placeholder-journey-header">
          <div class="departure-info">
              <div class="departure-time loading-placeholder"><span>12:00</span></div>
              <div class="departure-direction">
                  <span class="departure-station loading-placeholder">Strasbourg</span>
                  <div class="departure-arrow loading-placeholder"></div>
                  <span class="departure-station loading-placeholder">Paris Est</span>
              </div>
              <div class="departure-time loading-placeholder"><span>14:00</span></div>
              <div class="train-info loading-placeholder"></div>
          </div>
          <span class="train-code loading-placeholder">TGV INOUI 2239</span>
      </div>
      <div class="time-block placeholder-journey-time-block">
          <div class="loading-placeholder">Part dans : 10:00 minutes</div>
          <div class="sncf-logo loading-placeholder"></div>
      </div>
  </div>
  <div class="schedule-item placeholder-item">
      <div class="schedule-header placeholder-journey-header">
          <div class="departure-info">
              <div class="departure-time loading-placeholder"><span>12:00</span></div>
              <div class="departure-direction">
                  <span class="departure-station loading-placeholder">Strasbourg</span>
                  <div class="departure-arrow loading-placeholder"></div>
                  <span class="departure-station loading-placeholder">Paris Est</span>
              </div>
              <div class="departure-time loading-placeholder"><span>14:00</span></div>
              <div class="train-info loading-placeholder"></div>
          </div>
          <span class="train-code loading-placeholder">TGV INOUI 2239</span>
      </div>
      <div class="time-block placeholder-journey-time-block">
          <div class="loading-placeholder">Part dans : 10:00 minutes</div>
          <div class="sncf-logo loading-placeholder"></div>
      </div>
  </div>
  <div class="schedule-item placeholder-item">
      <div class="schedule-header placeholder-journey-header">
          <div class="departure-info">
              <div class="departure-time loading-placeholder"><span>12:00</span></div>
              <div class="departure-direction">
                  <span class="departure-station loading-placeholder">Strasbourg</span>
                  <div class="departure-arrow loading-placeholder"></div>
                  <span class="departure-station loading-placeholder">Paris Est</span>
              </div>
              <div class="departure-time loading-placeholder"><span>14:00</span></div>
              <div class="train-info loading-placeholder"></div>
          </div>
          <span class="train-code loading-placeholder">TGV INOUI 2239</span>
      </div>
      <div class="time-block placeholder-journey-time-block">
          <div class="loading-placeholder">Part dans : 10:00 minutes</div>
          <div class="sncf-logo loading-placeholder"></div>
      </div>
  </div>`
  );
  fetch(apiUrl, { method: "GET", headers: { Authorization: apiKey } })
    .then(handleResponse)
    .then((data) => {
      if (first) {
        scheduleContainer.innerHTML = "";
      } else {
        scheduleContainer
          .querySelectorAll(".placeholder-item")
          .forEach(function (item) {
            item.remove();
          });
      }
      const disruptions = data.disruptions;
      const journeys = data.journeys;
      displayJourneys(journeys, disruptions, fromName, toName);
      moreDeparturesButton.style.display =
        data.journeys.length > 0 ? "block" : "none";
    })
    .catch(handleError);
}

function handleResponse(response) {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}

function handleError(error) {
  showToast(
    "<strong>Erreur:</strong> Une erreur inattendue s'est produite.",
    "danger"
  );
  console.error("Error:", error);
}

function addDelayToDateTime(dateTime, delayInMinutes) {
  const year = parseInt(dateTime.slice(0, 4), 10);
  const month = parseInt(dateTime.slice(4, 6), 10) - 1;
  const day = parseInt(dateTime.slice(6, 8), 10);
  const hours = parseInt(dateTime.slice(9, 11), 10);
  const minutes = parseInt(dateTime.slice(11, 13), 10);
  const seconds = parseInt(dateTime.slice(13, 15), 10);

  const originalDateTime = new Date(year, month, day, hours, minutes, seconds);
  const delayedDateTime = new Date(
    originalDateTime.getTime() + delayInMinutes * 60000
  );

  const formatResult = (date) => {
    const pad = (num) => num.toString().padStart(2, "0");
    return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(
      date.getDate()
    )}T${pad(date.getHours())}${pad(date.getMinutes())}${pad(
      date.getSeconds()
    )}`;
  };

  return formatResult(delayedDateTime);
}

function updateTrainCode(departure, trainCodeElement) {
  const baseDepartureTime = parseAndFormatDateTime(
    departure.stop_date_time.base_departure_date_time
  );
  const realDepartureTime = parseAndFormatDateTime(
    departure.stop_date_time.departure_date_time
  );

  if (
    trainCodeElement.textContent === "À l'heure" ||
    trainCodeElement.textContent.includes("Retardé")
  ) {
    trainCodeElement.textContent = `${departure.display_informations.network} ${departure.display_informations.headsign}`;
  } else {
    const delayMinutes =
      realDepartureTime > baseDepartureTime
        ? calculateDelayInMinutes(realDepartureTime, baseDepartureTime)
        : 0;
    trainCodeElement.textContent =
      delayMinutes > 0 ? `Retardé de ${delayMinutes} minutes` : "À l'heure";
  }
}

function updateJourneyTrainCode(trainCodeElement, trainName, trainStatus) {
  if (
    trainCodeElement.textContent === "À l'heure" ||
    trainCodeElement.textContent.includes("Retardé")
  ) {
    trainCodeElement.textContent = trainName;
  } else {
    trainCodeElement.innerHTML = trainStatus;
  }
}

function displayDepartures(departures, stationName) {
  departures.forEach((departure) => {
    const displayInfo = departure.display_informations;
    const stopDateTime = departure.stop_date_time;
    const trainId = departure.links[1].id;
    const trainHeadSign = departure.display_informations.headsign;
    const trainName =
      departure.display_informations.network +
      " N°" +
      departure.display_informations.headsign;
    let isDelayed = false;
    const baseDepartureTime = parseAndFormatDateTime(
      stopDateTime.base_departure_date_time
    );
    const realDepartureTime = parseAndFormatDateTime(
      stopDateTime.departure_date_time
    );

    const scheduleItem = document.createElement("div");
    scheduleItem.classList.add("schedule-item");

    const scheduleHeader = document.createElement("div");
    scheduleHeader.classList.add("schedule-header");

    const departureInfo = document.createElement("div");
    departureInfo.classList.add("departure-info");

    const departureTimeBase = document.createElement("div");
    departureTimeBase.classList.add("departure-time");

    const departureDirection = document.createElement("div");
    departureDirection.classList.add("departure-direction");

    const delayedInfo = document.createElement("div");
    delayedInfo.classList.add("delayed-info");

    const realDepartureTimeEl = document.createElement("span");
    realDepartureTimeEl.textContent = realDepartureTime;

    if (realDepartureTime > baseDepartureTime) {
      isDelayed = true;
      const delayedSpan = document.createElement("span");
      delayedSpan.classList.add("delayed");
      delayedSpan.textContent = baseDepartureTime;
      departureTimeBase.appendChild(delayedInfo);
      delayedInfo.appendChild(delayedSpan);
      delayedInfo.appendChild(realDepartureTimeEl);
    } else {
      departureTimeBase.appendChild(realDepartureTimeEl);
    }

    const departureStation = document.createElement("span");
    departureStation.classList.add("departure-station");
    departureStation.textContent = stationName;

    const arrivalStation = document.createElement("span");
    arrivalStation.classList.add("departure-station");
    arrivalStation.textContent = displayInfo.direction.split(" (")[0];

    departureDirection.appendChild(departureStation);

    departureInfo.appendChild(departureTimeBase);

    var svgArrow = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    svgArrow.setAttribute("class", "departure-arrow");
    svgArrow.setAttribute("viewBox", "0 0 24 24");
    svgArrow.setAttribute("width", "24px");
    svgArrow.setAttribute("height", "24px");
    svgArrow.setAttribute("stroke", "none");
    svgArrow.setAttribute("fill", "currentColor");
    svgArrow.setAttribute("fill-rule", "evenodd");

    var pathElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    pathElement.setAttribute(
      "d",
      "M6.5,12.6 L10,16.2 L10,3 C10,1.9 10.9,1 12,1 C13.1,1 14,1.9 14,3 L14,16.2 L17.5,12.7 C17.9,12.3 18.4,12 19,12 C20.1,12 21,12.9 21,14 C21,14.5 20.8,15 20.5,15.3 L13.6,22.2 C13.1,22.8 12.6,23 12,23 C11.4,23 10.9,22.7 10.5,22.3 L3.7,15.5 C3.3,15.2 3,14.6 3,14 C3,12.9 3.9,12 5,12 C5.5,12 6,12.2 6.3,12.5 L6.5,12.6 C6.4,12.6 6.4,12.6 6.5,12.6"
    );

    svgArrow.appendChild(pathElement);

    departureDirection.appendChild(svgArrow);

    departureDirection.appendChild(arrivalStation);

    departureInfo.appendChild(departureDirection);

    scheduleHeader.appendChild(departureInfo);

    const trainCode = document.createElement("span");
    trainCode.classList.add("train-code");
    trainCode.textContent = trainName;

    scheduleHeader.appendChild(trainCode);

    setInterval(() => {
      updateTrainCode(departure, trainCode);
    }, 2000);

    const timeBlock = document.createElement("div");
    timeBlock.classList.add("time-block");

    const timeLeft = document.createElement("div");
    timeLeft.classList.add("time-left");
    timeLeft.textContent = "Part dans : ...";

    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const departureTimeFormatted = stopDateTime.departure_date_time.replace(
        /(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})/,
        "$1-$2-$3T$4:$5:$6"
      );
      const departureTimeMillis = Date.parse(departureTimeFormatted);
      const timeUntilDeparture = departureTimeMillis - now;

      if (timeUntilDeparture >= 0) {
        timeLeft.textContent =
          "Part dans : " + formatCountdown(timeUntilDeparture - 1000);

        if (timeUntilDeparture <= 0) {
          clearInterval(countdownInterval);
        }
      } else {
        timeLeft.textContent = "Le train est parti.";
        clearInterval(countdownInterval);
      }
    }, 1000);

    var svgSncf = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgSncf.setAttribute("data-testid", "SNCF");
    svgSncf.setAttribute("class", "icons1");
    svgSncf.setAttribute("viewBox", "0 0 32 18");
    svgSncf.setAttribute("width", "32px");
    svgSncf.setAttribute("height", "18px");
    svgSncf.setAttribute("role", "img");
    svgSncf.setAttribute("id", "SNCF");

    var titleElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "title"
    );
    titleElement.textContent = "SNCF";
    svgSncf.appendChild(titleElement);

    var descElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "desc"
    );
    descElement.textContent = "SNCF";
    svgSncf.appendChild(descElement);

    var pathElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    pathElement.setAttribute("fill-rule", "evenodd");
    pathElement.setAttribute("clip-rule", "evenodd");
    pathElement.setAttribute(
      "d",
      "M0 1.54469C0 1.20918 0.220729 1.0523 0.560312 1.03803C1.08259 1.01698 1.78213 1 2.62905 1C8.53577 1 21.5404 1.80957 30.2372 7.38213C30.5102 7.556 30.5754 7.71832 30.4749 8.0382C30.4273 8.19102 27.7209 16.6609 27.7209 16.6609C27.6081 16.9774 27.4166 16.9991 27.1769 16.9991H0.474737C0.186771 16.9991 0 16.7635 0 16.5027V1.54469ZM16.7274 13.2793C17.2232 13.8593 18.0993 14.1195 19.1935 14.1195C19.7015 14.1195 20.1878 14.0706 20.581 13.9714L22.4351 8.17607H27.897L27.5581 9.25052H23.6699L23.1068 11.0075H26.3702L26.0381 12.0439H22.7754L21.9258 14.7198C21.5998 14.8944 20.2896 15.2747 18.8403 15.2747C16.5984 15.2747 15.0166 14.2057 14.7701 12.6151C14.7667 12.5913 14.7483 12.5839 14.7198 12.5839C14.6926 12.5839 14.675 12.5893 14.6662 12.6151L13.8552 15.1484H12.2157C11.6805 13.1489 10.6822 11.2554 9.67631 9.81626L8.6793 12.9085C8.67183 12.933 8.65824 12.9397 8.6304 12.9397C8.60255 12.9397 8.58421 12.9343 8.57539 12.9085C8.42529 12.4698 8.24327 12.1614 7.6687 11.7342L8.81174 8.17607H10.3405C11.5882 9.72458 12.6083 11.6215 13.1041 13.064L14.6621 8.17607H16.0856L15.5986 9.70352C15.5905 9.73001 15.6109 9.73544 15.6408 9.73544L15.6419 9.73544C15.661 9.73546 15.6916 9.73548 15.7216 9.70352C16.6935 8.65692 18.1931 8.06333 19.9175 8.06333C20.4744 8.06333 21.0422 8.0939 21.5108 8.16589L21.1264 9.29262C20.7474 9.2444 20.3256 9.2186 19.9161 9.2186C17.9717 9.2186 16.5182 10.1626 16.2982 11.6561C16.2058 12.2823 16.3539 12.844 16.7274 13.2793ZM7.52109 9.24576C7.15366 9.16087 6.83242 9.10314 6.38077 9.09227C5.48767 9.0719 4.5022 9.28583 4.31203 9.84954C4.16908 10.2724 4.68018 10.5147 5.48283 10.8952L5.48317 10.8953C5.58421 10.9432 5.68986 10.9933 5.7994 11.0462L5.86795 11.0793C7.10705 11.6771 8.59838 12.3966 7.98157 13.6929C7.45046 14.8081 6.12405 15.3236 4.07568 15.2768C2.98494 15.2516 1.70675 14.8604 1.08667 14.5725L1.58789 13.4885C2.43074 13.913 3.50042 14.1589 4.35821 14.1792C5.34844 14.2016 6.02964 13.9925 6.23747 13.5517C6.50506 12.9832 5.74439 12.5492 4.78201 12.0928C3.5697 11.5183 2.17062 10.8207 2.66369 9.58059C3.08002 8.53467 4.69847 8.04092 6.48876 8.08235C7.04567 8.09525 7.37915 8.1394 7.84573 8.22497L7.52109 9.24576Z"
    );
    pathElement.setAttribute("fill", "url(#paint0_linear_16_4013)");
    svgSncf.appendChild(pathElement);

    var linearGradientElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "linearGradient"
    );
    linearGradientElement.setAttribute("id", "paint0_linear_16_4013");
    linearGradientElement.setAttribute("x1", "-0.0000747083");
    linearGradientElement.setAttribute("y1", "25.9233");
    linearGradientElement.setAttribute("x2", "30.4809");
    linearGradientElement.setAttribute("y2", "25.9233");
    linearGradientElement.setAttribute("gradientUnits", "userSpaceOnUse");

    var stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop1.setAttribute("stop-color", "#7C2270");
    linearGradientElement.appendChild(stop1);

    var stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop2.setAttribute("offset", "0.247191");
    stop2.setAttribute("stop-color", "#AA147E");
    linearGradientElement.appendChild(stop2);

    var stop3 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop3.setAttribute("offset", "0.814607");
    stop3.setAttribute("stop-color", "#E41D25");
    linearGradientElement.appendChild(stop3);

    var stop4 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop4.setAttribute("offset", "1");
    stop4.setAttribute("stop-color", "#E41D25");
    linearGradientElement.appendChild(stop4);

    var defsElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "defs"
    );
    defsElement.appendChild(linearGradientElement);
    svgSncf.appendChild(defsElement);

    timeBlock.appendChild(timeLeft);

    const hiddenInput = document.createElement("input");
    hiddenInput.type = "hidden";
    hiddenInput.value = trainId;

    timeBlock.appendChild(svgSncf);

    scheduleItem.appendChild(scheduleHeader);
    scheduleItem.appendChild(timeBlock);

    scheduleContainer.appendChild(scheduleItem);

    departureInfo.innerHTML += `<a title="Plus d'infos" href="#${trainHeadSign}" id="trainLink_${trainHeadSign}"><svg class="train-info" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#2196f3" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"/><path fill="#fff" d="M22 22h4v11h-4V22zM26.5 16.5c0 1.379-1.121 2.5-2.5 2.5s-2.5-1.121-2.5-2.5S22.621 14 24 14 26.5 15.121 26.5 16.5z"/></svg></a>`;

    let stopsHTML;
    let trainStopsModal;
    let trainStatus;
    document
      .getElementById(`trainLink_${trainHeadSign}`)
      .addEventListener("click", () => {
        if (!document.getElementById(trainHeadSign)) {
          fetchTrainStops(trainId)
            .then((trainStops) => {
              const departureIndex = trainStops.findIndex(
                (stop) => stop.name === stationName
              );
              const arrivalIndex = trainStops.findIndex(
                (stop) => stop.name === displayInfo.direction.split(" (")[0]
              );

              const filteredStops = trainStops.slice(
                departureIndex + 1,
                arrivalIndex
              );
              stopsHTML = filteredStops
                .map((stop) => {
                  return `
            <div class="step">
              <p class="step-title">
                <strong>${stop.name}</strong>
              </p>
            </div>
          `;
                })
                .join("");

              trainStopsModal = document.createElement("a");
              trainStopsModal.href = "#close";
              trainStatus = isDelayed
                ? `Retardé de ${delayMinutes} minutes`
                : "À l'heure ✅";
              trainStopsModal.innerHTML = `
          <div id="${trainHeadSign}" class="modal-window">
            <div>
              <a href="#close" title="Fermer" class="modal-close">&times;</a>
              <h1>${trainName}</h1>
              <p>Statut: ${trainStatus}</p>
              <div class="path-container">
                <div class="path">
                  <div class="step">
                    <p class="step-title">
                      <strong>${stationName}</strong>
                    </p>
                  </div>
                  ${stopsHTML}
                  <div class="step">
                    <p class="step-title">
                      <strong>${displayInfo.direction.split(" (")[0]}</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>`;

              scheduleItem.appendChild(trainStopsModal);
              window.location = `#${trainHeadSign}`;
            })
            .catch((error) => {
              showToast(
                "<strong>Erreur</strong>: Impossible de récupérer les arrêts du train.",
                "danger"
              );
            });
        }
      });
  });
  const lastTrainDeparture =
    departures[departures.length - 1].stop_date_time.departure_date_time;
  const hiddenInput = document.getElementById("lastTrainDepartureInput");
  if (hiddenInput) {
    hiddenInput.value = lastTrainDeparture;
  }
}

function displayJourneys(journeys, disruptions, from, to) {
  journeys.forEach((journey, index) => {
    const departureDateTime = journey.departure_date_time;
    const arrivalDateTime = journey.arrival_date_time;
    const isCancelled = journey.status == "NO_SERVICE";
    const trainHeadSign = journey.sections[1].display_informations.headsign;
    const trainNetwork = journey.sections[1].display_informations.network;
    const trainDuration = formatDuration(journey.duration);

    const scheduleItem = document.createElement("div");
    scheduleItem.classList.add("schedule-item");

    const scheduleHeader = document.createElement("div");
    scheduleHeader.classList.add("schedule-header");

    const departureInfo = document.createElement("div");
    departureInfo.classList.add("departure-info");
    departureInfo.classList.add("journey");

    const departureTimeBase = document.createElement("div");
    departureTimeBase.classList.add("departure-time");

    const arrivalTimeBase = document.createElement("div");
    arrivalTimeBase.classList.add("departure-time");

    const departureDirection = document.createElement("div");
    departureDirection.classList.add("journey-direction");

    const departureDelayedInfo = document.createElement("div");
    departureDelayedInfo.classList.add("delayed-info");

    const arrivalDelayedInfo = document.createElement("div");
    arrivalDelayedInfo.classList.add("delayed-info");

    const realDepartureTimeEl = document.createElement("span");
    const realArrivalTimeEl = document.createElement("span");
    if (isCancelled) {
      realDepartureTimeEl.classList.add("delayed");
      realArrivalTimeEl.classList.add("delayed");
    }

    const departureTimeJourney = parseAndFormatDateTimeJourney(
      departureDateTime,
      disruptions,
      true
    );

    let isDelayed = departureTimeJourney["delay"] > 0 ? true : false;

    realDepartureTimeEl.textContent = departureTimeJourney["formattedTime"];

    if (isDelayed) {
      const delayedSpan = document.createElement("span");
      delayedSpan.classList.add("delayed");
      delayedSpan.textContent =
        departureTimeJourney["formattedTimeWithoutDelay"];
      departureTimeBase.appendChild(departureDelayedInfo);
      departureDelayedInfo.appendChild(delayedSpan);
      departureDelayedInfo.appendChild(realDepartureTimeEl);
    } else {
      departureTimeBase.appendChild(realDepartureTimeEl);
    }

    const arrivalTimeJourney = parseAndFormatDateTimeJourney(
      arrivalDateTime,
      disruptions,
      false,
      departureTimeJourney["delay"]
    );

    realArrivalTimeEl.textContent = arrivalTimeJourney["formattedTime"];

    if (isDelayed) {
      const delayedSpan = document.createElement("span");
      delayedSpan.classList.add("delayed");
      delayedSpan.textContent = arrivalTimeJourney["formattedTimeWithoutDelay"];
      arrivalTimeBase.appendChild(arrivalDelayedInfo);
      arrivalDelayedInfo.appendChild(delayedSpan);
      arrivalDelayedInfo.appendChild(realArrivalTimeEl);
    } else {
      arrivalTimeBase.appendChild(realArrivalTimeEl);
    }

    const departureStation = document.createElement("span");
    departureStation.classList.add("departure-station");
    departureStation.textContent = from;

    const arrivalStation = document.createElement("span");
    arrivalStation.classList.add("departure-station");
    arrivalStation.textContent = to;

    departureDirection.appendChild(departureStation);

    departureInfo.appendChild(departureTimeBase);
    departureInfo.appendChild(departureDirection);
    departureInfo.appendChild(arrivalTimeBase);

    var svgArrow = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    svgArrow.setAttribute("class", "journey-arrow");
    svgArrow.setAttribute("viewBox", "0 0 24 24");
    svgArrow.setAttribute("width", "24px");
    svgArrow.setAttribute("height", "24px");
    svgArrow.setAttribute("stroke", "none");
    svgArrow.setAttribute("fill", "currentColor");
    svgArrow.setAttribute("fill-rule", "evenodd");

    var pathElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    pathElement.setAttribute(
      "d",
      "M6.5,12.6 L10,16.2 L10,3 C10,1.9 10.9,1 12,1 C13.1,1 14,1.9 14,3 L14,16.2 L17.5,12.7 C17.9,12.3 18.4,12 19,12 C20.1,12 21,12.9 21,14 C21,14.5 20.8,15 20.5,15.3 L13.6,22.2 C13.1,22.8 12.6,23 12,23 C11.4,23 10.9,22.7 10.5,22.3 L3.7,15.5 C3.3,15.2 3,14.6 3,14 C3,12.9 3.9,12 5,12 C5.5,12 6,12.2 6.3,12.5 L6.5,12.6 C6.4,12.6 6.4,12.6 6.5,12.6"
    );

    svgArrow.appendChild(pathElement);

    departureDirection.appendChild(svgArrow);

    departureDirection.appendChild(arrivalStation);

    scheduleHeader.appendChild(departureInfo);

    const trainCode = document.createElement("span");
    trainCode.classList.add("train-code");
    if (isCancelled) {
      trainCode.textContent = "Annulé";
    } else {
      const trainStatus =
        departureTimeJourney && departureTimeJourney.delay > 0
          ? "Retardé de " +
            departureTimeJourney.delay +
            ' minutes<br><span class="delay-cause">(' +
            departureTimeJourney.delayCause +
            ")</span>"
          : "À l'heure";
      trainCode.innerHTML = trainStatus;

      setInterval(() => {
        updateJourneyTrainCode(
          trainCode,
          `${trainNetwork} N°${trainHeadSign}`,
          trainStatus
        );
      }, 2000);
    }
    scheduleHeader.appendChild(trainCode);

    const timeBlock = document.createElement("div");
    timeBlock.classList.add("time-block");

    const timeLeft = document.createElement("div");
    timeLeft.classList.add("time-left");
    if (isCancelled) {
      timeLeft.textContent = "Le train est annulé.";
    } else {
      timeLeft.innerHTML = trainDuration + "<span>Part dans : ...</span>";

      const countdownInterval = setInterval(() => {
        const now = new Date().getTime();

        const year = parseInt(departureDateTime.substring(0, 4));
        const month = parseInt(departureDateTime.substring(4, 6)) - 1;
        const day = parseInt(departureDateTime.substring(6, 8));
        const hours = parseInt(departureDateTime.substring(9, 11));
        const minutes = parseInt(departureDateTime.substring(11, 13));

        const correctDepartureDateTime = new Date(
          year,
          month,
          day,
          hours,
          minutes
        );

        const formattedHours = parseInt(
          departureTimeJourney["formattedTime"].substring(0, 2)
        );
        const formattedMinutes = parseInt(
          departureTimeJourney["formattedTime"].substring(3, 5)
        );

        correctDepartureDateTime.setHours(formattedHours);
        correctDepartureDateTime.setMinutes(formattedMinutes);

        const departureTimeMillis = Date.parse(correctDepartureDateTime);
        const timeUntilDeparture = departureTimeMillis - now;

        if (timeUntilDeparture >= 0) {
          timeLeft.innerHTML =
            trainDuration +
            "<span>Part dans : " +
            formatCountdown(timeUntilDeparture - 1000) +
            "</span>";

          if (timeUntilDeparture <= 0) {
            clearInterval(countdownInterval);
          }
        } else {
          timeLeft.textContent = "Le train est parti.";
          clearInterval(countdownInterval);
        }
      }, 1000);
    }

    var svgSncf = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgSncf.setAttribute("data-testid", "SNCF");
    svgSncf.setAttribute("class", "icons1");
    svgSncf.setAttribute("viewBox", "0 0 32 18");
    svgSncf.setAttribute("width", "32px");
    svgSncf.setAttribute("height", "18px");
    svgSncf.setAttribute("role", "img");
    svgSncf.setAttribute("id", "SNCF");

    var titleElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "title"
    );
    titleElement.textContent = "SNCF";
    svgSncf.appendChild(titleElement);

    var descElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "desc"
    );
    descElement.textContent = "SNCF";
    svgSncf.appendChild(descElement);

    var rectElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect"
    );
    rectElement.setAttribute("width", "100%");
    rectElement.setAttribute("height", "100%");
    rectElement.setAttribute("fill", "var(--background)");

    svgSncf.appendChild(rectElement);

    var pathElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    pathElement.setAttribute("fill-rule", "evenodd");
    pathElement.setAttribute("clip-rule", "evenodd");
    pathElement.setAttribute(
      "d",
      "M0 1.54469C0 1.20918 0.220729 1.0523 0.560312 1.03803C1.08259 1.01698 1.78213 1 2.62905 1C8.53577 1 21.5404 1.80957 30.2372 7.38213C30.5102 7.556 30.5754 7.71832 30.4749 8.0382C30.4273 8.19102 27.7209 16.6609 27.7209 16.6609C27.6081 16.9774 27.4166 16.9991 27.1769 16.9991H0.474737C0.186771 16.9991 0 16.7635 0 16.5027V1.54469ZM16.7274 13.2793C17.2232 13.8593 18.0993 14.1195 19.1935 14.1195C19.7015 14.1195 20.1878 14.0706 20.581 13.9714L22.4351 8.17607H27.897L27.5581 9.25052H23.6699L23.1068 11.0075H26.3702L26.0381 12.0439H22.7754L21.9258 14.7198C21.5998 14.8944 20.2896 15.2747 18.8403 15.2747C16.5984 15.2747 15.0166 14.2057 14.7701 12.6151C14.7667 12.5913 14.7483 12.5839 14.7198 12.5839C14.6926 12.5839 14.675 12.5893 14.6662 12.6151L13.8552 15.1484H12.2157C11.6805 13.1489 10.6822 11.2554 9.67631 9.81626L8.6793 12.9085C8.67183 12.933 8.65824 12.9397 8.6304 12.9397C8.60255 12.9397 8.58421 12.9343 8.57539 12.9085C8.42529 12.4698 8.24327 12.1614 7.6687 11.7342L8.81174 8.17607H10.3405C11.5882 9.72458 12.6083 11.6215 13.1041 13.064L14.6621 8.17607H16.0856L15.5986 9.70352C15.5905 9.73001 15.6109 9.73544 15.6408 9.73544L15.6419 9.73544C15.661 9.73546 15.6916 9.73548 15.7216 9.70352C16.6935 8.65692 18.1931 8.06333 19.9175 8.06333C20.4744 8.06333 21.0422 8.0939 21.5108 8.16589L21.1264 9.29262C20.7474 9.2444 20.3256 9.2186 19.9161 9.2186C17.9717 9.2186 16.5182 10.1626 16.2982 11.6561C16.2058 12.2823 16.3539 12.844 16.7274 13.2793ZM7.52109 9.24576C7.15366 9.16087 6.83242 9.10314 6.38077 9.09227C5.48767 9.0719 4.5022 9.28583 4.31203 9.84954C4.16908 10.2724 4.68018 10.5147 5.48283 10.8952L5.48317 10.8953C5.58421 10.9432 5.68986 10.9933 5.7994 11.0462L5.86795 11.0793C7.10705 11.6771 8.59838 12.3966 7.98157 13.6929C7.45046 14.8081 6.12405 15.3236 4.07568 15.2768C2.98494 15.2516 1.70675 14.8604 1.08667 14.5725L1.58789 13.4885C2.43074 13.913 3.50042 14.1589 4.35821 14.1792C5.34844 14.2016 6.02964 13.9925 6.23747 13.5517C6.50506 12.9832 5.74439 12.5492 4.78201 12.0928C3.5697 11.5183 2.17062 10.8207 2.66369 9.58059C3.08002 8.53467 4.69847 8.04092 6.48876 8.08235C7.04567 8.09525 7.37915 8.1394 7.84573 8.22497L7.52109 9.24576Z"
    );
    pathElement.setAttribute("fill", "url(#paint0_linear_16_4013)");
    svgSncf.appendChild(pathElement);

    var linearGradientElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "linearGradient"
    );
    linearGradientElement.setAttribute("id", "paint0_linear_16_4013");
    linearGradientElement.setAttribute("x1", "-0.0000747083");
    linearGradientElement.setAttribute("y1", "25.9233");
    linearGradientElement.setAttribute("x2", "30.4809");
    linearGradientElement.setAttribute("y2", "25.9233");
    linearGradientElement.setAttribute("gradientUnits", "userSpaceOnUse");

    var stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop1.setAttribute("stop-color", "#7C2270");
    linearGradientElement.appendChild(stop1);

    var stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop2.setAttribute("offset", "0.247191");
    stop2.setAttribute("stop-color", "#AA147E");
    linearGradientElement.appendChild(stop2);

    var stop3 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop3.setAttribute("offset", "0.814607");
    stop3.setAttribute("stop-color", "#E41D25");
    linearGradientElement.appendChild(stop3);

    var stop4 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
    stop4.setAttribute("offset", "1");
    stop4.setAttribute("stop-color", "#E41D25");
    linearGradientElement.appendChild(stop4);

    var defsElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "defs"
    );
    defsElement.appendChild(linearGradientElement);
    svgSncf.appendChild(defsElement);

    timeBlock.appendChild(timeLeft);
    timeBlock.appendChild(svgSncf);
    scheduleItem.appendChild(scheduleHeader);
    departureInfo.innerHTML += `<a title="Plus d'infos" href="#${trainHeadSign}"><svg class="train-info" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#2196f3" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"/><path fill="#fff" d="M22 22h4v11h-4V22zM26.5 16.5c0 1.379-1.121 2.5-2.5 2.5s-2.5-1.121-2.5-2.5S22.621 14 24 14 26.5 15.121 26.5 16.5z"/></svg></a>`;

    scheduleItem.appendChild(timeBlock);

    scheduleContainer.appendChild(scheduleItem);

    let stopsHTML;

    if (journey.nb_transfers === 0) {
      if (journey.sections[1] && journey.sections[1]["stop_date_times"]) {
        stopsHTML = journey.sections[1]["stop_date_times"]
          .slice(1, -1)
          .map((stop) => {
            const departureDateTime = isDelayed
              ? addDelayToDateTime(
                  stop.departure_date_time,
                  departureTimeJourney.delay
                )
              : stop.departure_date_time;

            const delayIndicator = isDelayed
              ? `<span class="delayed">${parseAndFormatDateTime(
                  stop.departure_date_time
                )}</span>`
              : "";

            return `
          <div class="step step-journey">
            <p class="step-title">
              <strong>${stop.stop_point.name}</strong>
              <span class="step-time">${delayIndicator}${parseAndFormatDateTime(
              departureDateTime
            )}</span>
            </p>
          </div>`;
          })
          .join("");
      }
    } else {
      stopsHTML = journey.sections
        .flatMap((section) => {
          if (section.type === "waiting") {
            const waitingDuration = section.duration;
            return `
          <div class="step step-journey">
            <p class="step-title">
              <strong>Attente en gare</strong>
              <span class="step-time">${formatDuration(waitingDuration)}</span>
            </p>
          </div>`;
          } else if (section["stop_date_times"]) {
            return section["stop_date_times"].map((stop) => {
              if (
                stop.stop_point.name === from ||
                stop.stop_point.name === to
              ) {
                return "";
              }
              const departureDateTime = isDelayed
                ? addDelayToDateTime(
                    stop.departure_date_time,
                    departureTimeJourney.delay
                  )
                : stop.departure_date_time;

              const delayIndicator = isDelayed
                ? `<span class="delayed">${parseAndFormatDateTime(
                    stop.departure_date_time
                  )}</span>`
                : "";

              return `
              <div class="step step-journey">
                <p class="step-title">
                  <strong>${stop.stop_point.name}</strong>
                  <span class="step-time">${delayIndicator}${parseAndFormatDateTime(
                departureDateTime
              )}</span>
                </p>
              </div>`;
            });
          }
        })
        .join("");
    }

    let trainStatusModal;
    let trainName = `<h1>${trainNetwork} N°${trainHeadSign}</h1>`;
    if (isCancelled) {
      trainStatusModal = "Annulé ❌";
      trainName = `<h1 class="delayed">${trainNetwork} N°${trainHeadSign}</h1>`;
    } else if (isDelayed === false) {
      trainStatusModal = "À l'heure ✅";
    } else {
      trainStatusModal =
        "Retardé de " + departureTimeJourney["delay"] + " minutes";
    }
    const trainType =
      journey.nb_transfers === 0
        ? "Trajet direct"
        : `${journey.nb_transfers} correspondance${
            journey.nb_transfers > 1 ? "s" : ""
          }`;
    const trainStopsModal = document.createElement("a");
    trainStopsModal.href = "#close";
    const modalDepartureTimeJourney = isDelayed
      ? `<span class="delayed">${departureTimeJourney["formattedTimeWithoutDelay"]}</span>${departureTimeJourney["formattedTime"]}`
      : departureTimeJourney["formattedTime"];
    const modalArrivalTimeJourney = isDelayed
      ? `<span class="delayed">${arrivalTimeJourney["formattedTimeWithoutDelay"]}</span>${arrivalTimeJourney["formattedTime"]}`
      : arrivalTimeJourney["formattedTime"];

    trainStopsModal.innerHTML = `
    <div id="${trainHeadSign}" class="modal-window">
      <div>
          <a href="#close" title="Fermer" class="modal-close">&times;</a>
          ${trainName}
          <p>Statut: ${trainStatusModal}</p>
          <p>Durée: ${trainDuration}</p>
          <p>${trainType}</p>
          <div class="path-container">
            <div class="path">
              <div class="step step-journey">
                <p class="step-title">
                  <strong>${from}</strong>
                  <span class="step-time">${modalDepartureTimeJourney}</span>
                </p>
              </div>
              ${stopsHTML}
              <div class="step step-journey">
                <p class="step-title">
                 <strong>${to}</strong>
                 <span class="step-time">${modalArrivalTimeJourney}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>`;
    scheduleItem.appendChild(trainStopsModal);
  });
  const lastTrainDeparture = journeys[journeys.length - 1].departure_date_time;
  const hiddenInput = document.getElementById("lastTrainDepartureInput");
  if (hiddenInput) {
    hiddenInput.value = lastTrainDeparture;
  }
}

function fetchTrainStops(trainId) {
  return fetch(
    `https://api.sncf.com/v1/coverage/sncf/vehicle_journeys/${trainId}`,
    {
      method: "GET",
      headers: { Authorization: apiKey },
    }
  )
    .then(handleResponse)
    .then((data) => {
      const stops = data.vehicle_journeys[0].stop_times.map((stop) => ({
        name: stop.stop_point.name.replace(/\s*-\s*/g, "-"),
      }));
      return stops;
    })
    .catch((error) => {
      console.error(error);
    });
}

function openModal() {
  modal.style.display = "flex";
  document.getElementById("modal-content").innerHTML = "";
  renderNonFavoriteStationButtons();
  modal.classList.add("fade-in");
}

function closeModal() {
  modal.classList.remove("fade-in");
  modal.classList.add("fade-out");
  setTimeout(() => {
    modal.style.display = "none";
    modal.classList.remove("fade-out");
  }, 300);
}

function renderStationButton(stationName, isFavorite) {
  const button = document.createElement("button");
  button.className = isFavorite ? "station-btn favorite" : "station-btn";
  button.setAttribute("data-station", stationName);
  button.innerHTML = isFavorite
    ? `<span class="star">&#9733;</span> <span class="station-name">${stationName}</span>`
    : `<span class="star">&#9734;</span> <span class="station-name">${stationName}</span>`;
  button.addEventListener("click", (event) => {
    const star = event.target.closest(".star");
    if (star) {
      if (stationName.includes("➡️")) {
        const stationNames = stationName.split("➡️");
        const stationName1 = stationNames[0].trim();
        const stationName2 = stationNames[1].trim();
        toggleFavorite(stationName1, stationName2);
        updateStationButtons();
      } else {
        toggleFavorite(stationName);
        updateStationButtons();
        closeModal();
      }
    } else {
      closeModal();
      if (stationName.includes("➡️")) {
        const stationNames = stationName.split("➡️");
        const departureStationText = stationNames[0].trim();
        const arrivalStationText = stationNames[1].trim();
        if (!departureStationText || !arrivalStationText) {
          showToast(
            "<strong>Erreur:</strong> Veuillez sélectionner une gare de départ et une gare d'arrivée",
            "danger"
          );
          return;
        }

        if (
          !stationCodes.hasOwnProperty(departureStationText) ||
          !stationCodes.hasOwnProperty(arrivalStationText)
        ) {
          showToast(
            "<strong>Erreur:</strong> Veuillez sélectionner une gare valide",
            "danger"
          );
          return;
        }

        if (departureStationText === arrivalStationText) {
          showToast(
            "<strong>Erreur:</strong> Veuillez sélectionner deux gares différentes",
            "danger"
          );
          return;
        }

        const journeyDate = document.getElementById("journeyDate").value;

        const currentDateTime = new Date();
        currentDateTime.setHours(0, 0, 0, 0);
        const journeyDateTime = new Date(journeyDate);
        journeyDateTime.setHours(0, 0, 0, 0);

        if (journeyDateTime < currentDateTime) {
          showToast(
            "<strong>Erreur:</strong> Veuillez sélectionner une date ultérieure",
            "danger"
          );
          return;
        }

        const formattedJourneyDate = journeyDate.replace(/[-:]/g, "");

        apiUrl = `https://api.sncf.com/v1/coverage/sncf/journeys?from=stop_area%3ASNCF%3A${stationCodes[departureStationText]}&to=stop_area%3ASNCF%3A${stationCodes[arrivalStationText]}&count=10`;
        fetchJourneys(
          `${apiUrl}&datetime=${formattedJourneyDate}`,
          departureStationText,
          arrivalStationText,
          true
        );
      } else {
        apiUrl = `https://api.sncf.com/v1/coverage/sncf/stop_areas/stop_area:SNCF:${stationCodes[stationName]}/departures`;
        fetchTrainDepartures(apiUrl, stationName, true);
      }
    }
  });
  !isFavorite
    ? document.getElementById("modal-content").appendChild(button)
    : document.getElementById("station-selector").appendChild(button);
}

function removeAccents(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/-/g, "");
}

function renderNonFavoriteStationButtons() {
  const searchBar = document.createElement("input");
  searchBar.setAttribute("type", "text");
  searchBar.setAttribute("id", "search-bar");
  searchBar.setAttribute("placeholder", "Chercher une gare...");

  document.getElementById("modal-content").appendChild(searchBar);

  searchBar.addEventListener("input", function () {
    const searchTerm = removeAccents(searchBar.value.toLowerCase());
    const stationButtons = document.querySelectorAll(
      ".modal-content .station-btn"
    );

    stationButtons.forEach(function (button) {
      const stationName = removeAccents(
        button.getAttribute("data-station").toLowerCase()
      );
      if (stationName.includes(searchTerm)) {
        button.style.display = "flex";
      } else {
        button.style.display = "none";
      }
    });
  });

  const stationNames = Object.keys(stationCodes);
  stationNames.sort();

  for (const stationName of stationNames) {
    if (!favorites.includes(stationName)) {
      renderStationButton(stationName, false);
    }
  }
  searchBar.focus();
}

function updateStationButtons() {
  const stationSelector = document.getElementById("station-selector");
  stationSelector.innerHTML = "";
  renderFavoriteStationButtons();
}

function toggleFavorite(stationName, stationName2 = null) {
  if (stationName && stationName2) {
    const existingIndex = favorites.findIndex(
      (fav) => fav[stationName] === stationName2
    );
    if (existingIndex !== -1) {
      showToast(
        "<strong>Succès :</strong> Le trajet <strong>" +
          stationName +
          " ➡️ " +
          stationName2 +
          "</strong> a bien été supprimé des favoris.",
        "success"
      );
      favorites.splice(existingIndex, 1);
    } else {
      let favoriteObject = {};
      favoriteObject[stationName] = stationName2;
      showToast(
        "<strong>Succès :</strong> Le trajet <strong>" +
          stationName +
          " ➡️ " +
          stationName2 +
          "</strong> a bien été ajouté en favoris.",
        "success"
      );
      favorites.push(favoriteObject);
    }
  } else {
    const index = favorites.findIndex((fav) => fav === stationName);
    if (index !== -1) {
      showToast(
        "<strong>Succès :</strong> La gare <strong>" +
          stationName +
          "</strong> a bien été supprimée des favoris.",
        "success"
      );
      favorites.splice(index, 1);
    } else {
      showToast(
        "<strong>Succès :</strong> La gare <strong>" +
          stationName +
          "</strong> a bien été ajoutée en favoris.",
        "success"
      );
      favorites.push(stationName);
    }
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
}

function renderFavoriteStationButtons() {
  favorites.forEach((favorite) => {
    if (typeof favorite === "object") {
      const stationName = Object.keys(favorite)[0];
      const stationName2 = favorite[stationName];
      const buttonLabel = `${stationName} ➡️ ${stationName2}`;
      renderStationButton(buttonLabel, true);
    } else {
      renderStationButton(favorite, true);
    }
  });
}

function closeOnOutsideClick(event) {
  const modal = document.querySelector(".modal");
  if (event.target === modal) {
    closeModal();
  }
}
function handleScroll() {
  const scrollThreshold = 350;
  const scrollPosition =
    document.body.scrollTop || document.documentElement.scrollTop;

  if (scrollPosition > scrollThreshold) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function handleInvertStations() {
  const departureValue = $("#journeyDepartureStation").val();
  const arrivalValue = $("#journeyArrivalStation").val();

  $("#journeyDepartureStation").val(arrivalValue).trigger("change");
  $("#journeyArrivalStation").val(departureValue).trigger("change");
}

window.onscroll = handleScroll;
window.addEventListener("click", closeOnOutsideClick);
backToTopBtn.addEventListener("click", scrollToTop);
chooseStationBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
moreDeparturesButton.addEventListener("click", handleMoreDepartures);
themeToggle.addEventListener("click", toggleTheme);
searchJourneyBtn.addEventListener("click", handleSearchJourney);
favoriteJourneyBtn.addEventListener("click", handleFavoriteJourney);
invertStationsBtn.addEventListener("click", handleInvertStations);
document.addEventListener("DOMContentLoaded", initialize);
