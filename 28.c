int strStr(char* haystack, char* needle) {
    char *start = NULL;
    char *haystackcopy = haystack;
    char *needlecopy = needle;
    if (haystack == NULL || needle == NULL) return -1;
    if (*needle == '\0') return 0;
    while (*haystack != '\0') {
        if (*haystack == *needle) {
            start = haystack;
            while (*haystack == *needle && *haystack != '\0') {
                ++haystack;
                ++needle;
            }
            if (*needle == '\0') return start - haystackcopy;
            needle = needlecopy;
            haystack = start;
        }
        ++haystack;
    }
    return -1;
}