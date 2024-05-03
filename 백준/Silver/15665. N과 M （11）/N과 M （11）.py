N, M = map(int, input().split())
nums = list(map(int, input().split()))
nums.sort()

temp = [''] * M
memo = set()


def dfs(depth):
    if depth == M:
        memo.add(tuple(temp))

    else:
        for num in nums:
            temp[depth] = num
            dfs(depth+1)


dfs(0)

memo = sorted(memo)
for i in memo:
    print(*i)
