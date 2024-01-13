a = int(input())
length = 4 * a - 3
board = [[' '] * length for _ in range(length)]


def rec(n,x,y):
  length = 4 * n - 3
  if length == 1:
    board[x][y] = '*'
    return

  for i in range(length):
    board[x][y+i] = "*"
    board[x+i][y] = "*"
    board[x+i][y+length-1] ="*"
    board[x+length-1][y+i] = "*"
  n -= 1
  x += 2
  y += 2
  return rec(n,x,y)
    
rec(a,0,0)

for i in range(length):
  print("".join(board[i]))