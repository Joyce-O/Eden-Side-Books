import React from "react";
import axios from 'axios';
import CommentsCard from "../src/CommentsCard";


class Comments extends React.Component {

    static async getInitialProps () {
        var promise = axios.get('http://localhost:4000/comments').
        then(response => {
            return {
                hasErrored: false,
                commentData: response.data
            };
        })
            .catch(error => {
                return {
                    hasErrored: true,
                    message: error.message
                }
            });
        return promise;
    }

    constructor(props) {
        super(props);
        this.state = {
            hasErrored: props.hasErrored,
            message: props.message,
            commentData: props.commentData
        }
    }


    componentDidMount() {

    }

     componentWillUnmount() {

    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card-deck">
                        {this.state.commentData.map((comment) =>
                            <div className="card col-4 cardmin margintopbottom20" key={comment.id}>
                                <CommentsCard comment={comment}/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Comments;
