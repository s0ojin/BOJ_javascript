def solution(array, commands):
    answer = []
    
    for i,j,k in commands:
        sub_array = array[i-1:j]
        sub_array.sort()
        
        if len(sub_array) == 1:
            answer.append(sub_array[0])
        else:
            answer.append(sub_array[k-1])
        
        
    return answer