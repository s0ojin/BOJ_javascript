def dfs(i,j):
    if i == 9:
        for x in board:
            print(*x)
        exit(0)
    
    if board[i][j]:
        dfs(i+(j+1)//9, (j+1)%9)
        return

    for k in range(9):
        if visited_row[i][k] or visited_col[j][k] or visited_squre[i//3*3+j//3][k]:
            continue
        board[i][j] = k+1
        visited_row[i][k] = visited_col[j][k] = visited_squre[i//3*3+j//3][k] = 1
        dfs(i+(j+1)//9, (j+1)%9)
        board[i][j] = 0
        visited_row[i][k] = visited_col[j][k] = visited_squre[i//3*3+j//3][k] = 0


board = [list(map(int, input().split())) for _ in range(9)]
visited_row = [[0] * 9 for _ in range(9)] # i번 행에 j가 들어가있나?
visited_col = [[0] * 9 for _ in range(9)]
visited_squre = [[0] * 9 for _ in range(9)]

for i in range(9):
    for j in range(9):
        if board[i][j]:
            visited_row[i][board[i][j]-1] = 1
            visited_col[j][board[i][j]-1] = 1
            visited_squre[i//3*3+j//3][board[i][j]-1] = 1

dfs(0,0)