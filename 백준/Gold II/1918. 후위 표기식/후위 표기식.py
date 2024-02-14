formula = input().strip()
icp = {'(': 3, '+': 1, '-': 1, '*': 2, '/': 2}
isp = {'(': 0, '+': 1, '-': 1, '*': 2, '/': 2}
operator = '+-*/()'
stack = []
postfix = ''

for el in formula:
    if el not in operator:
        postfix += el
    else:
        if el == ")":
            while stack[-1] != "(":
                postfix += stack.pop()
            stack.pop()
        elif not stack or el == "(" or isp[stack[-1]] < icp[el]:
            stack.append(el)
        elif isp[stack[-1]] >= icp[el]:
            while stack and isp[stack[-1]] >= icp[el]:
                postfix += stack.pop()
            stack.append(el)

while stack:
    postfix += stack.pop()

print(postfix)