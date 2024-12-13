const img = document.querySelector(".box .image img");
const arrow_left= document.querySelector(".box .arrows .arrow-left i");
const arrow_right = document.querySelector(".box .arrows .arrow-right i");
let price = document.querySelector(".box .details .btn");
let number = document.querySelector(".box .header_box .menu ul li .number_cart")

let count = 0;
let i = 0;
arrow_right.addEventListener("click", () => {
    if (i < 5) {
        i++; // Increment first
    } else {
        i = 1; // Reset if limit is reached
    }
    img.src = `./photo/watch_${i}.png`; // Update image source
});
arrow_left.addEventListener("click", () => {
    if (i > 1) {
        i--; // Decrement
    } else {
        i = 5; // Reset to the last image if at the first image
    }
    img.src = `./photo/watch_${i}.png`; // Update image source
});

price.addEventListener("click",()=>{
    console.log("price");
    count++;
    number.textContent=count;

});

