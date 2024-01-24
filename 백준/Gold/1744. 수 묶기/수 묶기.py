N = int(input())
sequence = [int(input()) for num in range(N)]

negative = []
positive = []
total = 0

for num in sequence:
    if num <= 0:
        negative.append(num)
    elif num == 1:
        total += 1
    else:
        positive.append(num)


negative.sort()
positive.sort(reverse=True)

if len(positive) % 2 != 0:
    positive.append(1)
if len(negative) % 2 != 0:
    negative.append(1)

for i in range(0, len(positive), 2):
    total += positive[i]* positive[i+1]

for i in range(0, len(negative), 2):
    total += negative[i] * negative[i+1]

print(total)