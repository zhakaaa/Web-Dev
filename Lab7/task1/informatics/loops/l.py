b = input("Enter: ")
d = 0

# enumerate() используется для получения индекса + элемента.
for i, digit in enumerate(reversed(b)):
    d += int(digit) * (2**i)

print(d)