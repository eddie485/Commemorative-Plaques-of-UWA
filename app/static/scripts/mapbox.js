mapboxgl.accessToken = 'pk.eyJ1IjoiY29tbWVtb3JhdGl2ZS1wbGFxdWVzLW9mLXV3YSIsImEiOiJja3N4Y3p4M3owYmI4MnNwMmxqcmptbnpxIn0.viaDBFBPyZe6hpYUDP7q-A';;
// Display a map of UWA

var satelite_map = 'mapbox://styles/mapbox/satellite-streets-v11'; //URL for satelite style map
var street_map = 'mapbox://styles/mapbox/streets-v11'; //URL for street style map

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: satelite_map,

    center: [115.8181, -31.9789], // starting position [longitude, latitude]
    zoom: 17 // starting zoom 
});

// Set bounds to UWA, Crawley Campus.
const bounds = [
    [115.8081, -31.9889], // [west, south]
    [115.8281, -31.9729]  // [east, north]
];
// Set the map's max bounds.
map.setMaxBounds(bounds);

// disable map rotation using right click + drag
map.dragRotate.disable();

// disable map rotation using touch rotation gesture
map.touchZoomRotate.disableRotation();

// Add geolocate control to the map.
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
        enableHighAccuracy: true
    },
     //When active the map will receive updates to the device's location as it changes.
    trackUserLocation: true,
    // Draw an arrow next to the location dot to indicate which direction the device is heading.
    showUserHeading: true
    })
);


    map.on('load', () => {
        //Walk 1 line
        map.addSource('route1', {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'LineString',
                    'coordinates': [
                        /*
                        [115.818187, -31.978437], //Alexander
                        [115.816937, -31.978563], //Ross

                        
                        [115.816563, -31.979188], //Weatherburn
                        [115.817037, -31.979900], //Irwin St
                        [115.817813, -31.980187], //James Oval
                        [115.818562, -31.981437], //Tatersall
                        [115.818438, -31.982062], //Bayliss
                        [115.819812, -31.981063], //Cameron Hall
                        [115.819812, -31.979563], //Beasley */
                        //Reid to Ross
                        [115.817784628967, -31.9786905168583],
                        [115.817751193515, -31.9786898647654],
                        [115.817705320674, -31.9786911980754],
                        [115.817660185071, -31.9786906493261],
                        [115.817610511903, -31.9786901225669],
                        [115.817555541498, -31.9786915207762],
                        [115.817499177886, -31.9786929533718],
                        [115.817434515076, -31.9786904706776],
                        [115.817380192408, -31.978697188578],
                        [115.817317340088, -31.9786966217836],
                        [115.817290550782, -31.9786920911783],
                        [115.817230821119, -31.9786784954301],
                        [115.81719648234, -31.9786561641827],
                        [115.817168542217, -31.9786221891755],
                        [115.817154945024, -31.9785970790891],
                        [115.817141602968, -31.9785599118694],
                        [115.817122226909, -31.9785356683789],
                        [115.817104862742, -31.9785244418443],
                        
                        //Ross to Weatherburn
                        [115.817100980095, -31.9785249786282],
                        [115.817101895191, -31.9785594005231],
                        [115.817106804664, -31.978583768561],
                        [115.817108716787, -31.9786182496689],
                        [115.817110522206, -31.9786653768145],
                        [115.817110369827, -31.9787016435099],
                        [115.817140183557, -31.9787176928077],
                        [115.817171068213, -31.9787134680323],
                        [115.817217813598, -31.9787219382057],
                        [115.817222900146, -31.9787615508177],
                        [115.817220736071, -31.9787906655975],
                        [115.817217722587, -31.9788314278575],
                        [115.817191704641, -31.9788416337716],
                        [115.817157638763, -31.9788459513737],
                        [115.817160579459, -31.9788698380851],
                        [115.817160510396, -31.9788963226776],
                        [115.817163422841, -31.9789339833333],
                        [115.817162364706, -31.9789554180719],
                        [115.817163314181, -31.9789811424737],
                        [115.817163203326, -31.9790147687284],
                        [115.817161623686, -31.9790329844508],
                        [115.817127467601, -31.9790380721278],
                        [115.817088804926, -31.9790392512539],
                        [115.8170433392, -31.9790391582695],
                        [115.81700551941, -31.9790403314741],
                        [115.816961493513, -31.9790442234199],
                        [115.816926565262, -31.9790474676521],
                        [115.816889337461, -31.9790664360429],
                        [115.816855646827, -31.9791008404595],
                        [115.816835664956, -31.9791186121491],
                        [115.816813665696, -31.979130051574],
                        [115.816783742565, -31.9791546776835],
                        [115.816755438433, -31.9791750475895],
                        [115.81673551544, -31.9791849883804],

                        //Weatherburn to Irvin
                        [115.816735887862, -31.9791823044732],
                        [115.816789405013, -31.9791882066182],
                        [115.816856484408, -31.9791919155069],
                        [115.816914678184, -31.9791934344276],
                        [115.816919154653, -31.9792344430425],
                        [115.816923630229, -31.9792989809874],
                        [115.816921843124, -31.9793453291048],
                        [115.816923634134, -31.9793908696747],
                        [115.816923632854, -31.979436421925],
                        [115.816923631092, -31.9794766980022],
                        [115.816923633698, -31.979526729195],
                        [115.816929001692, -31.9795888219873],
                        [115.816937980676, -31.9796513657011],
                        [115.816942861593, -31.9796983979159],
                        [115.816964911891, -31.9797311538687],
                        [115.816986292431, -31.9797578262848],
                        [115.817006636175, -31.9797706595768],
                        [115.817047694428, -31.9797820583958],
                        [115.817091110654, -31.9797880699676],
                        [115.817114605825, -31.9797947894226],
                        [115.817125378899, -31.9797992750529],

                        //Irvin to James
                        [115.817126494477, -31.9797999115144],
                        [115.817183102445, -31.9798135114499],
                        [115.817241864444, -31.9798399141825],
                        [115.817332229643, -31.979888108246],
                        [115.817395231307, -31.9799197450205],
                        [115.817463393382, -31.9799736705639],
                        [115.817556891695, -31.9800234400636],
                        [115.817636789868, -31.9800703050083],
                        [115.817746775783, -31.9801169516624],
                        [115.817858070995, -31.980168040947],
                        [115.817920920313, -31.9802013598691],

                        //James to Tatersall
                        [115.817948589614, -31.9802256335239],
                        [115.818013181005, -31.9802857480654],
                        [115.818082596016, -31.9803175641267],
                        [115.818151699332, -31.9803762196449],
                        [115.818236226057, -31.9804224257258],
                        [115.818307604178, -31.980460664889],
                        [115.818395874836, -31.9805068594761],
                        [115.818491547935, -31.9805322107483],
                        [115.818547917254, -31.9805640778959],
                        [115.818636250835, -31.9806039258212],
                        [115.818685107226, -31.9806421479362],
                        [115.818694496524, -31.980707507595],
                        [115.818702012681, -31.9807713065384],
                        [115.818698258733, -31.9808590438933],
                        [115.81869638499, -31.9809483472461],
                        [115.818696392085, -31.98100094549],
                        [115.818692621563, -31.9810488376759],
                        [115.818694515776, -31.9810981910342],
                        [115.818683259269, -31.981139518172],
                        [115.818677640369, -31.9811760685663],
                        [115.818640069158, -31.9812175029324],
                        [115.818598822951, -31.9812570807731],
                        [115.818576318123, -31.9812872664151],

                        //Tatersall to Bayliss
                        [115.818596792117, -31.9812862554056],
                        [115.818636454784, -31.981283251062],
                        [115.818661131168, -31.9813004193762],
                        [115.818676130269, -31.9813266106024],
                        [115.818671718326, -31.9813565506679],
                        [115.818664673937, -31.9813752409014],
                        [115.818654094898, -31.9814029086596],
                        [115.81865585803, -31.9814268374982],
                        [115.818669081818, -31.9814545052902],
                        [115.81867613447, -31.9814866596972],
                        [115.818689358286, -31.981511336327],
                        [115.818706989979, -31.9815554551305],
                        [115.818716222033, -31.9816113046617],
                        [115.81871797453, -31.9816677918589],
                        [115.818717974537, -31.9817109004954],
                        [115.818719139888, -31.9817450874888],
                        [115.818722061303, -31.9817961196057],
                        [115.818722061348, -31.9818486373017],
                        [115.818717386478, -31.9818833023598],
                        [115.818710506441, -31.9819050103196],
                        [115.818704025673, -31.9819178368613],

    
                        //Bayliss to Cameron
                        [115.818699477828, -31.9819314233626],
                        [115.818721705245, -31.9819292686748],
                        [115.818759809412, -31.981917956469],
                        [115.818783306962, -31.9818915613786],
                        [115.818794738205, -31.9818387711971],
                        [115.818798548653, -31.9817978318416],
                        [115.81879537331, -31.9817633566372],
                        [115.818793468061, -31.9817294200626],
                        [115.818794236345, -31.9816935755676],
                        [115.818788387445, -31.9816523765329],
                        [115.818783102695, -31.981599330944],
                        [115.81877671041, -31.9815295217226],
                        [115.818779305422, -31.9814683642884],
                        [115.818778013586, -31.9814137204202],
                        [115.818776823194, -31.9813318320142],
                        [115.818771687498, -31.9812771629776],
                        [115.818764055399, -31.9811972954336],
                        [115.818747305369, -31.9811370720754],
                        [115.818753805716, -31.9810746050592],
                        [115.818768033026, -31.9810219948822],
                        [115.818835189505, -31.98099679925],
                        [115.818884265118, -31.9809935128527],
                        [115.81895529578, -31.9809924172483],
                        [115.819035366813, -31.9809967987404],
                        [115.819086943426, -31.9809880793271],
                        [115.819131850903, -31.9809674214175],
                        [115.819158800718, -31.9809215364677],
                        [115.819179340643, -31.9808822064605],
                        [115.819190952437, -31.9808516970744],
                        [115.819198750169, -31.980827963587],
                        [115.819205631134, -31.9807851649185],
                        [115.819215015739, -31.9807426077996],
                        [115.819219839519, -31.9806988624849],
                        [115.819228073941, -31.9806422272901],
                        [115.819233609046, -31.9806019937807],
                        [115.81926747685, -31.9805839536641],
                        [115.819317725132, -31.980583942281],
                        [115.81934876045, -31.9805816131841],
                        [115.819402611724, -31.9805804617235],
                        [115.819457554387, -31.9805804374802],
                        [115.819512658054, -31.9805804373664],
                        [115.819559524488, -31.9805763497872],
                        [115.819610700736, -31.9805693498509],
                        [115.819693024288, -31.980568937924],
                        [115.819747504625, -31.9805685031216],
                        [115.819802056142, -31.9805684833137],
                        [115.819843037173, -31.9805679943339],
                        [115.819879197556, -31.9805661038724],
                        [115.819911487747, -31.9805660832125],
                        [115.819950706527, -31.9805669232569],
                        [115.819964843164, -31.9805807657292],
                        [115.819967651951, -31.9805918991139],
                        [115.819971162847, -31.980645767816],
                        [115.819976224623, -31.9806959670235],
                        [115.819979345081, -31.9807327872029],
                        [115.819979592479, -31.9808320932644],
                        [115.819976986603, -31.9809117686307],
                        [115.819973301267, -31.980968096199],
                        [115.819968981679, -31.9810093245706],
                        [115.819966693532, -31.9810202624771],
                        [115.819967032099, -31.9810675805266],
                        [115.819922532991, -31.981074599618],
                        [115.81988178965, -31.9810684880229],
                        [115.81983354412, -31.9810695974627],
                        
                        //Cameron to Beasley
                        [115.819832699563, -31.9810696951577],
                        [115.819880703125, -31.9810690660768],
                        [115.819922150683, -31.9810749571876],
                        [115.819967012973, -31.9810685097349],
                        [115.819967010542, -31.9810208432353],
                        [115.819972614896, -31.9809722538091],
                        [115.819978242359, -31.9809216959305],
                        [115.819979394615, -31.9808863758733],
                        [115.819980528605, -31.9808434756847],
                        [115.81998058525, -31.9807872678018],
                        [115.819980618028, -31.9807444576216],
                        [115.81997505518, -31.9806969578524],
                        [115.819970583278, -31.9806408829792],
                        [115.819968359055, -31.9805924469694],
                        [115.819958316603, -31.98056596052],
                        [115.819930470784, -31.9805264593734],
                        [115.819883031185, -31.9804874440194],
                        [115.819840167077, -31.9804363145901],
                        [115.819804000518, -31.9803851850386],
                        [115.819755488678, -31.9803176312028],
                        [115.819723718744, -31.9802462977586],
                        [115.819708768088, -31.980174964272],
                        [115.819675325061, -31.9801119257219],
                        [115.819648075283, -31.9800667481463],
                        [115.819622064207, -31.9800341782743],
                        [115.819609678067, -31.9799911019217],
                        [115.819601007675, -31.9799396204444],
                        [115.8195910987, -31.979874480654],
                        [115.819591091151, -31.9798198118063],
                        [115.819592306162, -31.9797671363252],
                        [115.819592286875, -31.9797218066392],
                        [115.819597400821, -31.9796875439331],
                        [115.819603477654, -31.9796556895903],
                        [115.819613289222, -31.9796129133712],
                        [115.819631401277, -31.9795937496923],
                        [115.819667676483, -31.9795841520665],
                        [115.81969567367, -31.9795841426999]                 

                    ]
                }
            }
        });
        map.addLayer({
            'id': 'route1',
            'type': 'line',
            'source': 'route1',
            'layout': {
                'line-join': 'round',
                'line-cap': 'round'
            },
            'paint': {
                'line-color': '#33C9EB',
                'line-width': 3
            }
        });

        //Walk 2 line
        map.addSource('route2', {
                'type': 'geojson',
                'data': {
                    'type': 'Feature',
                    'properties': {},
                    'geometry': {
                        'type': 'LineString',
                        'coordinates': [
                            [115.818118, -31.978412], //Queen and duke
                            [115.818118, -31.978412], //artsbuilding
                            [115.818607, -31.978105], //theCharioteer
                            [115.819282, -31.977331], //octagonTheatre
                            [115.819077, -31.977245], //blackStump
                            [115.819083, -31.977239], //dolphinTheatre
                            [115.820474, -31.976775], //percyGrainger
                            [115.820009, -31.976649], //integrata
                            [115.820008, -31.976651], //eileenJoyce
                            [115.819028, -31.976931], //theDancerEmma
                            [115.819341, -31.978653] //sundial
                        ]
                    }
                }
            });
            map.addLayer({
                'id': 'route2',
                'type': 'line',
                'source': 'route2',
                'layout': {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
                'paint': {
                    'line-color': 'red',
                    'line-width': 3
                }
            });
        });
