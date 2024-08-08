document.addEventListener("DOMContentLoaded", () => {
    filterSelection('all');
  });
  
  function filterSelection(category) {
    const containers = document.querySelectorAll('.jcontainer');
    
    if (category === 'all') {
      containers.forEach(container => {
        container.style.display = 'flex';
      });
    } else {
      containers.forEach(container => {
        if (container.getAttribute('data-') === category) {
          container.style.display = 'flex';
        } else {
          container.style.display = 'none';
        }
      });
    }
  }


//   Headers Effect
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelectorAll(".titleHeaders").forEach(element => {
  element.onmouseover = event => {  
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return event.target.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
      
      if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 30);
  };
});


  

document.querySelectorAll('.skill-box').forEach(box => {
  box.addEventListener('click', function() {
      document.querySelectorAll('.skill-box').forEach(b => b.style.display = 'none');
      document.querySelector(`#${this.id.replace('Box', 'Details')}`).style.display = 'flex';
  });
});

document.querySelectorAll('.back-button').forEach(button => {
  button.addEventListener('click', function() {
      document.querySelectorAll('.skill-details').forEach(details => details.style.display = 'none');
      document.querySelectorAll('.skill-box').forEach(box => box.style.display = 'block');
  });
});