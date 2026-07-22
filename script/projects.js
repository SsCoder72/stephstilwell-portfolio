 
        const toggles = document.querySelectorAll('.skills-toggle');

        toggles.forEach(function (toggle) {
            toggle.addEventListener('click', function () {
                const list = toggle.nextElementSibling;
                list.classList.toggle('open');
            });
        });
    