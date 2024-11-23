/**
 * Retry a function (e.g., dynamic import) multiple times with a delay between attempts
 */
export const retry = <T>(func: () => Promise<T>, retriesLeft = 5, interval = 1000): Promise<T> => {
    return new Promise((resolve, reject) => {
      func()
        .then(resolve)
        .catch((error) => {
          if (retriesLeft <= 1) {
            reject(error); // Fail if no retries are left
            return;
          }
          setTimeout(() => {
            retry(func, retriesLeft - 1, interval).then(resolve).catch(reject);
          }, interval); // Retry after the interval
        });
    });
  };
  