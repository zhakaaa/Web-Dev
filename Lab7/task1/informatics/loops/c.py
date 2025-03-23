import math

a = int(input("Enter:"))
b = int(input("Enter:"))

for i in range (a, b):
    if (i**(0.5) * i**(0.5) == i): print(i, end=" ")