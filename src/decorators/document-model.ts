import { Document } from "../document";
// document model -> perform functions (match, match all)
function documentModel(index: string): ClassAnnotation {
  return constructor => {
    constructor.prototype[index] = index;
  };
}

export interface ClassAnnotation {
  (target: Document<any>): void;
}

@documentModel('hello')
class Test {

}

const object = new Test();
console.log(object['index']);

// functions
// DocumentModel.query(queryTypes[]: Match, MultiMatch, MatchPhrase extend QueryType) or search()
// to keep terminology
// DocumentModel.put() or index() to keep terminology
// need to add ^(boost) to fields