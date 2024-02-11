import React from 'react';
import { GoNoEntry } from 'react-icons/go';
import { HiExclamationCircle } from 'react-icons/hi';

interface IProps {
	status: any | boolean | string | number;
}

export const STATUS_ENABLE = 0;
export const STATUS_DISABLE = 1;

const Status = ( { status }: IProps ) => {
	return (
			<div className='status'>
				{ status === STATUS_ENABLE &&
						<HiExclamationCircle className='thIconGreen'/>
				}

				{ status === STATUS_DISABLE &&
						<GoNoEntry className='thIconRed'/>
				}
			</div>
	);
};

export default Status;