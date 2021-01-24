n_jokes = 0
f = open('README.md','r')
n=1
lines = f.readlines()
for i in range(0,len(lines)):
	line = lines[i]
	if(line.startswith('---')):
		ne = lines[i+2]
		print('ne= ',ne)
		print('loop1')
		while f.readline()!='---':
			n+=1
			ne = lines[i+n]
			print(ne)
			print('loop2')
		n=0
f.close()