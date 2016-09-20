**Digital Mammography Example Dataset Documentation**

\

This dataset includes 20,000 digital and 20,000 film screening
mammograms performed between January 2005 and December 2008 from women
included in the Breast Cancer Surveillance Consortium. Some women
contribute more than one examination to the dataset. These data are
recommended for use in teaching data analysis or epidemiological
concepts. Because they represent only a small sample of mammography data
available from BCSC they should not be used to conduct primary research.
Researchers interested in conducting analyses of digital mammography
performance can submit a proposal to the BCSC to gain access to a more
complete sample of BCSC data.

\

**Submitting a Proposal & Working with the BCSC:**
http://www.bcsc-research.org/work/proposal\_data.html

\

+--------------------------+--------------------------+--------------------------+
| **Variable name**        | **Description**          | **Coding**               |
+--------------------------+--------------------------+--------------------------+
| age\_c                   | patient’s age in years   | numerical                |
|                          | at time of mammogram     |                          |
+--------------------------+--------------------------+--------------------------+
| assess\_c                | radiologist’s assessment | 0=needs additional       |
|                          | based on the BI-RADS     | imaging, 1=negative,     |
|                          | scale                    | 2=benign, 3=probably     |
|                          |                          | benign, 4=suspicious     |
|                          |                          | abnormality, 5=highly    |
|                          |                          | suggestive of malignancy |
+--------------------------+--------------------------+--------------------------+
| cancer\_c                | binary indicator of      | 0=no cancer diagnosis,   |
|                          | cancer diagnosis within  | 1=cancer diagnosis       |
|                          | one year of screening    |                          |
|                          | mammogram                |                          |
+--------------------------+--------------------------+--------------------------+
| compfilm\_c              | comparison mammogram     | 0=no, 1=yes, 9=missing   |
|                          | from prior mammography   |                          |
|                          | examination available    |                          |
+--------------------------+--------------------------+--------------------------+
| density\_c               | patient’s BI-RADS breast | 1=almost entirely fatty, |
|                          | density as recorded at   | 2=scattered              |
|                          | time of mammogram        | fibroglandular           |
|                          |                          | densities,               |
|                          |                          | heterogeneously dense,   |
|                          |                          | 4=extremely dense        |
+--------------------------+--------------------------+--------------------------+
| famhx\_c                 | family history of breast | 0=no, 1=yes, 9=missing   |
|                          | cancer in a first degree |                          |
|                          | relative                 |                          |
+--------------------------+--------------------------+--------------------------+
| hrt\_c                   | current use of hormone   | 0=no, 1=yes, 9=missing   |
|                          | therapy at time of       |                          |
|                          | mammogram                |                          |
+--------------------------+--------------------------+--------------------------+
| prvmam\_c                | binary indicator of      | 0=no, 1=yes, 9=missing   |
|                          | whether the woman had    |                          |
|                          | ever received a prior    |                          |
|                          | mammogram                |                          |
+--------------------------+--------------------------+--------------------------+
| biophx\_c                | history of breast biopsy | 0=no, 1=yes, 9=missing   |
+--------------------------+--------------------------+--------------------------+
| mammtype                 | film or digital          | 1=film, 2=digital        |
|                          | mammogram                |                          |
+--------------------------+--------------------------+--------------------------+
| CaTypeO                  | cancer type              | 1=ductal carcinoma in    |
|                          |                          | situ, 2=invasive cancer, |
|                          |                          | 8=no cancer diagnosis    |
+--------------------------+--------------------------+--------------------------+
| bmi\_c                   | body mass index at time  | numerical or -99 if      |
|                          | of mammogram             | missing                  |
+--------------------------+--------------------------+--------------------------+
| ptid                     | patient’s study id       | \                        |
+--------------------------+--------------------------+--------------------------+

\

**The following source must be cited when using this dataset:**

**<span class="Apple-tab-span"> </span>***"Data collection and sharing
was supported by the National Cancer Institute-funded Breast Cancer
Surveillance Consortium (HHSN261201100031C). A list of the BCSC
investigators and procedures for requesting BCSC data for research
purposes are provided at: http://breastscreening.cancer.gov/."*

\

Information about receiving data from the BCSC may also be included in
the methods section using language such as:

*<span class="Apple-tab-span"> </span>"Data for this study was obtained
from the BCSC Data Resource. More information regarding this resource is
available at: http://breastscreening.cancer.gov/."*
