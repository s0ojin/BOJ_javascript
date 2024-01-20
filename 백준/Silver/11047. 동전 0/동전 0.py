N, K = map(int, input().split())
coins = []
for i in range(N):
  coins.append(int(input()))

count = 0
for coin in reversed(coins):
  count += K // coin
  K = K % coin
  
print(count)