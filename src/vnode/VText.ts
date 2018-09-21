import VN from './VN';
import { NodeTypeEnum } from '../Enums';

export class VText extends VN {
  text: string;
  constructor(text: string) {
    super(NodeTypeEnum.VirtualText);
    this.text = text;
  }
}
