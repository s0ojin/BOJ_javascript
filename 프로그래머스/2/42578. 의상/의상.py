def solution(clothes):
    
    dict = {}
    
    for item in clothes:
        clo, type = item
        if type in dict:
            dict[type].append(clo)
        else:
            dict[type] = [clo]
        
    print(dict)
    answer = 1
    for key in dict:
        answer *= (len(dict[key]) + 1)
    

    return answer - 1