
let eventTarget = document.getElementById('schweini');
console.log(eventTarget)

let pictureIndex = 0;
eventTarget.onclick = function getNextPicture(){
    pictureIndex++
    pictureIndex = (pictureIndex) % (pictures.length)
    console.log(pictureIndex);
    return eventTarget.setAttribute("src", pictures[pictureIndex])
}


    