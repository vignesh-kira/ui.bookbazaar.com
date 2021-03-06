import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaughWink, faTachometerAlt, faSignOutAlt, faTools, faListOl, faPlusCircle, faEdit } from '@fortawesome/free-solid-svg-icons'
import {withCookies} from "react-cookie";
import {Link} from "react-router-dom";
import LogoutModal from "./LogoutModal";

class SideNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false
		};
	}

	toggle = () => {
		this.setState(prevState => ({
			modal: !prevState.modal
		}));
	};

	render() {
		const {cookies} = this.props;
		const {modal} = this.state;
		const user = cookies.get('user');

		return (
			<React.Fragment>
				<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

					{/* Sidebar - Brand */}
					<a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
						<div className="sidebar-brand-icon rotate-n-15">
							<FontAwesomeIcon icon={faLaughWink} size="2x"/>
						</div>
						<div className="sidebar-brand-text mx-3" style={{textTransform: 'none'}}>{user.firstname}</div>
					</a>

					{/* Divider */}
					<hr className="sidebar-divider my-0"/>

					{/* Nav Item - Dashboard */}
					<li className="nav-item active">
						<Link className="nav-link" to="/dashboard">
							<i>
								<FontAwesomeIcon icon={faTachometerAlt}/>
							</i>
							<span>Dashboard</span></Link>
					</li>

					{/* Divider */}
					<hr className="sidebar-divider"/>

					{/* Heading */}
					<div className="sidebar-heading">
						Advertisement
					</div>

					<li className="nav-item">
						<Link className="nav-link" to="/advertisement/list">
							<i>
								<FontAwesomeIcon icon={faListOl}/>
							</i>
							<span>List</span>
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/advertisement/create">
							<i>
								<FontAwesomeIcon icon={faPlusCircle}/>
							</i>
							<span>Create</span>
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/advertisement/my">
							<i>
								<FontAwesomeIcon icon={faEdit}/>
							</i>
							<span>My Ads</span>
						</Link>
					</li>

					{/* Divider */}
					<hr className="sidebar-divider"/>

					{/* Heading */}
					<div className="sidebar-heading">
						Settings
					</div>

					{/* Nav Item - Pages Collapse Menu */}
					<li className="nav-item">
						<Link className="nav-link" to="/settings/profile">
							<i>
								<FontAwesomeIcon icon={faTools}/>
							</i>
							<span>Profile</span>
						</Link>
					</li>

					{/* Nav Item - Tables */}
					<li className="nav-item">
						<a className="nav-link" href="#" onClick={this.toggle}>
							<i>
								<FontAwesomeIcon icon={faSignOutAlt}/>
							</i>
							<span>Logout</span>
						</a>
					</li>

					{/* Divider */}
					<hr className="sidebar-divider d-none d-md-block"/>
				</ul>
				<LogoutModal
					modal={modal}
					toggle={this.toggle}
				/>
			</React.Fragment>
		);
	}
}


export default withCookies(SideNav);

