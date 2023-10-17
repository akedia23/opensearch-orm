import 'reflect-metadata';

export function index() {
  return (target: any, propertyKey: string) => {
    const index = Reflect.getOwnMetadata('id', target);
    if (!index) {
      Reflect.defineMetadata('id', propertyKey, target)
    }
  };
}