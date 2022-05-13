import "../styles/style_welcome-page.css";
import zaprecallLogoMain from "../assets/logo.png";

export default function WelcomePage() {
	return (
		<section class="page-setup welcome-page">
			<img class="zaprecall-logo-main" src={zaprecallLogoMain} />
            <h1 class = "zaprecall-title">ZapRecall</h1>
          <button class = "start-recall-button">Iniciar Recall!</button>
		</section>
	);
}