import React from 'react';
//import robos from './robos';
const Card = ({id,name,email}) =>
{

	return(
		<div className='tc bg-light-blue dib br4 pa0 ma2 grow bw2 shadow-5'>
		<img alt='my_pic' src={`https://www.robohash.org/${id}?200x200`} />
			<div>
			<h2>{name}</h2>
			<p>{email}</p>
			</div>
		</div>
		);
}

export default Card;