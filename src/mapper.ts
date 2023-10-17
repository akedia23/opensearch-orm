import 'reflect-metadata';
import { Client } from '@opensearch-project/opensearch';
import { IndexSetttings, PutOptions } from './types';

export class Mapper {
  client: Client;

  constructor (client: Client) {
    this.client = client;
  }

  // TEST: if you can call index twice with the same index
  // TODO: fix any typing
  async createIndex (schema: any, settings: IndexSetttings) {
    try {
      await this.client.indices.create()
    } catch (e) {
      throw new Error(`Failed to create index ${schema.index}`, { cause: e })
    }
  }

  async put (document: any, options?: PutOptions) {
    try {
      const marshalledDocument = this.marshall(document, options);
      await this.client.index(marshalledDocument);
    } catch (e) {
      throw new Error(`Failed to put document with index ${document.index}`, { cause: e });
    }

  }

  async query () {

  }

  async delete () {
    
  }

  marshall (schema: any, options?: PutOptions) {
    const body: Record<string, any> = {};
    const fields: string[] = Reflect.getMetadata('fields', schema);
    fields.forEach((field) => {
      body[field] = schema[field];
    });
    const id: string = Reflect.getMetadata('id', schema);
    const index: string = Reflect.getMetadata('index', schema);
    const document = {
      index,
      ...(id && { id }),
      body,
      ...options
    };

    return document;
  }
}