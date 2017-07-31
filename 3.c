#include <stdlib.h>
#include <stdio.h>

char *findchar(char *start, char *end, int val);

int lengthOfLongestSubstring(char* s) {
    
    char* start = s;
    char* end = s;
    char* repeat = NULL;
    int len = 0;
    int lenlongest = 0;
    
    while (*end != '\0') {
        if (start == end) {
            repeat = NULL;
        } else {
            repeat = findchar(start, end, *end);
        }
        if (!repeat) {
            ++end;
            len = end - start;
            if (len > lenlongest) {
                lenlongest = len;
            }
        } else {
            start = repeat + 1;
        }
        
    }
    
    return lenlongest;
}

char *findchar(char *start, char *end, int val) {
    while (start != end) {
        if (*start == val) return start;
        ++start;
    }
    return NULL;
}