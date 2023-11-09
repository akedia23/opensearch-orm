export const FIELD_METADATA_KEY = Symbol('field');

export function field() {
  return (target: any, propertyKey: string) => {
    const t = Reflect.getMetadata("design:type", target, propertyKey);
    console.log(t);
    // Reflect.defineMetadata(fieldMetadataKey, propertyKey, target, propertyKey)
    const fields = Reflect.getOwnMetadata(FIELD_METADATA_KEY, target) || [];
    if (!fields.includes(propertyKey)) {
      fields.push(propertyKey)
    }
    Reflect.defineMetadata(FIELD_METADATA_KEY, fields, target);
  };
}