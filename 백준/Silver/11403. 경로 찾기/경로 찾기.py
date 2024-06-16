N = int(input())
input_arr = [list(map(int, input().split())) for _ in range(N)]
board = [[0]*N for _ in range(N)]
adj_list = [[] for _ in range(N)]


# 인접 리스트로 변경
for i in range(N):
    for j in range(N):
        if input_arr[i][j] == 1:
            adj_list[i].append(j)

def bfs(start, end):
    queue = []
    queue.append(start)

    while queue:
        cur = queue.pop(0)
        
        for new_node in adj_list[cur]:
            if new_node == end:
                return True
        
            if not visited[new_node]:
                visited[new_node] = 1
                queue.append(new_node)

    return False


for i in range(N):
    for j in range(N):
        visited = [0] * N
        if bfs(i,j):
            board[i][j] = 1
        

for row in board:
    print(*row)