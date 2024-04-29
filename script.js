let cartBar = document.getElementById('cartBar');
function opencartBar(){
    cartBar.style.display = 'flex';
}
function closecartBar(){
    cartBar.style.display = 'none';
}

document.getElementById('category-icon').addEventListener('click', function(){
  let Category = document.querySelector('.category');
  Category.classList.toggle('open');
})
// document.getElementById('category-icon').addEventListener('click', function(){
//   let Category = document.querySelector('.category');
//   Category.classList.toggle('close');
// })