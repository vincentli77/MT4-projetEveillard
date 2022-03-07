import { indexOf } from "lodash";
import { Language, languagesArray } from "../domain";

export function restrictAvailableLanguages(allLanguages:typeof languagesArray, selectedLanguage:Language) :Language[] {
     
    const index = indexOf(allLanguages ,selectedLanguage);
    const restrictedLanguages = [...allLanguages]
    restrictedLanguages.splice(index, 1);
    return restrictedLanguages;

}