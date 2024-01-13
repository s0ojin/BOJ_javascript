a = int(input())
length = 4 * a - 1

board = [[' ']*length for _ in range(length)]

def rec(n,x,y):
  if n == 1:
    board[x][y] = "*"
    return
  
  board[x+3][y+2] = "*"
  board[x+4][y+2] = "*"
     
  length = 4 * n - 3

  for i in range(length):
      # 상단
      board[x][y+i] = '*'
      # 하단
      board[x+length+1][y+i] = "*"
      # 왼쪽
      board[x+i+1][y] = "*"
      # 오른쪽
      board[x+i+2][y+length-1] = "*"
      #연결점
      board[x+2][y+length-2] = "*"

  n -= 1
  x += 2
  y += 2

  return rec(n,x,y)
  


rec(a,0,0)
for i in range(length):
  print("".join(board[i]).rstrip())