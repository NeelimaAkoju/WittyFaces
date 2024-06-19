document.addEventListener('DOMContentLoaded', function() {
    let fortunes = {};

    fetch('fortunes.json')
        .then(response => response.json())
        .then(data => {
            fortunes = data;
            initEventListeners();  // Initialize event listeners after data is loaded
        })
        .catch(error => console.error('Error loading the fortune messages:', error));

    function initEventListeners() {
        const numberButton = document.getElementById('number-button');
        const cardButton = document.getElementById('card-button');
        const numberSelection = document.getElementById('number-selection');
        const cardSelection = document.getElementById('card-selection');
        const fortuneDiv = document.getElementById('fortune');
        const fortuneMessage = document.getElementById('fortune-message');
        const backButton = document.getElementById('back-button');
        const clickBelow = document.getElementById('click-below');
        const subHeader= document.getElementById('subHeader');

        numberButton.addEventListener('click', () => {
            numberSelection.classList.remove('hidden');
            cardSelection.classList.add('hidden');
            fortuneDiv.classList.add('hidden');
            document.getElementById('selection').classList.add('hidden');
        });

        cardButton.addEventListener('click', () => {
            cardSelection.classList.remove('hidden');
            numberSelection.classList.add('hidden');
            fortuneDiv.classList.add('hidden');
            document.getElementById('selection').classList.add('hidden');
        });

        document.querySelectorAll('.number').forEach(button => {
            button.addEventListener('click', () => {
                const value = button.getAttribute('data-value');
                if (fortunes.numbers && fortunes.numbers[value - 1]) {
                    fortuneMessage.textContent = fortunes.numbers[value - 1];
                } else {
                    fortuneMessage.textContent = "Sorry, no fortune available for this number.";
                }
                fortuneDiv.classList.remove('hidden');
                numberSelection.classList.add('hidden');
                clickBelow.classList.add('hidden');
                cardSelection.classList.add('hidden');
            });
        });

        document.querySelectorAll('.card').forEach(button => {
            button.addEventListener('click', () => {
                const value = button.getAttribute('data-value');
                const index = "A2345678910JQK".indexOf(value);
                if (fortunes.cards && fortunes.cards[index]) {
                    fortuneMessage.textContent = fortunes.cards[index];
                } else {
                    fortuneMessage.textContent = "Sorry, no fortune available for this card.";
                }
                fortuneDiv.classList.remove('hidden');
                numberSelection.classList.add('hidden');
                clickBelow.classList.add('hidden');
                cardSelection.classList.add('hidden');
               
            });
        });

        backButton.addEventListener('click', () => {
            fortuneDiv.classList.add('hidden');
            numberSelection.classList.add('hidden');
            cardSelection.classList.add('hidden');
            document.getElementById('selection').classList.remove('hidden');
            clickBelow.classList.remove('hidden');
            
        });
    }
});