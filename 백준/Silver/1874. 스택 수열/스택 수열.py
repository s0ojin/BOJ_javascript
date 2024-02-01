import sys
N = int(input())

stack = []
answer_list = []
answer = ''

cur = 1
for _ in range(N):
    num = int(sys.stdin.readline())

    while cur <= num:
        stack.append(cur)
        answer_list.append('+')
        cur += 1

    if stack[len(stack)-1] == num:
        stack.pop()
        answer_list.append('-')

    else:
        answer = 'NO'

if answer:
    print(answer)
else:
    print('\n'.join(answer_list))