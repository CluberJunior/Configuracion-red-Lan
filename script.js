// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeImages();
    initializeTimeline();
    initializeStandards();
    initializeScrollAnimations();
});

// Initialize context images
function initializeImages() {
    // Context image - empty classroom where the network was installed
    const contextContainer = document.getElementById('context-image-container');
    contextContainer.innerHTML = '<img src="images/aula-vacia.png" alt="Aula vacía donde se realizó el trabajo" style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px;">';


    // Logical diagram - use the real Packet Tracer image
    const logicalDiagram = document.getElementById('logical-diagram-container');
    logicalDiagram.innerHTML = '<img src="images/diagrama-packet-tracer.png" alt="Diagrama lógico de red" style="width: 100%; height: auto; background: #f8fafc; padding: 20px; border-radius: 8px;">';


    // Physical gallery
    const physicalGallery = document.getElementById('physical-gallery');

    // First item - real switch photo
    const switchItem = document.createElement('div');
    switchItem.className = 'gallery-item';
    switchItem.innerHTML = `
        <img src="images/switch.png" alt="Ubicación del switch" style="width: 100%; height: 100%; object-fit: cover;">
        <div class="gallery-caption">Ubicación del switch</div>
    `;
    physicalGallery.appendChild(switchItem);

    // Second item - real distribution point photo
    const distribItem = document.createElement('div');
    distribItem.className = 'gallery-item';
    distribItem.innerHTML = `
        <img src="images/punto-distribucion.png" alt="Punto de distribución" style="width: 100%; height: 100%; object-fit: cover;">
        <div class="gallery-caption">Punto de distribución</div>
    `;
    physicalGallery.appendChild(distribItem);

    // Configuration images
    const configImages = document.getElementById('config-images');

    // First config image - real IP configuration screenshot
    const configIPItem = document.createElement('div');
    configIPItem.className = 'config-image-item';
    configIPItem.innerHTML = '<img src="images/config-ip.png" alt="Configuración IPv4 en Windows" style="width: 100%; height: auto;">';
    configImages.appendChild(configIPItem);

    // Second config image - real ping test
    const pingItem = document.createElement('div');
    pingItem.className = 'config-image-item';
    pingItem.innerHTML = '<img src="images/ping-test.png" alt="Prueba de ping exitosa" style="width: 100%; height: auto;">';
    configImages.appendChild(pingItem);

    // Third config image - team configuring IPs
    const teamConfigItem = document.createElement('div');
    teamConfigItem.className = 'config-image-item';
    teamConfigItem.innerHTML = '<img src="images/equipo-configurando.png" alt="Equipo configurando IPs" style="width: 100%; height: auto;">';
    configImages.appendChild(teamConfigItem);
}

// Initialize timeline
function initializeTimeline() {
    const timeline = document.getElementById('timeline-container');
    const steps = [
        {
            number: 1,
            title: 'Conexión del cable UTP a los equipos',
            description: 'Se realizó la conexión inicial del cableado UTP a cada uno de los equipos del aula, asegurando que los puertos Ethernet estuvieran libres de polvo y en buen estado.',
            color: '#3b82f6',
            hasImage: true,
            imagePath: 'images/conexion-cable.jpg'
        },
        {
            number: 2,
            title: 'Instalación del cableado en canaletas',
            description: 'El cableado se organizó y protegió mediante canaletas plásticas, siguiendo las normas de cableado estructurado para mantener el orden y facilitar el mantenimiento.',
            color: '#8b5cf6',
            hasImage: true,
            imagePath: 'images/instalacion-canaletas.png'
        },
        {
            number: 3,
            title: 'Conexión de los equipos al switch',
            description: 'Se conectaron todos los cables al switch, verificando que cada puerto quedara correctamente insertado y las luces de enlace se encendieran.',
            color: '#10b981',
            hasImage: true,
            imagePath: 'images/equipos-conectados.png'
        }
    ];

    steps.forEach(step => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        const imageContent = step.hasImage
            ? `<img src="${step.imagePath}" alt="${step.title}" style="width: 100%; height: 100%; object-fit: cover;">`
            : createPlaceholderImage(step.title, step.color, 'photo');

        item.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-number">${step.number}</div>
                <h4 class="timeline-title">${step.title}</h4>
                <p class="timeline-description">${step.description}</p>
            </div>
            <div class="timeline-image">
                ${imageContent}
            </div>
        `;
        timeline.appendChild(item);
    });
}

// Initialize standards section
function initializeStandards() {
    const standardsGrid = document.getElementById('standards-grid');
    const standards = [
        { label: 'Pelado del cable UTP', icon: '🔧', hasImage: true, imagePath: 'images/pelado-cable.png' },
        { label: 'Crimpado RJ45', icon: '🔨', hasImage: true, imagePath: 'images/crimpado-cables.png' },
        { label: 'Conector terminado', icon: '🔌', hasImage: true, imagePath: 'images/conector-terminado.png' },
        { label: 'Pruebas con tester', icon: '⚡', hasImage: true, imagePath: 'images/test-tester.jpg' }
    ];

    standards.forEach((standard, index) => {
        const card = document.createElement('div');
        card.className = 'standard-card';
        const imageContent = standard.hasImage
            ? `<img src="${standard.imagePath}" alt="${standard.label}" style="width: 100%; height: 100%; object-fit: cover;">`
            : createPlaceholderImage(standard.label, standard.color, 'detail');

        card.innerHTML = `
            <div class="standard-image">
                ${imageContent}
            </div>
            <div class="standard-label">${standard.label}</div>
        `;
        standardsGrid.appendChild(card);
    });
}

// Create placeholder image SVG
function createPlaceholderImage(text, color, type) {
    const icons = {
        network: `<path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" fill="white" opacity="0.3"/>
                  <circle cx="12" cy="12" r="3" fill="white"/>
                  <path d="M12 2v7m0 6v7M2 7l7 5m6 0l7-5M2 17l7-5m6 0l7 5" stroke="white" stroke-width="1.5"/>`,
        classroom: `<rect x="4" y="6" width="16" height="12" rx="1" stroke="white" stroke-width="1.5" fill="none"/>
                    <path d="M4 10h16M8 6v12M16 6v12" stroke="white" stroke-width="1" opacity="0.5"/>`,
        photo: `<circle cx="8" cy="8" r="2" fill="white" opacity="0.7"/>
                <path d="M3 16l5-5 4 4 5-7 3 3v5H3v-0z" fill="white" opacity="0.5"/>`,
        screenshot: `<rect x="3" y="5" width="18" height="14" rx="1" stroke="white" stroke-width="1.5" fill="none"/>
                     <path d="M3 8h18M6 11h8M6 14h12" stroke="white" stroke-width="1" opacity="0.6"/>`,
        detail: `<path d="M12 2l3 7h7l-5.5 4.5L19 21l-7-5-7 5 2.5-7.5L2 9h7z" fill="white" opacity="0.6"/>`
    };

    return `
        <svg viewBox="0 0 24 24" style="width: 100%; height: 100%; background: linear-gradient(135deg, ${color} 0%, ${adjustColor(color, -20)} 100%);">
            <g opacity="0.9">
                ${icons[type] || icons.photo}
            </g>
            <text x="12" y="22" text-anchor="middle" fill="white" font-size="2.5" font-weight="600" opacity="0.9" font-family="Inter, sans-serif">
                ${text}
            </text>
        </svg>
    `;
}

// Adjust color brightness
function adjustColor(color, percent) {
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
        (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + (B < 255 ? B < 1 ? 0 : B : 255))
        .toString(16).slice(1);
}

// Create network diagram
function createNetworkDiagram() {
    return `
        <svg viewBox="0 0 800 600" style="width: 100%; height: auto; background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border-radius: 8px;">
            <!-- Switch central -->
            <rect x="350" y="250" width="100" height="60" rx="5" fill="#3b82f6" stroke="#1e40af" stroke-width="2"/>
            <text x="400" y="285" text-anchor="middle" fill="white" font-size="14" font-weight="600">SWITCH</text>
            
            <!-- Computers in star topology -->
            ${Array.from({ length: 11 }, (_, i) => {
        const angle = (i * 360 / 11) * Math.PI / 180;
        const radius = 200;
        const cx = 400 + radius * Math.cos(angle);
        const cy = 300 + radius * Math.sin(angle);

        return `
                    <!-- Line to switch -->
                    <line x1="400" y1="280" x2="${cx}" y2="${cy}" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5,5"/>
                    
                    <!-- Computer -->
                    <rect x="${cx - 30}" y="${cy - 20}" width="60" height="40" rx="3" fill="#8b5cf6" stroke="#6d28d9" stroke-width="2"/>
                    <rect x="${cx - 25}" y="${cy - 15}" width="50" height="25" rx="2" fill="#a78bfa"/>
                    <text x="${cx}" y="${cy + 5}" text-anchor="middle" fill="white" font-size="10" font-weight="600">PC ${i + 1}</text>
                `;
    }).join('')}
            
            <!-- Title -->
            <text x="400" y="40" text-anchor="middle" font-size="24" font-weight="700" fill="#1e40af">
                Topología de Red en Estrella
            </text>
            <text x="400" y="70" text-anchor="middle" font-size="16" fill="#64748b">
                11 equipos conectados a switch central
            </text>
        </svg>
    `;
}

// Scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Add smooth scroll for any internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}
