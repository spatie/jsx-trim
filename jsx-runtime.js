import { createElement } from './index';
export { Fragment } from 'react';

export function jsx(type, props = {}, key) {
	if (key) {
		props.key = key;
	}

	return createElement(type, props);
}

export function jsxs(type, props = {}, key) {
	if (key) {
		props.key = key;
	}

	let children = props.children;
	delete props.children;
	return createElement(type, props, ...children);
}
