
function updateButtonText(){
    var shareButton = document.getElementById("shareApp_button");

    if (window.matchMedia('(max-width: 600px)').matches) {
        shareButton.textContent = 'Share';
    }
    else {
        shareButton.textContent = 'Share App Link';

    }
}

updateButtonText();
window.addEventListener('resize', updateButtonText);









function toggleDropdown(dropdownId,arrowId) {


    var dropdown = document.getElementById(dropdownId);
    var arrow = document.getElementById(arrowId);



    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        if(dropdownId === "dropdown3" || dropdownId === "dropdown4"){
            dropdown.style.display = "flex";
        }
        else{
        dropdown.style.display = "block";
        }
        arrow.style.transform = "rotate(-90deg)";
        arrow.style.position = "relative";
        arrow.style.left = "-24px";

       
    } 
    
    else {
        dropdown.style.display = "none";

        arrow.style.transform = "rotate(90deg)";
        arrow.style.position = "relative";
        arrow.style.left = "0px";
    }
}

function toggleInput(openid,closeid){

    var openinput = document.getElementById(openid);
    var closeinput = document.getElementById(closeid);

    if(openinput.style.display === "none" || openinput.style.display === ""){
        openinput.style.display = "flex";
        closeinput.style.display = "none";
    }
    else{
        closeinput.style.display = "none";
        openinput.style.display = "flex";

    }
}

