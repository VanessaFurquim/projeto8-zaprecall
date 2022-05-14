import "../styles/style_welcome-page.css";
import zaprecallLogoMain from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function WelcomePage() {
	return (
		<section className = "page-setup welcome-page">
			<img className = "zaprecall-logo-main" src = {zaprecallLogoMain} alt = "main logo" />
            <h1 className = "zaprecall-title">ZapRecall</h1>

			<Link to = "/FlashcardsPage">
          		<button className = "start-recall-button">Iniciar Recall!</button>
			</Link>

		</section>
	);
}