import { DataMapper } from '@aws/dynamodb-data-mapper';
import DynamoDB = require('aws-sdk/clients/dynamodb');
import { DocumentModel } from './document-model';
import { index } from './decorators/index-field';

import {
    attribute,
    hashKey,
    rangeKey,
    table,
} from '@aws/dynamodb-data-mapper-annotations';
import { field } from './decorators/field';
import { Mapper } from './mapper';
import { documentModel } from './decorators/document-model';

const mapper = new DataMapper({
    client: new DynamoDB({region: 'us-west-2'}), // the SDK client used to execute operations
    tableNamePrefix: 'dev_' // optionally, you can provide a table prefix to keep your dev and prod tables separate
});

// @table('')
// class DDBExample {
//     @hashKey()
//     test: string;

//     @hashKey()
//     test2: string

// }

@documentModel()
class Person  {
    @index()
    name?: string;

    @field()
    age?: number;

    @field()
    height?: number;
}

const osMapper = new Mapper(undefined);
const person = Object.assign(new Person, {
    name: 'Bob',
    age: 45,
    height: 60
});
osMapper.marshall(person);

// functions
// DocumentModel.query(queryTypes[]: Match, MultiMatch, MatchPhrase extend QueryType) or search()
// to keep terminology
// DocumentModel.put() or index() to keep terminology
// need to add ^(boost) to fields