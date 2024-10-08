document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question');
    const heroSection = document.querySelector('.hero');
    const heroHeight = heroSection.clientHeight;


// Seção do cabeçalho - Habilitar com scroll
    window.addEventListener('scroll', function() {
        const currWinPos = window.scrollY;

        if (currWinPos < heroHeight) {
            hideHeaderElements();
        }
        else {
            showHeaderElements();
        }
    })

    function hideHeaderElements() {
        const header = document.querySelector('header');
        header.classList.add('header--is-hidden');
    }

    function showHeaderElements() {
        const header = document.querySelector('header');
        header.classList.remove('header--is-hidden');
    }


// Seção das atrações - Abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(button) {
            const targetTab = button.target.dataset.tabButton;
            console.log(targetTab);
            const tab = document.querySelector(`[data-tab-id=${targetTab}]`);
            hideAllTabs();
            removeActiveButton();
            tab.classList.add('shows__list--is-active');
            button.target.classList.add('shows__tabs__button--is-active');
        })
    }

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', toggleAnswer);
    }
})

function hideAllTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}

function removeActiveButton() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}


    // Seção FAQ - Accordion
    function toggleAnswer(e) {
        const classe = 'faq__questions__item--is-open';
        const elementoPai = e.target.parentNode;
        
        elementoPai.classList.toggle(classe);
    }