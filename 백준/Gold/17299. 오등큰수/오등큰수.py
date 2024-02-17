import sys

N = int(input())
nums = list(map(int, sys.stdin.readline().split()))
max_val = max(nums)
counter = [0] * (max_val+1)
answer = [-1] * N
stack = [nums[-1]]

for num in nums:
    counter[num] += 1

for i in range(N-2, -1, -1):    
    while stack and counter[stack[-1]] <= counter[nums[i]]:
            stack.pop()
    if stack and counter[stack[-1]] > counter[nums[i]]:
        answer[i] = stack[-1]

    stack.append(nums[i])

print(*answer)
