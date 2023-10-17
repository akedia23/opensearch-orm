import 'reflect-metadata';

export function index() {
  return (target: any, propertyKey: string) => {
    const index = Reflect.getOwnMetadata('index', target);
    if (!index) {
      Reflect.defineMetadata('index', propertyKey, target)
    }
  };
}