import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Post_Layout extends Component {

    render() {
        return (
            <div className="row">
                
                    <div className="[ panel panel-default ] panel-google-plus">
                        <div className="dropdown">
                            
                            <ul className="dropdown-menu" role="menu">
                                <li role="presentation"><a role="menuitem" tabIndex={-1} href="#">Action</a></li>
                                <li role="presentation"><a role="menuitem" tabIndex={-1} href="#">Another action</a></li>
                                <li role="presentation"><a role="menuitem" tabIndex={-1} href="#">Something else here</a></li>
                                <li role="presentation" className="divider" />
                                <li role="presentation"><a role="menuitem" tabIndex={-1} href="#">Separated link</a></li>
                            </ul>
                        </div>
                        
                        <div className="panel-heading">
                            <img className="[ img-circle pull-left ]" src="https://lh3.googleusercontent.com/-CxXg7_7ylq4/AAAAAAAAAAI/AAAAAAAAAQ8/LhCIKQC5Aq4/s46-c-k-no/photo.jpg" alt="Mouse0270" />
                            
                            <h5><span>Shared publicly</span> - <span>Jun 27, 2014</span> </h5>
                        </div>
                        <div className="panel-body">
                            <p>Do people born in 2000 get to choose if they are Generation Y or Generation Z? How do you decide what generation you want to belong to?</p>
                        </div>
                        <div className="panel-footer">
                            <button type="button" className="[ btn btn-default ]">+1</button>
                            <button type="button" className="[ btn btn-default ]">
                                <span className="[ glyphicon glyphicon-share-alt ]" />
                            </button>
                            <div className="input-placeholder">Add a comment...</div>
                        </div>
                        <div className="panel-google-plus-comment">
                            
                            <div className="panel-google-plus-textarea">
                                <textarea rows={4} defaultValue={""} />
                                <button type="submit" className="[ btn btn-success disabled ]">Post comment</button>
                                <button type="reset" className="[ btn btn-default ]">Cancel</button>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
                
            
        )
    }
}
export default Post_Layout;