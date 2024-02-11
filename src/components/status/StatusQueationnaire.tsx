import React from 'react';
import { GoCheckCircleFill, GoNoEntry } from 'react-icons/go';
import { HiExclamationCircle } from 'react-icons/hi';

export const CREATED_STATUS = 0;
export const ACTIVE_STATUS = 1;
export const REJECT_STATUS = 2;

interface IProps {
	status: any | boolean | string | number;
}

const StatusQueationnaire = ( { status }: IProps ) => {
	return (
			<div className='status'>
				{ status === CREATED_STATUS &&
						<HiExclamationCircle className='thIconNew'/>
				}

				{ status === ACTIVE_STATUS &&
						<GoCheckCircleFill className='thIconGreen'/>
				}

				{ status === REJECT_STATUS &&
						<GoNoEntry className='thIconRed'/>
				}
			</div>
	);
};

export default StatusQueationnaire;