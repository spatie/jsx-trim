import { createElement as _createElement } from 'react';

export function createElement(type, props) {
	if (props != null && typeof props.className === 'string') {
		arguments[1].className = props.className.trim().replace(/\s+/g, ' ');
	}

	return _createElement.apply(undefined, arguments);
}
