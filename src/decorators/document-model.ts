import 'reflect-metadata';

export const DOCUMENT_MODEL_METADATA_KEY = Symbol('documentModel');

// document model -> perform functions (match, match all)
export function documentModel () {
  return (target: Function) => {
    // Store metadata or perform validation
    Reflect.defineMetadata(DOCUMENT_MODEL_METADATA_KEY, true, target.prototype);
  };
}