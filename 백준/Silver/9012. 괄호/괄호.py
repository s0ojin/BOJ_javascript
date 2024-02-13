T = int(input())

for _ in range(T):
    stack = []
    brackets = list(input())
    for bracket in brackets:
        if not stack or bracket == "(":
            stack.append(bracket)
        elif bracket == ")":
            if stack[-1] == "(":
                stack.pop()
            else:
                break

    if not stack:
        print("YES")
    else:
        print("NO")