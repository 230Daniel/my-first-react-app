import React from "react";
import { Helmet } from 'react-helmet'
import {Link } from "react-router-dom";
import data from "./Configuration/List.json";

 function Page2() {
	 return (
		<>
		<Helmet>
			  <title>House - My First React App</title>
		</Helmet>
		<h1>welcome to da house</h1>
		<Link to="anything">
			Make a 404<br></br>
		</Link>
		{data.list.map((item, i) =>{
			return(
				<>
				{i} {item.name}: {item.description} <br></br>
				</>
			);
		})}
		{renderOffer()}
	 </>
	 );
 }

 function renderOffer(){
	if(data.offer){
		return(
		   <h1>Offer on!!</h1>
		);
	}
	else{
		return;
	}
}

 export default Page2;