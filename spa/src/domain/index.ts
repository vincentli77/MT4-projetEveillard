export const languagesArray = ["EN", "FR", "IT"] as const;
export const translatedLanguagesArray = ["EN", "FR", "IT"] as const;
export type Language = typeof languagesArray[number];

interface Word<L extends Language> {
  language: L;
  value: string;
}


export interface Translation<N extends Language> {
  id: string;
  native: Word<N>;
  foreign: Word<N>;
}

export type IdGenerator = () => string;

export interface TranslationStorage<N extends Language> {
  getAllTranslations(): Promise<Translation<N>[]>;
  saveTranslation(translation: Translation<N>): Promise<void>;
}

export interface Dependencies<N extends Language> {
  createId: IdGenerator;
  storage: TranslationStorage<N>;
}

const getAllTranslationsForForeignLanguage =
  <N extends Language>({ storage }: Dependencies<N>) =>
    async (language: N): Promise<Translation<N>[]> => {
      const allTranslations = await storage.getAllTranslations();
      return allTranslations.filter(
        ({ foreign }) => foreign.language === language
      );
    };

export type ProtoTranslation<N extends Language> = Omit<Translation<N>, "id">

const addTranslation =
  <N extends Language>({ createId, storage }: Dependencies<N>) =>
    async (protoTranslation: ProtoTranslation<N>): Promise<void> => {
      const translation: Translation<N> = {
        ...protoTranslation,
        id: createId(),
      };
      await storage.saveTranslation(translation);
    };

export const translationApi = {
  getAllTranslationsForForeignLanguage,
  addTranslation
}