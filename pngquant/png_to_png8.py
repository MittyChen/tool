import os

def scandir(path):
    for i in os.listdir(path):
        temppath = path + '//' + i
        if os.path.isdir(temppath):
            scandir(temppath)
        if os.path.splitext(path + '//' + i)[1] == '.png':
            os.system("pngquant -force -ext .png 256 %s" % temppath)

rootpath = os.path.abspath('.')
scandir(rootpath)
