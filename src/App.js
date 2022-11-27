import React from "react";
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage";

export class App extends React.Component {
        
    state = { language: "Italiano" }

    hadlerSelect = (event) => {
        const lang = event.target.value;
        this.setState({
            language: lang
        });
    }

    render() {
        return (
            <div>
                <select value={this.state.language} onChange={this.hadlerSelect}>
                    <option value="Italiano">Italiano</option>
                    <option value="English">English</option>
                    <option value="Français">Français</option>
                </select>
                <LanguageContext.Provider value={this.state.language}>
                    <DisplayLanguage/>
                </LanguageContext.Provider>
            </div>
        )
    }
}