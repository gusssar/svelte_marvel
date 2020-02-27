export function fetchRetry(
  url,
  delay = 1000,
  limit = 3,
  fetchOptions = { mode: "cors" }
) {
  return new Promise((resolve, reject) => {
    function success(response) {
      resolve(response);
    }

    function retry(error) {
      limit--;
      if (limit) {
        setTimeout(fetchUrl, delay);
      } else {
        reject(error);
      }
    }

    function finalHandler(error) {
      throw error;
    }

    function fetchUrl() {
      return fetch(url, fetchOptions)
        .then(res => res.json())
        .then(res => {
          if (res.response === "error") {
            retry(res.response);
          }
          return res;
        })
        .then(success)
        .catch(retry)
        .catch(finalHandler);
    }

    fetchUrl();
  });
}
