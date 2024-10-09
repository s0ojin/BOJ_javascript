
non_self_numbers = set()

def self_number(n):
    while n <= 10000:
        n = n+sum(map(int, str(n)))
        if n > 10000:
            break
        if n in non_self_numbers:
            break
        
        non_self_numbers.add(n)
        
for i in range(1, 10000):
    if i not in non_self_numbers:
        self_number(i)


for i in range(1, 10000):
    if i not in non_self_numbers:
        print(i)