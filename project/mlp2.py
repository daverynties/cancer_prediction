from keras.models import Sequential
from keras.layers import Dense
import numpy

seed = 7
numpy.random.seed(seed)
dataset = numpy.loadtxt("dataset.csv", delimiter=",")

x = dataset[:,1:5]
y = dataset[:,5]

model = Sequential()
model.add(Dense(6, input_dim=4, init='uniform', activation='relu'))
model.add(Dense(4, init='uniform', activation='relu'))
model.add(Dense(1, init='uniform', activation='sigmoid'))

model.compile(loss='binary_crossentropy', optimizer='adam', metrics=['accuracy'])
model.fit(x, y, nb_epoch=150, batch_size=5)

scores = model.evaluate(x, y)
print("%s: %.2f%%" % (model.metrics_names[1], scores[1]*100))