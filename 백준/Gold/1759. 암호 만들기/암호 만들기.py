vowel = "aeiou"
L, C = map(int, input().split())
spells = list(input().split())
visited = [0] * C
stack = []
spells.sort()


def dfs(depth, start):
    if depth == L:
        cnt = 0
        for el in vowel:
            if el in stack:
                cnt += 1

        if cnt >= 1 and L - cnt >= 2:
            print(*stack, sep="")
        return

    for i in range(start, C):
        if not visited[i]:
            visited[i] = 1
            stack.append(spells[i])
            dfs(depth + 1, i)
            stack.pop()
            visited[i] = 0


dfs(0, 0)