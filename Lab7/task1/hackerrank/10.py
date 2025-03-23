s = input()

print(any(c.isalnum() for c in s))  # Alphanumeric
print(any(c.isalpha() for c in s))  # Alphabetical
print(any(c.isdigit() for c in s))  # Digits
print(any(c.islower() for c in s))  # Lowercase
print(any(c.isupper() for c in s))  # Uppercase