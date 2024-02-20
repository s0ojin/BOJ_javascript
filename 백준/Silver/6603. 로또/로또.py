while True:
    nums = list(map(int, input().split()))
    if len(nums) == 1 and nums[0] == 0:
        break

    k = nums.pop(0)

    stack = []
    visited = [0] * k

    def dfs(depth, start):
        if depth == 6:
            print(*stack)
            return

        for i in range(start, k):
            if not visited[i]:
                visited[i] = 1
                stack.append(nums[i])
                dfs(depth + 1, i)
                stack.pop()
                visited[i] = 0

    dfs(0, 0)
    print('')
