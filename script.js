document.addEventListener('DOMContentLoaded', (event) => {
    const predefinedQuestions = [
        "What is your name",
        "How old are you",
        "Where do you live",
        "What is your profession",
        "What are your hobbies"
    ];

    function normalizeString(str) {
        return str.toLowerCase().replace(/\s+/g, '');
    }

    document.querySelector('.accept').addEventListener('click', function() {
        const input = document.querySelector('.message-content input').value;
        const normalizedInput = normalizeString(input);
        const isAccepted = predefinedQuestions.some(question => normalizeString(question) === normalizedInput);

        if (isAccepted) {
            alert('Accepted: Your question is valid!');
        } else {
            alert('Declined: Your question is not in the list.');
        }
    });
});
