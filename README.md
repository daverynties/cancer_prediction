# A Predictive Analysis of Breast Cancer Risk Factors

### Lucas Ausbury and David Rynties

https://daverynties.github.io/cancer_prediction/

The purpose of this project is to use modern machine learning technologies to attempt to 1) analyze key attributes of potentially cancerous breast tumor cells to identify which factors are most likely to determine a tumor's malignancy and 2) develop an algorithm to automatically classify a tumor as malignant or benign based on the same set of attributes.

## Background

In the United States alone, women have a 12% chance of developing invasive breast cancer over the course of their lifetime making it one of the most life-threatening issues women face. Given the prevalence of this disease, and the fact that radiologists are still required to manually review all scans, we felt that this would be a tremendously beneficial application of machine learning. If we could filter out even a small fraction of scans as either obviously or malignant, we could save them a huge amount of valuable time that could be spent on other, more beneficial tasks.

We chose to use the [Wisconsin Breast Cancer dataset](http://mlr.cs.umass.edu/ml/datasets/Breast+Cancer+Wisconsin+%28Original%29) from the UCI Machine Learning Repository. This dataset is one that has been used numerous times in academia to create base models of predictive computational techniques frequently used in bioinformatics. Below is a breakdown of the attributes included in the data.

| #   | Attribute                   | Domain                  |
|-----|-----------------------------|-------------------------|
| 1.  | Sample Code Number          | ID Number               |
| 2.  | Clump Thickness             | 1 - 10                  |
| 3.  | Uniformity of Cell Size     | 1 - 10                  |
| 4.  | Uniformity of Cell Shape    | 1 - 10                  |
| 5.  | Marginal Adhesion           | 1 - 10                  |
| 6.  | Single Epithelial Cell Size | 1 - 10                  |
| 7.  | Bare Nuclei                 | 1 - 10                  |
| 8.  | Bland Chromatin             | 1 - 10                  |
| 9.  | Normal Nucleoli             | 1 - 10                  |
| 10. | Mitoses                     | 1 - 10                  |
| 11. | Class                       | 2: Benign, 4: Malignant |

Once we settled on a data source, we elected to use it to build a decision tree and to train a neural network. The decision tree would be able to give us a visual for the data and could perhaps show whether there were any attributes that were obviously irrelevant or perhaps more suited for accurately categorizing the data. We trained the neural network in the hope that it would be able to categorize the data with great enough accuracy that it could have potential real-world application.

## Methodology

Both algorithms require the data to be processed and normalized to various extents. This was done using R. The decision tree was built using the J48 classification algorithm in WEKA.

The neural network was built in python and utilized the Keras library on top of TensorFlow. We configured it to have 2 hidden layers consisting of 9 nodes each. The input and hidden layers all utilized a rectifier activation function, while the output layer used a basic sigmoid. We ran this configuration over 150 epochs with a batch size of 10 and splitting the data into training and testing sets (80% and 20%, respectively).

All code used in this project can be found in the code directory.

## Results

Using the decision tree classification algorithm, we could correctly classify 689/699 instances, reaching a 98.57% accuracy rate. The neural network converged with an accuracy rate of 97.42%.

After getting such a high accuracy rate, we were curious how our results stacked up against real radiologists. We found another dataset that included the initial BI-RADS assessment and whether the patient had a cancer diagnosis within a year. This dataset included 40,000 patients. We just ran a quick statistical analysis and found that the real radiologists only had an accuracy rate of 92.71%. This isn't exactly an apples-to-apples comparison as we aren't both looking at the same data points, and also because in the BI-RADS classifications there are a couple of classes that aren't solidly positive or negative but require follow-up. These are obviously going to be more heavily favored because they aren't committing to a positive or negative diagnosis. That said, we still believe this is noteworthy and are excited by the results.

## Acknowledgment

Data collection and sharing was supported by the National Cancer Institute-funded Breast Cancer Surveillance Consortium (HHSN261201100031C). A list of the BCSC investigators and procedures for requesting BCSC data for research purposes are provided at http://breastscreening.cancer.gov/.

The primary breast cancer database used in this project was obtained from the University of Wisconsin Hospitals, Madison from Dr. William H. Wolberg.

## Author Information

**David Rynties**, Student, Grand Valley State University, Padnos College of Engineering and Computing.

**Lucas Ausbury**, Student, Grand Valley State University, Padnos College of Engineering and Computing.