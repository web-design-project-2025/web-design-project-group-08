document.querySelector('.add-step-button').addEventListener('click', () => {
    const stepsContainer = document.querySelector('.instruction');
    const stepCount = stepsContainer.querySelectorAll('.instruction-steps').length + 1;

    const newStep = document.createElement('div');
    newStep.classList.add('instruction-steps');
    newStep.innerHTML = `
        <textarea placeholder="Step ${stepCount}"></textarea>
        <div class="add-photo-box">
            <img src="images/add-photo-icon.png" alt="Add Photo">
        </div>
        <button class="delete-step-button">Delete</button>
    `;

    stepsContainer.insertBefore(newStep, stepsContainer.querySelector('.add-step-button'));

    newStep.querySelector('.delete-step-button').addEventListener('click', () => {
        newStep.remove();
    });
});


document.querySelectorAll('.delete-step-button').forEach(button => {
    button.addEventListener('click', (event) => {
        event.target.closest('.instruction-steps').remove();
    });
});


document.querySelector('.add-ingredient-button').addEventListener('click', () => {
    const ingredientList = document.querySelector('.ingredient-list');

    const newIngredient = document.createElement('div');
    newIngredient.classList.add('ingredient-item');
    newIngredient.innerHTML = `
        <input type="text" class="ingredient-name" placeholder="Ingredient Name">
        <input type="text" class="ingredient-quantity" placeholder="Quantity">
        <button class="delete-ingredient-button">Delete</button>
    `;

    ingredientList.appendChild(newIngredient);

    newIngredient.querySelector('.delete-ingredient-button').addEventListener('click', () => {
        newIngredient.remove();
    });
});
document.querySelectorAll('.delete-ingredient-button').forEach(button => {
    button.addEventListener('click', (event) => {
        event.target.closest('.ingredient-item').remove();
    });
});



// Options Section

const dietaryButtons = document.querySelectorAll('.dietary-button');

dietaryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const img = button.querySelector('img');

        if (button.classList.contains('sugarfree')) {
            img.src = img.src.includes('sugarfree.png')
                ? 'images/sugarfreecolor.png'
                : 'images/sugarfree.png';
        } else if (button.classList.contains('vegetarian')) {
    img.src = img.src.includes('vegentarian.png')
        ? 'images/vegentariancolor.png'
        : 'images/vegentarian.png';
}

        button.classList.toggle('active');
    });
});

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



