import React from 'react'
import {Card, CardTitle, CardText} from 'react-mdl';
import './Project.css';
export default function Project(props) {

    function pictureLocator(location){
        var str = 'url('+location+')  center 50% no-repeat #D8D8D8';
        return str;
    }
    
    return (
        <>
            <Card shadow={5} style={{maxWidth:'100%',minHeight: '200px', margin: 'auto', marginTop: '15px'}}>
                <CardTitle expand style={{color: 'red', background: pictureLocator(props.img), backgroundSize: '100%'}}></CardTitle>
                <CardText style={{width:"100%"}}>
                    {props.name}{props.desc}
                </CardText>
                
            </Card>
        </>
    );
    
}
