import React, { Component } from 'react';
import { connect } from 'react-redux';
import { _logout } from '../actions/user'
import { _updateAvatar } from '../actions/user'
import { Link } from 'react-router-dom';
import '../css/home.css'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Post_Layout from '../components/post'


class Home extends Component {

    state = {
        avatar: null
    }

    _handleLogout = () => {
        const { _logout, history } = this.props;
        _logout(history);


    }
    _handleChangeFile = e => {
        this.setState({
            avatar: e.target.files[0]
        })


    }
    _handleSubmit = e => {
        // e.preventDefault();
        const { avatar } = this.state
        const { _updateAvatar } = this.props
        _updateAvatar(avatar);

        // _updateAvatar(this.state.avatar)

    }

    render() {
        const photoURL = this.props.user.infoUser.url
            ? `https://socialnetwork113.herokuapp.com/get_avatar/${this.props.user.infoUser.url}`
            : `https://socialnetwork113.herokuapp.com/get_avatar/default.png`
        // const photoURL = this.props.user.infoUser.url
        //     ? `http://localhost:3000/get_avatar/${this.props.user.infoUser.url}`
        //     : `http://localhost:3000/get_avatar/default.png`
        return (
            <div>

                <div className="header__content">
                    <nav className="ul-style">
                        <ul >
                            <li className="active"><a href="#">Trang chủ</a></li>
                            <li><a href="#">Lời mời kết bạn</a></li>
                            <li><a href="#">Tin nhắn</a></li>
                            <li><a href="#">Thông báo</a></li>
                            <li><a href="#">Cài đặt</a></li>
                            <li><button className="btn btn-default btn_logout" onClick={() => this._handleLogout()}>Đăng xuất</button></li>


                        </ul>
                        <div style={{ float: "right", marginRight: "20px" }}>
                            <input id="search-user" placeholder="search" type="text" />
                            <button className="btn btn-primary" type="submit">Search</button>
                        </div>

                    </nav>
                </div>




                <div className="container-fluid">
                    <div className="row profile">
                        <div className="col-md-3">
                            <div className="profile-sidebar">

                                <div className="profile-userpic">

                                    <img src={photoURL} onClick={() => { this.upload.click() }} className="img-responsive" alt="" />

                                </div>

                                <input ref={(ref) => this.upload = ref} style={{ display: "none" }} type="file" name="avatar" id="avatar"
                                    onChange={e => this._handleChangeFile(e)}
                                />


                                <div className="profile-usertitle">
                                    <div className="profile-usertitle-name">
                                        {this.props.user.username.fullname}
                                    </div>
                                    <div className="profile-usertitle-job">
                                        Developer
                                </div>
                                </div>

                                <div className="profile-userbuttons">
                                    <button onClick={e => this._handleSubmit(e)} name="submit" style={{ backgroundColor: "#d9534f" }} type="button" className="btn btn-success btn-sm">Change Avatar</button>
                                    <button style={{ backgroundColor: "#5cb85c" }} type="button" className="btn btn-danger btn-sm">Message</button>
                                </div>

                                <div className="profile-usermenu">
                                    <ul className="nav">
                                        <li className="active">
                                            <Link>
                                                <i className="glyphicon glyphicon-home" />
                                                Overview
                                            </Link>
                                        </li>
                                        <li>
                                            <Link>
                                                <i className="glyphicon glyphicon-phone" />
                                                {this.props.user.infoUser.phone}
                                            </Link>

                                        </li>
                                        <li>
                                            <Link>
                                                <i className="glyphicon glyphicon-heart-empty" />
                                                {this.props.user.infoUser.birthday}
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="/update_info">
                                                <i className="glyphicon glyphicon-cog" />
                                                <strong>Update Profile</strong>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/update_password">
                                                <i className="glyphicon glyphicon-cog" />
                                                <strong>Update Password</strong>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6">
                            
                                <Post_Layout/>
                            
                        </div>
                        <div className="col-md-3">
                            <div className="profile-content">
                                Some user related content goes here...
                            </div>
                        </div>

                    </div>
                </div>

            </div>



        )
    }
}

const mapStateToProps = state => ({
    user: state.user



});
export default connect(mapStateToProps, { _logout, _updateAvatar })(Home);