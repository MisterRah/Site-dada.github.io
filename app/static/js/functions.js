document.addEventListener('DOMContentLoaded', function() {
    const correctAnswers = {
        q1: 'b',
        q2: 'c',
        q3: 'b',
        q4: 'a',
        q5: 'd'
    };

    const formIds = ['quiz-form-1', 'quiz-form-2', 'quiz-form-3', 'quiz-form-4', 'quiz-form-5'];
    formIds.forEach(formId => {
        setupQuiz(formId, correctAnswers);
    });
});

function setupQuiz(formId, correctAnswers) {
    const form = document.getElementById(formId);
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const formData = new FormData(this);

        let score = 0;
        let totalQuestions = 0;

        // Verifica as respostas
        for (const [question, answer] of formData.entries()) {
            totalQuestions++;
            if (answer === correctAnswers[question]) {
                score++;
            }
        }

        // Exibe o resultado
        const resultDiv = document.getElementById(formId.replace('quiz-form', 'result'));
        if (resultDiv) {
            resultDiv.textContent = `Você acertou ${score} de ${totalQuestions} perguntas.`;
        }

        // Exibir quais respostas estavam corretas ou erradas
        for (const [question, answer] of formData.entries()) {
            const inputField = document.querySelector(`input[name="${question}"][value="${answer}"]`);
            const label = inputField.parentElement;
            if (answer === correctAnswers[question]) {
                label.style.backgroundColor = 'lightgreen';
            } else {
                label.style.backgroundColor = 'lightcoral';
            }
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
const forms = document.querySelectorAll('.quiz-form');

forms.forEach(form => {
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Previne o envio do formulário
        
        const formData = new FormData(form);
        const correctAnswers = {
            q1: 'c', // Resposta correta para a pergunta 1
            q2: 'c'  // Resposta correta para a pergunta 2
        };

        form.querySelectorAll('label').forEach(label => {
            label.classList.remove('correct', 'incorrect'); // Remove classes anteriores
        });

        formData.forEach((value, key) => {
            const correctAnswer = correctAnswers[key];
            const selectedLabel = form.querySelector(`input[name="${key}"][value="${value}"]).closest('label'`);
            
            if (value === correctAnswer) {
                selectedLabel.classList.add('correct');
            } else {
                selectedLabel.classList.add('incorrect');
            }
        });
    });
});
});