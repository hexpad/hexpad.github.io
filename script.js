document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        { name: "raster-scanner", url: "https://hexpad.github.io/raster-scanner/", category: "Radar Scanning Algorithms", description: "generates 3D coordinates for a raster scan pattern based on user-defined parameters" },
        { name: "spiral-scanner", url: "https://hexpad.github.io/spiral-scanner/", category: "Radar Scanning Algorithms", description: "simulates a 3D spiral scanning pattern using an Archimedean spiral" },
        { name: "helical-scanner", url: "https://hexpad.github.io/helical-scanner/", category: "Radar Scanning Algorithms", description: "simulates a helical scanning motion and saves the calculated 3D coordinates" },
        { name: "DistanceBasedServo", url: "https://hexpad.github.io/DistanceBasedServo/", category: "Microcontrollers", description: "Controls a servo motor based on an ultrasonic sensor" },
        { name: "opendns-updater", url: "https://hexpad.github.io/opendns-updater/", category: "Network", description: "updates your OpenDNS account with your new IP address" },
        { name: "TransferFunction_arduino", url: "https://hexpad.github.io/TransferFunction_arduino/", category: "Control Systems", description: "Implementation of a given transfer function for arduino" },
        { name: "task-force", url: "https://hexpad.github.io/task-force/", category: "Task Management", description: "Keeps a list of things. Can mark them as completed." },
        
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
