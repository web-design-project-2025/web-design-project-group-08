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
            img.src = img.src.includes('vegetarian.png')
                ? 'images/vegetariancolor.png'
                : 'images/vegetarian.png';
        }

        button.classList.toggle('active');
    });
});

