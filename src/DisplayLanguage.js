import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function DisplayLanguage() {

    const element = useContext(LanguageContext);

    return <h1>{element}</h1>

}