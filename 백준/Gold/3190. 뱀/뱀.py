N = int(input())
K = int(input())
board = [[0]*N for _ in range(N)]
# 90도 회전 상 우 하 좌
dt = [(-1, 0), (0, 1), (1, 0), (0, -1)]

for _ in range(K):
    row, col = map(int, input().split())
    board[row-1][col-1] = 1
L = int(input())
turns = ['']*10000
queue = [(0, 0)]

for _ in range(L):
    X, C = input().split()
    turns[int(X)] = C

direction = 1
time = 0

while queue:
    time += 1
    x, y = queue[-1]
    nx, ny = x+dt[direction][0], y + dt[direction][1]

    if (nx, ny) in queue or (nx < 0 or nx >= N) or (ny < 0 or ny >= N):
        print(time)
        break

    queue.append((nx, ny))

    # 사과가 있으면 사과를 먹고
    if board[nx][ny]:
        board[nx][ny] = 0

    # 없으면 꼬리를 줄여야하므로 pop
    else:
        queue.pop(0)

    if turns[time]:
        if turns[time] == "D":
            direction += 1
            if direction == 4:
                direction = 0
        elif turns[time] == "L":
            direction -= 1
            if direction == -1:
                direction = 3