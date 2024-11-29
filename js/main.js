let indicatorsContainer = document.querySelector(".indicators-container");
let specialistsRows = document.querySelectorAll(".specialists-rows");

window.onload = function() {
    // Initially hide all specialistsRows that have the 'd-none' class
    specialistsRows.forEach(row => {
        if (!row.classList.contains('d-none')) {
            row.classList.add('d-none');
        }
    });

    for (let i = 0; i < specialistsRows.length; i++) {
        const div = document.createElement('div');
        div.classList.add("indicator");
        div.classList.add(`indicator-${i}`);
        div.addEventListener('click', function() {
            // Remove the 'active' class from all indicators
            document.querySelectorAll('.indicator').forEach(ind => ind.classList.remove('active'));
            // Add the 'active' class to the clicked indicator
            div.classList.add('active');
            
            // Hide all specialistsRows
            specialistsRows.forEach(row => row.classList.add('d-none'));
            // Show the specialistsRow with the same index as the clicked indicator
            specialistsRows[i].classList.remove('d-none');
        });
        indicatorsContainer.appendChild(div);
    }
    // Initially set the first indicator and corresponding specialistsRow to active and visible
    indicatorsContainer.firstElementChild.classList.add("active");
    specialistsRows[0].classList.remove('d-none');
    console.log(indicatorsContainer);
};


function showNext(currentArrow) {
    var currentRow = currentArrow.closest('.testimonials-row');
    var nextRow = currentRow.nextElementSibling;

    if (nextRow) {
        // currentRow.classList.remove('d-block');
        currentRow.classList.add('d-none');
        nextRow.classList.remove('d-none');
        // nextRow.classList.add('d-block');
        updateArrowState(nextRow);
    }
}

function showPrevious(currentArrow) {
    var currentRow = currentArrow.closest('.testimonials-row');
    var previousRow = currentRow.previousElementSibling;

    if (previousRow) {
        // currentRow.classList.remove('d-block');
        currentRow.classList.add('d-none');
        previousRow.classList.remove('d-none');
        // previousRow.classList.add('d-block');
        updateArrowState(previousRow);
    }
}

function updateArrowState(currentRow) {
    var testimonialRows = document.querySelectorAll('.testimonials-row');
    var firstRow = testimonialRows[0];
    var lastRow = testimonialRows[testimonialRows.length - 1];
    var arrows = document.querySelectorAll('.testimonials-row .fa-arrow-left-long, .testimonials-row .fa-arrow-right-long');

    // Reset all arrows to default color and cursor
    arrows.forEach(function(arrow) {
        arrow.classList.remove('arrow-disabled');
        arrow.style.cursor = 'pointer';
    });

    // Disable previous arrow if on first row
    if (currentRow === firstRow) {
        var previousArrow = currentRow.querySelector('.fa-arrow-left-long');
        previousArrow.classList.add('arrow-disabled');
        previousArrow.style.cursor = 'not-allowed';
    }

    // Disable next arrow if on last row
    if (currentRow === lastRow) {
        var nextArrow = currentRow.querySelector('.fa-arrow-right-long');
        nextArrow.classList.add('arrow-disabled');
        nextArrow.style.cursor = 'not-allowed';
    }
}

function showSubscripeFunction(){
    document.querySelector(".subscripe").classList.remove("d-none")
}