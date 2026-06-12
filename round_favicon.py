import sys
import shutil
from PIL import Image, ImageDraw

def add_corners(im, rad):
    circle = Image.new('L', (rad * 2, rad * 2), 0)
    draw = ImageDraw.Draw(circle)
    draw.ellipse((0, 0, rad * 2 - 1, rad * 2 - 1), fill=255)
    alpha = Image.new('L', im.size, 255)
    w, h = im.size
    alpha.paste(circle.crop((0, 0, rad, rad)), (0, 0))
    alpha.paste(circle.crop((0, rad, rad, rad * 2)), (0, h - rad))
    alpha.paste(circle.crop((rad, 0, rad * 2, rad)), (w - rad, 0))
    alpha.paste(circle.crop((rad, rad, rad * 2, rad * 2)), (w - rad, h - rad))
    im.putalpha(alpha)
    return im

source = "/Users/apple/Desktop/butterscotch/image.png"
logo_dest = "/Users/apple/Desktop/butterscotch/public/logo.png"
fav_dest = "/Users/apple/Desktop/butterscotch/public/favicon.png"

# Copy as logo
shutil.copyfile(source, logo_dest)

# Create rounded favicon
try:
    img = Image.open(source).convert("RGBA")
    # Make it square if it isn't, though it's likely square
    w, h = img.size
    size = min(w, h)
    # Crop center square
    img = img.crop(((w - size) // 2, (h - size) // 2, (w + size) // 2, (h + size) // 2))
    
    # Calculate radius (e.g. 15% of width)
    radius = int(size * 0.15)
    
    rounded = add_corners(img, radius)
    
    # Resize for favicon
    rounded.thumbnail((64, 64), Image.Resampling.LANCZOS)
    rounded.save(fav_dest)
    print("Successfully created logo and rounded favicon.")
except Exception as e:
    print(f"Error: {e}")
