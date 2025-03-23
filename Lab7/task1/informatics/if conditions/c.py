correct_answer = int(input())
student_answer = int(input())

# Если правильный ответ 1, то школьник должен вывести ровно 1
# Если правильный ответ не 1, школьник мог вывести любое число, кроме 1
if (correct_answer == 1 and student_answer == 1) or (correct_answer != 1 and student_answer != 1):
    print("YES")
else:
    print("NO")
