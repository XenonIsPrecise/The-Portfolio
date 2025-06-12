document.addEventListener("DOMContentLoaded", () => {
  const savedCategory = localStorage.getItem('selectedJourneyFilter') || 'FOJ'; // <-- default changed
  filterSelection(savedCategory);

  const journeySection = document.getElementById('Journey');
  if (journeySection) {
    journeySection.scrollIntoView({ behavior: 'smooth' });
  }
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


  


// Scroll to top button for the footer
window.addEventListener("scroll", () => {
  const footer = document.querySelector(".footer");
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.body.offsetHeight;

  if (scrollY + windowHeight >= documentHeight - 10) {
    footer.classList.add("visible");
  } else {
    footer.classList.remove("visible");
  }
});


// Popup functionality


function openPopup(id) {
  document.getElementById(id).style.display = "block";
}

function closePopup(id) {
  document.getElementById(id).style.display = "none";
}

// Optional: Close popup if user clicks outside of it
window.addEventListener("click", function (event) {
  const popups = document.querySelectorAll(".popup");
  popups.forEach(popup => {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});


//Skills Section
document.addEventListener("DOMContentLoaded", () => {
  let allOpen = false;

  const headers = document.querySelectorAll(".skill-header");
  const categories = document.querySelectorAll(".skill-category");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      allOpen = !allOpen;

      categories.forEach(cat => {
        if (allOpen) {
          cat.classList.add("open");
        } else {
          cat.classList.remove("open");
        }
      });
    });
  });
});

// function toggleSkill(headerElement) {
//   const category = headerElement.parentElement;
//   const isOpen = category.classList.contains('open');

//   // Close all
//   document.querySelectorAll('.skill-category').forEach(cat => {
//     cat.classList.remove('open');
//   });

//   // Open clicked if it wasn't already open
//   if (!isOpen) {
//     category.classList.add('open');
//   }
// }



// Skill Certificate Modal
function openSkillCertModal(event, imageSrc, title) {
  event.preventDefault();
  const modal = document.getElementById('skillCertModal');
  const img = document.getElementById('skillCertImage');
  const certTitle = document.getElementById('certTitle');
  const downloadBtn = document.getElementById('downloadBtn');

  img.src = imageSrc;
  certTitle.innerText = title;
  downloadBtn.href = imageSrc;

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Prevent background scroll
}

function closeSkillCertModal() {
  const modal = document.getElementById('skillCertModal');
  modal.style.display = 'none';
  document.body.style.overflow = ''; // Re-enable background scroll
}

function backgroundClickClose(event) {
  const modalContent = document.querySelector('.modal-content');
  if (!modalContent.contains(event.target)) {
    closeSkillCertModal();
  }
}

