document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        { name: "dsp-spectrum-analyzer", url: "https://hexpad.github.io/dsp-spectrum-analyzer/", category: "Signal Processing", description: "Digital Signal Processing project implementing a spectrum analyzer from scratch" },
        { name: "mini-air-defense", url: "https://hexpad.github.io/mini-air-defense/", category: "Embedded Systems", description: "Mini autonomous air defense system. Scans the area with a pan-tilt gimbal, locks onto targets, and neutralizes when in range. Built with ESP32, HC-SR04, and 2x SG90" },
        { name: "raspberry-pi-chat", url: "https://hexpad.github.io/raspberry-pi-chat-hub/", category: "Circuits & Tools", description: "Terminal-based LAN chat in C++ using a Raspberry Pi as message hub" },
        { name: "multi-protocol-analyzer", url: "https://hexpad.github.io/uart-spi-i2c-analyzer/", category: "Embedded Systems", description: "Shows how UART, SPI, and I2C communication works by using a C++ simulation and ESP32 code" },
        { name: "crc-8-validator", url: "https://hexpad.github.io/crc-8-validator/", category: "Embedded Systems", description: "A lightweight, deterministic CRC-8 implementation for data integrity validation in embedded systems" },
        { name: "doppler-radar-simulator", url: "https://hexpad.github.io/doppler-radar-simulator/", category: "Radar", description: "doppler radar simulator written in C++" },
        { name: "radar-simulator", url: "https://hexpad.github.io/radar-simulator/", category: "Radar", description: "A C++ radar simulator with dynamic targets using Raylib" },
        { name: "alpha-beta-tracker", url: "https://hexpad.github.io/alpha-beta-tracker/", category: "Detection & Tracking", description: "Simple 2D object tracking in C++ using an Alpha-Beta filter. Reads measurements from a text file and predicts future positions" },
        { name: "radar-range", url: "https://hexpad.github.io/radar-range/", category: "Radar", description: "calculates the maximum detection range of a radar using the basic radar range equation" },
        { name: "rcs-calculator", url: "https://hexpad.github.io/rcs-calculator/", category: "Radar", description: "calculates the radar cross section for different geometric shapes" },
        { name: "raster-scanner", url: "https://hexpad.github.io/raster-scanner/", category: "Detection & Tracking", description: "generates 3D coordinates for a raster scan pattern based on user-defined parameters" },
        { name: "spiral-scanner", url: "https://hexpad.github.io/spiral-scanner/", category: "Detection & Tracking", description: "simulates a 3D spiral scanning pattern using an Archimedean spiral" },
        { name: "helical-scanner", url: "https://hexpad.github.io/helical-scanner/", category: "Detection & Tracking", description: "simulates a helical scanning motion and saves the calculated 3D coordinates" },
        { name: "distance-based-servo", url: "https://hexpad.github.io/DistanceBasedServo/", category: "Embedded Systems", description: "Controls a servo motor based on an ultrasonic sensor" },
        { name: "opendns-updater", url: "https://hexpad.github.io/opendns-updater/", category: "Circuits & Tools", description: "updates your OpenDNS account with your new IP address" },
        { name: "transfer-function-arduino", url: "https://hexpad.github.io/TransferFunction_arduino/", category: "Embedded Systems", description: "Implementation of a given transfer function for arduino" },
        { name: "circuit-solver", url: "https://hexpad.github.io/circuit-solver/", category: "Circuits & Tools", description: "A simple C++ program to solve resistive circuits using Modified Nodal Analysis." },
        
        
    ];

    const portfolio = document.querySelector(".projects");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    const portfolioTitle = document.getElementById("portfolioTitle");

    function renderProjects(filter = "all") {
        portfolio.innerHTML = "";
        const filtered = filter === "all" ? projects : projects.filter(p => p.category === filter);

        filtered.forEach(project => {
            const div = document.createElement("div");
            div.classList.add("project");
            div.innerHTML = `
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <p><strong>Category:</strong> ${project.category}</p>           
            `;
            div.addEventListener("click", () => {
                window.open(project.url, "_self");
            });
            portfolio.appendChild(div);
        });

        if (filtered.length === 0) {
            const p = document.createElement("p");
            p.textContent = "No projects in this category.";
            portfolio.appendChild(p);
        }
    }

    renderProjects();

    // Category filtering by click and dynamic heading
    document.querySelectorAll("#sidebar .category").forEach(cat => {
        cat.addEventListener("click", () => {
            if (cat.dataset.category === "contact") {
                document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
            } else {
                renderProjects(cat.dataset.category);
                portfolioTitle.textContent = cat.dataset.category === "all" ? "Projects" : cat.dataset.category;
            }
            sidebar.style.left = "-250px";
            overlay.style.display = "none";
        });
    });

    // Hamburger Menu
    const menuToggle = document.getElementById("menuToggle");

    menuToggle.addEventListener("click", () => {
        sidebar.style.left = "0";
        overlay.style.display = "block";
    });

    overlay.addEventListener("click", () => {
        sidebar.style.left = "-250px";
        overlay.style.display = "none";
    });
});
