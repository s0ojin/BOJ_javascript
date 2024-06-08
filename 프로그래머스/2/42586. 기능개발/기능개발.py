def solution(progresses, speeds):
    days_until_completion = []
    for progress, speed in zip(progresses, speeds):
        days_needed = (100 - progress + speed - 1) // speed  # 올림 계산을 위해 -1 추가 후 정수 나눗셈
        days_until_completion.append(days_needed)

    answer = []
    max_days = days_until_completion[0]

    releases = 0
    for days in days_until_completion:
        if days > max_days:
            answer.append(releases)
            max_days = days
            releases = 1
        else:
            releases += 1

    answer.append(releases)  # 마지막 배포 그룹 추가
    return answer
