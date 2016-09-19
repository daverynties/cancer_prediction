data risk;
infile 'risk.txt';
input menopaus agegrp density race Hispanic bmi agefirst nrelbc brstproc lastmamm surgmeno hrt invasive cancer training count;
run;

/*
The logistic regression models below reproduce the odds ratios and confidence intervals shown in the article.

The c-statistics and confidence intervals shown in Tables 4 and 6 were computed in Stata, rather than SAS, though SAS outputs c-statistic if the correct options are used
*/;

title 'Premenopausal Modal - Table 3';
proc logistic data=risk descending simple ;
class agegrp density nrelbc brstproc / ref=first param=ref;
model cancer = agegrp brstproc nrelbc density / nodesignprint NCONCORDBIN=20000;
freq count;
where (menopaus=0);
run;

title 'Postmenopausal Model - Table 5';
proc logistic data=risk descending simple ;
class agegrp Hispanic race bmi agefirst brstproc nrelbc hrt surgmeno lastmamm density / ref=first param=ref;
model cancer = agegrp Hispanic race bmi agefirst brstproc nrelbc hrt surgmeno lastmamm density / nodesignprint NCONCORDBIN=20000;
freq count;
where (menopaus=1);
run;
