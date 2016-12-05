###Pre-process bcw prediction dataset
#Import Dataset
bcw_original <- read.csv("C:\\Users\\user\\Desktop\\677\\Risk Prediction\\risk_estimation_bcsc.txt", 
                         header=FALSE, stringsAsFactors=FALSE)

#Remove sample number from dataset
bcw_original <- within(bcw_original, rm(V1))

#Replace benign / malignant variable to string
bcw_original$V11[bcw_original$V11 == 2] <- "Benign"
bcw_original$V11[bcw_original$V11 == 4] <- "Malignant"

#Change column names
names(bcw_original)[1:10] <- c("Clump Thickness","Uniformity of Cell Size",
                           "Uniformity of Cell Shape","Marginal Adhesion",
                           "Single Epithelial Cell Size","Bare Nuclei",
                           "Bland Chromatin","Normal Nucleoli","Mitoses","Class")

#Write to file
write.csv(bcw_original, file = "post-process.csv", row.names = FALSE, quote = FALSE)

###Pre-process bcsc dataset
bcsc_orig <- read.csv("C://Users//user//Desktop//677//Risk Prediction//risk_estimation_bcsc.txt"), 
                         header=FALSE, stringsAsFactors=FALSE)

