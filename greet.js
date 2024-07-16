

function greet(language, name) {
    const greetings = {
        english: "Hello",
        spanish: "¡Hola",
        french: "Bonjour",
        german: "Hallo"
    };
    return `${greetings[language] || greetings.english}, ${name || 'Guest'}!`;
}
