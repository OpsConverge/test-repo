def add(a, b):
    return a + b

def test_add_pass():
    assert add(1,2) == 3

def test_add_fail():
    # intentional failing test
    assert add(2,2) == 5
