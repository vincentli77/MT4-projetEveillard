// @ts-ignore

import React, { Fragment, useEffect, useState } from 'react'
import {cardList}  from "../../cardList";
import { useParams } from "react-router-dom";
import styles from "./Single.module.scss";

import { dependencies } from '../..'
import { translationApi, Translation, Language } from '../../domain'
import AddTranslation from '../AddTranslation'

interface RouteParams {
  id: any;
  slug: any
}

export interface Props {
  card?: any
}

export const SingleCard = ( props: Props ) => {

  const params = useParams<RouteParams>();
  const [translations, setTranslations] = useState<Translation<Language>[]>([])

  useEffect(() => {
    translationApi
      .getAllTranslationsForForeignLanguage(dependencies)('FR')
      .then((translations) => setTranslations(translations))
  },[])
  
  return (
    <div>
      <a></a>
      <div>
        <div>
          <section>
            <h1>Add a new translation</h1>
            <AddTranslation />
          </section>
        </div>
      </div>
    </div>
  );
};
