import 'reflect-metadata';
import { Client } from '@opensearch-project/opensearch';
import { DocumentModel } from './document-model';
import { AwsSigv4Signer } from '@opensearch-project/opensearch/aws';
import { TransportRequestOptions } from '@opensearch-project/opensearch/lib/Transport';
import { IndexSetttings } from './types/types';

export class Mapper {
  client: Client;

  constructor (client: Client) {
    this.client = client;
  }

  // TEST: if you can call index twice with the same index
  // TODO: fix any typing
  async createIndex (documentModel: any, settings: IndexSetttings) {
    try {
      await this.client.indices.create()
    } catch (e) {
      throw new Error(`Could not create index ${documentModel.index}`, { cause: e })
    }
  }

  async put (document: DocumentModel) {


  }

  async query () {

  }

  async delete () {
    
  }

  marshall (documentModel: any) {
    const fields = Reflect.getMetadata('fields', documentModel);
    console.log(fields);
  }
}