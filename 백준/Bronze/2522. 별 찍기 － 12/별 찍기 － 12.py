a = int(input())

for i in range(1,a+1):
    print(' ' * (a-i) + '*'*i)

for i in range(1,a+1):
    print(' ' * i + '*'*(a-i))
    