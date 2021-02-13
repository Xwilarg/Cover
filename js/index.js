window.onload = function() {
    let frame = document.getElementById("frame");
    Array.prototype.slice.call(document.getElementsByClassName("elem")).forEach(e => {
        e.addEventListener("click", function(e) {
            e = e.target.tagName === "DIV" ? e.target : e.target.parentNode;
            let url = "https://www.youtube.com/embed/" + e.id + "?autoplay=1";
            if (frame.src !== url) {
                frame.src = url;
                frame.classList.remove("hidden");
            }
        });
    });
}