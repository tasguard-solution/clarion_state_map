
import pandas as pd


DATA_DIR = "data/election/"

df = pd.read_csv(DATA_DIR + "LGALevelResult.csv")
print(df["APC"])

x=0
for j in df["APC"]:
    x += j

print(x)

import os; print(os.getcwd())