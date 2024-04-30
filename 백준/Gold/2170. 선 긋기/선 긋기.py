N = int(input())
points = [list(map(int, input().split())) for _ in range(N)]
total_length = 0
prev_end_point = -10e9

# 개별 점 오름차순 정렬
for point in points:
    point.sort()

# 앞 요소 기준 오름차순 정렬
points.sort(key=lambda x:x[0])

# 요소 순회하면서 겹치는 부분 제거 
for point in points:
    start, end = point
    if start < prev_end_point:
        # 완전 포함되어있으면 넘어감
        if end < prev_end_point:
            continue
        total_length += end-prev_end_point
    else:
        total_length += end-start

    prev_end_point = end

print(total_length)