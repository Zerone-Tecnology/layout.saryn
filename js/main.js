document.addEventListener("DOMContentLoaded", function () {

    
    let collegiya_popup_btn = document.getElementsByClassName("block_collegiya");
    let collegiya_popup = document.getElementsByClassName("collegiya_popup");
    for (let i = 0; i < collegiya_popup_btn.length; i++) {
        collegiya_popup_btn[i].onclick = function () {
            if (collegiya_popup[i].classList.contains("active")) {
                collegiya_popup[i].classList.remove("active");
            } else {
                for (let j = 0; j < collegiya_popup.length; j++) {
                    collegiya_popup[j].classList.remove("active");
                }
                collegiya_popup[i].classList.toggle("active");
            }
        }
    }
});