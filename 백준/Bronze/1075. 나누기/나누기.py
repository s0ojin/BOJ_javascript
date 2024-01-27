import sys
N = input()
F = int(input())


for i in range(10):
    for j in range(10):
        N = N[:-2]
        N += str(i) + str(j)
        
        if int(N) % F == 0:
            print(str(i)+str(j))
            sys.exit()
