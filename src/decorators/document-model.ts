import 'reflect-metadata';
// document model -> perform functions (match, match all)
export function documentModel () {
  return (target: Function) => {
    // Store metadata or perform validation
    Reflect.defineMetadata('documentModel', true, target.prototype);
  };
}