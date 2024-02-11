import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomForm from '../../components/form/CustomForm';
import ButtonsCustomForm from '../../components/form/ButtonsCustomForm';

const EditHomePage = () => {

	const navigate = useNavigate();

	// const {data: what, isLoading} = useQuery('')

	const what: any = {};

	return (
			<div className='editHomePage'>
				<div className='column containerContent padding20'>
					<div className='row titleAdmin justify-between mb-20'>
						<div className='h2'>Edit Home Page</div>
						<button className='btnAdd' type='button' onClick={ () => navigate( '/utility/home_page' ) }>BACK TO LISTING
						</button>
					</div>
					<div className='column containerContent padding20 mb-20'>
						<div className='h3 colorBlack mb-20'>How it works</div>
						<CustomForm
								item={ what }
								fields={ {
									title: {
										name: 'Title',
										type: 'input',
										props: {
											containerClassName: 'width-50',
											required: true
										}
									},
									subtitle: {
										name: 'Subtitle',
										type: 'input',
										props: {
											containerClassName: 'width-50',
											required: true
										}
									}
								} }
						/>
						<div className='row justify-between width-100'>
							<CustomForm
									item={ what }
									fields={ {
										title: {
											name: 'Title#',
											type: 'input',
											props: {
												containerClassName: 'width-85',
											}
										},
										description: {
											name: 'Description#',
											type: 'textarea',
											props: {
												containerClassName: 'width-85',
											}
										},
										image: {
											name: 'Image',
											type: 'file',
											props: {
												containerClassName: 'width-85 mt-10',
											}
										},
									} }
							/>
							<CustomForm
									item={ what }
									fields={ {
										title: {
											name: 'Title#',
											type: 'input',
											props: {
												containerClassName: 'width-85',
											}
										},
										description: {
											name: 'Description#',
											type: 'textarea',
											props: {
												containerClassName: 'width-85',
											}
										},
										image: {
											name: 'Image',
											type: 'file',
											props: {
												containerClassName: 'width-85 mt-10',
											}
										},
									} }
							/>
							<CustomForm
									item={ what }
									fields={ {
										title: {
											name: 'Title#',
											type: 'input',
											props: {
												containerClassName: 'width-85',
											}
										},
										description: {
											name: 'Description#',
											type: 'textarea',
											props: {
												containerClassName: 'width-85',
											}
										},
										image: {
											name: 'Image',
											type: 'file',
											props: {
												containerClassName: 'width-85 mt-10',
											}
										},
									} }
							/>
							<CustomForm
									item={ what }
									fields={ {
										title: {
											name: 'Title#',
											type: 'input',
											props: {
												containerClassName: 'width-85',
											}
										},
										description: {
											name: 'Description#',
											type: 'textarea',
											props: {
												containerClassName: 'width-85',
											}
										},
										image: {
											name: 'Image',
											type: 'file',
											props: {
												containerClassName: 'width-85 mt-10',
											}
										},
									} }
							/>
						</div>
					</div>
					<div className='column containerContent padding20 mb-20'>
						<div className='h3 colorBlack mb-20'>General Banner Section</div>
						<CustomForm
								item={ what }
								fields={ {
									title: {
										name: 'Title',
										type: 'input',
										props: {
											containerClassName: 'width-50',
										}
									},
									subtitle: {
										name: 'Description',
										type: 'textarea',
										props: {
											containerClassName: 'width-100',
										}
									},
									image: {
										name: 'Image',
										type: 'file',
										props: {
											containerClassName: 'width-50 mt-10 mb-20',
										}
									},
								} }
						/>
						<div className='column containerContent padding20'>
							<div className='h3 colorBlack mb-20'>Register Section</div>
							<CustomForm
									item={ what }
									fields={ {
										title: {
											name: 'Subtitle',
											type: 'input',
											props: {
												containerClassName: 'width-50',
												required: true
											}
										},
										description: {
											name: 'Description',
											type: 'textarea',
											props: {
												containerClassName: 'width-50',
												required: true
											}
										},
										image: {
											name: 'Image',
											type: 'file',
											props: {
												containerClassName: 'width-50 mt-10',
											}
										},
									} }
							/>
						</div>
					</div>
					<ButtonsCustomForm group={ 'pages' }/>
				</div>
			</div>
	);
};

export default EditHomePage;