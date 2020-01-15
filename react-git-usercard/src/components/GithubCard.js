import React, { Component } from 'react';



const UserCard =(props) =>{
    console.log(props)
    return(
        <Card key={props.id}>
        <Card-Img src={props.avatar} alt={props.name}/>
        <Card-Body>
                <Card-Title>{props.name}</Card-Title>
                <Card-Title>{props.login}</Card-Title>
                <Card-Text>{props.email}</Card-Text>
        </Card-Body>
        </Card>
    );
}

export default UserCard;