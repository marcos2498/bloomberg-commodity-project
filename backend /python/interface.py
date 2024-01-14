class Commodity:
  def __init__(self, name, unit, price, time):
    self.name = name
    self.unit = unit 
    self.price = price
    self.time = time
  
class Exchange:
  def __init__(self, ex_name, commodity_list):
    self.ex_name = ex_name
    self.commodity_list = commodity_list

commodities = {}
exchanges = {}

while True:
    w = input("would you like to insert a commodity? (Y/N)")
    if w == "N":
        print("Exiting System")
        break
    elif w.upper() == "Y":
        name = input("What is the name of the commodity?")
        price = float(input("What is the price of the commodity?"))
        unit = input("What is the unit of the commodity?")
        time = input("When was it last traded?")
        new_commodity = Commodity(name, price, unit, time)
        commodities[name] = new_commodity
        print(f"{name} Commodity added!\n")

while True:
    exc = input("would you like to insert an exchange? (Y/N)")
    if exc.upper() == "N":
        print("Exiting System")
        break
    elif exc.upper() == "Y":
        name = input("What is the name of the commodity?")
        commodity_list = input("what commodities are traded on this exchange?")
        new_exchange = Exchange(name, commodity_list)
        exchanges[name] = new_exchange
        print(f"{name} Exchange added!\n")
print("List of commodity names:")
for name in commodities.keys():
    print(name)
    
print("List of exchanges:")
for name in commodities.keys():
    print(name)