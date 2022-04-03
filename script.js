const toggles = document.querySelectorAll(".toggle");
const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");

toggles.forEach(toggle => toggle.addEventListener("change", (e)=>{
  e.preventDefault();

  slideChange(e.target);
}))

function slideChange(checkedSlide){
  if(good.checked && cheap.checked && fast.checked){
    if(good === checkedSlide){
      fast.checked = false;
    }

    if(cheap === checkedSlide){
      good.checked  = false;
    }

    if(fast === checkedSlide){
      cheap.checked = false;
    }
  }
}
