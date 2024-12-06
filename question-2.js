/*

Question: 
Given a string s, find the longest substring where no character repeats more
than twice and return both the substring and its length.

Function Signature:

function longestSubstringWithMaxTwoRepeats(s) {
    // Your code here
    return { maxSubstring, maxLength };
}

Example Inputs and Outputs:

Input: s = "aaabbccddeeff" Output: { maxSubstring: "aabbccddeeff", maxLength: 12 }
Input: s = "abcabcabc" Output: { maxSubstring: "abcabc", maxLength: 6 }
Input: s = "aabbaa" Output: { maxSubstring: "aabb", maxLength: 4 }

*/

function longestSubstringWithMaxTwoRepeats(s) {
    // Your code here

    let i = 0;
    let j = 0;
    let maxSubstring = "";
    let maxLength = 0;
    const frequencyMap = new Map();

    while (j < s.length) {
        const currentChar = s[j];
        frequencyMap.set(currentChar, (frequencyMap.get(currentChar) || 0) + 1);

        while ([...frequencyMap.values()].some((freq) => freq > 2)) {
            const startChar = s[i];
            frequencyMap.set(startChar, frequencyMap.get(startChar) - 1);
            if (frequencyMap.get(startChar) === 0) {
                frequencyMap.delete(startChar);
            }
            i++;
        }

        const windowLength = j - i + 1;
        if (windowLength > maxLength) {
            maxLength = windowLength;
            maxSubstring = s.slice(i, j + 1);
        }

        j++;
    }

    return { maxSubstring, maxLength };
}

console.log(longestSubstringWithMaxTwoRepeats("aaabbccddeeff"));
console.log(longestSubstringWithMaxTwoRepeats("abcabcabc"));
console.log(longestSubstringWithMaxTwoRepeats("aabbaa"));
