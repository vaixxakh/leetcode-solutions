const countConsistentStrings = (allowed, words) => {
    const allowedSet = new Set(allowed);
         return words.reduce((acc, word) =>
             acc + ( [...word].every(ch => allowedSet.has(ch)) ? 1 : 0 ), 0);
};
