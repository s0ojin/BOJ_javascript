def solution(s):
    answer = True
    stack = []
    
    s_arr=list(s)
    
    for el in s_arr:
        if el == "(":
            stack.append(el)
        elif el == ")":
            if not stack:
                return False
            else:
                if stack[-1] == "(":
                    stack.pop()
    
    if stack:
        return False

    return True