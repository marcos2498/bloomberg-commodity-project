import sys


class Commodity:
    def __init__(self, name, price, time, unit):
        self.name = name
        self.price = price
        self.time = time
        self.unit = unit


class exchange:
    def __init__(self, name):
        self.name = name
        self.commodity = []


exchange_list = []


commodity_list = []
print('hello')

ans = input("do you want to view a commodity or an exchange? \n type 'e' for exchange, 'c' for commodity, 'n' to exit ")
if ans == 'n':
    sys.exit("exited")

if ans == 'e':
    for exchange in exchange_list:
        print(f"Exchange: {exchange.name}")
elif ans == 'c':
    for commodity in commodity_list:
        print(
            f"Commodity: {commodity.name}, Price: {commodity.price}, Last Trade Time: {commodity.time}, Unit: {commodity.unit}")


ans2 = input("do you want to add a commodity or exchange. type 'c' or 'e': ")

if ans2 == 'c':
    name = input('Enter the name: ')
    price = input('Enter the price: ')
    time = float(input('Enter the last trade time: '))
    unit = float(input('Enter the measurement unit: '))
    commodity = Commodity(name, price, time, unit)
    commodity_list.append(commodity)
    print('Commodity added successfully!')

elif ans2 == 'e':
    name = input('Enter the exchange name: ')
    exchange = Exchange(name)
    exchange_list.append(exchange)
    print('Exchange added successfully!')
