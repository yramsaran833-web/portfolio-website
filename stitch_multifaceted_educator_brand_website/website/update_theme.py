import os
import re

directory = '.'
new_colors = """                    colors: {
                        primary: '#54D5F2', // Bright Cyan
                        secondary: '#54D5F2', // Bright Cyan
                        background: '#041520', // Deep Dark Blue/Teal
                        surface: '#0b2336', // Slightly lighter Dark Blue
                        'on-surface': '#ffffff',
                        'on-surface-variant': '#a0c4d8'
                    }"""

count = 0
for filename in os.listdir(directory):
    if filename.endswith(".html"):
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as file:
            content = file.read()
        
        new_content = re.sub(r'colors:\s*\{[^\}]+\}', new_colors, content, flags=re.DOTALL)
        
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as file:
                file.write(new_content)
            count += 1

print(f"Updated {count} HTML files.")
