// START not in current functionality feature WIP
import { Observable, BehaviorSubject } from 'rxjs';

export class Context {
    con = new Map<string, object>();
    searchDict;
    constructor() {
        this.searchDict = new BehaviorSubject<any>(
            // Behavior subject so we can
            // subsribe to an observable thats a map of info that can be set...
            // instead of a bunch of seperate observables  in data.service
             this.con.set('RhymObjList', []).set('SynObjList', []).set('DefObjList', []).set('RelObjList', [])
        );
    }

    type: any;
    word: string;

    query(type: any, word: string) {
        return;
    }
    returnSpecificContext() {
        return this.searchDict;
    }

    addKeyAndList() {
        this.searchDict.con.set('newkey', []);
    }

    newKey(newKey: string) {
        this.searchDict.con.set(newKey, []);
    }

    getAndAssign(key: string, content: any) {
        this.searchDict._value.set(key, content);
        this.searchDict.asObservable().subscribe((data) => {
            this.searchDict._value.set(key, content);
            console.log (  this.searchDict._value);
        });
        // return  this.searchDict.con;
    }
}
// END not in current functionality feature WIP
