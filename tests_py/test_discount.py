def calculate_discount(price, premium=False):
    if price < 10:
        return 0
    return 0.25 if premium else 0.0

def test_discount_premium():
    assert calculate_discount(100, premium=True) == 0.25

def test_discount_small_price():
    assert calculate_discount(5) == 0
