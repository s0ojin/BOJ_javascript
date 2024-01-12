a = int(input())

for i in range(1,a+1):
    if i == 1:
        print(' '*(a-i)+'*')
    else:
        print(' '*(a-i)+'*'+ ' '*(i*2-3)+'*')