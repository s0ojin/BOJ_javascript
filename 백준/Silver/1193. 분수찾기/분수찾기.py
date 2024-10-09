N = int(input())

line = 0
end_num = 0

while end_num < N:
    line += 1
    end_num += line

idx = N-(end_num-line+1)

top = idx+1
bottom = line - idx

if line % 2 == 0:
    print(f'{top}/{bottom}')
else:
    print(f'{bottom}/{top}')