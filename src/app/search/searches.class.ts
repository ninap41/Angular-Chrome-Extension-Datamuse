import { Observable, of } from 'rxjs';

// // START not in current functionality feature WIP
// import { Observable, BehaviorSubject } from 'rxjs';

// export interface Set {
//     rhymeShow?: boolean;
//     definitionShow?: boolean;
//     synonymShow?: boolean;
//     antonymShow?: boolean;
// }

// export interface HistoryAndData {
//     RhymObjList?: Array<string>;
//     SynObjList?: Array<string>;
//     DefObjList?: Array<string>;
//     RelObjList?: Array<string>;
//     AntObjList?: Array<string>;
//     history?: Array<string>;
// }

// export class Settings {
//         settings: Set = {
//             rhymeShow: true,
//             definitionShow: true,
//             synonymShow: true,
//             antonymShow: true
//          };

//     createSettings() {
//         return this.settings;
//     }

//     updateSettings(settin, setString: string) {
//         // tslint:disable-next-line:no-unused-expression
//         settin[setString] === true ?  settin[setString] === false : settin[setString] === true;
//         return settin[setString];
//     }
// }

// export class Context {
//     url = 'https://api.datamuse.com';
//     type: any;
//     word: string;
//     call: any;
//     wordlimit: number;
//     calls = {
//         definitions :  this.url + '/words?sp= ' + this.word + '&md=d&max=1',
//         relatedWords: this.url + '/words?&ml=' + this.word,
//         rhymes : this.url + '/words?rel_syn=' + this.word + '&ml=' + this.word,
//         synonyms : this.url + '/words?rel_rhy=' + this.word,
//         antonyms: this.url + '/words?rel_ant=' + this.word
//     };

//     searchDict;
//     data: HistoryAndData = {

//     };

//     constructor() {
//         this.url = this.url;
//         this.word = this.word;
//         this.searchDict = this.data;
//     }

//     createStartContext() {
//         return this.searchDict;
//     }

//     query(type: any, word: string) {
//         return;
//     }
//     returnSpecificContext(context: string) {
//         return this.searchDict._value[context];
//     }

//     addKeyAndList(key: string) {
//         this.searchDict.con.set(key, []);
//     }


//     getAndAssign(key: string, content: any) {
//         this.searchDict._value.set(key, content);
//         this.searchDict.asObservable().subscribe((data) => {
//             this.searchDict._value.set(key, content);
//             console.log (  this.searchDict._value);
//         });
//         // return  this.searchDict.con;
//     }
// }
// // END not in current functionality feature WIP



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
    history: Array<string>;
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
    this.history = [];
    this.favorites = [];
  }

  createContext() {
    return this;
  }

  createUrl(key: string) { // call from the loopty loop for keys
    let formattedUrl = null;
    // tslint:disable-next-line:prefer-const
    let urls = {
      rhymList: `${this.url}/words?&ml=${this.word}`,
      defList: `${this.url}/words?sp=${this.word}&md=d&max=1`,
      synList: `${this.url}/words?rel_syn=${this.word}&ml=${this.word}`,
      antList: `${this.url}/words?rel_ant=${this.word}`,
      relList: `${this.url}/words?&ml=${this.word}`,
    };
    formattedUrl = urls[key];
    return formattedUrl;
  }
}
