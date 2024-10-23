from collections import Counter

input = input()

odd_cnt = 0
odd_char = ''
answer = ''

counter = Counter(input)
for s, cnt in sorted(counter.items()):
    if cnt % 2 == 1:
        odd_cnt += 1
        odd_char = s
    
    answer += s*(int(cnt/2))


if odd_cnt > 1:
    print("I'm Sorry Hansoo")
else:
    palindrome = answer + (odd_char if odd_char else '') + answer[::-1]
    print(palindrome)
