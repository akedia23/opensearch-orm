import 'reflect-metadata';

export function index() {
  return (target: any, propertyKey: string) => {

    // const className = target.constructor.name;
    // if (isSet) {
    //   throw new Error(`Property decorator can only be used once per class: ${className}`);
    // }
    // isSet = true;

    // // appliedProperties.add(className);
    // // if (initialized) {
    // //   throw new Error(`Index has already been set for ${propertyKey}`);
    // // }
    Reflect.defineMetadata('index', propertyKey, target, propertyKey)
  };
}