let currentPhoto = 0;

var data ={
    photo:'images/image1.jpeg',
    title: 'The Heart and Soul Nebulas',
    description: 'Is the heart and soul of our Galaxy located in Cassiopeia? Possibly not, but that is where two bright emission nebulas nicknamed Heart and Soul can be found.',
};

var data2={
    photo:'images/image2.jpeg',
    title: 'Stellar Wind-Shaped Nebula RCW',
    description: 'Imagine traveling to a star about 100 times as massive as our Sun, a million times more luminous, and with 30 times the surface temperature. Such stars exist, and some are known as Wolf Rayet (WR) stars, named after French astronomers Charles Wolf and Georges Rayet. ',
};

var data3={
    photo:'images/image3.jpeg',
    title: 'Andromeda Galaxy',
    description: 'Ive imaged Andromeda twice before but I never revealed detail like this!  I only got an hour on the target because I had spent an hour imaging M33 and I couldnt resists shooting multiple targets while in the dark skies near Flagstaff...  Im looking forward to being able to get back out soon and get some a few hours on Andromeda, possibly with my larger scope and maybe working some Ha detail in as well.'
};
var data4={
    photo:'images/image4.jpeg',
    title: 'In the Heart of the Rosette Nebula',
    description: 'In the heart of the Rosette Nebula lies a bright cluster of stars that lights up the nebula. The stars of NGC 2244 formed from the surrounding gas only a few million years ago.'
};
var data5={
    photo:'images/image5.jpeg',
    title: 'Seven Dusty Sisters in Infrared',
    description: 'Known for its iconic blue stars, the Pleiades is shown here in infrared light where the surrounding dust outshines the stars. '
};
var data6={
    photo:'images/image6.jpeg',
    title: 'NGC 2626 along the Vela Molecular Ridge',
    description: 'Centered in this colorful cosmic canvas, NGC 2626 is a beautiful, bright, blue reflection nebula in the southern Milky Way. '
};
var data7={
    photo:'images/image7.jpeg',
    title: 'Barnard 68: Dark Molecular Cloud',
    description: 'Where did all the stars go? What used to be considered a hole in the sky is now known to astronomers as a dark molecular cloud. Here, a high concentration of dust and molecular gas absorb practically all the visible light emitted from background stars. The eerily dark surroundings help make the interiors of molecular clouds some of the coldest and most isolated places in the universe. '
};
var data8={
    photo:'images/image8.jpeg',
    title: 'Arp 78: Peculiar Galaxy in Aries',
    description: 'Peculiar spiral galaxy Arp 78 is found within the boundaries of the constellation Aries. Some 100 million light-years beyond the stars and nebulae of our Milky Way galaxy, the island universe is an enormous 200,000 light-years across. '
};

var imagesData = [data, data2, data3, data4, data5, data6, data7, data8];


let loadPhoto = (photoNumber) => {
    $('#photo').attr("src", imagesData[photoNumber].photo);
    document.getElementById("title").innerHTML = imagesData[photoNumber].title;
    document.getElementById("description").innerHTML = imagesData[photoNumber].description;
    $('#' + photoNumber).css("border-radius", "50px");
}

let removeHighlight = (photoNumber) => {
    $('#' + photoNumber).css("border-radius", "0px");
}

loadPhoto(currentPhoto);


$('#left').click(() => {
    removeHighlight(currentPhoto);
    if (currentPhoto>0){
        currentPhoto--;
    } else{
        currentPhoto = 7;
    }
    loadPhoto(currentPhoto);
});

$('#right').click(() => {
    removeHighlight(currentPhoto);
    if (currentPhoto<7){
        currentPhoto++;
    } else {
        currentPhoto = 0;
    }
    loadPhoto(currentPhoto);
});



imagesData.forEach((item, index) => {
    
    $('.bottom').append('<img id="index"></img>')
    $('#index').attr("id", index).attr("src", imagesData[index].photo).attr({width: 100, height: 100});
    $('#' + index).after('<p id="valami"></p>');
    $('#valami').attr("id", index + 'title');
    document.getElementById(index + 'title').innerHTML = imagesData[index].title;
    
    $('#' + index).mouseenter(function() {
        $('#' + index + "title").css("display", "flex" );
        });     

    $('#' + index).mouseleave(function() {
        $('#' + index + "title").css("display", "none" );
    });
    
}); 



$('.bottom').click((event) => {
    removeHighlight(currentPhoto);
    currentPhoto = $(event.target).attr('id');
    loadPhoto(currentPhoto);
});

