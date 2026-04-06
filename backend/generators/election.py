"""
election.py
"""
import pandas as pd

# Data sources
AllPollingUnitsInfo = "https://raw.githubusercontent.com/anndawn/Nigeria-2023-election/main/AllPollingUnitsInfo.csv"
LGALevelResult = "https://raw.githubusercontent.com/anndawn/Nigeria-2023-election/main/LGALevelResult.csv"
README = "https://raw.githubusercontent.com/anndawn/Nigeria-2023-election/main/README.md"
stamp_sig_missing = "https://raw.githubusercontent.com/anndawn/Nigeria-2023-election/main/stamp_sig_missing.csv"
voter_info = "https://raw.githubusercontent.com/anndawn/Nigeria-2023-election/main/voter_info.csv"

GITHUB_URLS = [AllPollingUnitsInfo, LGALevelResult, stamp_sig_missing, voter_info]

for URL in GITHUB_URLS:
    # Download the data
    df = pd.read_csv(URL)

    # Split and select the file name
    part = URL.split("/")
    print(part[-1])

    # Export to csv
    df.to_csv(path_or_buf=f"../data/election/{part[-1]}")

