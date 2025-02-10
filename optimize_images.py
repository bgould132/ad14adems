from PIL import Image
import os

def optimize_image(input_path, max_size_mb=2.0):
    # Open the image
    img = Image.open(input_path)
    
    # Convert to RGB if needed
    if img.mode != 'RGB':
        img = img.convert('RGB')
    
    # Initial quality
    quality = 95
    output_path = input_path
    
    # Save with progressively lower quality until file size is under max_size_mb
    while True:
        # Save to a temporary file
        temp_path = input_path + '.temp'
        img.save(temp_path, 'JPEG', quality=quality, optimize=True)
        
        # Check file size
        size_mb = os.path.getsize(temp_path) / (1024 * 1024)
        
        if size_mb <= max_size_mb or quality <= 70:
            # Move temp file to original location
            os.replace(temp_path, output_path)
            print(f"Optimized {input_path}: {size_mb:.1f}MB (quality={quality})")
            break
            
        # Remove temp file and try again with lower quality
        os.remove(temp_path)
        quality -= 5

def process_directory(directory):
    for filename in os.listdir(directory):
        if filename.lower().endswith(('.jpg', '.jpeg')):
            filepath = os.path.join(directory, filename)
            size_mb = os.path.getsize(filepath) / (1024 * 1024)
            
            # Only process files larger than 2MB
            if size_mb > 2.0:
                print(f"Processing {filename} ({size_mb:.1f}MB)")
                optimize_image(filepath)

if __name__ == '__main__':
    directory = 'images/AD-14 Candidate Headshots'
    process_directory(directory) 