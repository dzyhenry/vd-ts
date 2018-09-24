import VN from './VN';
import { NodeTypeEnum, PatchTypeEnum } from '../Enums';

export default class VPatch extends VN {
  vNode: VN;
  patch: any;
  constructor(type: PatchTypeEnum, vNode: VN, patch: any) {
    super(NodeTypeEnum.VirtualPatch);
    this.vNode = vNode;
    this.patch = patch;
  }
}
