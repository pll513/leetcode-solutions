char* intToRoman(int num) {
    int d;
    int curr;
    int i;
    char* roman = malloc(20);
    d = num / 1000;
    for (i = 0; i < d; ++i) {
        roman[curr++] = 'M';
    }
    num = num - d * 1000;
    d = num / 100;
    if (d < 4) {
        for (i = 0; i < d; ++i) {
            roman[curr++] = 'C';
        }
    } else if (d == 4) {
        roman[curr++] = 'C';
        roman[curr++] = 'D';
    } else if (d < 9) {
        roman[curr++] = 'D';
        for (i = 0; i < d - 5; ++i) {
            roman[curr++] = 'C';
        }
    } else {
        roman[curr++] = 'C';
        roman[curr++] = 'M';
    }
    num = num - d * 100;
    d = num / 10;
    if (d < 4) {
        for (i = 0; i < d; ++i) {
            roman[curr++] = 'X';
        }
    } else if (d == 4) {
        roman[curr++] = 'X';
        roman[curr++] = 'L';
    } else if (d < 9) {
        roman[curr++] = 'L';
        for (i = 0; i < d - 5; ++i) {
            roman[curr++] = 'X';
        }
    } else {
        roman[curr++] = 'X';
        roman[curr++] = 'C';
    }
    d = num % 10;
    if (d < 4) {
        for (i = 0; i < d; ++i) {
            roman[curr++] = 'I';
        }
    } else if (d == 4) {
        roman[curr++] = 'I';
        roman[curr++] = 'V';
    } else if (d < 9) {
        roman[curr++] = 'V';
        for (i = 0; i < d - 5; ++i) {
            roman[curr++] = 'I';
        }
    } else {
        roman[curr++] = 'I';
        roman[curr++] = 'X';
    }
    roman[curr] = '\0';
    return roman;
}