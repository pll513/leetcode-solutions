int divide(int dividend, int divisor) {
    int flag = 1;
    int result = 0;
    int tmp;
    int cnt = 0;
    int dd = dividend;
    int dv = divisor;
    
    if (dd == INT_MIN) {
        if (dv == INT_MIN) return 1;
        if (dv == -1) return INT_MAX;
        int f = -1;
        if (dv < 0) {
            dv = -dv;
            f = -f;
        }
        tmp = dv;
        
        while (tmp >> 30 == 0) {
            tmp <<= 1;
            cnt += 1;
        }
        result += 1 << (cnt);
        dd += dv << (cnt);
        while (dd + dv <= 0) {
            cnt = 0;
            tmp = dv;
            while (dd + tmp <= 0) {
                tmp <<= 1;
                cnt += 1;
            }
            result += 1 << (cnt - 1);
            dd += dv << (cnt - 1);
        }
        if (f > 0) {
            return result;
        } else {
            return -result;
        }
    }
    if (dv == INT_MIN) {
        return 0;
    }
    if (dd < 0) {
        flag = -flag;
        dd = -dd;
    }
    if (dv < 0) {
        flag = -flag;
        dv = -dv;
    }
    if (dv == 0)
        return INT_MAX;
    if (dd < dv)
        return 0;
    tmp = dv;
    if (dd >> 30 > 0) {
        while (tmp >> 30 == 0) {
            tmp <<= 1;
            cnt += 1;
        }
        if (tmp > dd) {
            result += 1 << (cnt - 1);
            dd -= dv << (cnt - 1);
        } else {
            result += 1 << (cnt);
            dd -= dv << (cnt);
        }
    }
    while (dd >= dv) {
        cnt = 0;
        tmp = dv;
        while (dd >= tmp) {
            tmp <<= 1;
            cnt += 1;
        }
        result += 1 << (cnt - 1);
        dd -= dv << (cnt - 1);
    }
    if (flag > 0) {
        return result;
    } else {
        return -result;
    }
}