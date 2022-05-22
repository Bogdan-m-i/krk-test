export function throttle(func, ms = 500) {
  let isThrottled = false;
  let savedArgs;
  let savedThis;

  function wrapper(...args) {
    if (isThrottled) { // (2)
      savedArgs = args;
      savedThis = this;
      return;
    }

    func.apply(this, args); // (1)

    isThrottled = true;

    setTimeout(() => {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = null;
        // eslint-disable-next-line no-param-reassign
        args = null;
      }
    }, ms);
  }

  return wrapper;
}

export const empty = () => {};
