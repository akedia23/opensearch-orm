const fieldMetadataKey = Symbol('field');

export function field() {
  return (target: any, propertyKey: string) => {
    console.log(target);
    console.log(propertyKey);
    const t = Reflect.getMetadata("design:type", target, propertyKey);
    console.log(t);
    // Reflect.defineMetadata(fieldMetadataKey, propertyKey, target, propertyKey)
    const fields = Reflect.getOwnMetadata('fields', target) || [];
    if (!fields.includes(propertyKey)) {
      fields.push(propertyKey)
    }
    Reflect.defineMetadata('fields', fields, target)
  };
}