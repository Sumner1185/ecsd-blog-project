#!/bin/bash

mkdir -p ../src/blogs
cd ../src/blogs

curl https://academy-project-blogs.s3-eu-west-1.amazonaws.com/teaching_code.doc > teaching_code.doc 
curl https://academy-project-blogs.s3-eu-west-1.amazonaws.com/IDC.md > IDC.md
curl https://academy-project-blogs.s3-eu-west-1.amazonaws.com/milestones.txt > milestones.txt

fileNames=$(ls)

for file in ${fileNames} ; do 
    echo filename: "${file%%.*}" 
    echo file extention: "${file#*.}" 
    echo file size: && wc -c ${file} | awk '{print $1}'
done;




