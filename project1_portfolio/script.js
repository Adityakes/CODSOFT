// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth reveal on scroll
const faders = document.querySelectorAll('.fade-in');
const obs = new IntersectionObserver(entries => {
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
},{threshold:0.12});
faders.forEach(f=>obs.observe(f));

// Contact form demo
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMsg = document.getElementById('formMsg');
  if(!name || !email || !message){ formMsg.textContent='Please fill all fields.'; return; }
  formMsg.textContent='Message ready to send (demo). Connect backend for real email.';
  setTimeout(()=>{ this.reset(); },900);
});

// Smooth scroll for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});
