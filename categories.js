document.querySelector('.toggle-submenu').addEventListener('click', function () {
    const secondNav = document.querySelector('.second-nav');
    if (secondNav.style.display === 'none' || secondNav.style.display === '') {
        secondNav.style.display = 'flex';
    } else {
        secondNav.style.display = 'none';
    }
});

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

// Function to fetch and display categories
async function fetchCategories() {
    try {
      // Fetch the JSON data
      const response = await fetch('categories.json');
      const data = await response.json();
  
      // Get the container where categories will be displayed
      const categoriesContainer = document.querySelector('.categories-container');
  
      // Loop through categories and render them
      data.categories.forEach(category => {
        const categorySection = document.createElement('section');
        categorySection.classList.add('category-section');
  
        // Add category name as a heading
        const categoryHeading = document.createElement('h2');
        categoryHeading.textContent = category.name;
        categorySection.appendChild(categoryHeading);
  
        // Add items under the category
        category.items.forEach(item => {
          const itemDiv = document.createElement('div');
          itemDiv.classList.add('item');
  
          // Add item image
          const itemImage = document.createElement('img');
          itemImage.src = item.image;
          itemImage.alt = item.name;
          itemDiv.appendChild(itemImage);
  
          // Add item name
          const itemName = document.createElement('h3');
          itemName.textContent = item.name;
          itemDiv.appendChild(itemName);
  
          // Add item description
          const itemDescription = document.createElement('p');
          itemDescription.textContent = item.description;
          itemDiv.appendChild(itemDescription);
  
          categorySection.appendChild(itemDiv);
        });
  
        categoriesContainer.appendChild(categorySection);
      });
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }
  
  // Call the function to fetch and display categories
  fetchCategories();


  document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("button[data-category]");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");
            fetchCategoryData(category);
        });
    });
});

function fetchCategoryData(category) {
    fetch(`data/${category}.json`) // Assuming JSON files are stored in a 'data' folder
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch data for category: ${category}`);
            }
            return response.json();
        })
        .then(data => {
            displayCategoryData(data);
        })
        .catch(error => {
            console.error(error);
        });
}

function displayCategoryData(data) {
    const container = document.querySelector(".categories-container");
    container.innerHTML = ""; // Clear previous content
    data.forEach(item => {
        const div = document.createElement("div");
        div.className = "category-item";
        div.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <img src="${item.image}" alt="${item.name}">
        `;
        container.appendChild(div);
    });
}