def middle_way(a, b):
    return [a[1], b[1]]

a = list(map(int, input().split()))
b = list(map(int, input().split()))
print(middle_way(a, b))