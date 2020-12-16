let item = document.getElementById('lorem')

item.addEventListener("click", (e) => {
    let coords = getCoords(item);
    let shiftX = e.pageX - coords.left;
    let shiftY = e.pageY - coords.top;

    item.style.position = 'absolute';
    document.body.appendChild(item);
    moveAt(e);
    document.onmousemove = (e) => {
        moveAt(e);
    }

    function moveAt(e) {
        item.style.left = e.pageX - shiftX + "px";
        item.style.top = e.pageY - shiftY + "px";
    }
    item.ondblclick = () => {
        document.onmousemove = null;
        document.onmouseup = null;
    }

    function getCoords(elem) {
        let box = elem.getBoundingClientRect();
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset,
        }

    }
});