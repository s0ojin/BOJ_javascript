from heapq import heappop, heappush
import heapq


def solution(scoville, K):
    answer = 0
    heapq.heapify(scoville)
    
    while scoville[0] < K:
        answer += 1
        first = heappop(scoville)
        
        if len(scoville) == 0:
            return -1
        
        second = heappop(scoville)
        new = first + second * 2
        heappush(scoville, new)
    
    
    return answer