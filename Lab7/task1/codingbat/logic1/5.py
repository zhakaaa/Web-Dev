def sorta_sum(a, b):
    sum_ab = a + b
    return 20 if 10 <= sum_ab <= 19 else sum_ab

a = int(input())
b = int(input())
print(sorta_sum(a, b))