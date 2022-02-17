import { Language, Translation, TranslationStorage } from "../../domain";
import LocalStorage from "./LocalStorage";

export default class TranslationStorageACL<N extends Language>
  implements TranslationStorage<N>
{
  localStorage: LocalStorage<Translation<N>>;

  constructor() {
    this.localStorage = new LocalStorage("TRANSLATIONS");
  }

  getAllTranslations(): Promise<Translation<N>[]> {
    return Promise.resolve(this.localStorage.getAllItems());
  }

  saveTranslation(translation: Translation<N>): Promise<void> {
    this.localStorage.insertItem(translation);
    return Promise.resolve();
  }
}
