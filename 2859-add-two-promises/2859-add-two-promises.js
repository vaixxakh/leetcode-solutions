function addTwoPromises(promise1, promise2) {
  return Promise.all([promise1, promise2])
    .then(([a, b]) => a + b);
}
