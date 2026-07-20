document.addEventListener("DOMContentLoaded", () => {
    const btnNext = document.getElementById('btn-next');
    const step1 = document.getElementById('step-1');
    const step2 = document.getElementById('step-2');
    const form = document.getElementById('recommendation-form');

    if (btnNext && step1 && step2) {
        btnNext.addEventListener('click', () => {
            // Validate step 1 fields before proceeding
            const website = document.getElementById('website').value.trim();
            const location = document.getElementById('location').value.trim();
            const service = document.getElementById('service').value.trim();

            if (!website || !location || !service) {
                alert("Please fill in your website, location, and service to proceed.");
                return;
            }

            step1.classList.add('hidden');
            step2.classList.remove('hidden');
        });
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Assuming this would actually submit via AJAX in a real implementation
            alert("Thank you. Your recommendation check has begun.");
            form.reset();
            step2.classList.add('hidden');
            step1.classList.remove('hidden');
        });
    }
});
