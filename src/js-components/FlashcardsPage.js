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
    
    const [arrayOfSortedFlashcards, setArrayOfSortedFlashcards] = useState(deck);
    const [arrayOfAnswers, setArrayOfAnswers] = useState([]);


    function RevealInquiryButtonClicked (index) {
        const newArrayOfSortedFlashcards = [...arrayOfSortedFlashcards]; // cloning array to avoid modifying original //
        const flashcard = newArrayOfSortedFlashcards[index] // creating index number from flashcardNumber object element of the deck array //
        flashcard.revealInquiryButtonClicked = true;

        setArrayOfSortedFlashcards(newArrayOfSortedFlashcards);
    }

	return (
        <section className = "page-setup">
            <div className = "logo-container">
                <img className = "zaprecall-logo-small" src = {zaprecallLogoSmall} alt = "small logo" />
                <h1 className = "zaprecall-title">ZapRecall</h1>
            </div>
            <div className = "flashcard-column">
                {arrayOfSortedFlashcards.map((flashcardData, flashcardIndex) => (
                    <FlashcardsTemplate
                        key = {flashcardIndex}
                        index = {flashcardIndex}
                        flashcardData = {flashcardData}
                        arrayOfAnswers = {arrayOfAnswers}
                        setArrayOfAnswers = {setArrayOfAnswers}
                        RevealInquiryButtonClicked = {RevealInquiryButtonClicked}
                    />
                ))} 
            </div>
            < Footer 
                arrayOfAnswers = {arrayOfAnswers}
            />
        </section>
	);
}

function FlashcardsTemplate ( { flashcardData, index, arrayOfAnswers, setArrayOfAnswers } ) {

    const [flashcardContent, setFlashcardContent] = useState("flashcard");
    const [statusButton, setStatusButton] = useState(false);

    if (flashcardContent === "flashcard") {

        return <CardContentFlashcard statusButton = {statusButton} index = {index} setFlashcardContent = {setFlashcardContent} />;
    } 
    
    if (flashcardContent === "inquiry") {

        return <CardContentInquiry flashcardData = {flashcardData} setFlashcardContent = {setFlashcardContent} />;

    }
    
    if (flashcardContent === "answer") {

        return <CardContentAnswer flashcardData = {flashcardData} finishCard = {finishCard} />;
    }

    function finishCard (color) {
        setStatusButton(color)
        setArrayOfAnswers([...arrayOfAnswers, color])
        setFlashcardContent("flashcard")
    }
}

function Footer ( {arrayOfAnswers} ) {

    if (arrayOfAnswers.length < 8) {

        return <footer className = "footer">
                <p>{arrayOfAnswers.length}/8 concluídos</p>
                <div><StatusSymbols arrayOfAnswers = {arrayOfAnswers} /></div>
            </footer>;
    }

    if (arrayOfAnswers.length === 8) {
        
        return <footer className = "footer-final-results">
                <FinalMessage arrayOfAnswers = {arrayOfAnswers} />
                <p>{arrayOfAnswers.length}/8 CONCLUÍDOS</p>
                <div><StatusSymbols arrayOfAnswers = {arrayOfAnswers} /></div>
        </footer>;
    }
}

function StatusSymbols ( {arrayOfAnswers} ) {

    return arrayOfAnswers.map(icon => {

        if (icon === "green") {
            return <ion-icon clasName = "green" name = "checkmark-circle"></ion-icon>;
        }

        if (icon === "yellow") {
            return <ion-icon clasName = "yellow" name = "help-circle"></ion-icon>;
        }

        if (icon === "red") {
            return <ion-icon clasName = "red" name = "close-circle"></ion-icon>;
        }
    })
}

function FinalMessage ( {arrayOfAnswers} ) {

    let isThereRedString = arrayOfAnswers.filter(redIcon => redIcon === "red");
    
    if (arrayOfAnswers.length === 8 || isThereRedString !== "red") {
        
        return (
            <div className = "footer-final-results">
                <image src = "./assets/party.png" /> <h1>Parabéns!</h1>
                <p>Você não esqueceu de nenhum flashcard!</p>
            </div>
        );
    }

    if (arrayOfAnswers.length === 8 || isThereRedString === "red") {
        
        return (
            <div className = "footer-final-results">
                <image src = "./assets/sad.png" /> <h1>Parabéns!</h1>
                <p>Ainda faltam alguns... Mas não desanime!</p>
            </div>
        );
    }

    return <></>;
}

function CardContentFlashcard ( {statusButton, index, setFlashcardContent} ) {

    return <div class = "flashcard-setup" onClick = {() => setFlashcardContent("inquiry")}>
        <p class = {statusButton}>Pergunta {index + 1}</p>
    </div>;
}

function CardContentInquiry ( {flashcardData, setFlashcardContent} ) {

    return <div className = "inquiry-container"  onClick = {() => setFlashcardContent("answer")}>
        <p>{flashcardData.inquiry}</p>
    </div>;
}

function CardContentAnswer ( {flashcardData, finishCard} ) {

    return <div className = "answer-container">
            <p>{flashcardData.answer}</p>
            <div className = "buttons-container">
                <button class = "button-style-red answer-button" onClick = {() => {finishCard("red")}}>Não lembrei</button>
                <button class = "button-style-yellow answer-button" onClick = {() => {finishCard("yellow")}}>Quase não lembrei</button>
                <button class = "button-style-green answer-button" onClick = {() => {finishCard("green")}}>Zap!</button>
            </div>
        </div>;
}