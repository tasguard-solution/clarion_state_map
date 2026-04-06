**Note we are still in the process of adding more data files to this repository.** 
# Analyzing Nigeria's 2023 Election: Methodology

## Data Collection and Identifying Anomalies

The Center for Collaborative Investigative Journalism (CCIJ) conducted a comprehensive analysis of Nigeria's 2023 election results through systematic data collection and analysis. Our process included:

### Initial Data Acquisition

Our primary data collection focused on obtaining election results from the Independent National Electoral Commission's (INEC) Election Result Viewing (IReV) portal. Using Python, we developed a system to systematically download results from over 167,000 polling units. For each polling unit, we acquired essential information including names, codes, and document URLs.
When primary document links failed or no longer existed on the portal during our July 2023 data collection, we first turned to supplementary data collected by civic activist Mark Essien, who had independently downloaded election documents from IReV in March 2023. For documents still missing after incorporating Essien's dataset, we accessed alternative URLs labeled "old_documents" in the system's backend as a final fallback source.
This comprehensive approach allowed us to identify documents that were never uploaded to the official portal. By combining these various sources, we created what is likely the most complete dataset of election result documents available for analysis.

### Supplementary Official Data

We collected several additional datasets to provide context and enable comprehensive analysis:

- **Registered Voter Data**: To understand the full impact of problematic or missing documents, we quantified how many registered voters were affected in these polling units. This critical dataset, containing the number of registered voters at each polling unit, was shared by Emmanuel, having been originally published by INEC in early 2023 but later removed from their platform.
- **Local Government Area (LGA) Results**: Obtaining detailed vote counts for each party at the LGA level proved challenging, as only state-level election results for each party were publicly available. After submitting a Freedom of Information Act (FOIA) request to INEC, we finally received these results eight months later. These official LGA-level documents provided an essential benchmark against which we could compare our analysis of individual polling unit results.
- **Voter Accreditation Data**: In March 2023, when Mark Essien accessed the data on IREV, a backend property called "synced accreditation" was observed. This appeared to reflect real-time accreditation data from the BVAS machines used during the election. As a result, we had access to the number of accredited voters for each polling unit by early March 2023, shortly after the election results had been announced. Accreditation refers to the process of verifying voter information using biometrics and facial recognition to prevent illegitimate voting. This data was crucial for verifying whether proper voter verification procedures were followed during the election.

## Document Processing and Analysis

### Document Orientation and Preparation

Election documents presented significant challenges due to inconsistent orientation and quality:

1. **Initial challenges:**
    
    The election documents presented numerous processing challenges. Documents appeared in various orientations (upside down, sideways, tilted), with each requiring proper alignment for accurate data extraction. Additionally, documents had inconsistent backgrounds that interfered with automated processing. We also discovered that some wrong documents had been uploaded to the portal entirely, including documents for other elections or irrelevant images, further complicating our document analysis efforts.
    
2. **Technical solution:**
    
    To process the inconsistently formatted documents, we refined a YOLO model to identify the INEC logo on election papers. Using the logo position as a reference point, we accurately rotated documents to their correct orientation. Once properly rotated, we cropped inconsistent backgrounds using layout detection techniques and employed an open-source library to unwrap and straighten distorted images that appeared warped or skewed. 
    
    During this process, while converting PDFs to images and exploring various solutions, we made a significant discovery: many illegible papers shared a specific dimension (192×256 pixels). This insight allowed us to identify over 10,000 election papers that were too small for human readability.
    

### Identifying Outlier Documents

A layout model is a specialized computer vision system trained to understand the structure of documents. We developed such a model to process the election papers, training it to recognize and locate key document features within each polling unit document, identifying their precise positions. For each document, the layout model identified:

- Tables
- Key-value pairs
- Paragraphs
- Stamps
- Signatures
- Boxes

Our layout model transformed visual information into structured data, counting elements like tables, boxes, stamps, and signatures for each election paper. By observing the distribution of number of boxes, tables, and other elements for valid presidential election papers, we established what a typical layout should contain. Based on this, we developed specific criteria to identify papers that deviated from the usual layout, flagging documents as outliers when:

- More than 250 bounding boxes
- More than 10 columns
- Fewer than 2 key-value pairs
- Less than 1 paragraph
- Fewer than 2 tables
- Missing stamps in expected positions

We then used crowdsourcing to verify the flagged documents, classifying them into categories like collation papers, incorrect election papers, cancellation forms, and EC 40G forms.

### Identifying Missing Authentication Elements

While our layout model could successfully detect stamps and signatures and their positions on the page, it could not directly distinguish between different types of stamps or signatures. Therefore, we developed a system that used the relative positions of these elements to identify papers missing required authentication. For example:

We identified the presiding officer's signature by its location at the bottom part of the page. Polling agent signatures were distinguished by their consistent placement inside specific tables. Different stamps were recognized based on their distinct positions, such as the black stamp typically found at the bottom left and orange stamps in the middle of the page.

This positional analysis allowed us to determine which documents were missing critical authentication elements.

We intentionally allowed false negatives (uncertain cases) and conducted human verification through crowdsourcing to validate the results from the layout model.

## Vote Extraction and Verification

### OCR Implementation

Our vote extraction process integrated two complementary technologies. First, our layout model identified all boxes and table structures on each document, creating a map of where information should be located. Simultaneously, we used Amazon Textract to read the actual text content from these documents. We then developed a process to match these two data sources together: when a box identified by our layout model overlapped with text detected by Amazon Textract, we could confidently assign that text to its proper position within the table. This allowed us to accurately reconstruct the complete tables of voting results, ensuring numbers were properly associated with the correct parties and categories.
For boxes missed by Textract but detected by our layout model, we cropped individual boxes, combined them into a new page, and passed this through Textract again. In total, the entire Textract OCR processing (both the initial text detection and this secondary processing) cost approximately $500 for all documents.

### Verification Process

To ensure accuracy of OCR results, we employed multiple validation strategies. We used the two totals recorded on each paper and cross-referenced the number of accredited voters to determine the most likely correct total. We applied different filtering rules to confirm numbers, including matching figures with words for the four main parties, selecting possible numbers where words didn't match figures, and validating totals of the four major parties against totals within acceptable ranges to count for minor parties.

We employed a tiered validation approach to ensure OCR accuracy. **Method 1** cross-references numbers written in figures with their corresponding words for the four main parties (APC, PDP, NNPP, LP), then checks whether the total matches the sum of these parties’ votes within a margin of 30 to accommodate minor parties. **Method 2** likewise matches the four main parties where possible; if words and figures differ, it generates all possible values and then selects the combination that is closest to the total, allowing a difference of up to 10 or 0.1 of the total. **Method 3** simply trusts the numbers in the figures column if their sum is within about 15 votes of the stated total.

We tested our method on a random set of 10,000 documents. Through the three methods mentioned above, 8,841 of the 10,000 documents were deemed to have valid OCR results. We then used Mark Essien’s crowdsourced for these documents as a benchmark. For each of the four main parties (APC, PDP, LP, and NNPP), we compared our OCR results to Mark’s data. If the difference in votes for **any** party exceeded five, we enlisted additional crowdsourcing to confirm the correct figure. 

Among these 8,841 valid results, 247 were ultimately identified as incorrect when compared against the verified numbers, leaving us with an overall accuracy rate of around 85%. Even for those 247 papers, the cumulative deviation for each party remained below 1,300 votes—a negligible margin given the size of the dataset. The table below provides a snapshot of the aggregated differences between our OCR results and the verified figures:

|  | **Total number of votes for the 247 papers** |
| --- | --- |
| **APC_OCR** | 10812.0 |
| **PDP_OCR** | 7908.0 |
| **LP_OCR** | 8410.0 |
| **NNPP_OCR** | 2720.0 |
| **APC_correct** | 12198.0 |
| **LP_correct** | 10558.0 |
| **NNPP_correct** | 2035.0 |
| **PDP_correct** | 8699.0 |

For those polling sheets that remained inconclusive after these checks, we used Amazon Textract’s table extraction feature and reapplied the same validation rules. We ran this process on approximately 30,000 papers, incurring around $500 in charges because table extraction is roughly 100 times more expensive than basic text extraction on Amazon Textract.

Even after these steps, we still had some papers  where results could not be determined. To resolve these, we brought in Mark’s crowdsourcing data and compared it against our OCR results. We either confirmed that the four main parties’ votes matched those from one or both OCR rounds, or verified that the total we had from one or two rounds of OCR did not deviate by more than 30 votes from the sum of those four parties. This filter leaves us with 13k additional results, by integrating these sources and checks, we ultimately arrived at confirmed vote counts for over 96% of all uploaded papers.

### Verifying Accreditation Data

When Mark Essien accessed data on INEC's IREV portal in March 2023 after the election result was annouced,  he discovered a backend property called "synced accreditation." This property appeared to contain real-time voter verification data from the BVAS machines deployed during the election. 

By comparing the total votes (extracted through OCR) against these synced accreditation numbers, we identified critical discrepancies where the total votes cast exceeded the number of accredited voters—a strong indicator of electoral irregularities. 

We are aware that there could be other issues such as network issues causing the accreditation figures to show up as zeros in a lot of instances. So to validate our data findings, journalists traveled to polling locations with the largest disparities, including Oru East in Imo State and Zaki in Bauchi State, where on-ground reporting confirmed instances of irregular voter accreditation processes. 

This CCIJ investigation effectively combined sophisticated data analysis with traditional field reporting to address electoral transparency gaps, made possible through collaborative partnerships between journalists and data experts working together to analyze anomalies and uncover potential election malfeasance.
