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


// 添加新配料功能
document.querySelector('.add-ingredient-button').addEventListener('click', () => {
    const ingredientList = document.querySelector('.ingredient-list');

    // 创建新的配料项
    const newIngredient = document.createElement('div');
    newIngredient.classList.add('ingredient-item');
    newIngredient.innerHTML = `
        <input type="text" class="ingredient-name" placeholder="Ingredient Name">
        <input type="text" class="ingredient-quantity" placeholder="Quantity">
        <button class="delete-ingredient-button">Delete</button>
    `;

    // 将新配料项添加到列表中
    ingredientList.appendChild(newIngredient);

    // 为新添加的删除按钮绑定事件
    newIngredient.querySelector('.delete-ingredient-button').addEventListener('click', () => {
        newIngredient.remove();
    });
});

// 删除配料功能
document.querySelectorAll('.delete-ingredient-button').forEach(button => {
    button.addEventListener('click', (event) => {
        event.target.closest('.ingredient-item').remove();
    });
});