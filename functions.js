
let eventTarget = document.getElementById('schweini');


let pictureIndex = 0;
eventTarget.onclick = function getNextPicture(){
    pictureIndex++
    pictureIndex = (pictureIndex) % (pictures.length)
    return eventTarget.setAttribute("src", pictures[pictureIndex])
}


    