brackets = list(input())
stack = []

count = 0
for idx, bracket in enumerate(brackets):
    if bracket == "(":
        stack.append(bracket)
    elif bracket == ")":
        if brackets[idx-1] == "(":
            stack.pop()
            count += len(stack)
        else:
            stack.pop()
            count += 1
        

print(count)