import "../styles/style_flashcards-page.css";
import zaprecallLogoSmall from "../assets/logo-pequeno.png";
import { useState } from "react/cjs/react.production.min";


// creating main page (flashcards). //
export default function FlashcardsPage() {

    const [revealQuestOrAffirm, setRevealQuestOrAffirm] = useState(false);

    // array of questions/affirmations. //
    const arrayOfFlashcards = [
        {
            questionOrAffirmation: "O que é JSX?",
            answer: "Uma extensão de linguagem do JavaScript."
        },
        {
            questionOrAffirmation: "O React é __",
            answer: "uma biblioteca JavaScript para construção de interfaces."
        },
        {
            questionOrAffirmation: "Os nomes dos componentes devem ser iniciados com __",
            answer: "letra maiúscula."
        },
        {
            questionOrAffirmation: "Podemos colocar __ dentro do JSX.",
            answer: "expressões"
        },
        {
            questionOrAffirmation: "O ReactDOM nos ajuda __",
            answer: "interagindo com a DOM para colocar componentes React na mesma."
        },
        {
            questionOrAffirmation: "Usamos o npm para __",
            answer: "gerenciar os pacotes necessários e suas dependências."
        },
        {
            questionOrAffirmation: "Usamos props para __",
            answer: "passar diferentes informações para componentes."
        },
        {
            questionOrAffirmation: "Usamos estado (state) para __",
            answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente."
        }
    ];

    // randomizing order of questions. //
    function randomizingIndex() { 
	    return Math.random() - 0.5;
    }

    arrayOfFlashcards.sort(randomizingIndex);
    
    //creating new array with only 4 questions. //
    let arrayOfSortedFourFlashcards = [];

    // redering 4 questions on screen ...
    for (let i = 0; i < arrayOfFlashcards.length / 2; i++) {
        arrayOfSortedFourFlashcards.push(arrayOfFlashcards[i])
    }

    //... in this format. //
	return (
		<section className = "page-setup">
			<div className = "logo-container">
                <img className = "zaprecall-logo-small" src = {zaprecallLogoSmall} alt = "small logo" />
                <h1 className = "zaprecall-title">ZapRecall</h1>
            </div>
            <div className = "flashcard-column">
                {arrayOfSortedFourFlashcards.map((flashcard) => (
                    <FlashcardsTemplate
                    flashcardQuestOrAffirm = {flashcard.QuestOrAffirm}
                    flashcardAnswer = {flashcard.answer}
                    />
                ))}
                
            </div>
            <footer className = "footer">
                {/* create function to count amount of answers */}
                <p>numberOfAnswers/4 concluídos</p>
            </footer>
		</section>
	);

    // flashcard template. //
    function FlashcardsTemplate({flashcardAnswer}) {

        // correct flashcard number. //
        let flashcardNumber = [1, 2, 3, 4];
    
        return (
            <>
                <div className = "flashcard-setup">
                    <h3>flashcard {flashcardNumber.map((number) => (number))}</h3>
                    <button onClick = {() => revealQuestOrAffirm(flashcardAnswer)} className = "show-question-or-affirmation-button">
                        {/* render ion icon correctly. */}
                        ion
                    </button>
                </div>
            </>
        );

        // create function to exibit question/affirmation. //
        function revealQuestOrAffirm(props) {
            setRevealQuestOrAffirm(true);
            return (
                <div className = "question-or-affirmation-container">
                    <p>{props.flashcardAnswer}</p>
                </div>
            );
        }
    }
}


// função para contar número de perguntas respondidas
// function NumberOfFlashcards() {
//     return (
//         numberOfFlashcards
//     );
// }