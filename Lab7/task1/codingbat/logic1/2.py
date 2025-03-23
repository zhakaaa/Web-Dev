def caught_speeding(speed, is_birthday):
    if is_birthday:
        speed -= 5
    
    if speed <= 60:
        return 0
    elif speed <= 80:
        return 1
    else:
        return 2

speed = int(input())
is_birthday = input().lower() == 'true'
print(caught_speeding(speed, is_birthday))