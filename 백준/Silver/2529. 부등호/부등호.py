import sys

K = int(input())
min_val = sys.maxsize
max_val = -1
stack = []
visited = [0]*10
inequality = list(input().split())

def check(i):
    index = len(stack)
    if not stack:
        return True

    if inequality[index-1] == "<":
        if stack[-1] < i:
            return True
    else:
        if stack[-1] > i:
            return True
    
    return False


def dfs(cnt):
    global min_val
    global max_val

    if cnt == K+1:
        nums = ''.join(map(str,stack))
        if int(nums) < int(min_val):
            min_val = nums
        if int(nums) > int(max_val):
            max_val = nums
        return
    
    for i in range(10):
        if not visited[i] and check(i):
            stack.append(i)
            visited[i] = 1
            dfs(cnt+1)
            stack.pop()
            visited[i] = 0


dfs(0)

print(max_val)
print(min_val)