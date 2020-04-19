import { h } from "preact";
import { useEffect } from 'preact/hooks';
import style from "./style";

const Home = () => {

	/**
	 * Netlify CMS's accept invite link land on home page.
	 * This redirection takes it to the right place(/admin).
	 */

	useEffect(() => {
		if (window !== undefined && window.location.href.includes('#invite_token')) {
			const { href } = window.location;
			window.location.href= `${href.substring(0, href.indexOf('#'))}admin${href.substring(href.indexOf('#'))}`;
		}
	},[]);

	return (
		<div class={style.home}>
			<div class={style.about}>
				<div class={style.imageContainer}>
					<div class={style.image} />
				</div>
				<div class={style.quote}>
					<div class={style.details}>
						Android Development
					</div>
					<div class={style.author}> Java | Kotlin</div>
				</div>
			</div>
			<div class={style.bio}>
				<p class={style.bioleft}>
				Welcome to The Andriod guider, the main aim of this blog is to help android developers understand various concepts. We also plan to keep our readers updated with the current trends and news in regard to android development.
				</p>
				<p class={style.bioright}>
				My name is Philomena Mbura, an android developer passionate about teaching, mentoring and tech communities.	
				</p>
			</div>
		</div>
	);
};

export default Home;
