import glob, os
from PIL import ImageOps, Image

def optimize(image):
    directory = "assets/images/downloads/"
    img = Image.open(directory + image)
    img.save(directory+image,optimize=True,quality=85)

directory = "assets/images/downloads/"
for item in os.listdir(directory):
    if os.path.isfile(os.path.join(directory, item)):
        optimize(item)
        print(item)
