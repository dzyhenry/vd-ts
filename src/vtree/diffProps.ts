import VN from '../vnode/VN';
import { isHook } from '../nodeTypeCheck';

const diffProps = (a: any, b: any): any => {
    let diff: any | null; 
    for (const aKey in a) {
        const aValue: any = a[aKey];
        const bValue: any = b[aKey];
        if (aValue === bValue) {
            continue;   
        } else if (isObject(aValue) && isObject(bValue)) {
            if (getPrototype(aValue) !== getPrototype(bValue)) {
                diff = diff || {};
                diff[aKey] = bValue;
            } else if (isHook(bValue)) {
                diff = diff || {};
                diff[aKey] = bValue;
            } else {
                const objectDiff: object | null = diffProps(aValue, bValue);
                if (objectDiff) {
                    diff = diff || {};
                    diff[aKey] = objectDiff;
                }
            }
        } else {
            diff = diff || {};
            diff[aKey] = bValue;
        }
    }

    for (const bKey in b) {
        if (!(bKey in a)) {
            diff = diff || {};
            diff[bKey] = b[bKey];
        }
    }
    return diff;
}

const isObject = (val: any) : boolean => {
    if (typeof val === 'object') {
        return true;
    } else if (typeof val === 'function') {
        return true;
    }
    return false;
}

const getPrototype = (val: object): object => {
    if (Object.getPrototypeOf) {
        return Object.getPrototypeOf(val);
    } else if (val.constructor) {
        return val.constructor.prototype;
    }
}