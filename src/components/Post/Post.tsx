import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { sampleUsers } from "../../sampleData/userData";
import UserDetails from "../UserDetails/UserDetails";
import Icon from "../Icon/Icon";
import "./Post.css";

export interface PostType {
    user: string;
    type: | "update"
    | "reply"
    | "regular";
    content: string;
    commentCount: number;
    shareCount: number;
    datePosted: Date;
    title?: string;
    replyTopicForum?: [string, string];
}

const Post = (props: {post: PostType}) => {
    const {post} = props;

    // Get the posts user data
    const user = sampleUsers.find((user) => user.uuid == post.user);
    const [postDate, setPostDate] = useState("");

    // Set the post display date
    useEffect(() => {
        const now: Date = new Date();
        const timeDifference = now.getTime() - post.datePosted.getTime();
        
        if (timeDifference < 24 * 60 * 60 * 1000) {
        // Less than 1 day ago
        setPostDate('Posted recently');
        } else if (timeDifference < 7 * 24 * 60 * 60 * 1000) {
        // Less than 1 week ago
        const daysAgo = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
        setPostDate(`${daysAgo} day${daysAgo > 1 ? 's' : ''} ago`);
        } else if (timeDifference < 30 * 24 * 60 * 60 * 1000) {
        // Less than 1 month ago
        const weeksAgo = Math.floor(timeDifference / (7 * 24 * 60 * 60 * 1000));
        setPostDate(`${weeksAgo} week${weeksAgo > 1 ? 's' : ''} ago`);
        } else if (timeDifference < 365 * 24 * 60 * 60 * 1000) {
        // Less than 1 year ago
        const monthsAgo = Math.floor(timeDifference / (30 * 24 * 60 * 60 * 1000));
        setPostDate(`${monthsAgo} month${monthsAgo > 1 ? 's' : ''} ago`);
        } else {
        // More than 1 year ago
        const yearsAgo = Math.floor(timeDifference / (365 * 24 * 60 * 60 * 1000));
        setPostDate(`${yearsAgo} year${yearsAgo > 1 ? 's' : ''} ago`);
        }
    }, []);

    return(
        <Card className="post-card">
            {user && <Card.Body className="post-card-title">
                <div className="post-user-icon">
                    <Icon picture={user?.profilePicture} level={user?.level}/>
                </div>
                <Card.Title className="post-title-container">
                    <div className="post-title">
                        <div className="user-details-container">
                            <UserDetails user={user} />
                        </div>
                        <div className="title-text">
                            {post.type == "reply" && post.replyTopicForum && <p>replied to the topic
                                <span style={{fontWeight: "bold"}}> {post.replyTopicForum[0]} </span>
                                in the forum
                                <span style={{fontWeight: "bold"}}> {post.replyTopicForum[1]}</span>
                                </p>}
                            {post.type == "update" && <p>posted an update</p>}
                            {post.type == "regular" && <p>{post.title}</p>}
                        </div>
                    </div>
                    <p className="post-date">
                        {postDate}
                    </p>
                </Card.Title>
            </Card.Body>}
            <div className="post-content">
                {post.content}
            </div>
            <div className="post-responses">
                <p className="post-response post-comment">{post.commentCount} Comments</p>
                <p className="post-response post-share">{post.shareCount} Shares</p>
            </div>
        </Card>
    )
};

export default Post;