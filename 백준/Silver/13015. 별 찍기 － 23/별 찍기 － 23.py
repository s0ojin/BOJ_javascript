a = int(input())


for i in range(1,a+1):
  if i == 1:
    print('*'*a +' '*(2*a-3)+'*'*a)

  elif i == a:
    print(' '*(i-1)+'*'+' '*(a-2)+'*'+' '*(2*a-(2*i+1))+' '*(a-2)+'*')

  else:
    print(' '*(i-1)+'*'+' '*(a-2)+'*'+' '*(2*a-(2*i+1))+'*'+' '*(a-2)+'*')

for i in range(1,a):
  if i == a-1:
    print('*'*a +' '*(2*a-3)+'*'*a)
  else:
    print(' '*(a-i-1)+'*'+' '*(a-2)+'*'+' '*(2*i-1)+'*'+' '*(a-2)+'*')