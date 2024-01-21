N = input()

nums = []
for i in N:
  nums.append(i)

nums.sort(reverse=True)

if int("".join(nums)) % 30 == 0:
  print(int("".join(nums)))
else:
  print(-1)