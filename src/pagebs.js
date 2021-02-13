import React from "react";
import { Helmet } from 'react-helmet'
import MyNavbar from './components/mynavbar.js'

 function PageBS() {
	 return (
		 <>
			<Helmet>
          		<title>Bootstrap - My First React App</title>
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" crossorigin/>
        	</Helmet>
			<MyNavbar></MyNavbar>
		 </>
	   
	 );
 }

 export default PageBS;