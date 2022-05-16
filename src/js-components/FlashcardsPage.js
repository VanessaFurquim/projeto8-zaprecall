import "../styles/style_flashcards-page.css";
import { useState } from "react";
import zaprecallLogoSmall from "../assets/logo-pequeno.png";
import roundArrow from "../assets/setinha.png";

export default function FlashcardsPage() {

    const [revealQuestOrAffirm, setRevealQuestOrAffirm] = useState(false);
    const [revealAnswer, setRevealAnswer] = useState(false);

    const deck = [
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

    deck.sort(() => (Math.random() - 0.5));
    
    let arrayOfSortedFourFlashcards = [];

    for (let i = 0; i < deck.length / 2; i++) {
        arrayOfSortedFourFlashcards.push(deck[i])
    }

    console.log(arrayOfSortedFourFlashcards)

	return (
        <section className = "page-setup">
            <div className = "logo-container">
                <img className = "zaprecall-logo-small" src = {zaprecallLogoSmall} alt = "small logo" />
                <h1 className = "zaprecall-title">ZapRecall</h1>
            </div>
            <div className = "flashcard-column">
                {arrayOfSortedFourFlashcards.map((flashcard) => (
                    <FlashcardsTemplate
                    flashcardQuestOrAffirm = {flashcard.questionOrAffirmation}
                    flashcardAnswer = {flashcard.answer}
                    />
                ))} 
            </div>
            <footer className = "footer">
                <p>numberOfAnswers/4 concluídos</p> {/* create function to count amount of answers */}
            </footer>
        </section>
	);

    function FlashcardsTemplate({flashcardQuestOrAffirm, flashcardAnswer}) {

        console.log(revealQuestOrAffirm)
        return (
            <>
                {revealQuestOrAffirm === false ? (
                    <>
                        <div className = "flashcard-setup">
                            <h3>flashcard ?</h3> {/* correct flashcard number. */}
                            <button onClick = {() => RevealQuestionOrAffirmation()} className = "reveal-question-or-affirmation-button">
                                <img src = "./assets/Vectortriangular-arrow.png"/> {/* render ion icon correctly. */}
                            </button>
                        </div>
                        <div className = "question-or-affirmation-container hidden">
                            <p>{flashcardQuestOrAffirm}</p>
                            <button onClick = {() => {setRevealAnswer(true); RevealAnswer({flashcardQuestOrAffirm, flashcardAnswer})}}>
                                <img src = {roundArrow} className = "round-arrow" />
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className = "flashcard-setup hidden">
                            <h3>flashcard ?</h3> {/* correct flashcard number. */}
                            <button onClick = {() => RevealQuestionOrAffirmation()} className = "reveal-question-or-affirmation-button">
                                <img src = "./assets/Vectortriangular-arrow.png"/> {/* render ion icon correctly. */}
                            </button>
                        </div>
                        <div className = "question-or-affirmation-container">
                            <p>{flashcardQuestOrAffirm}</p>
                            <button onClick = {() => {setRevealAnswer(true); RevealAnswer({flashcardQuestOrAffirm, flashcardAnswer})}}>
                                <img src = {roundArrow} className = "round-arrow" />
                            </button>
                        </div>
                    </>
                )}
            </>

        );
    }

    function RevealQuestionOrAffirmation() {
        setRevealQuestOrAffirm(true);
    }

    function RevealAnswer({flashcardQuestOrAffirm, flashcardAnswer}) {
        console.log("answer function")
        console.log(revealAnswer)
    
        return (
            <>
                {revealAnswer === false ? (
                    <>
                        <div className = "flashcard-setup hidden">
                            <h3>flashcard ?</h3> {/* correct flashcard number. */}
                            <button onClick = {() => RevealQuestionOrAffirmation()} className = "reveal-question-or-affirmation-button">
                            <img src = "./assets/Vectortriangular-arrow.png"/> {/* render ion icon correctly. */}
                            </button>
                        </div>
                        <div className = "question-or-affirmation-container">
                            <p>{flashcardQuestOrAffirm}</p>
                            <button onClick = {() => RevealQuestionOrAffirmation()} className = "reveal-question-or-affirmation-button">
                            <img src = "./assets/Vectortriangular-arrow.png"/> {/* render ion icon correctly. */}
                        </button>
                        </div>
                    </>
                ) : (
                    <div className = "answer-container">
                        <p>{flashcardAnswer}</p> {/* correct flashcard number. */}
                        <button onClick = {() => MarkedRememberanceLevel("Não lembrei")} class = "answer-button red">
                                <h6>Não lembrei</h6>
                            </button>
                            <button onClick = {() => MarkedRememberanceLevel("Quase não lembrei")} class = "answer-button yellow">
                                <h6>Quase não lembrei</h6>
                            </button>
                            <button onClick = {() => MarkedRememberanceLevel("Zap!")}class = "answer-button green">
                                <h6>Zap!</h6>
                            </button>
                        </div>
                )}
            </>
        );
    
        function MarkedRememberanceLevel(props) {
            if (props === "Não lembrei") {
                ReplaceFlashcardBackFace("red-status");
                setRevealQuestOrAffirm(false);
            } else if (props === "Quase não lembrei") {
                ReplaceFlashcardBackFace("yellow-status");
                setRevealQuestOrAffirm(false);
            } else {
                ReplaceFlashcardBackFace("green-status");
                setRevealQuestOrAffirm(false);
            }
        }

        function ReplaceFlashcardBackFace(props) {
            if (props ===  "red-status") {
                return (
                    <>
                        <div className = "flashcard-setup">
                            <h3 class = "status-style-red">flashcard ?</h3> {/* correct flashcard number. */}
                            <button onClick = {() => RevealQuestionOrAffirmation()} className = "reveal-question-or-affirmation-button">
                                <img src = "./assets/Vectorx.png"/> {/* render ion icon correctly. */}
                            </button>
                        </div>
                        <div className = "question-or-affirmation-container hidden">
                            <p>{flashcardQuestOrAffirm}</p>
                            <button onClick = {() => {setRevealAnswer(true); RevealAnswer({flashcardQuestOrAffirm, flashcardAnswer})}}>
                                <img src = {roundArrow} class = "round-arrow" />
                            </button>
                        </div>
                    </>
                );
            } else if (props ===  "yellow-status") {
                return (
                    <>
                        <div className = "flashcard-setup">
                            <h3 class = "status-style-yellow">flashcard ?</h3> {/* correct flashcard number. */}
                            <button onClick = {() => RevealQuestionOrAffirmation()} className = "reveal-question-or-affirmation-button">
                                <img src = "./assets/Vector_.png"/> {/* render ion icon correctly. */}
                            </button>
                        </div>
                        <div className = "question-or-affirmation-container hidden">
                            <p>{flashcardQuestOrAffirm}</p>
                            <button onClick = {() => {setRevealAnswer(true); RevealAnswer({flashcardQuestOrAffirm, flashcardAnswer})}}>
                                <img src = {roundArrow} class = "round-arrow" />
                            </button>
                        </div>
                    </>
                );
            } else if (props ===  "green-status") {
                return (
                    <>
                        <div className = "flashcard-setup">
                            <h3 class = "status-style-green">flashcard ?</h3> {/* correct flashcard number. */}
                            <button onClick = {() => RevealQuestionOrAffirmation()} className = "reveal-question-or-affirmation-button">
                                <img src = "./assets/Vectorcheckmark.png"/> {/* render ion icon correctly. */}
                            </button>
                        </div>
                        <div className = "question-or-affirmation-container hidden">
                            <p>{flashcardQuestOrAffirm}</p>
                            <button onClick = {() => {setRevealAnswer(true); RevealAnswer({flashcardQuestOrAffirm, flashcardAnswer})}}>
                                <img src = {roundArrow} class = "round-arrow" />
                            </button>
                        </div>
                    </>
                );
            } else {
                return (
                    <>
                        <div className = "flashcard-setup hidden">
                            <h3>flashcard ?</h3> {/* correct flashcard number. */}
                            <button onClick = {() => RevealQuestionOrAffirmation()} className = "reveal-question-or-affirmation-button">
                                <img src = "./assets/Vectortriangular-arrow.png"/> {/* render ion icon correctly. */}
                            </button>
                        </div>
                        <div className = "question-or-affirmation-container">
                            <p>{flashcardQuestOrAffirm}</p>
                            <button onClick = {() => {setRevealAnswer(true); RevealAnswer({flashcardQuestOrAffirm, flashcardAnswer})}}>
                                <img src = {roundArrow} class = "round-arrow" />
                            </button>
                        </div>
                    </>
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
}

