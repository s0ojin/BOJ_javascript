N = int(input())

for idx in range(N):
    string = list(input().split())
    string.reverse()
    print(f'Case #{idx+1}: {" ".join(string)}')