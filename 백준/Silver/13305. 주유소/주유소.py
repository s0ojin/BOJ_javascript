N = int(input())
distances =list(map(int,input().split()))
prices = list(map(int,input().split()))

cost = 0
curPrice = prices[0]

for i in(range(len(distances))):
  cost += curPrice * distances[i]

  if curPrice > prices[i+1]:
    curPrice = prices[i+1]

print(cost)