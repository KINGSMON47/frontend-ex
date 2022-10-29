
function Move(){
    var sara = document.getElementById("sara")
    var pos = 0
    var id = setInterval(frame,5)
    function frame() {
        if (pos == 200){
            clearInterval(id)
        }
        else {
            pos++
            sara.style.top = pos +"px"
            sara.style.left = pos +"px"
            sara.style.width = pos +"px"
        }
    }
}