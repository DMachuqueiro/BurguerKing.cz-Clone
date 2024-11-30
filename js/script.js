document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    // Função para abrir a barra lateral
    function openSidebar() {
        sidebar.classList.add("sidebar-active");
        overlay.classList.add("overlay-active");
        menuIcon.classList.replace("fa-bars", "fa-times"); // Muda para o ícone de fechar (X)
    }

    // Função para fechar a barra lateral
    function closeSidebar() {
        sidebar.classList.remove("sidebar-active");
        overlay.classList.remove("overlay-active");
        menuIcon.classList.replace("fa-times", "fa-bars"); // Muda de volta para o ícone de menu
    }

    // Eventos de clique
    menuIcon.addEventListener("click", function () {
        if (sidebar.classList.contains("sidebar-active")) {
            closeSidebar();
        } else {
            openSidebar();
        }
    });
    overlay.addEventListener("click", closeSidebar);
});




//Restaurants


document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            // Remove a classe "active" de todas as abas
            tabs.forEach(t => t.classList.remove("active"));
            // Adiciona a classe "active" à aba clicada
            this.classList.add("active");

            // Atualize o conteúdo conforme necessário
            // Aqui você pode alterar o conteúdo conforme a aba selecionada
        });
    });
});

function showTab(tabName) {
    // Remove a classe "active" de todas as abas
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));

    // Adiciona a classe "active" à aba clicada
    const selectedTab = document.querySelector(`.tab[onclick="showTab('${tabName}')"]`);
    selectedTab.classList.add('active');

    // Mover a linha ativa
    const tabLine = document.querySelector('.tab-line');
    if (tabName === 'nearby') {
        tabLine.style.left = '0';
    } else if (tabName === 'favorites') {
        tabLine.style.left = '50%';
    }

    // Alternar conteúdo das abas
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');
}




//Contact js



// JavaScript for form validation and CSV saving
function handleFormSubmission(event) {
    event.preventDefault();

    // Getting form values
    const name = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const feedback = document.getElementById("feedback").value;

    // Custom validation messages
    if (!/^[A-Z][a-zA-Z ]*$/.test(name)) {
        alert("Name should start with a capital letter.");
        return;
    }
    if (age < 0) {
        alert("Age cannot be negative.");
        return;
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        alert("Please enter a valid email address with '@' symbol.");
        return;
    }

    // CSV format data
    const feedbackData = `${name},${gender},${age},${email},"${feedback}"\n`;

    // Download as CSV file
    const blob = new Blob([feedbackData], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("href", url);
    a.setAttribute("download", "feedback.csv");
    a.click();

    // Reset form after submission
    document.getElementById("feedback-form").reset();
}



//newBurguers



// Open the image popup
function openImagePopup(image) {
    const popup = document.getElementById("imagePopup");
    const popupImage = document.getElementById("popupImage");

    popup.style.display = "flex";
    popupImage.src = image.src;
    popupImage.dataset.zoomLevel = 1; // Inicializa o nível de zoom
    popupImage.style.transform = "scale(1)"; // Reset o zoom inicial
}

// Close the image popup
function closeImagePopup() {
    const popup = document.getElementById("imagePopup");
    popup.style.display = "none";
}

// Toggle zoom on image
document.getElementById("popupImage").addEventListener("click", function(event) {
    event.stopPropagation(); // Prevent closing the popup when clicking on the image
    
    let zoomLevel = parseFloat(this.dataset.zoomLevel) || 1;
    zoomLevel += 0.5; // Incrementa o nível de zoom
    if (zoomLevel > 2.5) { // Define um limite máximo para o zoom, ajuste conforme desejado
        zoomLevel = 1; // Redefine o zoom se ultrapassar o limite
    }
    this.style.transform = `scale(${zoomLevel})`;
    this.dataset.zoomLevel = zoomLevel; // Atualiza o nível de zoom
});



// Countdown from 7 days in milliseconds
const countdownDuration = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
const countdownElement = document.getElementById("countdown");

// Function to start the countdown
function startCountdown(duration) {
    const endTime = Date.now() + duration;

    function updateCountdown() {
        const now = Date.now();
        const timeLeft = endTime - now;

        if (timeLeft <= 0) {
            countdownElement.textContent = "00:00:00:00";
            clearInterval(countdownInterval);
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownElement.textContent = `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    // Update every second
    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call to display immediately
}

// Start the countdown
startCountdown(countdownDuration);

