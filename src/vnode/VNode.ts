import VN from './VN';
import { NodeTypeEnum } from '../Enums';
import { isHook, isVirtalNode, isWidget, isThunk } from '../nodeTypeCheck';

export class VNode extends VN {
  tagName: string;
  properties: object;
  children: any[];
  key?: string;
  namespace?: string;
  count: number;
  hasWidgets: boolean;
  hasThunks: boolean;
  hooks?: object;
  desendantHooks: boolean;

  constructor(tagName: string, properties = <any>{}, children = <any>[], key?: string, namespace?: string) {
    super(NodeTypeEnum.VirtualNode);

    this.tagName = tagName;
    this.properties = properties;
    this.children = children;
    this.key = key;
    this.namespace = namespace;

    const count = children.length;
    let descendants = 0;
    let hasWidgets = false;
    let hasThunks = false;
    let desendantHooks = false;
    let hooks:any = null;

    for (const propName in properties) {
      if (properties.hasOwnProperty(propName)) {
        const property: any = properties[propName];
        if (isHook(property) && property.unhook) {
          if (!hooks) {
            hooks = {};
          }
          hooks[propName] = property;
        }
      }
    }

    for (let i = 0; i < children.length; i += 1) {
      const child = children[i];
      if (isVirtalNode(child)) {
        descendants += child.count || 0;

        if (!hasWidgets && child.hasWidgets) {
          hasWidgets = true;
        }

        if (!hasThunks && child.hasThunks) {
          hasThunks = true;
        }

        if (!desendantHooks && (child.hooks || child.desendantHooks)) {
          desendantHooks = true;
        }
      } else if (!hasWidgets && isWidget(child)) {
        if (typeof child.destroy === 'function') {
          hasWidgets = true;
        }
      } else if (!hasThunks && isThunk(child)) {
        hasThunks = true;
      }
    }

    this.count = count + descendants;
    this.hasWidgets = hasWidgets;
    this.hasThunks = hasThunks;
    this.hooks = hooks;
    this.desendantHooks = desendantHooks;
  }
}
