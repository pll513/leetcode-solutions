/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* mergeTwoLists(struct ListNode* l1, struct ListNode* l2) {
    
    struct ListNode* root = malloc(sizeof(struct ListNode));
    struct ListNode* prev = NULL;
    struct ListNode* l1ptr = l1;
    struct ListNode* l2ptr = l2;
    struct ListNode* newnodeptr = NULL;
    struct ListNode* l3 = NULL;
    
    root->next = NULL;
    prev = root;
    
    while (l1ptr && l2ptr) {
        
        newnodeptr = malloc(sizeof(struct ListNode));
        newnodeptr->next = NULL;

        if (l1ptr->val < l2ptr->val) {
            newnodeptr->val = l1ptr->val;
            l1ptr = l1ptr->next;
        } else {
            newnodeptr->val = l2ptr->val;
            l2ptr = l2ptr->next;
        }
        
        prev->next = newnodeptr;
        prev = prev->next;
        
    }
    
    if (l1ptr) {
        
        while (l1ptr) {
            newnodeptr = malloc(sizeof(struct ListNode));
            newnodeptr->next = NULL;
            newnodeptr->val = l1ptr->val;
            prev->next = newnodeptr;
            prev = prev->next;
            l1ptr = l1ptr->next;
        }
        
    } else {
        
        while (l2ptr) {
            newnodeptr = malloc(sizeof(struct ListNode));
            newnodeptr->next = NULL;
            newnodeptr->val = l2ptr->val;
            prev->next = newnodeptr;
            prev = prev->next;
            l2ptr = l2ptr->next;
        }
        
    }
    
    l3 = root->next;
    free(root);
    return l3;
    
}