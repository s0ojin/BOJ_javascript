def solution(phone_book):
    prefix_dict = set(phone_book)
    for number in phone_book:
        for i in range(1, len(number)):
            prefix = number[:i]
            if prefix in prefix_dict:
                return False
        
    return True