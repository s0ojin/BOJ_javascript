input = input()

dict = ['c=','c-','dz=','d-','lj','nj','s=','z=']


for s in dict:
    input = input.replace(s, 'A')

print(len(input))