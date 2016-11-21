import csv

f = 'dataset.csv'
w, h = 10, 10
stats = [[0 for x in range(w)] for y in range(h)]
first = True

with open(f, 'rt') as data:
	reader = csv.reader(data)

	for row in reader:
	#	if not first:
	#		i = int(row[1])
	#		j = int(row[10])

	#		print("%i, %i" % (i, j))
	#		stats[i][j] = stats[i][j] + 1
	#	else:
	#		first = False

		print(row)