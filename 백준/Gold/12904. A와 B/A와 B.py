S = input()
T = input()
# 문자열 뒤에 A pop
# 문자열을 뒤집고 B pop
# T가 S가 되면 1 아님 0

T_list = list(T)
for i in range(len(T) - len(S)):    
    cur = T_list.pop()
    if cur == 'B':
        T_list.reverse()
    
    if ''.join(T_list) == S:
        print(1)
        break 

else:
    print(0)
