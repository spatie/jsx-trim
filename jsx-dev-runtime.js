import { createElement } from './index';

export function jsxDEV(type, props = {}, key) {
    if (key) {
        props.key = key;
    }

	return createElement(type, props);
}

