document.addEventListener("DOMContentLoaded", () => {
    const categoryLinks = document.querySelectorAll(".category-link");
    categoryLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const category = link.getAttribute("data-category");
            fetchSingleCategory(category);
        });
    });

    fetchAllCategories();
});


async function fetchAllCategories() {
    try {
        const response = await fetch("categories.json");
        const data = await response.json();
        displayAllCategories(data.categories);
    } catch (error) {
        console.error("Error loading all categories:", error);
    }
}

function displayAllCategories(categories) {
    const container = document.querySelector(".categories-container");
    container.innerHTML = ""; 

    categories.forEach(category => {
        category.items.forEach(item => {
            const itemDiv = document.createElement("div");
            itemDiv.className = "item";

            itemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
            `;
            container.appendChild(itemDiv);
        });
    });
}

async function fetchSingleCategory(categoryName) {
    try {
        const response = await fetch("categories.json");
        const data = await response.json();

        const category = data.categories.find(cat => cat.name === categoryName);
        if (category) {
            displaySingleCategory(category);
        } else {
            console.warn("Category not found:", categoryName);
        }
    } catch (error) {
        console.error("Error loading category:", categoryName, error);
    }
}

function displaySingleCategory(category) {
    const container = document.querySelector(".categories-container");
    container.innerHTML = ""; 

    category.items.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "item";

        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        `;
        container.appendChild(itemDiv);
    });
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

