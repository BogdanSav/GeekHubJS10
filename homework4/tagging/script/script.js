let items = document.getElementsByClassName('lorem');
let counter = 0;

for (let item of items) {
    item.addEventListener("click", (e) => {
        console.log(e);
        if (e.type != "contexmenu") {
            item.children[1].classList.remove("lorem__button_hidden");
            item.classList.add("grab");
            item.children[1].addEventListener("click", () => {
                item.classList.add("lorem_hidden");
            });

            item.addEventListener("mousedown", (e) => {
                if (item.classList.contains("grab")) {
                    dragAndDrop(e, item, true);
                } else dragAndDrop(e, item, false);

            })
        }




    });
    item.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        item.children[1].classList.add("lorem__button_hidden");
        item.classList.remove("grab");

    })
}





function dragAndDrop(e, item, param) {
    if (param) {
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
        item.onmouseup = () => {
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
    } else return;


}