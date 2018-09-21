import VN from './VN';
import { NodeTypeEnum, PatchTypeEnum } from '../Enums';

export default class VPatch extends VN {
  constructor(type: PatchTypeEnum, vnode: VN, patch: any) {
    super(NodeTypeEnum.VirtualPatch);
  }
}
