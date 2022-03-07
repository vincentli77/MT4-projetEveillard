import { restrictAvailableLanguages } from '.';
import {languagesArray, Language} from '../domain'


test('' ,() => {
    const result = restrictAvailableLanguages(languagesArray, 'FR')
    const expected_result: Language[] =  ['EN', 'IT'];
    expect(result).toEqual(expected_result);
})

test('' ,() => {
    const result = restrictAvailableLanguages(languagesArray, 'EN')
    const expected_result: Language[] =  ['FR', 'IT'];
    expect(result).toEqual(expected_result);
})