N = int(input())
 
arr = [int(input()) for i in range(N)]
stack = []
ans = 0
 
for i in range(N):
    while stack and stack[-1] <= arr[i]:
        stack.pop()
 
    stack.append(arr[i])
    ans += len(stack) -1
 
print(ans)