import React from "react";
import { LanguageContext } from "./LanguageContext";

export class DisplayLanguage extends React.Component {


    render() {
        
        return (
            <div>
                <LanguageContext.Consumer>
                    {element => {
                        return <h1>{element}</h1>
                    }}
                </LanguageContext.Consumer>
            </div>
        )
    }
}