import React from 'react'
import { dependencies } from '../..'
import { translationApi, ProtoTranslation, languagesArray, Language, translatedLanguagesArray} from '../../domain'
import { restrictAvailableLanguages } from '../../restrictAvailableLanguages'

export default function AddTranslation(): React.ReactElement {
  const [nativeWord, setNativeWord] = React.useState('')
  const [nativeLanguage, setNativeLanguage] = React.useState<Language>('EN')
  const [foreignLanguage, setForeignLanguage] = React.useState<Language>('FR')
  const [foreignWord, setForeignWord] = React.useState('')

  const canSubmit = nativeWord && foreignWord && nativeLanguage && foreignLanguage && nativeLanguage !== foreignLanguage

  function onNativeWordChange(event: React.SyntheticEvent<HTMLInputElement>): void {
    setNativeWord(event.currentTarget.value)
  }

  function onNativeLanguageChange(event: React.SyntheticEvent<HTMLSelectElement>): void {
    setNativeLanguage(event.currentTarget.value as Language)
    console.log(event.currentTarget.value)
  }

  function onForeignLanguageChange(event: React.SyntheticEvent<HTMLSelectElement>): void {
    setForeignLanguage(event.currentTarget.value as Language)
    console.log(event.currentTarget.value)
  }

  function onForeignWordChange(event: React.SyntheticEvent<HTMLInputElement>): void {
    setForeignWord(event.currentTarget.value)
  }

  async function submit(): Promise<void> {
    if (canSubmit) {
      const protoTranslation: ProtoTranslation<Language> = {
        native: {
          language: nativeLanguage,
          value: nativeWord,
        },
        foreign: {
          language: foreignLanguage,
          value: foreignWord,
        },
      }
      console.log(protoTranslation['native']['language'])
      await translationApi.addTranslation(dependencies)(protoTranslation)
    }
  }

  return (
    <table>
      <thead>
        <tr>
          <th>
            <select onChange={onNativeLanguageChange} key={foreignLanguage}>
            {restrictAvailableLanguages(languagesArray, foreignLanguage).map(language => {
              return <option value={language} key={language}>{language}</option>
            })}
            </select>
          </th>
          <th><select onChange={onForeignLanguageChange} key={nativeLanguage}>
            {restrictAvailableLanguages(languagesArray, nativeLanguage).map(language => {
              return <option value={language} key={language}>{language}</option>
            })}
            </select>
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input type="text" onChange={onNativeWordChange} />
          </td>
          <td>
            <input type="text" onChange={onForeignWordChange} />
          </td>
          <td>
            <button disabled={!canSubmit} onClick={submit}>
              Add translation
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
