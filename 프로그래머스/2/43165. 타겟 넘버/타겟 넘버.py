def dfs(index, total, target,numbers):
    if index == len(numbers):
        if total == target:
            return 1
        else:
            return 0
        

    answer = 0
    answer += dfs(index+1, total + numbers[index], target, numbers)
    answer += dfs(index+1, total - numbers[index], target, numbers)
    
    return answer

    
    
def solution(numbers, target):
    answer = dfs(0, 0, target, numbers)
    return answer