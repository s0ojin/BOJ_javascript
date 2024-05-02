N = int(input())

total_cost = 0
for _ in range(N):
    start, elapsed_time = input().split()
    start = list(map(int, start.split(sep=':')))
    elapsed_time = int(elapsed_time)

    start = start[0] * 60 + start[1]
    end = start + elapsed_time


# 오전7시 ~ 오후7시 : 10원
    if 420 <= start <= 1140:

        # 제시간에 안끝나면
        if end > 1140:
            total_cost += (end - 1140) * 5
            elapsed_time -= end - 1140

        total_cost += elapsed_time * 10

# 그외시간 : 5원
    else:
        if 420 <= end <= 1140:
            total_cost += (end - 420) * 10
            elapsed_time -= end - 420

        total_cost += elapsed_time * 5


print(total_cost)