export type ZeroArgumentsConstructor<T> = {
  new(): T
};

// Ref: https://opensearch.org/docs/latest/im-plugin/index-settings/
export type IndexSetttings = {
  numberOfShards: number;
  numberOfRoutingShards: number;
}