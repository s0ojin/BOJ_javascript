string = list(input().strip())
bomb = input().strip()
stack = []

# 폭발 문자열의 마지막 요소가 들어갈 때 스택 뒤에서부터 문자열 길이만큼 떼어서 폭발 문자열이면 POP
for el in string:
    if el != bomb[-1]:
        stack.append(el)
    elif el == bomb[-1]:
        stack.append(el)
        if ''.join(stack[-len(bomb):]) == bomb:
            for _ in range(len(bomb)):
                stack.pop()

if stack:
    print(*stack, sep='')
else:
    print('FRULA')
