import math

a = int(input())

for i in range(1,a*2+1):
    if i % 2 == 0:
        print(' *'*(a//2))
    else:
        print('* '*math.ceil(a/2))