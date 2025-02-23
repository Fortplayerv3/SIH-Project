const search= () =>{
    const searchbox = document.getElementById("sitem").value.toUpperCase();
    const storestate = document.getElementById("state-list")
    const states= document.querySelectorAll(".StateUnion")
    const sname= document.getElementsByTagName("h2")
    for(var i =0;i<sname.length;i++){
        let match =states[i].getElementsByTagName("h2")[0];
        if(match){
            let textvalue= match.textContent || match.innerHTML
            if(textvalue.toUpperCase().indexOf(searchbox)>-1){
                states[i].style.display="";
            }
            else{
                states[i].style.display="none";
            }
        }
    }
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 50,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });