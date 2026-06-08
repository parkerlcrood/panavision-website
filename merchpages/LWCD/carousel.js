const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
const merchImage = document.getElementsByClassName('merchimage');

const images = ["../../css/media/Like\ Water.jpg", "../../merchpages/css/media/LikeWaterBack.png"];
const photorow = document.querySelector('.photorow');

for (i = 0; i<(images.length); i=i+1){

    const imageID = i;
    
    let photobox = document.createElement('img');
    photobox.classList.add('photobox');

    id = document.createAttribute('id');

    photobox.src = images[i];
    photobox.setAttribute('id', i);
    photorow.appendChild(photobox);

    photobox.addEventListener('click', () => goToImage(imageID));
    photobox.style.backgroundImage = images[id];
}

let merchIndex = 0;
photorow.children[merchIndex].style.border = '.2rem solid red';

merchImage[0].src = images[merchIndex];

let prevImageID = merchIndex;

arrowLeft.addEventListener('click', () => picBack());
arrowRight.addEventListener('click', () => picForward());

function picBack(){
    
    photorow.children[prevImageID].style.border = '0';
    merchIndex=merchIndex-1;

    if (merchIndex<0){
        merchIndex=(images.length)-1;
    }

    merchImage[0].src = images[merchIndex];
    
    photorow.children[merchIndex].style.border = '.2rem solid red';
    prevImageID = merchIndex;
}

function picForward(){

    photorow.children[prevImageID].style.border = '0';
    merchIndex=merchIndex+1;

    if (merchIndex>((images.length)-1)){
        merchIndex=0;
    }
    merchImage[0].src = images[merchIndex];

    photorow.children[merchIndex].style.border = '.2rem solid red';
    prevImageID = merchIndex;
}

function goToImage(id){
    
    photorow.children[prevImageID].style.border = '0';

    merchImage[0].src = images[id];
    merchIndex = id;
    photorow.children[id].style.border = '.2rem solid red';

    prevImageID = id;
    
}