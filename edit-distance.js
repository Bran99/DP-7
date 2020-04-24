Time: O(M*N) where M is word1.length and N is word2.length
Space: O(N) where N is word2.length (reduced from 2d array to 1d array)

const minDistance = (word1, word2) => {
    if (!word1 || !word1.length) return word2.length;
    if (!word2 || !word2.length) return word1.length;
    
    const dp = new Array(word2.length + 1);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = i;
    }
    let prev = dp[0];
    for (let i = 1; i <= word1.length; i++) {
        for (let j = 0; j <= word2.length; j++) {
            if (j == 0) {
                prev = dp[j];
                dp[j]++;
            }
            else if (word1[i - 1] == word2[j - 1]) {
                let temp = dp[j];
                dp[j] = prev;
                prev = temp;
            }
            else {
                let min = 1 + Math.min(prev, dp[j - 1], dp[j]);
                prev = dp[j];
                dp[j] = min;
            }
        }
    }
    return dp[dp.length - 1];
}
