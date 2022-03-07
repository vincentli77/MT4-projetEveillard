import React, { Fragment, useEffect, useState } from 'react'
import { cardList } from '../../cardList'
import Card from '../../component/Card'
import ColorPicker from '../../component/ColorPicker'
import styles from './Home.module.scss'
import { Link } from 'react-router-dom'

import { dependencies } from '../..'
import { translationApi, Translation, Language } from '../../domain'

export interface Props {}

export const Home = (props: Props) => {
  const [chosenLanguage, setChosenLanguage] = React.useState<Language>('EN')
  const [translations, setTranslations] = useState<Translation<Language>[]>([])
  const [allTranslations, setAllTranslations] = useState<Translation<Language>[]>([])
  

  function selectLanguage(event: React.SyntheticEvent<HTMLButtonElement>) : void {
    setChosenLanguage(event.currentTarget.value as Language);
  }

   function getTranslations() {
    let allLanguages :string[] = [];

    allTranslations.map(translate => {
      if (allLanguages.indexOf(translate.foreign.language) !== -1) {
        // allLanguages
      } else {
        allLanguages.push(translate.foreign.language)
      }
    })

    return allLanguages;
  }


  useEffect(() => {
    translationApi
      .getAllTranslationsForForeignLanguage(dependencies)(chosenLanguage)
      .then((translations) => setTranslations(translations))
  },[chosenLanguage])

  
  useEffect(() => {
    translationApi
      .getAllTranslationsForEveryForeignLanguage(dependencies)
      .then((allTranslations) => setAllTranslations(allTranslations))
  },[])

  const languages = getTranslations();


  return (
    <>
      <div className={styles.container}>
        <ColorPicker />
        {languages.map(language => {
          return <button onClick={selectLanguage} value={language}>{language}</button>
        })}
        <div className={styles.home}>
          {translations.map(function (translation) {
            return (
              <div>
                <Card key={translation.id} translation={translation} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
