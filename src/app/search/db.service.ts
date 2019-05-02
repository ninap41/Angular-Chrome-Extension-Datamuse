import { Injectable } from '@angular/core';
import { SearchService } from './search.service';


@Injectable({
  providedIn: 'root'
})
export class DbService {
dbase;
  constructor(
    // private low: low,
    // private db : db
  ) { 
    // this.dbase = new db();
    // const adapter = new FileSync('db.json')
    // this.dbase = this.low(adapter);
  }

  //  this.dbase.defaults({ posts: [], user: {}, count: 0 })
//   .write()

// // Add a post
// this.db.get('posts')
//   .push({ id: 1, title: 'lowdb is awesome'})
//   .write()

// // Set a user using Lodash shorthand syntax
// this.db.set('user.name', 'typicode')
//   .write()
  
// // Increment count
// this.db.update('count', n => n + 1)
//   .write()

}
