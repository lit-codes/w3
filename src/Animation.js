function requestAnimation(callback, progress) {
    window.requestAnimationFrame(() => callback(progress));
}

function observeScroll (element, callback, { steps, skipStart, skipEnd }) {
    const intersectionObserver = new IntersectionObserver(function(entries) {
        if (entries[0].intersectionRatio <= 0) return;

        callback(entries[0].intersectionRatio);
    }, {
        threshold: Array.from(Array(steps + 1))
        .map((_, i) => i * (1 / steps))
        .filter((t) => t >= skipStart && t <= skipEnd)
    });

    intersectionObserver.observe(element);
}

function scroll(element, callback, options) {
    const { startWithCompleteAnimation } = options;

    if (startWithCompleteAnimation) {
        requestAnimation(callback, 1);
    }

    observeScroll(element, progress => requestAnimation(callback, progress), options);
}

function delay(element, callback, options) {
    const {
        duration = '1s',
        delay = '0.5s',
        timing,
        property,
    } = options;

    callback(0);
    if (property) element.style.transitionProperty = property;
    if (timing) element.style.transitionTimingFunction = timing;
    element.style.transitionDelay = delay;
    element.style.transitionDuration = duration;

    requestAnimation(() => callback(1));
}

function setTrigger(callback, options) {
    const { trigger, element } = options;

    if (trigger === 'scroll') {
        scroll(element, callback, options);
    } else if (trigger === 'delay') {
        delay(element, callback, options);
    } else {
        throw Error(`Trigger type: '${trigger}' is not recognized`);
    }

    return this;
}

function calculateTransform(start, end, progress) {
    return start + (end - start) * progress;
}

export default class Animation {
    constructor(element, options = {}) {
        this.element = element;
        this.options = {
            trigger: 'scroll',
            steps: 30,
            skipStart: 0,
            skipEnd: 1,
            startWithCompleteAnimation: true,
            ...options,
        };
    }
    fadeIn(passedOptions) {
        return this._setTrigger(ratio => {
            this.element.style.opacity = this._progress(ratio, passedOptions);
        }, passedOptions);
    }
    moveUp(start = 10, end = 0, passedOptions) {
        return this.moveY(start, end, passedOptions);
    }
    moveRight(start = 10, end = 0, passedOptions) {
        return this.moveX(start, end, passedOptions);
    }
    moveX(start = 10, end = 0, passedOptions) {
        return this._setTrigger(ratio => {
            this.element.style.transform = `translate(${-calculateTransform(start, end, this._progress(ratio, passedOptions))}px, 0px)`;
        }, passedOptions);
    }
    moveY(start = 10, end = 0, passedOptions) {
        return this._setTrigger(ratio => {
            this.element.style.transform = `translate(0px, ${calculateTransform(start, end, this._progress(ratio, passedOptions))}px)`;
        }, passedOptions);
    }
    _progress(ratio, passedOptions) {
        const { skipStart, skipEnd } = this._getOpts(passedOptions);

        return (1 / (skipEnd - skipStart)) * (ratio - skipStart);
    }
    _setTrigger(callback, passedOptions, element = this.element) {
        const options = this._getOpts(passedOptions);

        setTrigger(callback, { ...options, element });

        return this;
    }
    _getOpts(options) {
        return {
            ...this.options,
            ...options,
        };
    }
}

export function animate(element, options) {
    return new Animation(element, options);
}
