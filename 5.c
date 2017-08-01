char* longestPalindrome(char* s) {
    
    int curr = 0;
    int lenlongest = 0;
    int len = 0;
    int left;
    int right;
    char *longest = malloc(1001);
    
    if (s[0] != '\0') {
        lenlongest = 1;
        longest[0] = s[0];
    }
    
    while (s[curr] != '\0') {
        if (curr - 1 >= 0 && s[curr] == s[curr - 1]) {
            len = 2;
            left = curr - 2;
            right = curr + 1;
            while (left >= 0 && s[right] != '\0' && s[left] == s[right]) {
                len += 2;
                --left;
                ++right;
            }
            if (len > lenlongest) {
                lenlongest = len;
                copystr(longest, s, left + 1, right - 1);
            }
        }
        if (curr - 2 >= 0 && s[curr] == s[curr - 2]) {
            len = 3;
            left = curr - 3;
            right = curr + 1;
            while (left >= 0 && s[right] != '\0' && s[left] == s[right]) {
                len += 2;
                --left;
                ++right;
            }
            if (len > lenlongest) {
                lenlongest = len;
                copystr(longest, s, left + 1, right - 1);
            }
        }
        ++curr;
    }
    
    longest[lenlongest] = '\0';
    return longest;
    
}

void copystr(char *to, char *from, int start, int end) {
    while (start <= end) {
        *to++ = from[start++];
    }
}