 window.onload = function() {
            fetch('https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects')
            .then(response => response.json())
            .then(data => {
                // Filtrar el proyecto con uuid 1
                const project = data.find(p => p.uuid === '1');
                if (!project) {
                    alert('El proyecto con uuid 1 no existe en la API.');
                    return;
                }

                // Mostrar la información del proyecto
                document.getElementById('project-name').textContent = project.name;
                document.getElementById('project-description').textContent = project.description;
                document.getElementById('project-completed-on').textContent = project.completed_on;
                document.getElementById('project-image').src = project.image;
                document.getElementById('project-content').innerHTML = project.content;

                // Bonus: Seleccionar tres proyectos adicionales de manera aleatoria
                const otherProjects = data.filter(p => p.uuid !== '1');
                const randomProjects = [];
                while (randomProjects.length < 3 && otherProjects.length > 0) {
                    const randomIndex = Math.floor(Math.random() * otherProjects.length);
                    randomProjects.push(otherProjects[randomIndex]);
                    otherProjects.splice(randomIndex, 1);
                }

                const projectsSection = document.querySelector('.projects');
                randomProjects.forEach(p => {
                    const card = document.createElement('div');
                    card.className = 'card';
                    card.innerHTML = `
                        <img src="${p.image}" alt="${p.name}" />
                        <h4>${p.name}</h4>
                        <p>${p.description}</p>
                        <a href="#">Learn more</a>
                    `;
                    projectsSection.appendChild(card);
                });
            })
            .catch(error => console.error('Error fetching data:', error));
        };