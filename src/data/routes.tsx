import { GoChecklist, GoColumns, GoFileMedia, GoGear, GoPasskeyFill, GoPerson, GoSync } from 'react-icons/go';
import {
	HiArrowRightOnRectangle,
	HiChartBar,
	HiMap,
	HiOutlineChatBubbleOvalLeftEllipsis,
	HiOutlineGlobeAlt,
	HiOutlineMap,
	HiOutlineReceiptPercent,
	HiOutlineWrenchScrewdriver,
	HiOutlineXCircle
} from 'react-icons/hi2';
import React from 'react';
import Dashboard from '../pages/Dashboard';
import Admin from '../pages/Admin';
import AdminGroups from '../pages/AdminGroups';
import { IRoute } from '../types/routes';
import Orders from '../pages/Orders';
import PromoCode from '../pages/PromoCode';
import GodsView from '../pages/GodsView';
import HeatView from '../pages/HeatView';
import Reviews from '../pages/Reviews';
import Advertisement from '../pages/Advertisement';
import AlertCustomers from '../pages/AlertCustomers';
import Payment from '../pages/Payment';
import Referral from '../pages/Referral';
import Wallet from '../pages/Wallet';
import CustomerOutstandingReport from '../pages/CustomerOutstandingReport';
import ContactUs from '../pages/ContactUs';
import Sos from '../pages/Sos';
import OrdersHelp from '../pages/OrdersHelp';
import PaytmentSupportRequests from '../pages/PaytmentSupportRequests';
import WithdrawRequests from '../pages/WithdrawRequests';
import General from '../pages/General';
import EmailTemplates from '../pages/EmailTemplates';
import SMSTemplates from '../pages/SMSTemplates';
import LanguageLabel from '../pages/LanguageLabel';
import Language from '../pages/Language';
import Country from '../pages/Country';
import State from '../pages/State';
import PagesUtility from '../pages/PagesUtility';
import HomePage from '../pages/HomePage';
import News from '../pages/News';
import Newsletter from '../pages/Newsletter';
import FAQ from '../pages/FAQ';
import FAQCategories from '../pages/FAQCategories';
import HelpTopics from '../pages/HelpTopics';
import HelpTopicsCategories from '../pages/HelpTopicsCategories';
import CancelReason from '../pages/CancelReason';
import SendPushNotification from '../pages/SendPushNotification';
import SystemDiagnostic from '../pages/SystemDiagnostic';
import AppLaunchInfo from '../pages/AppLaunchInfo';
import Logout from '../pages/Logout';
import Customers from '../pages/Customers';
import EditAdmin from '../pages/editPage/EditAdmin';
import EditCustomers from '../pages/editPage/EditCustomers';
import EditPromoCode from '../pages/editPage/EditPromoCode';
import EditAdvertisement from '../pages/editPage/EditAdvertisement';
import EditEmailTemplate from '../pages/editPage/EditEmailTemplate';
import EditSmsTemplate from '../pages/editPage/EditSmsTemplate';
import EditLanguageLabel from '../pages/editPage/EditLanguageLabel';
import EditStaticPage from '../pages/editPage/EditStaticPage';
import EditHomePage from '../pages/editPage/EditHomePage';
import EditNews from '../pages/editPage/EditNews';
import EditFAQ from '../pages/editPage/EditFAQ';
import EditFAQCategories from '../pages/editPage/EditFAQCategories';
import EditHelpTopics from '../pages/editPage/EditHelpTopics';
import EditHelpTopicsCategories from '../pages/editPage/EditHelpTopicsCategories';
import EditCancelReason from '../pages/editPage/EditCancelReason';
import EditCountry from '../pages/editPage/EditCountry';
import EditState from '../pages/editPage/EditState';
import EditAdminGroups from '../pages/editPage/editAdminGroup/EditAdminGroups';
import CreateAdmin from '../pages/createPage/CreateAdmin';
import CreateAdminGroups from '../pages/createPage/CreateAdminGroups';
import CreateCustomers from '../pages/createPage/CreateCustomers';
import CreatePromoCode from '../pages/createPage/CreatePromoCode';
import CreateAdvertisement from '../pages/createPage/CreateAdvertisement';


export const routes: IRoute[] = [
	{
		name: 'Dashboard',
		icon: <GoColumns className='iconSideMenu'/>,
		path: '/',
		content: <Dashboard/>,
	},

	{
		name: 'Admin',
		icon: <GoPasskeyFill className='iconSideMenu'/>,
		path: '/admin',
		permissions: {
			group: [ 'users', 'roles' ],
			action: 'list',
		},
		children: [
			{
				name: 'Admin',
				path: '/list',
				content: <Admin/>,
				permissions: {
					group: 'users',
					action: 'list',
				},
			},
			{
				path: '/list/:id',
				content: <EditAdmin/>,
			},
			{
				path: '/list/create_admin',
				content: <CreateAdmin/>,
			},
			{
				name: 'Admin Groups',
				path: '/roles',
				content: <AdminGroups/>,
				permissions: {
					group: 'users',
					action: 'list',
				},
			},
			{
				path: '/roles/:id',
				content: <EditAdminGroups/>
			},
			{
				path: '/roles/create_admin_group',
				content: <CreateAdminGroups/>
			}
		]
	},

	{
		name: 'Customers',
		icon: <GoPerson className='iconSideMenu'/>,
		path: '/customers',
		content: <Customers/>,
		permissions: {
			group: [ 'customers' ],
			action: 'list',
		},
	},

	{
		path: '/customers/:id',
		content: <EditCustomers/>
	},

	{
		path: '/customers/create_customers',
		content: <CreateCustomers/>
	},

	{
		name: 'Orders',
		icon: <GoChecklist className='iconSideMenu'/>,
		path: '/orders',
		content: <Orders/>,
		permissions: {
			group: [ 'orders' ],
			action: 'list',
		},
	},

	{
		name: 'PromoCode',
		icon: <HiOutlineReceiptPercent className='iconSideMenu'/>,
		path: '/promocode',
		content: <PromoCode/>,
		permissions: {
			group: [ 'promo' ],
			action: 'list',
		},
	},

	{
		path: '/promocode/:id',
		content: <EditPromoCode/>
	},

	{
		path: '/promocode/create_promo_code',
		content: <CreatePromoCode/>
	},

	{
		name: 'Gods View',
		icon: <HiOutlineMap className='iconSideMenu'/>,
		path: '/gods_view',
		content: <GodsView/>,
	},

	{
		name: 'Heat View',
		icon: <HiMap className='iconSideMenu'/>,
		path: '/heat_view',
		content: <HeatView/>,
	},

	{
		name: 'Reviews',
		icon: <HiOutlineChatBubbleOvalLeftEllipsis className='iconSideMenu'/>,
		path: '/reviews',
		content: <Reviews/>,
		permissions: {
			group: [ 'reviews' ],
			action: 'list',
		},
	},

	{
		name: 'Advertisement Banners',
		icon: <GoFileMedia className='iconSideMenu'/>,
		path: '/advertisement',
		content: <Advertisement/>,
		permissions: {
			group: [ 'promo' ],
			action: 'list',
		},
	},

	{
		path: '/advertisement/:id',
		content: <EditAdvertisement/>
	},
	{
		path: '/advertisement/create_advertisement',
		content: <CreateAdvertisement/>
	},

	{
		name: 'Decline Alert',
		icon: <HiOutlineXCircle className='iconSideMenu'/>,
		path: '/decline_alert',
		permissions: {
			group: [ 'users', 'roles' ],
			action: 'list',
		},
		children: [
			{
				name: 'Alert for Customers',
				path: '/alert_for_customers',
				content: <AlertCustomers/>,
				permissions: {
					group: 'users',
					action: 'list',
				},
			},
		]
	},

	{
		name: 'Reports',
		icon: <HiChartBar className='iconSideMenu'/>,
		path: '/reports',
		permissions: {
			group: [ 'users', 'roles' ],
			action: 'list',
		},
		children: [
			{
				name: 'Payment Report',
				path: '/payment',
				content: <Payment/>,
				permissions: {
					group: 'users',
					action: 'list',
				},
			},
			{
				name: 'Referral Report',
				path: '/referral',
				content: <Referral/>,
				permissions: {
					group: 'users',
					action: 'list',
				},
			},
			{
				name: 'Wallet Report',
				path: '/wallet',
				content: <Wallet/>,
				permissions: {
					group: 'users',
					action: 'list',
				},
			},
			{
				name: 'Customer Outstanding Report',
				path: '/customer_outstanding_report',
				content: <CustomerOutstandingReport/>,
				permissions: {
					group: 'users',
					action: 'list',
				},
			},
		]
	},

	{
		name: 'Support Requests',
		icon: <GoSync className='iconSideMenu'/>,
		path: '/support',
		permissions: {
			group: [ 'users', 'roles' ],
			action: 'list',
		},
		children: [
			{
				name: 'Contact Us',
				path: '/contact_us',
				content: <ContactUs/>,
				permissions: {
					group: 'users',
					action: 'list',
				},
			},
			{
				name: 'SOS',
				path: '/sos',
				content: <Sos/>,
				permissions: {
					group: 'users',
					action: 'list',
				},
			},
			{
				name: 'Orders Help',
				path: '/orders_help',
				content: <OrdersHelp/>,
				permissions: {
					group: 'users',
					action: 'list',
				},
			},
			{
				name: 'Payment Requests',
				path: '/payment_requests',
				content: <PaytmentSupportRequests/>,
				permissions: {
					group: 'users',
					action: 'list',
				},
			},
			{
				name: 'Withdraw Requests',
				path: '/withdraw_requests',
				content: <WithdrawRequests/>,
				permissions: {
					group: 'users',
					action: 'list',
				},
			},
		]
	},

	{
		name: 'Settings',
		icon: <GoGear className='iconSideMenu'/>,
		path: '/settings',
		permissions: {
			group: [ 'users', 'roles' ],
			action: 'list',
		},
		children: [
			{
				name: 'General',
				path: '/general',
				content: <General/>,
				permissions: {
					group: 'users',
					action: 'list',
				},
			},
			{
				name: 'Email Templates',
				path: '/email_templates',
				content: <EmailTemplates/>,
				permissions: {
					group: 'users',
					action: 'list',
				},
			},
			{
				name: 'SMS Templates',
				path: '/sms_templates',
				content: <SMSTemplates/>,
				permissions: {
					group: 'users',
					action: 'list',
				},
			},
			{
				name: 'Language Labels',
				path: '/language_labels',
				content: <LanguageLabel/>,
				permissions: {
					group: 'users',
					action: 'list',
				},
			},
			{
				name: 'Language',
				path: '/language',
				content: <Language/>,
				permissions: {
					group: 'users',
					action: 'list',
				},
			},
		]
	},
	{
		name: 'Localization',
		icon: <HiOutlineGlobeAlt className='iconSideMenu'/>,
		path: '/localization',
		permissions: {
			group: [ 'users', 'roles' ],
			action: 'list',
		},
		children: [
			{
				name: 'Country',
				path: '/country',
				content: <Country/>,
				permissions: {
					group: 'users',
					action: 'list',
				},
			},
			{
				path: '/country/:id',
				content: <EditCountry/>
			},
			{
				name: 'State',
				path: '/state',
				content: <State/>,
				permissions: {
					group: 'users',
					action: 'list',
				},
			},
			{
				path: '/state/:id',
				content: <EditState/>
			}
		]
	},

	{
		name: 'Utility',
		icon: <HiOutlineWrenchScrewdriver className='iconSideMenu'/>,
		path: '/utility',
		permissions: {
			group: [ 'users', 'roles' ],
			action: 'list',
		},
		children: [
			{
				name: 'Pages',
				path: '/pages',
				content: <PagesUtility/>,
				permissions: {
					group: 'users',
					action: 'list',
				},
			},
			{
				name: 'Home Page',
				path: '/home_page',
				content: <HomePage/>,
				permissions: {
					group: 'users',
					action: 'list',
				},
			},
			{
				name: 'News',
				path: '/news',
				content: <News/>,
				permissions: {
					group: 'users',
					action: 'list',
				},
			},
			{
				path: '/news/:id',
				content: <EditNews/>,
			},
			{
				name: 'Newsletter Subscribers',
				path: '/newsletter',
				content: <Newsletter/>,
				permissions: {
					group: 'users',
					action: 'list',
				},
			},
			{
				name: 'FAQ',
				path: '/faq',
				content: <FAQ/>,
				permissions: {
					group: 'users',
					action: 'list',
				},
			},
			{
				path: '/faq/:id',
				content: <EditFAQ/>
			},
			{
				name: 'FAQ Categories',
				path: '/faq_categories',
				content: <FAQCategories/>,
				permissions: {
					group: 'users',
					action: 'list',
				},
			},
			{
				path: '/faq_categories/:id',
				content: <EditFAQCategories/>
			},
			{
				name: 'Help Topics',
				path: '/help_topics',
				content: <HelpTopics/>,
				permissions: {
					group: 'users',
					action: 'list',
				},
			},
			{
				path: '/help_topics/:id',
				content: <EditHelpTopics/>
			},
			{
				name: 'Help Topics Categories',
				path: '/help_topics_categories',
				content: <HelpTopicsCategories/>,
				permissions: {
					group: 'users',
					action: 'list',
				},
			},
			{
				path: '/help_topics_categories/:id',
				content: <EditHelpTopicsCategories/>
			},
			{
				name: 'Cancel Reason',
				path: '/cancel_reason',
				content: <CancelReason/>,
				permissions: {
					group: 'users',
					action: 'list',
				},
			},
			{
				path: '/cancel_reason/:id',
				content: <EditCancelReason/>
			},
			{
				name: 'Send Push Notification',
				path: '/send_push_notification',
				content: <SendPushNotification/>,
			},
			{
				name: 'System Diagnostic', // TODO это нужно?
				path: '/diagnostic',
				content: <SystemDiagnostic/>,

			},
			{
				name: 'App Launch Info', // это нужно?
				path: '/app_info',
				content: <AppLaunchInfo/>,
			},
		]
	},

	{
		name: 'Logout',
		icon: <HiArrowRightOnRectangle className='iconSideMenu'/>,
		path: '/logout',
		content: <Logout/>,
	},

	{
		path: '/edit_email_template',
		content: <EditEmailTemplate/>
	},
	{
		path: '/edit_sms_template',
		content: <EditSmsTemplate/>
	},
	{
		path: '/edit_language_label',
		content: <EditLanguageLabel/>
	},

	{
		path: '/edit_static_page',
		content: <EditStaticPage/>
	},

	{
		path: '/edit_home_page',
		content: <EditHomePage/>
	},

];

