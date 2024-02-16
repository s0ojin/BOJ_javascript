N = int(input())
nums = list(map(int, input().split()))

stack = [nums[-1]]
answer = [-1] * N

for i in range(N-2, -1, -1):
    if nums[i] < stack[-1]:
        answer[i] = stack[-1]
        stack.append(nums[i])
    elif nums[i] >= stack[-1]:
        while stack and nums[i] >= stack[-1]:
            stack.pop()
        if stack:
            answer[i] = stack[-1]
        stack.append(nums[i])

print(*answer)