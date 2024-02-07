T = int(input())
for _ in range(T):
    N = int(input())
    prices = list(map(int, input().split()))
    stack = []

    profit = 0
    for i in range(N-1, -1, -1):
        if not stack or stack[-1] < prices[i]:
            stack.append(prices[i])
        elif stack[-1] > prices[i]:
            profit += stack[-1] - prices[i]

    print(profit)