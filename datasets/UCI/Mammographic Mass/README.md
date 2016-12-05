**Abstract:** Discrimination of benign and malignant mammographic masses
based on BI-RADS attributes and the patient’s age

\

**Number of instances:** 961

**Number of attributes:** 6

\

**Source:**

<span class="Apple-tab-span"> </span>Matthias Elter<span
class="Apple-converted-space"> </span>

<span class="Apple-tab-span"> </span>Fraunhofer Institute for Integrated
Circuits (IIS)<span class="Apple-converted-space"> </span>

<span class="Apple-tab-span"> </span>Image Processing and Medical
Engineering Department (BMT)<span class="Apple-converted-space"> </span>

<span class="Apple-tab-span"> </span>Am Wolfsmantel 33<span
class="Apple-converted-space"> </span>

<span class="Apple-tab-span"> </span>91058 Erlangen, Germany<span
class="Apple-converted-space"> </span>

<span class="Apple-tab-span"> </span>matthias.elter '@'
iis.fraunhofer.de<span class="Apple-converted-space"> </span>

<span class="Apple-tab-span"> </span>(49) 9131-7767327<span
class="Apple-converted-space"> </span>

\

<span class="Apple-tab-span"> </span>Prof. Dr. Rüdiger
Schulz-Wendtland<span class="Apple-converted-space"> </span>

<span class="Apple-tab-span"> </span>Institute of Radiology,
Gynaecological Radiology, University Erlangen-Nuremberg<span
class="Apple-converted-space"> </span>

<span class="Apple-tab-span"> </span>Universitätsstraße 21-23<span
class="Apple-converted-space"> </span>

<span class="Apple-tab-span"> </span>91054 Erlangen, Germany

\

**Data set information:**

<span class="Apple-tab-span"> </span>Mammography is the most effective
method for breast cancer screening available today. However, the low
positive predictive value of breast biopsy resulting from mammogram
interpretation leads to approximately 70% unnecessary biopsies with
benign outcomes. To reduce the high number of unnecessary breast
biopsies, several computer-aided diagnosis (CAD) systems have been
proposed in the last years.These systems help physicians in their
decision to perform a breast biopsy on a suspicious lesion seen in a
mammogram or to perform a short term follow-up<span
class="Apple-converted-space"> </span>

examination instead.<span class="Apple-converted-space"> </span>

<span class="Apple-tab-span"> </span>This data set can be used to
predict the severity (benign or malignant) of a mammographic mass lesion
from BI-RADS attributes and the patient's age. It contains a BI-RADS
assessment, the patient's age and three BI-RADS attributes together with
the ground truth (the severity field) for 516 benign and 445 malignant
masses that have been identified on full field digital mammograms
collected at the Institute of Radiology of the University
Erlangen-Nuremberg between 2003 and 2006.<span
class="Apple-converted-space"> </span>

<span class="Apple-tab-span"> </span>Each instance has an associated
BI-RADS assessment ranging from 1 (definitely benign) to 5 (highly
suggestive of malignancy) assigned in a double-review process by
physicians. Assuming that all cases with BI-RADS assessments greater or
equal a given value (varying from 1 to 5), are malignant and the other
cases benign, sensitivities and associated specificities can be
calculated. These can be an indication of how well a CAD system performs
compared to the radiologists.<span
class="Apple-converted-space"> </span>

\

**Class distribution:**<span class="Apple-converted-space"> </span>

-   Benign: 516
-   Malignant: 445<span class="Apple-converted-space"> </span>

\

**Attributes:**

1.  BI-RADS assessment: 1 to 5 (ordinal, non-predictive)
2.  Age: patient’s age in years (continuous)
3.  Shape of mass: 1=round, 2=oval, 3=lobular, 4=irregular (nominal)
4.  Margin of mass: 1=circumscribed, 2=microlobulated, 3=obscured,
    4=ill-defined, 5=spiculated (nominal)
5.  Density of mass: 1=high, 2=iso, 3=low, 4=fat-containing (ordinal)
6.  Severity: 0=benign, 1=malignant (binomial, goal field)

\

**Citation request:**

<span class="Apple-tab-span"> </span>M. Elter, R. Schulz-Wendtland and
T. Wittenberg (2007)<span class="Apple-converted-space"> </span>

<span class="Apple-tab-span"> </span>*The prediction of breast cancer
biopsy outcomes using two CAD approaches that both emphasize an
intelligible decision process.<span
class="Apple-converted-space"> </span>*

<span class="Apple-tab-span"> </span>Medical Physics 34(11), pp.
4164-4172

\

**Source:** http://archive.ics.uci.edu/ml/datasets/Mammographic+Mass
