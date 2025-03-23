x = int(input("Enter: "))
i = 0

while(i < x):
    if(2**i == x):
        print("YES")
        break
    i += 1

else:
    print("NO")
    