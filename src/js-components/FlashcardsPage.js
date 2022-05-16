import "../styles/style_flashcards-page.css";
import { useState } from "react";
import zaprecallLogoSmall from "../assets/logo-pequeno.png";
import roundArrow from "../assets/setinha.png";

export default function FlashcardsPage() {

    const deck = [
        {
            flashcardNumber: "1",
            inquiry: "O que é JSX?",
            answer: "Uma extensão de linguagem do JavaScript.",
            revealInquiryButtonClicked: false,
            revealAnswerButtonClicked: false
        },
        {
            flashcardNumber: "2",
            inquiry: "O React é __",
            answer: "uma biblioteca JavaScript para construção de interfaces.",
            revealInquiryButtonClicked: false,
            revealAnswerButtonClicked: false
        },
        {
            flashcardNumber: "3",
            inquiry: "Os nomes dos componentes devem ser iniciados com __",
            answer: "letra maiúscula.",
            revealInquiryButtonClicked: false,
            revealAnswerButtonClicked: false
        },
        {
            flashcardNumber: "4",
            inquiry: "Podemos colocar __ dentro do JSX.",
            answer: "expressões",
            revealInquiryButtonClicked: false,
            revealAnswerButtonClicked: false
        },
        {
            flashcardNumber: "5",
            inquiry: "O ReactDOM nos ajuda __",
            answer: "interagindo com a DOM para colocar componentes React na mesma.",
            revealInquiryButtonClicked: false,
            revealAnswerButtonClicked: false
        },
        {
            flashcardNumber: "6",
            inquiry: "Usamos o npm para __",
            answer: "gerenciar os pacotes necessários e suas dependências.",
            revealInquiryButtonClicked: false,
            revealAnswerButtonClicked: false
        },
        {
            flashcardNumber: "7",
            inquiry: "Usamos props para __",
            answer: "passar diferentes informações para componentes.",
            revealInquiryButtonClicked: false,
            revealAnswerButtonClicked: false
        },
        {
            flashcardNumber: "8",
            inquiry: "Usamos estado (state) para __",
            answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente.",
            revealInquiryButtonClicked: false,
            revealAnswerButtonClicked: false
        }
    ];

    deck.sort(() => (Math.random() - 0.5));
    
    // let arrayOfSortedFourFlashcards = [];
    const [arrayOfSortedFourFlashcards, setArrayOfSortedFourFlashcards] = useState(deck);

    for (let i = 0; i < deck.length / 2; i++) {
        arrayOfSortedFourFlashcards.push(deck[i])
    }


    function RevealInquiryButtonClicked (index) {
        const newArrayOfSortedFourFlashcards = [...arrayOfSortedFourFlashcards]; // cloning array to avoid modifying original //
        const flashcard = newArrayOfSortedFourFlashcards[index] // creating index number from flashcardNumber object element of the deck array //
        flashcard.revealInquiryButtonClicked = true;

        setArrayOfSortedFourFlashcards(newArrayOfSortedFourFlashcards);
    }

	return (
        <section className = "page-setup">
            <div className = "logo-container">
                <img className = "zaprecall-logo-small" src = {zaprecallLogoSmall} alt = "small logo" />
                <h1 className = "zaprecall-title">ZapRecall</h1>
            </div>
            <div className = "flashcard-column">
                {arrayOfSortedFourFlashcards.map((flashcardData, flashcardIndex) => (
                    <FlashcardsTemplate
                    key = {flashcardNumber}
                    flashcardNumber = {flashcardData.flashcardNumber}
                    flashcardInquiry = {flashcardData.inquiry}
                    flashcardAnswer = {flashcardData.answer}
                    RevealInquiryButtonClicked = {RevealInquiryButtonClicked}
                    />
                ))} 
            </div>
            <footer className = "footer">
                <p>numberOfAnswers/4 concluídos</p> {/* create function to count amount of answers */}
            </footer>
        </section>
	);

    function FlashcardsTemplate({flashcardQuestOrAffirm, flashcardAnswer}) {

        const [revealInquiry, setRevealInquiry] = useState(false);

        return (
            <>
                {revealInquiry === false ? (
                    <>
                        <div className = "flashcard-setup">
                            <h3>flashcard ?</h3> {/* correct flashcard number. */}
                            <button onClick = {() => RevealInquiryButtonClicked()} className = "reveal-inquiry-button">
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
                            <button onClick = {() => Revealinquiry()} className = "reveal-question-or-affirmation-button">
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

        function Revealinquiry() {
            setRevealInquiry(true);
        }
    }

    function RevealAnswer({flashcardQuestOrAffirm, flashcardAnswer}) {

        const [revealAnswer, setRevealAnswer] = useState(false);
    
        return (
            <>
                {revealAnswer === false ? (
                    <>
                        <div className = "flashcard-setup hidden">
                            <h3>flashcard ?</h3> {/* correct flashcard number. */}
                            <button onClick = {() => Revealinquiry()} className = "reveal-question-or-affirmation-button">
                            <img src = "./assets/Vectortriangular-arrow.png"/> {/* render ion icon correctly. */}
                            </button>
                        </div>
                        <div className = "question-or-affirmation-container">
                            <p>{flashcardQuestOrAffirm}</p>
                            <button onClick = {() => Revealinquiry()} className = "reveal-question-or-affirmation-button">
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
                setRevealInquiry(false);
            } else if (props === "Quase não lembrei") {
                ReplaceFlashcardBackFace("yellow-status");
                setRevealInquiry(false);
            } else {
                ReplaceFlashcardBackFace("green-status");
                setRevealInquiry(false);
            }
        }

        function ReplaceFlashcardBackFace(props) {
            if (props ===  "red-status") {
                return (
                    <>
                        <div className = "flashcard-setup">
                            <h3 class = "status-style-red">flashcard ?</h3> {/* correct flashcard number. */}
                            <button onClick = {() => Revealinquiry()} className = "reveal-question-or-affirmation-button">
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
                            <button onClick = {() => Revealinquiry()} className = "reveal-question-or-affirmation-button">
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
                            <button onClick = {() => Revealinquiry()} className = "reveal-question-or-affirmation-button">
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
                            <button onClick = {() => Revealinquiry()} className = "reveal-question-or-affirmation-button">
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

