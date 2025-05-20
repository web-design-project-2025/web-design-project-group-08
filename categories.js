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

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-bar");
    const searchButton = document.querySelector(".search-button");
    const resultsContainer = document.getElementById("search-results");

    let allItems = [];

    // 异步加载 JSON 数据
    async function fetchData() {
        try {
            const response = await fetch("data.json"); // 路径根据你放置的 JSON 文件而定
            const data = await response.json();

            // 把所有 items 展平成一个数组
            data.categories.forEach(category => {
                category.items.forEach(item => {
                    allItems.push({
                        name: item.name,
                        description: item.description,
                        image: item.image,
                        category: category.name
                    });
                });
            });
        } catch (error) {
            console.error("加载 JSON 失败:", error);
        }
    }

    // 搜索功能
    function searchDesserts(query) {
        const filtered = allItems.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase())
        );

        renderResults(filtered);
    }

    // 渲染结果
    function renderResults(results) {
        resultsContainer.innerHTML = "";

        results.forEach(item => {
            const div = document.createElement("div");
            div.className = "search-item";
            div.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="result-img"/>
                <div>
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <small>${item.category}</small>
                </div>
            `;
            resultsContainer.appendChild(div);
        });
    }

    // 点击按钮或输入框按回车搜索
    searchButton.addEventListener("click", () => {
        const query = searchInput.value.trim();
        searchDesserts(query);
    });

    searchInput.addEventListener("keydown", e => {
        if (e.key === "Enter") {
            searchDesserts(searchInput.value.trim());
        }
    });

    // 页面加载时抓取数据
    fetchData();
});

// ...existing code...
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-bar");
    const searchButton = document.querySelector(".search-button");
    const resultsContainer = document.getElementById("search-results");
    const mainContainer = document.querySelector(".categories-container");

    let allItems = [];

    // 异步加载 JSON 数据
    async function fetchData() {
        try {
            const response = await fetch("categories.json"); // 改为 categories.json
            const data = await response.json();

            // 把所有 items 展平成一个数组
            data.categories.forEach(category => {
                category.items.forEach(item => {
                    allItems.push({
                        name: item.name,
                        description: item.description,
                        image: item.image,
                        category: category.name
                    });
                });
            });
        } catch (error) {
            console.error("加载 JSON 失败:", error);
        }
    }

    // 搜索功能
    function searchDesserts(query) {
        const filtered = allItems.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase())
        );

        renderResults(filtered);
    }
// ...existing code...
function renderResults(results) {
    const mainContainer = document.querySelector(".categories-container");
    mainContainer.innerHTML = "";

    results.forEach(item => {
        const div = document.createElement("div");
        div.className = "item";
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="result-img"/>
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <small>${item.category}</small>
        `;
        mainContainer.appendChild(div);
    });
}
// ...existing code...
    // 点击按钮或输入框按回车搜索
    searchButton.addEventListener("click", () => {
        const query = searchInput.value.trim();
        searchDesserts(query);
    });

    searchInput.addEventListener("keydown", e => {
        if (e.key === "Enter") {
            searchDesserts(searchInput.value.trim());
        }
    });

    // 页面加载时抓取数据
    fetchData();
});
// ...existing code...

div.innerHTML = `
    <img src="${item.image}" alt="${item.name}" class="result-img"/>
    <h3>${item.name}</h3>
    <p>${item.description}</p>
    <small>${item.category}</small>
`;

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
            // 只为 Sakura Blossom Cake 添加跳转
            if (item.name === "Sakura Blossom Cake") {
                itemDiv.style.cursor = "pointer";
                itemDiv.addEventListener("click", () => {
                    localStorage.setItem("selectedDessert", JSON.stringify({
                        name: item.name,
                        description: item.description,
                        image: item.image
                    }));
                    window.location.href = "detail.html";
                });
            }
            container.appendChild(itemDiv);
        });
    });
}
