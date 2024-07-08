// header
let humborger = document.querySelector('.humborger');
let link = document.querySelector('header nav>ul');

humborger.addEventListener('click', () =>{
  humborger.classList.toggle('active');
  link.classList.toggle('active');
})

document.querySelectorAll('header ul>li>a').forEach(n => n.addEventListener('click', ()=>{
  humborger.classList.remove('active');
  link.classList.remove('active');
}))

// menu
function showSection(sectionId) {
  var sections = document.querySelectorAll('.menu-section');
  sections.forEach(function(section) {
      if (section.id === sectionId || sectionId === 'all') {
          section.style.display = 'block';
      } else {
          section.style.display = 'none';
      }
  });
}

// عرض قسم كل الأطباق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
  showSection('all');
});

// alert
document.getElementById('reservation-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('تم إرسال طلب الحجز بنجاح!');
});


