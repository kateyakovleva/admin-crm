import React from 'react';
import '../styles/table.scss';
import { cn } from '../utils/utils';

interface IProps<T> {
	items: T[];
	fields: { [ key: string ]: string } // это описание объекта, где описывается ключ firstname : и его значение 'Name'
	headFieldsClassName?: { [ key: string ]: string }
	bodyFieldsClassName?: { [ key: string ]: string }
	columnBody?: { [ key: string ]: ( item: T ) => any };
}

const Table = <T extends object>(
		{
			items,
			fields,
			headFieldsClassName = {},
			bodyFieldsClassName = {},
			columnBody = {}
		}: IProps<T> ) => {
	return (
			<div className='containerTable width-100 mb-20'>
				<table className='table mb-30'>
					<thead className='thead'>
					<th className='thInput'>
						<input type='checkbox'/>
					</th>

					{/*//берем из объекта только ключи - Object.keys(fields)*/ }
					{ Object.keys( fields ).map( field =>
							<th key={ field } className={ cn( 'thText', headFieldsClassName[ field ] ) }>{ fields[ field ] }</th>
					) }
					</thead>
					<tbody>
					{
						//@ts-ignore
						items.map( item =>
										<tr
												//@ts-ignore
												key={ item.id }
												className={ cn( 'trText' ) }
										>
											<td className='thInput'>
												<input type='checkbox'/>
											</td>
											{/*{*/ }
											{/*  firstname: 'Name',*/ }
											{/*  email: 'Email',*/ }
											{/*  role: 'Roles',*/ }
											{/*  status: 'Status',*/ }
											{/*  actions: 'Actions'*/ }
											{/*}*/ }
											{ Object.keys( fields ).map( field => {
//{
//             status: ( item ) => ( item.status ? <FcApproval className='thIcon'/> : '' ),
//             actions: ( item ) => <div></div>
//           }
												return (
														//если мап наталкивается на переменную колумнбоди и видит в ней стандартный кей - записывает его, а
														//если (?) он видит там дополнительное значение в виде айтем - он выполняет этот айтем, потому что это
														//функция. в ином случае (:) читется инфа с сервера (item массив) и значения записываются согласно
														//оговоренным полям вверху

														<td key={ field } className={ 'thText ' + ( bodyFieldsClassName[ field ] || '' ) }>
															{ columnBody[ field ] ?
																	columnBody[ field ]( item )
																	:
																	//@ts-ignore
																	item[ field ]
															}
														</td>
												);
											} ) }
											{/*<td className='thText-center'>*/ }
											{/*  <HiOutlineDocumentDuplicate className='thIcon'/>*/ }
											{/*</td>*/ }
											{/*<td className='thText-center'>*/ }
											{/*  <FcApproval className='thIcon'/>*/ }
											{/*</td>*/ }
											{/*<td className='thText-center'>*/ }
											{/*  <FcSettings className='thIcon'/>*/ }
											{/*</td>*/ }
										</tr>
						) }
					</tbody>
				</table>
				<div className='entries mb-20'>
					Showing 1 to 4 of 4 entries
				</div>
			</div>
	);
};

export default Table;