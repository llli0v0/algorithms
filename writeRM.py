f = open('/Users/ligang/Desktop/lee/README.md', 'a')

for i in range(1, 1000):
    num = ''
    if i < 10:
        num = '000' + str(i)
    elif i < 100:
        num = '00' + str(i)
    elif i < 1000:
        num = '0' + str(i)
    else:
        num = str(i)
    f.write(num + '.\n')