import React from "react";
import { Helmet } from 'react-helmet'
import Card from "./components/card.js";

 function Page1() {
	 return (
		 <>
			<Helmet>
          		<title>My First React App</title>
        	</Helmet>
			<Card text="hello home"/>
		 </>
	   
	 );
 }

 export default Page1;