import React from 'react';
import '../styles/general.scss';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import CustomForm from '../components/form/CustomForm';
import Access from '../components/access/Access';

const General = ( { group }: any ) => {

	// const {data: admin, isLoading} = useQuery('') как в languages сделать табы

	const settings: any = {};

	return (
			<div className='general'>
				<div className='column containerContent padding20'>
					<div className='h2 titleAdmin mb-20'>General</div>
					<div className='column containerIn mb-10'>
						<div className='d-flex greyTitle colorBlack border-bottom mb-5'>General Settings</div>
						<div className='column padding10'>
							<Tabs>
								<TabList>
									<div className='row absolut'>
										<Tab>General</Tab>
										<Tab>E-mail</Tab>
										<Tab>Appearance</Tab>
										<Tab>SMS</Tab>
										<Tab>App Settings</Tab>
										<Tab>Payment</Tab>
									</div>
								</TabList>
								<div className='row mt-40 mb-10 border-top'>
									<TabPanel className='row'>
										<CustomForm
												item={ settings }
												fields={ {
													group: {
														name: 'Project Name',
														type: 'input',
														props: {
															containerClassName: 'width-80'
														}
													},
													firstname: {
														name: 'Admin Country ISD Code',
														type: 'input',
														props: {
															containerClassName: 'width-80'
														}
													},
													lastname: {
														name: 'Country Code',
														type: 'input',
														props: {
															containerClassName: 'width-80'
														}
													},
													email: {
														name: 'Enable Masseur Email Verification',
														type: 'select',
														props: {
															containerClassName: 'width-80'
														}
													},
													pass: {
														name: 'Enable User Email Verification',
														type: 'select',
														props: {
															containerClassName: 'width-80'
														}
													},
												} }/>
										<CustomForm
												item={ settings }
												fields={ {
													group: {
														name: 'Wallet fixed amount',
														type: 'input',
														props: {
															containerClassName: 'width-80'
														}
													},
													firstname: {
														name: 'Google Analytics ID',
														type: 'input',
														props: {
															containerClassName: 'width-80'
														}
													},
													lastname: {
														name: 'Maintenance mode for Website',
														type: 'select',
														props: {
															containerClassName: 'width-80'
														}
													},
													email: {
														name: 'Maintenance mode for Apps',
														type: 'select',
														props: {
															containerClassName: 'width-80'
														}
													}
												} }/>
									</TabPanel>
									<TabPanel className='row'>
										<CustomForm
												item={ settings }
												fields={ {
													group: {
														name: 'Project Name',
														type: 'input',
														props: {
															containerClassName: 'width-80'
														}
													},
													firstname: {
														name: 'Admin Country ISD Code',
														type: 'input',
														props: {
															containerClassName: 'width-80'
														}
													},
													lastname: {
														name: 'Country Code',
														type: 'input',
														props: {
															containerClassName: 'width-80'
														}
													},
													email: {
														name: 'Enable Masseur Email Verification',
														type: 'select',
														props: {
															containerClassName: 'width-80'
														}
													},
													pass: {
														name: 'Enable User Email Verification',
														type: 'select',
														props: {
															containerClassName: 'width-80'
														}
													},
												} }/>
										<CustomForm
												item={ settings }
												fields={ {
													group: {
														name: 'Wallet fixed amount',
														type: 'input',
														props: {
															containerClassName: 'width-80'
														}
													},
													firstname: {
														name: 'Google Analytics ID',
														type: 'input',
														props: {
															containerClassName: 'width-80'
														}
													},
													lastname: {
														name: 'Maintenance mode for Website',
														type: 'select',
														props: {
															containerClassName: 'width-80'
														}
													},
													email: {
														name: 'Maintenance mode for Apps',
														type: 'select',
														props: {
															containerClassName: 'width-80'
														}
													}
												} }/>
									</TabPanel>
									<TabPanel className='row'>
										<CustomForm
												item={ settings }
												fields={ {
													group: {
														name: 'Project Name',
														type: 'input',
														props: {
															containerClassName: 'width-80'
														}
													},
													firstname: {
														name: 'Admin Country ISD Code',
														type: 'input',
														props: {
															containerClassName: 'width-80'
														}
													},
													lastname: {
														name: 'Country Code',
														type: 'input',
														props: {
															containerClassName: 'width-80'
														}
													},
													email: {
														name: 'Enable Masseur Email Verification',
														type: 'select',
														props: {
															containerClassName: 'width-80'
														}
													},
													pass: {
														name: 'Enable User Email Verification',
														type: 'select',
														props: {
															containerClassName: 'width-80'
														}
													},
												} }/>
										<CustomForm
												item={ settings }
												fields={ {
													group: {
														name: 'Wallet fixed amount',
														type: 'input',
														props: {
															containerClassName: 'width-80'
														}
													},
													firstname: {
														name: 'Google Analytics ID',
														type: 'input',
														props: {
															containerClassName: 'width-80'
														}
													},
													lastname: {
														name: 'Maintenance mode for Website',
														type: 'select',
														props: {
															containerClassName: 'width-80'
														}
													},
													email: {
														name: 'Maintenance mode for Apps',
														type: 'select',
														props: {
															containerClassName: 'width-80'
														}
													}
												} }/>
									</TabPanel>
									<TabPanel className='row'>
										<CustomForm
												item={ settings }
												fields={ {
													group: {
														name: 'Project Name',
														type: 'input',
														props: {
															containerClassName: 'width-80'
														}
													},
													firstname: {
														name: 'Admin Country ISD Code',
														type: 'input',
														props: {
															containerClassName: 'width-80'
														}
													},
													lastname: {
														name: 'Country Code',
														type: 'input',
														props: {
															containerClassName: 'width-80'
														}
													},
													email: {
														name: 'Enable Masseur Email Verification',
														type: 'select',
														props: {
															containerClassName: 'width-80'
														}
													},
													pass: {
														name: 'Enable User Email Verification',
														type: 'select',
														props: {
															containerClassName: 'width-80'
														}
													},
												} }/>
										<CustomForm
												item={ settings }
												fields={ {
													group: {
														name: 'Wallet fixed amount',
														type: 'input',
														props: {
															containerClassName: 'width-80'
														}
													},
													firstname: {
														name: 'Google Analytics ID',
														type: 'input',
														props: {
															containerClassName: 'width-80'
														}
													},
													lastname: {
														name: 'Maintenance mode for Website',
														type: 'select',
														props: {
															containerClassName: 'width-80'
														}
													},
													email: {
														name: 'Maintenance mode for Apps',
														type: 'select',
														props: {
															containerClassName: 'width-80'
														}
													}
												} }/>
									</TabPanel>
									<TabPanel className='row'>
										<CustomForm
												item={ settings }
												fields={ {
													group: {
														name: 'Project Name',
														type: 'input',
														props: {
															containerClassName: 'width-80'
														}
													},
													firstname: {
														name: 'Admin Country ISD Code',
														type: 'input',
														props: {
															containerClassName: 'width-80'
														}
													},
													lastname: {
														name: 'Country Code',
														type: 'input',
														props: {
															containerClassName: 'width-80'
														}
													},
													email: {
														name: 'Enable Masseur Email Verification',
														type: 'select',
														props: {
															containerClassName: 'width-80'
														}
													},
													pass: {
														name: 'Enable User Email Verification',
														type: 'select',
														props: {
															containerClassName: 'width-80'
														}
													},
												} }/>
										<CustomForm
												item={ settings }
												fields={ {
													group: {
														name: 'Wallet fixed amount',
														type: 'input',
														props: {
															containerClassName: 'width-80'
														}
													},
													firstname: {
														name: 'Google Analytics ID',
														type: 'input',
														props: {
															containerClassName: 'width-80'
														}
													},
													lastname: {
														name: 'Maintenance mode for Website',
														type: 'select',
														props: {
															containerClassName: 'width-80'
														}
													},
													email: {
														name: 'Maintenance mode for Apps',
														type: 'select',
														props: {
															containerClassName: 'width-80'
														}
													}
												} }/>
									</TabPanel>
									<TabPanel className='row'>
										<CustomForm
												item={ settings }
												fields={ {
													group: {
														name: 'Project Name',
														type: 'input',
														props: {
															containerClassName: 'width-80'
														}
													},
													firstname: {
														name: 'Admin Country ISD Code',
														type: 'input',
														props: {
															containerClassName: 'width-80'
														}
													},
													lastname: {
														name: 'Country Code',
														type: 'input',
														props: {
															containerClassName: 'width-80'
														}
													},
													email: {
														name: 'Enable Masseur Email Verification',
														type: 'select',
														props: {
															containerClassName: 'width-80'
														}
													},
													pass: {
														name: 'Enable User Email Verification',
														type: 'select',
														props: {
															containerClassName: 'width-80'
														}
													},
												} }/>
										<CustomForm
												item={ settings }
												fields={ {
													group: {
														name: 'Wallet fixed amount',
														type: 'input',
														props: {
															containerClassName: 'width-80'
														}
													},
													firstname: {
														name: 'Google Analytics ID',
														type: 'input',
														props: {
															containerClassName: 'width-80'
														}
													},
													lastname: {
														name: 'Maintenance mode for Website',
														type: 'select',
														props: {
															containerClassName: 'width-80'
														}
													},
													email: {
														name: 'Maintenance mode for Apps',
														type: 'select',
														props: {
															containerClassName: 'width-80'
														}
													}
												} }/>
									</TabPanel>
								</div>
								<Access group={ 'general' } action='save'>
									<button className='btnSettings1'>SAVE CHANGES</button>
								</Access>
							</Tabs>
						</div>
					</div>
				</div>
			</div>
	);
};

export default General;