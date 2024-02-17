import sys

N, K = map(int, input().split())
nums = list(sys.stdin.readline().strip())
stack = []

for num in nums:
    while stack and stack[-1] < num and K > 0:
        stack.pop()
        K -= 1
    stack.append(num)

if K > 0:
    print(*stack[:-K], sep="")
else:
    print(*stack, sep="")