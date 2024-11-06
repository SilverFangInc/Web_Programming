setTimeout(changing_Stuffs, 3000);

//changes images and text to show off different pictures
function changing_Stuffs(imgNum) {
   if (imgNum == 0) {
        let img = document.getElementById("dog_img");
        img.src = "https://images.pexels.com/photos/6209458/pexels-photo-6209458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
        let p = document.getElementById("dog_name");
        p.innerHTML = "Bigger Christmas Car";
     } else if (imgNum == -1) {
        let img = document.getElementById("dog_img");
        img.src = "https://images.pexels.com/photos/6119572/pexels-photo-6119572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
        let p = document.getElementById("dog_name");
        p.innerHTML = "Tree and Chair";
    }
}