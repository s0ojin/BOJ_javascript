a = int(input())

for i in range(1,a+1):
    if i == 1:
        print(' '*(a-i)+'*')
    elif i == a:
        print('*'*(2*i-1))
    else:
        print(' '*(a-i)+'*'+' '*(2*i-3)+'*')