char* longestCommonPrefix(char** strs, int strsSize) {
    int i;
    int j;
    int minlen = INT_MAX;
    int len;
    int tmp;
    char* lcp = NULL;
    int getout = 0;
    for (i = 0; i < strsSize; ++i) {
        if ((len = strlen(strs[i])) < minlen) minlen = len;
    }
    
    if (strsSize == 0) {
        lcp = malloc(1);
        lcp[0] = '\0';
        return lcp;
    }
    lcp = malloc(minlen + 1);
    for (j = 0; ; ++j) {
        getout = 0;
        tmp = strs[0][j];
        if (tmp == '\0') break;
        for (i = 1; i < strsSize; ++i) {
            if (tmp != strs[i][j] || strs[i][j] == '\0') {
                getout = 1;
                break;
            }
        }
        if (getout){
            break;
        } else {
            lcp[j] = tmp;
        }
    }
    lcp[j] = '\0';
    return lcp;
}