def solution(n, lost, reserve):
    # 여분이 있지만 도난당한 학생을 제외
    reserve_set = set(reserve) - set(lost)
    lost_set = set(lost) - set(reserve)
    
    # 여분의 체육복을 빌려줄 수 있는 경우 처리
    for r in sorted(reserve_set):
        if r - 1 in lost_set:
            lost_set.remove(r - 1)
        elif r + 1 in lost_set:
            lost_set.remove(r + 1)
    
    # 체육복을 입을 수 있는 학생 수 계산
    return n - len(lost_set)

# 예시 사용
n = 5
lost = [2, 4]
reserve = [1, 3, 5]
print(solution(n, lost, reserve))  # 5를 출력해야 함
