let eventTarget = document.getElementById('schweini');

eventTarget.onclick = function dress(){

    if (eventTarget.getAttribute("src").match('images/nackt.jpg')) {
        return eventTarget.setAttribute("src", 'images/t-shirt.jpg')
    } else if (eventTarget.getAttribute("src").match('images/t-shirt.jpg')) {
        return eventTarget.setAttribute("src", 'images/hose.jpg')
    } else if (eventTarget.getAttribute("src").match('images/hose.jpg')) {
        return eventTarget.setAttribute("src", 'images/blume.jpg')
    } else if (eventTarget.getAttribute("src").match('images/blume.jpg')) {
        return eventTarget.setAttribute("src", 'images/hose-aus.jpg')
    } else if (eventTarget.getAttribute("src").match('images/hose-aus.jpg')) {
        return eventTarget.setAttribute("src", 'images/t-shirt-aus.jpg')
    } else if (eventTarget.getAttribute("src").match('images/t-shirt-aus.jpg')) {
        return eventTarget.setAttribute("src", 'images/nackt-aus.jpg')
    } else if (eventTarget.getAttribute("src").match('images/nackt-aus.jpg')) {
        return eventTarget.setAttribute("src", 'images/nee.jpg')
    } else if (eventTarget.getAttribute("src").match('images/nee.jpg')) {
        return eventTarget.setAttribute("src", 'images/popo.jpg')
    } else if (eventTarget.getAttribute("src").match('images/popo.jpg')) {
        return eventTarget.setAttribute("src", 'images/nackt.jpg')
    } 
};
    




/*function transformation(){
    let newImage = document.getElementById('schweini');
    if (newImage.src.match("nackt.jpg")) {
    return newImage.src="images/t-shirt.jpg";
    } else {
        return newImage.src="images/nackt.jpg";
    }
}*/
    
    
    