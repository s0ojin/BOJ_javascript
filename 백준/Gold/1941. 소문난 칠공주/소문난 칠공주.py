students = [input() for _ in range(5)]
visite_case = [[0]*5 for _ in range(5)]
answer = 0


# bfs 순회하며 인접확인
def isAdj():
   for i in range(5):
       for j in range(5):
           if visite_case[i][j] == 1:
                visited_bfs=[[0]*5 for _ in range(5)]
                queue = []
                queue.append((i,j))
                visited_bfs[i][j] = 1
                temp = 1
                while queue:
                    ci, cj = queue.pop(0)
                    for di, dj in [(-1,0),(1,0),(0,-1),(0,1)]:
                        ni, nj = ci+di, cj+dj
                        if 0<=ni<5 and 0<=nj<5 and visite_case[ni][nj] == 1 and visited_bfs[ni][nj] == 0:
                            temp += 1
                            queue.append((ni,nj))
                            visited_bfs[ni][nj] = 1
                    
                return temp == 7


# n: 학생번호, 다 확인하면 종료 0~24
# cnt: 7명
# scnt: 다솜파 4명 이상?
def dfs(n, cnt, scnt):
    global answer

    if cnt > 7:
        return
    
    if n == 25:
        if cnt == 7 and scnt >=4:
            if isAdj():
                answer += 1
        return
    
    # 포함
    visite_case[n//5][n%5] = 1
    dfs(n+1,cnt+1,scnt+int(students[n//5][n%5] == 'S'))
    visite_case[n//5][n%5] = 0
    # 미포함
    dfs(n+1, cnt, scnt)

dfs(0,0,0)
print(answer)