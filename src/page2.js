import React from "react";
import { Helmet } from 'react-helmet'
import {Link } from "react-router-dom";

 function Page2() {
	 return (
		<>
		<Helmet>
			  <title>House - My First React App</title>
		</Helmet>
		<h1>welcome to da house</h1>
		<Link to="anything">
			Make a 404
		</Link>
	 </>
	 );
 }

 export default Page2;