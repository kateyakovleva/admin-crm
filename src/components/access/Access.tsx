import React, { ReactNode } from 'react';
import { permissions } from '../../stores/permissions';


interface IAccessProps {
	group?: string | string[];
	children?: ReactNode;
	action?: string;
}

const Access = ( { group, children, action }: IAccessProps ) => {

	if ( group && action && !permissions.get( group, action ) ) return <></>;

	return (
			<>
				{ children }
			</>
	);
};

export default Access;
