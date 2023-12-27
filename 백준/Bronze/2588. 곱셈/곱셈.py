a = int(input())
b = input()

num_list = [int(digit) for digit in b]
num_list.reverse()

for num in num_list:
    print(num * a)
    
print(a*int(b))