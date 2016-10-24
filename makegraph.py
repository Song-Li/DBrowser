from ggplot import *
import pandas as pd
import numpy as np
import sys

argc = len(sys.argv)

if argc == 1:
    exit()

data = []

for i in range(1,argc):
    filename = sys.argv[i]
    f = open(filename + ".txt")
    for line in f:
        tmp = line.split(',')
        data.append({'TimeOfAttack':int(tmp[0][1:len(tmp[0])]), 'Browser': filename, 'Type': 'Min', 'Time':float(tmp[2][0:len(tmp[2])-2])})
        data.append({'TimeOfAttack':int(tmp[0][1:len(tmp[0])]), 'Browser': filename, 'Type': 'Max', 'Time':float(tmp[1])})


df = pd.DataFrame(data)
p = ggplot(aes(x = 'TimeOfAttack', y = 'Time', linetype = 'Browser', colortype = 'Type'),df) + geom_line() + geom_point()

p.save("graph.png");


