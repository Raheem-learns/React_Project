import Counter from '../../component/Counter';
import { Link } from 'react-router-dom';
function MainPage() {
	return (
		<div>
			<Link to={'/about'}>About</Link>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore alias doloribus laborum
				odit fugiat vel architecto quod illo, laboriosam tenetur distinctio voluptatum recusandae
				sed cumque consequatur vero voluptates hic totam. Sequi suscipit asperiores architecto.
				Ipsam nobis recusandae at, illum illo nostrum ut rem, earum ipsa eos sapiente assumenda
				delectus molestiae! Ipsum eius sed veniam dolorum modi id ratione doloribus itaque! Fugiat
				sequi obcaecati voluptatum, provident, expedita eveniet enim, laboriosam debitis at
				aspernatur dolorum placeat velit voluptates nam! Nesciunt, ipsam aliquid qui porro alias
				provident placeat in earum itaque nulla. Velit? Voluptate, nemo ut suscipit exercitationem
				fugit reprehenderit tempora harum repellendus aperiam assumenda eligendi ex, voluptas,
				quaerat rem accusamus! Dolorem corporis corrupti ea optio vero nemo nulla quam sunt facere
				cum! Eum molestiae officiis perferendis voluptatem optio dolorum accusamus. Similique
				itaque, sed porro voluptatum deserunt vel laboriosam temporibus iste deleniti sint est
				magnam excepturi aspernatur assumenda, repellat, cupiditate blanditiis voluptas neque.
				Recusandae temporibus mollitia odit tenetur, vero rerum saepe, animi distinctio possimus
			</p>
			<Counter />
		</div>
	);
}

export default MainPage;
