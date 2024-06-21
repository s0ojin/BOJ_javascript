import sys
from collections import deque

N = int(input())
A = list(map(int, input().split()))
B = list(map(int, input().split()))
M = int(input())
C = list(map(int, input().split()))

queuestack = deque([])


for idx, el in enumerate(A):
    if el == 0:
        queuestack.append(B[idx])

else:
   if not queuestack:
      print(*C)
      sys.exit()

queuestack.reverse()

for i in range(M):
  queuestack.append(C[i])
  print(queuestack.popleft(), end = " ")