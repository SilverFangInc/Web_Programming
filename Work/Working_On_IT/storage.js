function pet_Card() {

let pet_Card_Data = {
   name:  document.getElementById("pet_name").value,
   age:   document.getElementById("pet_age").value,
   breed: document.getElementById("pet_breed").value,
   info: document.getElementById("pet_info").value,
   image: document.getElementById("image_prev").src
};

localStorage.setItem("save_Info", JSON.stringify(pet_Card_Data));
alert("Info is saved");
}