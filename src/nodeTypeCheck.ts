import VN from './vnode/VN';
import { NodeTypeEnum } from './Enums';

export const isVirtalNode = (node: VN): boolean => node.type === NodeTypeEnum.VirtualNode;
export const isVirtualText = (node: VN): boolean => node.type === NodeTypeEnum.VirtualText;
export const isThunk = (node: VN): boolean => node.type === NodeTypeEnum.Thunk;
export const isHook = (node: VN): boolean => node.type === NodeTypeEnum.Hook;
export const isWidget = (node: VN): boolean => node.type === NodeTypeEnum.Widget;
