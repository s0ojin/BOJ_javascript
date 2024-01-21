N = input()

nums = []
for i in N:
  nums.append(int(i))

nums.sort(reverse=True)

if nums[-1] == 0 and sum(nums) % 3 == 0:
  print("".join(map(str,nums)))
else:
  print(-1)