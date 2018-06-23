import { HumanAttributes } from './humanAttributes.interface';

export interface Human {
  humanId: number,
  humanType: string,
  attributes: HumanAttributes
}
