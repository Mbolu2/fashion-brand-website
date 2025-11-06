document.addEventListener('DOMContentLoaded', function() {
  initCollectionCards();
  initNewsletterForm();
  initScrollAnimations();
});

function initCollectionCards() {
  const cards = document.querySelectorAll('.collection-card');

  cards.forEach((card) => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
}

function initNewsletterForm() {
  const form = document.getElementById('newsletterForm');

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value;

      if (email) {
        alert(`Thank you for subscribing with: ${email}`);
        emailInput.value = '';
      }
    });
  }
}

function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  const elements = document.querySelectorAll(
    '.collection-card, .testimonial-card, .section-title, .section-subtitle'
  );

  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}
