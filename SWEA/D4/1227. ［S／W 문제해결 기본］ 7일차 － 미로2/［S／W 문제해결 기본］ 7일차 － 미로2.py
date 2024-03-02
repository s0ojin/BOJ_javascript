from collections import deque
 
dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]
 
for i in range(10):
    tc = int(input())
    board = [list(map(int, input().strip())) for _ in range(100)]
    visited = [[0] * 100 for _ in range(100)]
    answer = 0
 
    queue = deque([(1, 1)])
 
    while queue:
        x, y = queue.popleft()
        visited[x][y] = 1
         
        for j in range(4):
            new_x = x+dx[j]
            new_y = y+dy[j]
 
            if not visited[new_x][new_y] and board[new_x][new_y] == 0:
                queue.append((new_x, new_y))
            elif board[new_x][new_y] == 3:
                answer = 1
 
    print(f'#{tc} {answer}')