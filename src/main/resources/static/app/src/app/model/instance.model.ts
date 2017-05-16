import {Configuration} from "./configuration.model";
export class Instance {
  constructor(
    public instance_identifier: number,
    public name: string,
    public state: string,
    public status: string,
    public url: string,
    public configuration: Configuration
  ) {}
}
