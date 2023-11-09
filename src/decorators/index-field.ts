import 'reflect-metadata';

export const INDEX_METADATA_KEY = Symbol('index');

export function index () {
  return (target: any, propertyKey: string) => {
    const index = Reflect.getOwnMetadata(INDEX_METADATA_KEY, target);
    if (!index) {
      Reflect.defineMetadata(INDEX_METADATA_KEY, propertyKey, target)
    }
  };
}