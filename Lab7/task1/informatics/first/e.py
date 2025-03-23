 
a = int(input("Enter: "))
b = int(input("Enter: "))

if(a > 0):
    print(abs(a*b - 109))
else:
    print(109 - abs((a * b)))