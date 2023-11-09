import 'reflect-metadata';

export const ID_METADATA_KEY = Symbol('id');

export function id () {
  return (target: any, propertyKey: string) => {
    const id = Reflect.getOwnMetadata(ID_METADATA_KEY, target);
    if (!id) {
      Reflect.defineMetadata(ID_METADATA_KEY, propertyKey, target);
    }
  };
}