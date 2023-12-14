import {RouterProvider,createBrowserRouter,Link} from 'react-router-dom'
import {AsyncMainPage} from './pages/mainPage/mainPage.async';
import {AsyncAboutPage} from './pages/aboutPage/aboutPage.async';
import { Suspense } from 'react';
import './index.scss'


export function App() {

	const router = createBrowserRouter([
		{
		  path: "/",
		  element: <AsyncMainPage/>
		},
		{
			path: "/about",
			element: <AsyncAboutPage/>
		}
	  ]);

	return 	(
		<div className='app'>
			<Suspense fallback={<div>Загрузка...</div>}>
				<RouterProvider router={router}/> 
	    	</Suspense>
		</div>
	)

}