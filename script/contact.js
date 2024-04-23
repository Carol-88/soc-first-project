document.addEventListener('DOMContentLoaded', function () {
        const form = document.querySelector('form');
        form.addEventListener('submit', function (event) {
          event.preventDefault(); // Previene el envío del formulario

          const fullName = document.getElementById('full-name').value;
          const email = document.getElementById('email').value;
          const phone = document.getElementById('phone').value;
          const message = document.getElementById('message').value;

         
          if (fullName.toLowerCase() === 'ironhack') {
            alert('You cannot be Ironhack, because I am Ironhack.');
            return;
          }

   
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
          }

         
          if (phone && !/^\d{9}$/.test(phone)) {
            alert('Please enter a valid phone number.');
            return;
          }

         
          if (!fullName || !email || !message) {
            alert('Please fill in all required fields.');
            return;
            }
            
          alert('Form submitted successfully!');
        });
      });