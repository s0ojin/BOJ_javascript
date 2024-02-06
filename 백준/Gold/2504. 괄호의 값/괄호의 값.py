brackets = list(input())
stack = []
answer = 0
temp = 1

for idx, bracket in enumerate(brackets):
    if bracket == "(":
        stack.append(bracket)
        temp *= 2
    elif bracket == "[":
        stack.append(bracket)
        temp *= 3

    elif bracket == ")":
        if not stack or stack[-1] == "[":
            answer = 0
            break
        if brackets[idx-1] == "(":
            answer += temp
        stack.pop()
        temp //= 2

    elif bracket == "]":
        if not stack or stack[-1] == "(":
            answer = 0
            break
        if brackets[idx-1] == "[":
            answer += temp
        stack.pop()
        temp //= 3

if stack:
    print(0)
else:
    print(answer)