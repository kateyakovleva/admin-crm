import React, { useState } from 'react';
import '../styles/dashboardPage.scss';
import { GoBell, GoOrganization, GoPeople, GoPerson } from 'react-icons/go';
import TotalOrdersChart from '../components/charts/TotalOrdersChart';
import AdminEarningChart from '../components/charts/AdminEarningChart';
import Select from 'react-select';
import EarningReportChart from '../components/charts/EarningReportChart';
import TotalOrdersCircleChart from '../components/charts/TotalOrdersCircleChart';
import OrdersStatistic from '../components/charts/OrdersStatistic';

const options = [
	{ value: '2023', label: '2023' },
	{ value: '2022', label: '2022' },
	{ value: '2021', label: '2021' },
];

const Dashboard = () => {

	const [ selectedOption, setSelectedOption ] = useState( options[ 0 ] );
	const change = ( value: any ) => {
		setSelectedOption( value );
	};

	return (
			<div className='dashboardPage column'>

				<div className='row justify-between'>
					<div className='column containerContent width-55'>
						<div className='column width-95 padding20'>
							<div className='titleDashboardPage mb-30'>Member Statistics</div>
							<div className='row justify-between width-85'>
								<div className='row align-center justify-center mb-30'>
									<div className='circleDiv grey d-flex mr-10'>
										<GoPeople className='iconCircle dark-grey'/>
									</div>
									<div className='column'>
										<div className='text-up'>20</div>
										<div className='text-down'>Users</div>
									</div>
								</div>
								<div className='row align-center justify-center mb-30'>
									<div className='circleDiv blue d-flex mr-10'>
										<GoPerson className='iconCircle dark-blue'/>
									</div>
									<div className='column'>
										<div className='text-up'>21</div>
										<div className='text-down'>Models</div>
									</div>
								</div>
								<div className='row align-center justify-center mb-30'>
									<div className='circleDiv orange d-flex mr-10'>
										<GoOrganization className='iconCircle dark-orange'/>
									</div>
									<div className='column'>
										<div className='text-up'>1</div>
										<div className='text-down'>Companies</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='column containerContent width-45'>
						<div className='column width-85 padding20'>
							<div className='titleDashboardPage'>Total Orders</div>
							<div className='subTitleDashboard mt-10 mb-10'>39</div>
							<div>
								<TotalOrdersChart/>
							</div>
						</div>
					</div>
				</div>

				<div className='row justify-between'>
					<div className='d-flex align-content-between containerContent width-49'>
						<div className='column width-85 padding20'>
							<div className='titleDashboardPage mb-50'>Admin Earning</div>
							<AdminEarningChart/>
						</div>
						<div className='row border-top justify-between width-100'>
							<div className='column align-center justify-center width-50 padding10'>
								<div className='text-down'>Total Earning</div>
								<div className='text-green mt-5'>$ 300.09</div>
							</div>
							<div className='column align-center justify-center border-left width-50 padding10'>
								<div className='text-down'>Outstanding Amount</div>
								<div className='text-red mt-5'>$ 550.39</div>
							</div>
						</div>
					</div>
					<div className='column containerContent padding20 width-46'>
						<div className='row justify-between width-100 mb-30'>
							<div className='titleDashboardPage'>Earning Report</div>
							<div className='row justify-between align-center width-23'>
								<div className='text-in-Title'>Year</div>
								<Select className='selector-small width-70'
								        defaultValue={ selectedOption }
								        onChange={ change }
								        options={ options }
								/>
							</div>
						</div>
						<div>
							<EarningReportChart/>
						</div>
					</div>
				</div>

				<div className='row justify-between'>
					<div className='column containerContent width-49'>
						<div className='column width-85 padding20'>
							<div className='titleDashboardPage mb-10'>Total Orders</div>
							<TotalOrdersCircleChart/>
						</div>
						<div className='row border-top justify-between'>
							<div className='column align-center justify-center width-50 padding10'>
								<div className='text-down'>Cancelled Orders</div>
								<div className='text-red mt-5'>8</div>
							</div>
							<div className='column align-center justify-center border-left width-50 padding10'>
								<div className='text-down'>Completed Orders</div>
								<div className='text-green mt-5'>57</div>
							</div>
							<div className='column align-center justify-center border-left width-50 padding10'>
								<div className='text-down'>On Going Orders</div>
								<div className='text-orange mt-5'>1</div>
							</div>
						</div>
					</div>
					<div className='column containerContent padding20 width-46'>
						<div className='row justify-between width-100 mb-30'>
							<div className='titleDashboardPage'>Order Statistic</div>
							<div className='row justify-between align-center width-23'>
								<div className='text-in-Title'>Year</div>
								<Select className='selector-small width-70'
								        defaultValue={ selectedOption }
								        onChange={ change }
								        options={ options }
								/>
							</div>
						</div>
						<div>
							<OrdersStatistic/>
						</div>
					</div>
				</div>

				<div className='row justify-between'>
					<div className='column containerContent width-49'>
						<div className='row justify-between width-90 padding20'>
							<div className='titleDashboardPage'>Contact Us Form Requests</div>
							<button className='btnView'>View all</button>
						</div>
						<button className='d-flex width-90 padding20'>
							<div className='row justify-between align-center padding10 width-100 bName'>
								<div className='row'>
									<div className='circleDiv blue d-flex mr-10'>
										<GoBell className='iconCircle dark-blue'/>
									</div>
									<div className='column align-center justify-center'>
										<div className='text-up'>Jan*****</div>
										<div className='text-down'>s*******</div>
									</div>
								</div>
								<div className='d-flex text-up align-center justify-center'>131 Days ago</div>
							</div>
						</button>
					</div>
					<div className='column containerContent width-49'>
						<div className='row justify-between width-90 padding20'>
							<div className='titleDashboardPage'>SOS Requests</div>
							<button className='btnView'>View all</button>
						</div>
						<button className='d-flex width-90 padding20'>
							<div className='row justify-between align-center padding10 width-100 bName'>
								<div className='row'>
									<div className='circleDiv orange d-flex mr-10'>
										<GoBell className='iconCircle dark-orange'/>
									</div>
									<div className='column align-center justify-center'>
										<div className='text-up'>Jan*****</div>
										<div className='text-down'>s*******</div>
									</div>
								</div>
								<div className='d-flex text-up align-center justify-center'>133 Days ago</div>
							</div>
						</button>
					</div>
				</div>

				<div className='column containerContent width-100'>
					<div className='row justify-between width-90 padding20'>
						<div className='titleDashboardPage'>Payment Requests</div>
						<button className='btnView width-10'>View all</button>
					</div>
					<div className='d-flex h3 align-center justify-center mb-50'>No Payment Requests.</div>
				</div>

				<div className='column containerContent width-100'>
					<div className='row justify-between width-90 padding20'>
						<div className='titleDashboardPage'>Notifications Alerts Panel</div>
						<button className='btnView width-10'>View all</button>
					</div>
					<button className='d-flex width-90 padding20'>
						<div className='row justify-between align-center padding10 width-100 bName'>
							<div className='row'>
								<div className='circleDiv purple d-flex mr-10'>
									<GoBell className='iconCircle dark-purple'/>
								</div>
								<div className='column align-center justify-center'>
									<div className='text-up'>Ahma*****</div>
									<div className='text-down'>s*******</div>
								</div>
							</div>
							<div className='d-flex text-up align-center justify-center'>63 Days ago</div>
						</div>
					</button>
				</div>

				<div className='column containerContent width-100'>
					<div className='row justify-between width-90 padding20 mb-30'>
						<div className='titleDashboardPage'>Customer/Model</div>
						<div className='row justify-between align-center width-10'>
							<div className='text-in-Title'>Year</div>
							<Select className='selector-small width-70'
							        defaultValue={ selectedOption }
							        onChange={ change }
							        options={ options }
							/>
						</div>
					</div>
				</div>

			</div>
	);
};

export default Dashboard;