def solution(arr):
    stack = []
    
    for idx, el in enumerate(arr):
        if not stack:
            stack.append(el)
            
        else:
            if el == stack[-1]:
                stack.pop()
                
            stack.append(el)
    
    return stack