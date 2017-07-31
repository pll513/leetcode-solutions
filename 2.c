/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
#include <stdio.h>
#include <stdlib.h>
struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {
    int one = 0;
    struct ListNode* l3 = malloc(sizeof(struct ListNode));
    l3->next = NULL;
    struct ListNode* curr = l3;
    struct ListNode* ln = NULL;
    struct ListNode* l3body = NULL;
    while (l1 != NULL && l2 != NULL) {
        ln = malloc(sizeof(struct ListNode));
        ln->val = l1->val + l2->val + one;
        ln->next = NULL;
        if (ln->val >= 10) {
            ln->val -= 10;
            one = 1;
        } else {
            one = 0;
        }
        if (!l3) {
            l3 = ln;
        }
        curr->next = ln;
        curr = curr->next;
        l1 = l1->next;
        l2 = l2->next;
    }
    if (l1 == NULL) {
        while (l2 != NULL) {
            ln = malloc(sizeof(struct ListNode));
            ln->val = l2->val + one;
            ln->next = NULL;leet
            if (ln->val >= 10) {
                ln->val -= 10;
                one = 1;
            } else {
                one = 0;
            }
            curr->next = ln;
            curr = curr->next;
            l2 = l2->next;
        }
    } else {
        while (l1 != NULL) {
            ln = malloc(sizeof(struct ListNode));
            ln->val = l1->val + one;
            ln->next = NULL;
            if (ln->val >= 10) {
                ln->val -= 10;
                one = 1;
            } else {
                one = 0;
            }
            curr->next = ln;
            curr = curr->next;
            l1 = l1->next;
        }
    }
    if (one) {
        ln = malloc(sizeof(struct ListNode));
        ln->val = 1;
        ln->next = NULL;
        curr->next = ln;
    }
    l3body = l3->next;
    free(l3);
    return l3body;
}