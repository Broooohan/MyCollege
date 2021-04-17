var flag = 0
document.querySelector(".hamburger").addEventListener("click" , function(){
    if (flag == 0) {
        document.querySelector(".small-nav").style.display = "flex";
        flag = 1;
    }
    else if (flag ==1) {
        document.querySelector(".small-nav").style.display = "none";
        flag = 0;
    }
});
const tellYear = new Date().getFullYear();
console.log(tellYear);

document.querySelector(".cp p").textContent = "Copyright © " + tellYear;