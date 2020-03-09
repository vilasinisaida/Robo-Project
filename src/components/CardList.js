import React from 'react';
import Card from './Card';

const CardList = ({robos}) =>{

	return (
		<div>
		{
			robos.map((user,i)=> {
			return (
					<Card 
						key={i} 
						id={robos[i].id} 
						name={robos[i].name} 
						email={robos[i].email} 
					/>
					);
			})
		}
		</div>
		);

}

export default CardList;