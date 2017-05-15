export class Configuration {
  constructor(public id: number, public amiIdentifier: string, public wordpressVersion: string,
              public osVersion: string, public region: string, public instanceType: string) {}
}
