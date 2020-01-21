import os
import sys
from PIL import Image

filepath = '../assets/maninder.png'
oldsize = os.stat(filepath).st_size
listo=[]
for (dirpath, dirnames, filenames) in os.walk('../assets/'):
    print(filenames,dirpath)
    for files in filenames:
        listo.append(dirpath+'/'+files)
for files in listo:
    print(files)
#set quality= to the preferred quality. 
#I found that 85 has no difference in my 6-10mb files and that 65 is the lowest reasonable number
for files in listo:
    format=files.split('.')[-1]
    print(format)
    if format in {'JPG', 'jpeg', 'png', 'jpg'}:
        picture = Image.open(files)            
        picture.save(files,optimize=True,quality=75) 
        newsize = os.stat(os.path.join(os.getcwd(),files)).st_size
        percent = (oldsize-newsize)/float(oldsize)*100
        print(percent)
