import React, { Fragment, useEffect, useState } from 'react'
import { cardList } from '../../cardList'
import Card from '../../component/Card'
import ColorPicker from '../../component/ColorPicker'
import styles from './Home.module.scss'
import { Link } from 'react-router-dom'

import { dependencies } from '../..'
import { translationApi, Translation } from '../../domain'
import AddTranslation from '../AddTranslation'
// import TranslationItem from '../TranslationItem'

export interface Props {}

export const Home = (props: Props) => {
  const [translations, setTranslations] = useState<Translation<'EN'>[]>([])

  useEffect(() => {
    translationApi
      .getAllTranslationsForForeignLanguage(dependencies)('FR')
      .then((translations) => setTranslations(translations))
  })

  return (
    <>
      <div className={styles.container}>
        <ColorPicker />
        <div className={styles.home}>
          {translations.map(function (translation) {
            return (
              <div>
                <Card key={translation.id} translation={translation} />
              </div>
            )
          })}
        </div>

        <section>
          <h1>Add a new translation</h1>
          <AddTranslation />
        </section>
      </div>
    </>
  )
}
