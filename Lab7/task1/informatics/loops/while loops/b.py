x = int(input("Enter: "))
i = 2

while(i < x):
    if(x % i == 0): 
        print(i)
        break
    i += 1