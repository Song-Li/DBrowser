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
    f = open(filename)
    filename = filename[0:len(filename)-4]
    for line in f:
        tmp = line.split(',')
        data.append({'DocumentSize':(int(tmp[0][1:len(tmp[0])])+21), 'Browser': filename, 'Time':float(tmp[1][0:len(tmp[1])-2])})


df = pd.DataFrame(data)
print df
p = ggplot(aes(x = 'DocumentSize', y = 'Time', linetype = 'Browser'),df) + geom_line() + geom_point()


p.save("graph.png");


