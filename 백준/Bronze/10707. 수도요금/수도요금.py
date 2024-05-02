A, B, C, D, P = [int(input()) for _ in range(5)]

x_cost = A*P
y_cost = (P-C)*D + B if P-C >= 0 else B

print(min(x_cost, y_cost))