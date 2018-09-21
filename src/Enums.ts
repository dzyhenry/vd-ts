export enum NodeTypeEnum {
  VirtualText = 'VirtualText',
  VirtualNode = 'VirtualNode',
  Thunk = 'Thunk',
  Widget = 'Widget',
  Hook = 'Hook',
  VirtualPatch = 'VirtualPatch',
}

export enum PatchTypeEnum {
  NONE,
  TEXT,
  VNODE,
  WIDGET,
  PROPS,
  ORDER,
  INSERT,
  REMOVE,
  THUNK,
}
