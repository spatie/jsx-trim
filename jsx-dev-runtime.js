import { createElement } from './index';
export { Fragment } from 'react';

export function jsxDEV(type, props = {}, key) {
    if (key) {
        props.key = key;
    }

	return createElement(type, props);
}

