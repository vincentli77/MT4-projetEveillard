import React from 'react'
import { Type } from 'typescript'
import { dependencies } from '../..'
import { translationApi, ProtoTranslation, languagesArray, Language} from '../../domain'

export default function Component(): React.ReactElement {
  const [nativeWord, setNativeWord] = React.useState('')
  const [nativeLabel, setNativeLabel] = React.useState('')
  const [foreignWord, setForeignWord] = React.useState('')

  const canSubmit = nativeWord && foreignWord

  function onNativeWordChange(event: React.SyntheticEvent<HTMLInputElement>): void {
    setNativeWord(event.currentTarget.value)
  }

  function onNativeLabelChange(event: React.SyntheticEvent<HTMLSelectElement>): void {
    setNativeLabel(event.currentTarget.value)
    console.log(event.currentTarget.value)
  }

  function onForeignWordChange(event: React.SyntheticEvent<HTMLInputElement>): void {
    setForeignWord(event.currentTarget.value)
  }

  async function submit(): Promise<void> {
    if (canSubmit) {
      const protoTranslation: ProtoTranslation<"EN"> = {
        native: {
          language: nativeLabel as Language,
          value: nativeWord,
        },
        foreign: {
          language: nativeLabel as Language,
          value: foreignWord,
        },
      }
      await translationApi.addTranslation(dependencies)(protoTranslation)
    }
  }

  return (
    <table>
      <thead>
        <tr>
          <th>
            <select onChange={onNativeLabelChange}>
            {languagesArray.map(language => {
              return <option value={language}>{language}</option>
            })}
            </select>
          </th>
          <th>French</th>
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
