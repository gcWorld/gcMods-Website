import glob, os
from PIL import ImageOps, Image
def thumbnail(image,thumbpath,height,width):
    directory = "assets/images/downloads/"
    img = Image.open(directory + image)
    thumb = ImageOps.fit(
        img,
        (height, width),
        Image.ANTIALIAS
    )
    thumb.save(thumbpath+image,optimize=True,quality=85)

import shutil
shutil.rmtree("assets/images/downloads/thumbs/*.jpg", ignore_errors=True)

directory = "assets/images/downloads/"
for item in os.listdir(directory):
    if os.path.isfile(os.path.join(directory, item)):
        thumbnail(item,"assets/images/downloads/thumbs/", 150,100)
        thumbnail(item,"assets/images/downloads/thumbs/home/", 350,150)
        thumbnail(item,"assets/images/downloads/thumbs/big/", 750,300)
        print(item)
