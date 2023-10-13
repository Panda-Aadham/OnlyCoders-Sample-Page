import React from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Post, { PostType } from "../../../../components/Post/Post";
import "./Posts.css";

// Example post
const examplePost1: PostType = {
    user: "2B6A71C9D5E0F384",
    type: "reply",
    content: "Hello everyone! This is an example post.",
    datePosted: new Date(Date.now() - 31536000000),
    commentCount: 12,
    shareCount: 4,
    replyTopicForum: ["Harry Potter is all-time biggest series in the world","Book Club Forum"]
}

// Example post
const examplePost2: PostType = {
    user: "2A9FBCD3476E81D5",
    type: "reply",
    content: "Nature photos are cool!",
    datePosted: new Date(Date.now() - 257200),
    commentCount: 4,
    shareCount: 0,
    replyTopicForum: ["Nature photos","Photography Enthusiasts Forum"]
}


// Custom component for the posts column of the feed
const Posts = () => {
    const options = ['Everything', 'Most recent', 'Popular'];
    const [value, setValue] = React.useState<string>(options[0]);
    const [inputValue, setInputValue] = React.useState('');

    const posts = [examplePost1, examplePost2]

    return(
        <div className="posts-container">
            <div className="posts-filter">
                <div className="posts-heading">
                    All Updates
                </div>
                <Autocomplete
                    value={value}
                    onChange={(event: any, newValue: string) => {
                        setValue(newValue);
                    }}
                    disableClearable={true}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                    }}
                    className="posts-autocomplete"
                    options={options}
                    renderInput={params => (
                    <TextField className="posts-autotext"
                        {...params} 
                        label="Show"
                        InputLabelProps={{style: { color: '#abaec7'}}}/>
                        )
                    }
                />
            </div>
            {posts.map((post) => 
            <div className="posts-post">
                <Post post={post}/>
            </div>)}
        </div>
    )
}

export default Posts;