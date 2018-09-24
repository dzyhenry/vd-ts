import version from './version';
import { NodeTypeEnum } from '../Enums';

/**
 * Basic class of all virtual nodes
 */
export default class VN {
  version: number;
  type: NodeTypeEnum;
  constructor(type: NodeTypeEnum) {
    this.version = version;
    this.type = type;
  }
}
