import React, {Component} from "react";

class CommentsCard extends Component {

    render() {
        return (
            <div>
                <img className="card-img-top" src={`/static/comments/Comment-${this.props.comment.id}.jpg`}/>
                <div className="card-body">
                    <h4 className="card-title">{this.props.comment.body} {this.props.comment.postId} </h4>
                </div>
            </div>
        );
    }
}

export default CommentsCard;

