import React, { useState } from 'react';
import { GoCheckCircle, GoCheckCircleFill, GoGear, GoXCircleFill } from 'react-icons/go';
import { BsPencilSquare } from 'react-icons/bs';
import { Link } from 'react-router-dom';

interface IProps {
	itemId?: number | string;
}

const ButtonSettings = ( { itemId }: IProps ) => {

	const [ open, setOpen ] = useState( false );

	return (
			<div className='buttonSettings'>
				{
						open &&
						<div className='column btnSettings'>
							<Link to={ `${ itemId }` }>
								<BsPencilSquare className='thIcon'/>
							</Link>
							<button>
								<GoCheckCircleFill className='thIconGreen'/>
							</button>
							<button>
								<GoCheckCircle className='thIcon'/>
							</button>
							<button>
								<GoXCircleFill className='thIconRed'/>
							</button>
						</div>
				}
				<button>
					<GoGear className='thIcon' onClick={ () => {
						setOpen( !open );
					} }/>
				</button>
			</div>
	);
};

export default ButtonSettings;