//this holds all teh info for the exhibits in arrays and then puts those arrays in an array at the bottom

//-----------------------------------------------------------------------------------
//                          WATER EXHIBIT
//-----------------------------------------------------------------------------------

var exhibit_1 = {
    
	//marker to represent exhibit on map
	marker: null,

    //coordinates for position of marker of musuem exhibit on map -42.75, 121
    position: [-17, 143],

    icon: null,

    activeIcon: null,

    hoverIcon: null,

    //stuff pertaining to exhibit marker
    iconURL: "MuseumGen/icons/iconBlue.png",

    activeIconURL: "MuseumGen/icons/iconBlueActive.png",

    hoverIconURL: "MuseumGen/icons/iconBlueHover.png",

    iconSize: [75, 75],

    //--------------------------------------------

    museumNumber: 1,

    exhibitNumber: 1,

    exhibitType: "Water",

    numArtifacts: 2,

    //info about exhibit to be shown in side panel
    title: "Marine Mammals and Birds",

    picture: "Media/museum1/exhibits/WaterGallery/exhibit1/exhibit1.JPG",

    text:"Learn about marine mammals, such as whales and how they have adapted to their habitat and about marine birds who live along the coast."
    
};

var exhibit_2 = {
    
	marker: null,

    position: [-9, 166],

    icon: null,

    activeIcon: null,

    hoverIcon: null,

    iconURL: "MuseumGen/icons/iconBlue.png",

    activeIconURL: "MuseumGen/icons/iconBlueActive.png",

    hoverIconURL: "MuseumGen/icons/iconBlueHover.png",

    iconSize: [75, 75],

    //-----------------------------------

    museumNumber: 1,

    exhibitNumber: 2,

    exhibitType: "Water",

    numArtifacts: 2,

    title:"Molusks and Invertebrate",

    picture: "Media/museum1/exhibits/WaterGallery/exhibit2/exhibit2.JPG",

    text:"Molusks and Invertebrate are some of the earliest forms of complex oceanic life. Learn how they evolved and survived. See specimens and learn how strange they can be."

};
/*
var exhibit_3 = {

	marker: null,

    position: [-45, 95],

    icon: null,

    activeIcon: null,

    iconURL: "MuseumGen/icons/iconBlue.png",

    activeIconURL: "MuseumGen/icons/iconBlueActive.png",

    iconSize: [75, 75],

    //-----------------------------------

    museumNumber: 1,

    exhibitNumber: 3,

    title:"Wetland Animals",

    picture: "Media/museum1/exhibits/WaterGallery/exhibit3/exhibit3.JPG",

    text:"Learn about various animals that inhabit and form the ecosystem of a wetland in this exhibit."
};

var exhibit_4 = {

    marker: null,

    position: [-33, 95],

    icon: null,

    activeIcon: null,

    iconURL: "MuseumGen/icons/iconBlue.png",

    activeIconURL: "MuseumGen/icons/iconBlueActive.png",

    iconSize: [75, 75],

    //-----------------------------------

    museumNumber: 1,

    exhibitNumber: 4,

    title:"Blue Planet",

    picture: "Media/museum1/exhibits/WaterGallery/exhibit4/exhibit4.JPG",

    text:"Learn about various animals that inhabit and form the ecosystem of a wetland in this exhibit."
};*/

//-----------------------------------------------------------------------------------
//                          MAMMAL EXHIBIT
//-----------------------------------------------------------------------------------

var exhibit_5 = {

    marker: null,

    position: [-30, 60],
    
    icon: null,

    activeIcon: null,

    hoverIcon: null,            

    iconURL: "MuseumGen/icons/iconYellow.png",

    activeIconURL: "MuseumGen/icons/iconYellowActive.png",

    hoverIconURL: "MuseumGen/icons/iconYellowHover.png",

    iconSize: [75, 75],

    //-----------------------------------

    title:"Cougar",

    picture: "Media/museum1/exhibits/MammalGallery/exhibit5/exhibit5.JPG",

    museumNumber: 1,

    exhibitNumber: 5,

    exhibitType: "Mammals",

    numArtifacts: 2,

    text:"Learn about the cougar and it's baby cubs. See a diorama of it in it's natural habitat and learn how it hunts."
};

var exhibit_6 = {

    marker: null,

    position: [-30, 76],  

    icon: null,

    activeIcon: null,

    hoverIcon: null,           

    iconURL: "MuseumGen/icons/iconYellow.png",

    activeIconURL: "MuseumGen/icons/iconYellowActive.png",

    hoverIconURL: "MuseumGen/icons/iconYellowHover.png",

    iconSize: [75, 75],

    //-----------------------------------

    title:"Beaver",

    picture: "Media/museum1/exhibits/MammalGallery/exhibit6/exhibit6.JPG",

    museumNumber: 1,

    exhibitNumber: 6,

    exhibitType: "Mammals",

    numArtifacts: 3,

    text:"See a diorama of Canada's national animal in it's natural habitat. Learn what makes the beaver such a busy animal and see tree stumps that it has chewed."
};

var exhibit_7 = {

    marker: null,

    position: [-30, 91],

    icon: null,

    activeIcon: null,

    hoverIcon: null,
                
    iconURL: "MuseumGen/icons/iconYellow.png",

    activeIconURL: "MuseumGen/icons/iconYellowActive.png",

    hoverIconURL: "MuseumGen/icons/iconYellowHover.png",

    iconSize: [75, 75],

    //-----------------------------------

    title:"Bear",

    picture: "Media/museum1/exhibits/MammalGallery/exhibit7/exhibit7.JPG",

    museumNumber: 1,

    exhibitNumber: 7,

    exhibitType: "Mammals",

    numArtifacts: 1,

    text:"Learn all about the Grizzly Bear! Rawr!"
};

var exhibit_8 = {

    marker: null,

    position: [-30, 105],

    icon: null,

    activeIcon: null,

    hoverIcon: null,

    iconURL: "MuseumGen/icons/iconYellow.png",

    activeIconURL: "MuseumGen/icons/iconYellowActive.png",

    hoverIconURL: "MuseumGen/icons/iconYellowHover.png",

    iconSize: [75, 75],

    //-----------------------------------

    title:"Thinhorn Sheep",

    picture: "Media/museum1/exhibits/MammalGallery/exhibit8/exhibit8.JPG",

    museumNumber: 1,

    exhibitNumber: 8,

    exhibitType: "Mammals",

    numArtifacts: 2,

    text:"See Thinhorn sheep up top high mountain peaks in this diorama. Learn about how they make their home in their mountains and why they grow such big horns."
};
/*
var exhibit_9 = {

    marker: null,

    position: [-33, 157],

    icon: null,

    activeIcon: null,
                
    iconURL: "MuseumGen/icons/iconYellow.png",

    activeIconURL: "MuseumGen/icons/iconYellowActive.png",

    iconSize: [75, 75],

    //-----------------------------------

    title:"Moose",

    picture: "Media/museum1/exhibits/MammalGallery/exhibit9/exhibit9.JPG",

    museumNumber: 1,

    exhibitNumber: 9,

    text:"Learn about various animals that inhabit and form the ecosystem of a wetland in this exhibit."
};

var exhibit_10 = {

    marker: null,

    position: [-33, 170],

    icon: null,

    activeIcon: null,
                
    iconURL: "MuseumGen/icons/iconYellow.png",

    activeIconURL: "MuseumGen/icons/iconYellowActive.png",

    iconSize: [75, 75],

    //-----------------------------------

    title:"Muskox",

    picture: "Media/museum1/exhibits/MammalGallery/exhibit10/exhibit10.JPG",

    museumNumber: 1,

    exhibitNumber: 10,

    text:"Learn about various animals that inhabit and form the ecosystem of a wetland in this exhibit."
};

var exhibit_11 = {

    marker: null,

    position: [-58, 157],

    icon: null,

    activeIcon: null,
                
    iconURL: "MuseumGen/icons/iconYellow.png",

    activeIconURL: "MuseumGen/icons/iconYellowActive.png",

    iconSize: [75, 75],

    //-----------------------------------

    title:"Bison",

    picture: "Media/museum1/exhibits/MammalGallery/exhibit11/exhibit11.JPG",

    museumNumber: 1,

    exhibitNumber: 11,

    text:"Learn about various animals that inhabit and form the ecosystem of a wetland in this exhibit."
};

var exhibit_12 = {

    marker: null,

    position: [-58, 170],

    icon: null,

    activeIcon: null,
                
    iconURL: "MuseumGen/icons/iconYellow.png",

    activeIconURL: "MuseumGen/icons/iconYellowActive.png",

    iconSize: [75, 75],

    //-----------------------------------

    title:"Pronghorn",

    picture: "Media/museum1/exhibits/MammalGallery/exhibit12/exhibit12.JPG",

    museumNumber: 1,

    exhibitNumber: 12,

    text:"Learn about various animals that inhabit and form the ecosystem of a wetland in this exhibit."
};

var exhibit_13 = {

    marker: null,

    position: [-45, 170],

    icon: null,

    activeIcon: null,
                
    iconURL: "MuseumGen/icons/iconYellow.png",

    activeIconURL: "MuseumGen/icons/iconYellowActive.png",

    iconSize: [75, 75],

    //-----------------------------------

    title:"Caribou",

    picture: "Media/museum1/exhibits/MammalGallery/exhibit13/exhibit13.JPG",

    museumNumber: 1,

    exhibitNumber: 13,

    text:"Learn about various animals that inhabit and form the ecosystem of a wetland in this exhibit."
};*/

//-----------------------------------------------------------------------------------
//                          EARTH EXHIBIT
//-----------------------------------------------------------------------------------

var exhibit_14 = {

    marker: null,

    position: [-9, 13],

    icon: null,

    activeIcon: null,

    hoverIcon: null,
                
    iconURL: "MuseumGen/icons/iconGreen.png",

    activeIconURL: "MuseumGen/icons/iconGreenActive.png",

    hoverIconURL: "MuseumGen/icons/iconGreenHover.png",

    iconSize: [75, 75],

    //-----------------------------------

    title:"The Three Types of Rock",

    picture: "Media/museum1/exhibits/EarthGallery/exhibit14/exhibit14.JPG",

    museumNumber: 1,

    exhibitNumber: 14,

    exhibitType: "Rocks and Space",

    numArtifacts: 3,

    text:"Learn about the three different types of rock that compose the earths crust. Learn about how they are formed and where they are found."
};

var exhibit_15 = {

    marker: null,

    position: [-25, 13],

    icon: null,

    activeIcon: null,

    hoverIcon: null,
                
    iconURL: "MuseumGen/icons/iconGreen.png",

    activeIconURL: "MuseumGen/icons/iconGreenActive.png",

    hoverIconURL: "MuseumGen/icons/iconGreenHover.png",

    iconSize: [75, 75],

    //-----------------------------------

    title:"The Solar System",

    picture: "Media/museum1/exhibits/EarthGallery/exhibit15/exhibit15.JPG",

    museumNumber: 1,

    exhibitNumber: 15,

    exhibitType: "Rocks and Space",

    numArtifacts: 2,

    text:"Learn about how it all began; the birth of the universe and how stars are formed."
};
/*
var exhibit_16 = {

    marker: null,

    position: [-50, 30],

    icon: null,

    activeIcon: null,

    iconURL: "MuseumGen/icons/iconGreen.png",

    activeIconURL: "MuseumGen/icons/iconGreenActive.png",

    iconSize: [75, 75],

    //-----------------------------------

    title:"A Rocky History",

    picture: "Media/museum1/exhibits/EarthGallery/exhibit16/exhibit16.JPG",

    museumNumber: 1,

    exhibitNumber: 16,

    text:"Learn about various animals that inhabit and form the ecosystem of a wetland in this exhibit."
};

var exhibit_17 = {

    marker: null,

    position: [-50, 40],

    icon: null,

    activeIcon: null,

    iconURL: "MuseumGen/icons/iconGreen.png",

    activeIconURL: "MuseumGen/icons/iconGreenActive.png",

    iconSize: [75, 75],

    //-----------------------------------

    title:"The Earth and the Moon",

    picture: "Media/museum1/exhibits/EarthGallery/exhibit17/exhibit17.JPG",

    museumNumber: 1,

    exhibitNumber: 17,

    text:"Learn about various animals that inhabit and form the ecosystem of a wetland in this exhibit."
};*/

var exhibit_18 = {

    marker: null,

    position: [-16, 43],

    icon: null,

    activeIcon: null,

    hoverIcon: null,
                
    iconURL: "MuseumGen/icons/iconGreen.png",

    activeIconURL: "MuseumGen/icons/iconGreenActive.png",

    hoverIconURL: "MuseumGen/icons/iconGreenHover.png",

    iconSize: [75, 75],

    //-----------------------------------

    title:"Meteorites",

    picture: "Media/museum1/exhibits/EarthGallery/exhibit18/exhibit18.JPG",

    museumNumber: 1,

    exhibitNumber: 18,

    exhibitType: "Rocks and Space",

    numArtifacts: 4,

    text:"Not all rocks come from Earth! Some come from outer space! Learn all about meteorites in this exhibit, how they are formed, what they can tell us about how old the Earth is, and see some examples of them."
};

var exhibit_19 = {

    marker: null,

    position: [-55, 156],

    icon: null,

    activeIcon: null,

    hoverIcon: null,

    iconURL: "MuseumGen/icons/iconGreen.png",

    activeIconURL: "MuseumGen/icons/iconGreenActive.png",

    hoverIconURL: "MuseumGen/icons/iconGreenHover.png",

    iconSize: [75, 75],

    //-----------------------------------

    title:"Tectonic Plates",

    picture: "Media/museum1/exhibits/EarthGallery/exhibit19/exhibit19.JPG",

    museumNumber: 1,

    exhibitNumber: 19,

    exhibitType: "Rocks and Space",

    numArtifacts: 1,

    text:"The Earth's mantle is not a uniform thing. It contains many cracks and fault lines in which different tectonic plates shift against each other from the pressures below. Learn about how the Earth undergoes geologic change."
};
/*
var exhibit_20 = {

    marker: null,

    position: [-58, 10],

    icon: null,

    activeIcon: null,
                
    iconURL: "MuseumGen/icons/iconGreen.png",

    activeIconURL: "MuseumGen/icons/iconGreenActive.png",

    iconSize: [75, 75],

    //-----------------------------------

    title:"Non-Silicate Minerals",

    picture: "Media/museum1/exhibits/EarthGallery/exhibit20/exhibit20.JPG",

    museumNumber: 1,

    exhibitNumber: 20,

    text:"Learn about various animals that inhabit and form the ecosystem of a wetland in this exhibit."
};*/

var MuseumInfo = {

    MuseumNumber: 1,

    //array holding all the exhibits to be used by the Museum Gen to generate the map Exhbits
    MapExhibits: [exhibit_1, exhibit_2, exhibit_5, exhibit_6, exhibit_7, exhibit_8, exhibit_14, exhibit_15, exhibit_18, exhibit_19],

    // path to the museum tiles
    TilePath: 'Media/museum1/museum/mapTiles/{z}/{x}/{y}.png'

};