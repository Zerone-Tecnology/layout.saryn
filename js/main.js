let archive_select = document.querySelectorAll(".archive_select li");
for(let i = 0; i < archive_select.length; i++){
    archive_select[i].onclick = function(){
        archive_select[i].classList.toggle("active");
    }
}