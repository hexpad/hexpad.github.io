document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        { name: "alpha-beta-tracker", url: "https://hexpad.github.io/alpha-beta-tracker/", category: "EW", description: "Simple 2D object tracking in C++ using an Alpha-Beta filter. Reads measurements from a text file and predicts future positions." },
        { name: "radar-range", url: "https://hexpad.github.io/radar-range/", category: "EW", description: "calculates the maximum detection range of a radar using the basic radar range equation" },
        { name: "rcs-calculator", url: "https://hexpad.github.io/rcs-calculator/", category: "EW", description: "calculates the radar cross section for different geometric shapes" },
        { name: "raster-scanner", url: "https://hexpad.github.io/raster-scanner/", category: "EW", description: "generates 3D coordinates for a raster scan pattern based on user-defined parameters" },
        { name: "spiral-scanner", url: "https://hexpad.github.io/spiral-scanner/", category: "EW", description: "simulates a 3D spiral scanning pattern using an Archimedean spiral" },
        { name: "helical-scanner", url: "https://hexpad.github.io/helical-scanner/", category: "EW", description: "simulates a helical scanning motion and saves the calculated 3D coordinates" },
        { name: "DistanceBasedServo", url: "https://hexpad.github.io/DistanceBasedServo/", category: "Microcontrollers", description: "Controls a servo motor based on an ultrasonic sensor" },
        { name: "opendns-updater", url: "https://hexpad.github.io/opendns-updater/", category: "Network", description: "updates your OpenDNS account with your new IP address" },
        { name: "TransferFunction_arduino", url: "https://hexpad.github.io/TransferFunction_arduino/", category: "Control Systems", description: "Implementation of a given transfer function for arduino" },
        { name: "nodal-analysis", url: "https://hexpad.github.io/nodal-analysis/", category: "Circuit Analysis", description: "a simple program that quickly calculates the node voltage and the currents in a simple circuit" },
        { name: "nodal-analysis-2", url: "https://hexpad.github.io/nodal-analysis-2/", category: "Circuit Analysis", description: "performs nodal analysis on a two-node electrical circuit with two voltage sources and five resistors" },
        
        
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
