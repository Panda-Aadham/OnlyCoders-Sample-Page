import React from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Post from "../../../../components/Post/Post";
import "./Posts.css";

const Posts = () => {
    const options = ['Everything', 'Most recent', 'Popular'];
    const [value, setValue] = React.useState<string>(options[0]);
    const [inputValue, setInputValue] = React.useState('');

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
            <Post/>
        </div>
    )
}

export default Posts;