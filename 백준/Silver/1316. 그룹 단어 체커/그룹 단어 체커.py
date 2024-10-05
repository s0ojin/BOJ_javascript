N = int(input())
words = [input() for _ in range(N)]


answer = 0
for word in words:
    memo = ''
    is_group_word = True
    for idx, s in enumerate(word):
        if s not in memo:
            memo += s
        else:
            if word[idx-1] != s:
                is_group_word = False
                break
    
    if is_group_word:
        answer += 1

print(answer)