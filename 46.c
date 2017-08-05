/**
 * Return an array of arrays of size *returnSize.
 * Note: The returned array must be malloced, assume caller calls free().
 */
int** permute(int* nums, int numsSize, int* returnSize) {
    int i;
    int size = factorial(numsSize);
    int** result = malloc(size * sizeof(int*));
    for (i = 0; i < size; ++i) {
        result[i] = malloc(numsSize * sizeof(int));
    }
    fill(result, nums, numsSize, 0, 0);
    *returnSize = size;
    return result;
}

void fill(int** result, int* nums, int dim, int x, int y) {
    // printf("\n\n------------  function fill ------------\n");
    // printf("dim: %d\n", dim);
    // printf("result[%d][%d]\n", x, y);
    int i;
    int j = 0;
    int* nums_copy = malloc(dim * sizeof(int));
    
    arraycopy(nums_copy, nums, dim);
    
    // printarray("nums", nums, dim);
    
    int offset = factorial(dim - 1);
    int total = offset * dim;
    if (dim == 1) {
        result[x][y] = nums[0];
        return;
    }
    for (i = 0; i < total; ++i) {
        result[x + i][y] = nums[i / offset];
        if (i < j * offset) {
            
        } else {
            arrayslice(nums, j, dim);
            // printf("fill(%d, %d)\t", x + i, y + 1);
            // printarray("nums", nums, dim - 1);
            fill(result, nums, dim - 1, x + i, y + 1);
            arraycopy(nums, nums_copy, dim);
            ++j;
        }
        
    }
    free(nums_copy);
}

void arraycopy(int* to, int* from, int size) {
    int i;
    for (i = 0; i < size; ++i) {
        *(to + i) = *(from + i);
    }
}

void arrayslice(int* nums, int index, int size) {
    for (; index < size - 1; ++index) {
        *(nums + index) = *(nums + index + 1);
    }
}

// void printarray(char* name, int* nums, int size) {
//     int i;
//     printf("%s: ", name);
//     printf("[");
//     for (i = 0; i < size - 1; ++i) {
//         printf("%d, ", nums[i]);
//     }
//     printf("%d", nums[i]);
//     printf("]\n");
// }

int factorial(int n) {
    int result = 1;
    while (n > 1) {
        result *= n;
        n -= 1;
    }
    return result;
}