
    // let lastScrollTop = 0;
    // const header = document.querySelector('.header');
    // header.classList.remove('hidden');
    // window.addEventListener('scroll', function() {
    //     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //     if (scrollTop > lastScrollTop) {
    //         // Scroll down
    //         header.classList.add('hidden');
    //     } else {
    //         // Scroll up
    //         header.classList.remove('hidden');
    //     }
    //     lastScrollTop = scrollTop;
    // });


    const sendButton = document.getElementById('send-button');
sendButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert('Message sent!');
});

// const ModalOn=document.getElementsByClassName('buy-ticket-btn');
// ModalOn.onclick=function(event){
//     event.preventDefault();
//     const modal=document.getElementById('ticketmodal');
//     const openmodal=document.getElementById("modal-container");
//     modal.style.display='block';
//     openmodal.style.animation='SlideInOnTop .4s';
// };

// const modaloff=document.getElementById('close-modal-btn');
// modaloff.addEventListener('click',function(event){
//     event.preventDefault();
//     const modal=document.getElementById('ticketmodal');
//     const closemodal=document.getElementById("modal-container");
//     closemodal.style.animation='SlideOutOnTop .4s';
//     setTimeout(function(){
//         modal.style.display='none';
//     },200);

// });

function closeModal()
{
    const modal=document.getElementById('ticketmodal');
    const closemodal=document.getElementById("modal-container");
    closemodal.style.animation='SlideOutOnTop .4s';
    setTimeout(function(){
        modal.style.display='none';
    },200);
}


function openModal(){
    const modal=document.getElementById('ticketmodal');
    const openmodal=document.getElementById("modal-container");
    modal.style.display='block';
    openmodal.style.animation='SlideInOnTop .4s';
}

var modal = document.getElementById('ticketmodal');
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide-img");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000);    
}

