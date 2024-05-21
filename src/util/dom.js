// @flow strict

import Point from '@mapbox/point-geometry';
import assert from 'assert';

type ScaleReturnValue = {
    x: number;
    y: number;
    boundingClientRect: DOMRect;
};

// refine the return type based on tagName, e.g. 'button' -> HTMLButtonElement
// $FlowFixMe[method-unbinding]
export function create<T: string>(tagName: T, className: ?string, container?: HTMLElement): $Call<typeof document.createElement, T> {
    const el = document.createElement(tagName);
    if (className !== undefined && className !== null) el.className = className;
    if (container) container.appendChild(el);
    return el;
}

export function createSVG(tagName: string, attributes: {[string]: string | number}, container?: Element): Element {
    const el = document.createElementNS('http://www.w3.org/2000/svg', tagName);
    for (const name of Object.keys(attributes)) {
        el.setAttributeNS(null, name, String(attributes[name]));
    }
    if (container) container.appendChild(el);
    return el;
}

const docStyle = typeof document !== 'undefined' ? document.documentElement && document.documentElement.style : null;
const selectProp = docStyle && docStyle.userSelect !== undefined ? 'userSelect' : 'WebkitUserSelect';
let userSelect;

export function disableDrag() {
    if (docStyle && selectProp) {
        // $FlowFixMe[incompatible-type]
        userSelect = docStyle[selectProp];
        // $FlowFixMe[incompatible-type]
        docStyle[selectProp] = 'none';
    }
}

export function enableDrag() {
    if (docStyle && selectProp) {
        // $FlowFixMe[incompatible-type]
        docStyle[selectProp] = userSelect;
    }
}

// Suppress the next click, but only if it's immediate.
function suppressClickListener(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    window.removeEventListener('click', suppressClickListener, true);
}

export function suppressClick() {
    window.addEventListener('click', suppressClickListener, true);
    window.setTimeout(() => {
        window.removeEventListener('click', suppressClickListener, true);
    }, 0);
}

function getScale(element: HTMLElement): ScaleReturnValue {
    const rect = element.getBoundingClientRect();
    return {
        x: (rect.width / element.offsetWidth) || 1,
        y: (rect.height / element.offsetHeight) || 1,
        boundingClientRect: rect,
    };
}

function getPoint(el: HTMLElement, scale: ScaleReturnValue, e: MouseEvent | Touch): Point {
    const rect = scale.boundingClientRect;
    return new Point(
        ((e.clientX - rect.left) / scale.x) - el.clientLeft,
        ((e.clientY - rect.top) / scale.y) - el.clientTop
    );
}

export function mousePos(el: HTMLElement, e: MouseEvent | WheelEvent): Point {
    const scale = getScale(el);
    return getPoint(el, scale, e);
}

export function touchPos(el: HTMLElement, touches: TouchList): Array<Point> {
    const points = [];
    const scale = getScale(el);
    for (let i = 0; i < touches.length; i++) {
        points.push(getPoint(el, scale, touches[i]));
    }
    return points;
}

export function mouseButton(e: MouseEvent): number {
    assert(e.type === 'mousedown' || e.type === 'mouseup');
    if (typeof window.InstallTrigger !== 'undefined' && e.button === 2 && e.ctrlKey &&
        window.navigator.platform.toUpperCase().indexOf('MAC') >= 0) {
        // Fix for https://github.com/mapbox/mapbox-gl-js/issues/3131:
        // Firefox (detected by InstallTrigger) on Mac determines e.button = 2 when
        // using Control + left click
        return 0;
    }
    return e.button;
}
