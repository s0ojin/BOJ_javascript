string = input().strip()
stack = []
answer = ""

for el in string:
    if el == ">":
        temp = ""
        while stack[-1] != "<":
            temp += stack.pop()
        else:
            stack.pop()
        answer += f'<{temp[::-1]}>'
    
    elif el == "<":
        while stack:
            answer += stack.pop()
        stack.append(el)

    elif el == " ":
        if "<" in stack:
            stack.append(el)
        else:
            for _ in range(len(stack)):
                answer += stack.pop()

            answer += " "

    else:
        stack.append(el)
    
while stack:
    answer += stack.pop()

print(answer)
