import { Observable, of } from 'rxjs';

export interface Set { // boopity
    rhymeShow?: boolean;
    definitionShow?: boolean;
    synonymShow?: boolean;
    antonymShow?: boolean;
}

export interface Dict { // boopity
    rhymList?: Array<any>;
    synList?: Array<any>;
    defList?: Array<any>;
    relList?: Array<any>;
    antList?: Array<any>;
}

export class Context { // dee
    url: string;
    word: string;
    loadState: boolean;
    loadStateMessage: string;
    searchDict: Dict;
    settings: Set;
    errMessage: string;
    sdKeys: Array<string>;
    favorites: Array<string>;

  constructor() {
    this.url = 'https://api.datamuse.com';
    this.word = '';
    this.sdKeys = ['rhymList', 'synList', 'defList', 'relList', 'antList']; // however many lists you want to populate
    this.searchDict = {
      rhymList: [],
      synList: [],
      defList: [],
      relList: [],
      antList: []
    };
    this.settings = {
        rhymeShow: true,
        definitionShow: true,
        synonymShow: true,
        antonymShow: true
    };
    this.errMessage = '';
    this.loadState = false;
    this.loadStateMessage = 'getting info....';
    this.favorites = [];
  }

  createContext() {
    return this;
  }

  createUrl(key: string) { // call from the loopty loop for keys
    let formattedUrl = null;
    let urls = {
      rhymList: `${this.url}/words?rel_rhy=${this.word}`,
      defList: `${this.url}/words?sp=${this.word}&md=d&max=1`,
      synList: `${this.url}/words?rel_syn=${this.word}`,
      antList: `${this.url}/words?rel_ant=${this.word}`,
      relList: `${this.url}/words?&ml=${this.word}`,
    };
    formattedUrl = urls[key];
    return formattedUrl;
  }
}
