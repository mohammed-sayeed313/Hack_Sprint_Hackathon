import os
import glob

for f in glob.glob('src/**/*.tsx', recursive=True):
    with open(f, 'r') as file:
        content = file.read()
    
    content = content.replace('text-white', 'text-text-primary')
    content = content.replace('bg-brand-blue hover:bg-blue-600 text-text-primary', 'bg-brand-blue hover:bg-blue-600 text-white')
    content = content.replace('bg-brand-blue hover:bg-brand-blue-hover text-text-primary', 'bg-brand-blue hover:bg-brand-blue-hover text-white')
    content = content.replace('bg-decision-block border border-decision-block text-text-primary', 'bg-decision-block border border-decision-block text-white')
    content = content.replace('selection:text-text-primary', 'selection:text-white')
    
    with open(f, 'w') as file:
        file.write(content)
