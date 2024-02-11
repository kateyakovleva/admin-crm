import React from 'react';
import '../../../styles/editAdminGroups.scss';
import { IPermissionGroup } from '../../../types/permissions';

interface IProps {
	permissionGroup: IPermissionGroup;
}

const Permission1 = ( { permissionGroup }: IProps ) => {
	return (
			<div>
				<div className='column containerContent mb-10'>
					<div className='greyTitle row justify-between align-center border-bottom'>
						<div className='colorBlack weight-600 h4'>{ permissionGroup.group }</div>
						<div className='row width-50 justify-center align-center'>
							<input type='input' className='input width-70'/>
							<div className='row justify-center align-center'>
								<button className='blueButton'>Select All</button>
								<button className='redButton'>De-Select All</button>
							</div>
						</div>
					</div>
					<div className='redNote'>
						Note : Please make sure to select <b>view-</b> permission if you are selecting any other permission
						for any section.
					</div>
					<div className='row '>
						{ permissionGroup.actions.map( action =>
								<div key={ action } className='row padding20 justify-start align-center mb-10'>
									<input type='checkbox'/>
									<div className='colorBlack weight-600'>{ action }</div>
								</div>
						) }
					</div>
				</div>
			</div>
	);
};

export default Permission1;