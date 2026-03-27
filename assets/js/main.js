const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('glass-header');
        navbar.classList.remove('bg-transparent', 'py-5');
    } else {
        navbar.classList.remove('glass-header');
        navbar.classList.add('bg-transparent', 'py-5');
    }
});

const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
const iconMenu = document.getElementById('icon-menu');
const iconClose = document.getElementById('icon-close');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    iconMenu.classList.toggle('hidden');
    iconClose.classList.toggle('hidden');
});

document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
        iconMenu.classList.remove('hidden');
        iconClose.classList.add('hidden');
    });
});

const categories = ["All", "Switches & Routers", "Wireless", "Firewall", "SMB", "Unified Communication", "Servers & Storage", "Power Solutions"];

const partners = [
    { name: "Cisco Systems", src: "./assets/images/cisco system logo.webp", categories: ["Switches & Routers"] },
    { name: "Cisco Meraki", src: "./assets/images/Cisco Meraki logo.webp", categories: ["Switches & Routers"] },
    { name: "Juniper Networks", src: "./assets/images/juniper logo.webp", categories: ["Switches & Routers"] },
    { name: "Huawei Technologies", src: "./assets/images/huawei logo.webp", categories: ["Switches & Routers"] },
    { name: "Arista Networks", src: "./assets/images/Arista Networks logo.webp", categories: ["Switches & Routers"] },
    { name: "Extreme Networks", src: "./assets/images/Extreme Networks logo.webp", categories: ["Switches & Routers"] },
    { name: "Hewlett Packard Enterprise", src: "./assets/images/Hewlett Packard Enterprise logo.webp", categories: ["Switches & Routers"] },
    { name: "Dell Technologies", src: "./assets/images/dell logo.webp", categories: ["Switches & Routers", "Firewall", "Servers & Storage"] },
    { name: "MikroTik", src: "./assets/images/mikrotik logo.webp", categories: ["Switches & Routers", "SMB"] },
    { name: "TP-Link", src: "./assets/images/tp-link logo.webp", categories: ["Switches & Routers", "SMB"] },
    { name: "D-Link", src: "./assets/images/Dlink logo.webp", categories: ["Switches & Routers", "SMB"] },
    { name: "Aruba Networks", src: "./assets/images/arubanetworks logo.webp", categories: ["Wireless"] },
    { name: "Ruckus Networks", src: "./assets/images/ruckusnetworks logo.webp", categories: ["Wireless"] },
    { name: "Cambium Networks", src: "./assets/images/Cambium Networks logo.webp", categories: ["Wireless"] },
    { name: "Ubiquiti", src: "./assets/images/Ubiquiti Logo.webp", categories: ["Wireless"] },
    { name: "Ruijie Networks", src: "./assets/images/Ruijie Networks logo.webp", categories: ["Wireless"] },
    { name: "Cisco", src: "./assets/images/cisco logo.webp", categories: ["Firewall", "Unified Communication"] },
    { name: "Fortinet", src: "./assets/images/fortinet logo.webp", categories: ["Firewall"] },
    { name: "Sophos", src: "./assets/images/Sophos logo.webp", categories: ["Firewall"] },
    { name: "SONICWALL", src: "./assets/images/SONICWALL logo.webp", categories: ["Firewall"] },
    { name: "Checkpoint", src: "./assets/images/Checkpoint logo.webp", categories: ["Firewall"] },
    { name: "Netgear", src: "./assets/images/Netgear logo.webp", categories: ["SMB"] },
    { name: "Avaya", src: "./assets/images/avaya logo.webp", categories: ["Unified Communication"] },
    { name: "Yealink", src: "./assets/images/Yealink logo.webp", categories: ["Unified Communication"] },
    { name: "Grandstream", src: "./assets/images/Grandstream logo.webp", categories: ["Unified Communication"] },
    { name: "HP", src: "./assets/images/hp logo.webp", categories: ["Servers & Storage"] },
    { name: "IBM", src: "./assets/images/IBM logo.webp", categories: ["Servers & Storage"] },
    { name: "Inspur", src: "./assets/images/Inspur logo.webp", categories: ["Servers & Storage"] },
    { name: "QNAP", src: "./assets/images/QNAP logo.webp", categories: ["Servers & Storage"] },
    { name: "NVIDIA", src: "./assets/images/nvidia logo.webp", categories: ["Servers & Storage"] },
    { name: "Seagate", src: "./assets/images/Seagate logo.webp", categories: ["Servers & Storage"] },
    { name: "Schneider Electric", src: "./assets/images/Schneider Electric logo.webp", categories: ["Power Solutions"] },
    { name: "APC", src: "./assets/images/APC Logo.webp", categories: ["Power Solutions"] },
    { name: "Brocade", src: "./assets/images/Brocade logo.webp", categories: ["Servers & Storage"] },
    { name: "Synology", src: "./assets/images/Synology logo.webp", categories: ["Servers & Storage"] },
    { name: "H3C", src: "./assets/images/H3C_logo.webp", categories: ["Switches & Routers"] },
    { name: "Allied Telesis", src: "./assets/images/AlliedTelesis logo.webp", categories: ["Switches & Routers"] },
    { name: "Lenovo", src: "./assets/images/Lenovo logo.webp", categories: ["Servers & Storage"] },
    { name: "Vertiv", src: "./assets/images/vertiv logo.webp", categories: ["Power Solutions"] }
];

const filterContainer = document.getElementById('logo-filters');
const logoGrid = document.getElementById('logo-grid');
let activeCategory = "All";

function renderFilters() {
    filterContainer.innerHTML = '';
    categories.forEach(category => {
        const btn = document.createElement('button');
        btn.textContent = category;
        btn.className = `px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
            activeCategory === category 
            ? "bg-blue-600 text-white shadow-md" 
            : "bg-transparent text-slate-600 hover:text-blue-600 hover:bg-slate-100"
        }`;
        btn.onclick = () => {
            activeCategory = category;
            renderFilters(); 
            renderLogos();   
        };
        filterContainer.appendChild(btn);
    });
}

function renderLogos() {
    logoGrid.innerHTML = '';
    partners.forEach(partner => {
        const isActive = activeCategory === "All" || partner.categories.includes(activeCategory);
        
        const div = document.createElement('div');
        div.className = `w-[70px] h-[40px] sm:w-[85px] sm:h-[55px] lg:w-[95px] lg:h-[60px] flex items-center justify-center transition-all duration-300 transform ${
            isActive ? "opacity-100 scale-100" : "opacity-40 scale-90"
        }`;

        const img = document.createElement('img');
        img.src = partner.src;
        img.alt = partner.name;
        img.loading = "lazy";
        img.className = `max-h-full max-w-full object-contain mix-blend-multiply transition-all duration-300 ${
            isActive ? "grayscale-0 hover:scale-110" : "grayscale"
        }`;

        div.appendChild(img);
        logoGrid.appendChild(div);
    });
}

renderFilters();
renderLogos();