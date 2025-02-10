from PIL import Image
import pillow_heif
import os

def convert_heic_to_jpg(input_path, output_path):
    # Register HEIF opener
    pillow_heif.register_heif_opener()
    
    try:
        # Open the HEIC image
        image = Image.open(input_path)
        
        # Convert to RGB if needed
        if image.mode != 'RGB':
            image = image.convert('RGB')
        
        # Save as JPEG
        image.save(output_path, 'JPEG', quality=95)
        print(f"Successfully converted {input_path} to {output_path}")
        
    except Exception as e:
        print(f"Error converting image: {e}")

if __name__ == '__main__':
    input_file = 'images/AD-14 Candidate Headshots/Gabriel Sandoval.heic'
    output_file = 'images/AD-14 Candidate Headshots/Gabe Sandoval.jpg'
    
    if os.path.exists(input_file):
        convert_heic_to_jpg(input_file, output_file)
    else:
        print(f"Input file not found: {input_file}") 