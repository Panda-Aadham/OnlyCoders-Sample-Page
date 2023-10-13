import React from "react";
import { Card } from "react-bootstrap";
import { sampleUsers } from "../../sampleData/userData";
import UserDetails from "../UserDetails/UserDetails";
import Icon from "../Icon/Icon";
import "./Post.css";

export interface Post {
    user: string;
    type: | "update"
    | "reply"
    | "regular";
    content: string;
    commentCount: number;
    shareCount: number;
    title?: string;
    replyTopicForum?: [string, string];
}

// {
//     name: "Charlotte King",
//     username: "c.king",
//     profilePicture: "/images/user/profile8.png",
//     verified: true,
//     proUser: true,
//     level: 7,
//     uuid: "2B6A71C9D5E0F384",
//     registrationDate: new Date(2024, 0, 23),
// },

const examplePost: Post = {
    user: "2B6A71C9D5E0F384",
    type: "reply",
    content: "Hello everyone! This is an example post.",
    commentCount: 12,
    shareCount: 4,
    replyTopicForum: ["Harry Potter","Book Club"]
}

const Post = () => {
    const user = sampleUsers.find((user) => user.uuid == examplePost.user);

    return(
        <Card className="post-card">
            {user && <Card.Body className="post-card-title">
                <div className="post-user-icon">
                    <Icon picture={user?.profilePicture} level={user?.level}/>
                </div>
                <Card.Title className="post-title">
                    <UserDetails user={user}/>
                </Card.Title>
            </Card.Body>}

        </Card>
    )
};

export default Post;