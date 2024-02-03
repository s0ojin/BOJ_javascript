N = int(input())
towers = list(map(int, input().split()))
answer = [0 for i in range(N)]
stack = []

for idx, tower in enumerate(towers):    
    while stack and stack[-1][1] < tower:
        stack.pop()

    if stack:
        answer[idx] = stack[-1][0]

    stack.append([idx+1, tower])

print(' '.join(map(str,answer)))