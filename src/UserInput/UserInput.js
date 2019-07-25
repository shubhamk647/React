import React from 'react';


const UserInput = (props) => {
    const style = {
        backgroundColor: "grey",
    };
    return (
        <input style = {style} type = "text" onInput={props.handler} value = {props.oldVal}/>
    );
};

export default UserInput;