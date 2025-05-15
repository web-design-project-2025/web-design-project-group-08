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

    async function fetchData() {
        try {
            const response = await fetch("data.json"); 
            const data = await response.json();

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

    function searchDesserts(query) {
        const filtered = allItems.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase())
        );

        renderResults(filtered);
    }

    function renderResults(results) {
        resultsContainer.innerHTML = "";

        if (results.length === 0) {
            resultsContainer.innerHTML = "<p>No results found.</p>";
            return;
        }

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


    searchButton.addEventListener("click", () => {
        const query = searchInput.value.trim();
        searchDesserts(query);
    });

    searchInput.addEventListener("keydown", e => {
        if (e.key === "Enter") {
            searchDesserts(searchInput.value.trim());
        }
    });

    fetchData();
});


document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-bar");
    const searchButton = document.querySelector(".search-button");
    const resultsContainer = document.getElementById("search-results");

    let allItems = [];

    
    async function fetchData() {
        try {
            const response = await fetch("categories.json"); 
            const data = await response.json();

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

    function searchDesserts(query) {
        const filtered = allItems.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase())
        );

        renderResults(filtered);
    }

    function renderResults(results) {
        resultsContainer.innerHTML = "";

        if (results.length === 0) {
            resultsContainer.innerHTML = "<p>No results found.</p>";
            return;
        }

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

    searchButton.addEventListener("click", () => {
        const query = searchInput.value.trim();
        searchDesserts(query);
    });

    searchInput.addEventListener("keydown", e => {
        if (e.key === "Enter") {
            searchDesserts(searchInput.value.trim());
        }
    });

    fetchData();
});
searchInput.addEventListener("input", () => {
    searchDesserts(searchInput.value.trim());
});

// ...existing code...
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
            // 添加点击事件
            itemDiv.addEventListener("click", () => {
                localStorage.setItem("selectedDessert", JSON.stringify({
                    name: item.name,
                    description: item.description,
                    image: item.image,
                    category: category.name
                }));
                window.location.href = "detail.html";
            });
            container.appendChild(itemDiv);
        });
    });
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
        // 添加点击事件
        itemDiv.addEventListener("click", () => {
            localStorage.setItem("selectedDessert", JSON.stringify({
                name: item.name,
                description: item.description,
                image: item.image,
                category: category.name
            }));
            window.location.href = "detail.html";
        });
        container.appendChild(itemDiv);
    });
}
// ...existing code...

// 假设你已经渲染了每个蛋糕的元素
document.querySelectorAll('.category-link').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.dataset.category === 'Cakes') {
      // 这里假设你有每个蛋糕的 item 元素
      document.querySelectorAll('.cake-item').forEach(item => {
        if (item.textContent.includes('Sakura Blossom Cake')) {
          item.addEventListener('click', function() {
            // 跳转到详情页，可以带参数
            window.location.href = 'detail.html?item=sakura-blossom-cake';
          });
        }
      });
    }
  });
});