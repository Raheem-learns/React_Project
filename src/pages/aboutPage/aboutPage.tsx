import { Link } from 'react-router-dom';

function AboutPage() {
	return (
		<div>
			<h1>About</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quaerat beatae aliquam
				eius. Similique aliquid quibusdam asperiores corporis accusantium modi praesentium sint
				nihil ratione at nulla, maxime aperiam, accusamus quaerat!
			</p>
			<Link to={'/'}>Back to main-page</Link>
		</div>
	);
}

export default AboutPage;
